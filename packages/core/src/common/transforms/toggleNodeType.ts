import { setNodes } from '../../slate/transforms/setNodes';
import { Value } from '../../slate/types/TEditor';
import { PlateEditor } from '../../types/PlateEditor';
import { getPluginType } from '../../utils/getPluginType';
import { someNode } from '../queries/someNode';
import { EditorNodesOptions } from '../types/Editor.types';
import { ELEMENT_DEFAULT } from '../types/node.types';

export interface ToggleNodeTypeOptions {
  /**
   * If there is no node type above the selection, set the selected node type to activeType.
   */
  activeType?: string;

  /**
   * If there is a node type above the selection, set the selected node type to inactiveType.
   */
  inactiveType?: string;
}

/**
 * Toggle the type of the selected node.
 * Don't do anything if activeType === inactiveType.
 */
export const toggleNodeType = <V extends Value>(
  editor: PlateEditor<V>,
  options: ToggleNodeTypeOptions,
  editorNodesOptions?: Omit<EditorNodesOptions<V>, 'match'>
) => {
  const {
    activeType,
    inactiveType = getPluginType(editor, ELEMENT_DEFAULT),
  } = options;

  if (!activeType || !editor.selection) return;

  const isActive = someNode(editor, {
    ...editorNodesOptions,
    match: {
      type: activeType,
    },
  });

  if (isActive && activeType === inactiveType) return;

  setNodes(editor, {
    type: isActive ? inactiveType : activeType,
  });
};
