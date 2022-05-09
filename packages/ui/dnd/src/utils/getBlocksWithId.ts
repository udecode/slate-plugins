import {
  EditorNodesOptions,
  getNodeEntries,
  isBlock,
  TEditor,
  Value,
} from '@udecode/plate-core';

/**
 * Get blocks with an id
 */
export const getBlocksWithId = <V extends Value>(
  editor: TEditor<V>,
  options: EditorNodesOptions<V>
) => {
  const _nodes = getNodeEntries(editor, {
    match: (n) => isBlock(editor, n) && !!n.id,
    ...options,
  });
  return Array.from(_nodes);
};
