import { castArray } from 'lodash';
import { Value } from '../slate/types/TEditor';
import { PlateEditor } from '../types/PlateEditor';

/**
 * Get plugin keys by types
 */
export const getKeysByTypes = <V extends Value, T = {}>(
  editor: PlateEditor<V, T>,
  type: string | string[]
) => {
  const types = castArray<string>(type);

  const found = Object.values(editor.pluginsByKey).filter((plugin) => {
    return types.includes(plugin.type);
  });

  return found.map((p) => p.key);
};
