import { AnyObject } from '../../../common/types/utility/AnyObject';
import { Nullable } from '../../../common/types/utility/Nullable';
import { Value } from '../../../slate/types/TEditor';
import { PlateEditor } from '../../../types/PlateEditor';
import { DeserializeHtml } from '../../../types/plugins/DeserializeHtml';
import { pluginDeserializeHtml } from './pluginDeserializeHtml';

export const pipeDeserializeHtmlElement = <V extends Value, T = {}>(
  editor: PlateEditor<V, T>,
  element: HTMLElement
) => {
  let result: (Nullable<DeserializeHtml> & { node: AnyObject }) | undefined;

  [...editor.plugins].reverse().some((plugin) => {
    result = pluginDeserializeHtml(editor, plugin, { element });

    return !!result;
  });

  return result;
};
