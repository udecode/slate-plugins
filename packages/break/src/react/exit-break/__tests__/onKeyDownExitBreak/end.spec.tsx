/** @jsx jsx */

import {
  createPlateEditor,
  getEditorPlugin,
} from '@udecode/plate-common/react';
import * as isHotkey from '@udecode/plate-core';
import { jsx } from '@udecode/plate-test-utils';

import { ExitBreakPlugin } from '../../ExitBreakPlugin';
import { onKeyDownExitBreak } from '../../onKeyDownExitBreak';

jsx;

const input = (
  <editor>
    <hp>
      te
      <anchor />
      st
      <focus />
    </hp>
  </editor>
) as any;

const event = new KeyboardEvent('keydown') as any;

const output = (
  <editor>
    <hp>te</hp>
    <hdefault>
      <htext />
      <cursor />
    </hdefault>
  </editor>
) as any;

it('should be', () => {
  jest.spyOn(isHotkey, 'isHotkey').mockReturnValue(true);
  input.blockFactory = (node: any) => node;
  onKeyDownExitBreak({
    ...getEditorPlugin(
      createPlateEditor({ editor: input }),
      ExitBreakPlugin.configure({
        options: {
          rules: [
            {
              hotkey: 'enter',
              level: 0,
              query: { end: true, start: true },
            },
          ],
        },
      })
    ),
    event,
  });
  expect(input.children).toEqual(output.children);
  expect(input.selection?.anchor).toEqual({ offset: 0, path: [1, 0] });
});