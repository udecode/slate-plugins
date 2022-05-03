import {
  deleteMerge,
  getAboveNode,
  getParentNode,
  getPluginType,
  PlateEditor,
  Value,
} from '@udecode/plate-core';
import { Editor, Range, Transforms } from 'slate';
import { getHighestEmptyList } from './queries/getHighestEmptyList';
import { hasListChild } from './queries/hasListChild';
import { isAcrossListItems } from './queries/isAcrossListItems';
import { ELEMENT_LI } from './createListPlugin';

export const deleteFragmentList = <V extends Value>(editor: PlateEditor<V>) => {
  let deleted = false;

  Editor.withoutNormalizing(editor, () => {
    // Selection should be across list items
    if (!isAcrossListItems(editor)) return;

    /**
     * Check if the end li can be deleted (if it has no sublist).
     * Store the path ref to delete it after deleteMerge.
     */
    const end = Editor.end(editor, editor.selection as Range);
    const liEnd = getAboveNode(editor, {
      at: end,
      match: { type: getPluginType(editor, ELEMENT_LI) },
    });
    const liEndCanBeDeleted = liEnd && !hasListChild(editor, liEnd[0]);
    const liEndPathRef = liEndCanBeDeleted
      ? Editor.pathRef(editor, liEnd![1])
      : undefined;

    /**
     * Delete fragment and move end block children to start block
     */
    deleteMerge(editor);

    const start = Editor.start(editor, editor.selection as Range);
    const liStart = getAboveNode(editor, {
      at: start,
      match: { type: getPluginType(editor, ELEMENT_LI) },
    });

    if (liEndPathRef) {
      const liEndPath = liEndPathRef.unref()!;

      const listStart = liStart && getParentNode(editor, liStart[1]);

      const deletePath = getHighestEmptyList(editor, {
        liPath: liEndPath,
        diffListPath: listStart?.[1],
      });

      if (deletePath) {
        Transforms.removeNodes(editor, { at: deletePath });
      }

      deleted = true;
    }
  });

  return deleted;
};
