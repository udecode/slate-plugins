import { AnyObject } from '../../../common/types/utility/AnyObject';
import { Value } from '../../../slate/types/TEditor';
import { PlateEditor } from '../../../types/PlateEditor';
import { pluginDeserializeHtml } from './pluginDeserializeHtml';

export const pipeDeserializeHtmlLeaf = <V extends Value, T = {}>(
  editor: PlateEditor<V, T>,
  element: HTMLElement
) => {
  let node: AnyObject = {};

  [...editor.plugins].reverse().forEach((plugin) => {
    const deserialized = pluginDeserializeHtml(editor, plugin, {
      element,
      deserializeLeaf: true,
    });
    if (!deserialized) return;

    node = { ...node, ...deserialized.node };
  });

  return node;
};
