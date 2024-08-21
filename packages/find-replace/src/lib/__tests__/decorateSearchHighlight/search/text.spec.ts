import { getPluginContext } from '@udecode/plate-common';
import { createSlateEditor } from '@udecode/plate-common';

import { FindReplacePlugin } from '../../../FindReplacePlugin';

it('should be', () => {
  const editor = createSlateEditor({
    plugins: [
      FindReplacePlugin.configure({
        options: {
          search: 'test',
        },
      }),
    ],
  });

  const plugin = editor.getPlugin(FindReplacePlugin);

  expect(
    plugin.decorate?.({
      ...getPluginContext(editor, plugin),
      entry: [{ text: 'test' }, [0, 0]],
    })
  ).toEqual([
    {
      [FindReplacePlugin.key]: true,
      anchor: {
        offset: 0,
        path: [0, 0],
      },
      focus: {
        offset: 4,
        path: [0, 0],
      },
      search: 'test',
    },
  ]);
});

it('should be', () => {
  const editor = createSlateEditor({
    plugins: [
      FindReplacePlugin.configure({
        options: {
          search: 'Test',
        },
      }),
    ],
  });

  const plugin = editor.getPlugin(FindReplacePlugin);

  expect(
    plugin.decorate?.({
      ...getPluginContext(editor, plugin),
      entry: [{ text: 'test' }, [0, 0]],
    })
  ).toEqual([
    {
      [FindReplacePlugin.key]: true,
      anchor: {
        offset: 0,
        path: [0, 0],
      },
      focus: {
        offset: 4,
        path: [0, 0],
      },
      search: 'Test',
    },
  ]);
});