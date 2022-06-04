import {
  getNextSiblingNodes,
  getParent,
  PlateEditor,
} from '@udecode/plate-core';
import { Path, Transforms } from 'slate';
import { changeSelectionToBeBasedOnTheNextNode } from './changeSelectionToBeBasedOnTheNextNode';
import { isTextNode } from './isTextNode';
import { last } from './last';

export function insertTextAtTheEndOfAThreadNode(
  editor: PlateEditor,
  threadPath: Path,
  text: string
): boolean {
  let insertHasBeenHandled = false;
  const parent = getParent(editor, threadPath);
  if (parent) {
    const siblings = getNextSiblingNodes(parent, threadPath);
    if (siblings.length >= 1 && isTextNode(siblings[0])) {
      changeSelectionToBeBasedOnTheNextNode(editor);
    } else {
      const insertPath = threadPath
        .slice(0, threadPath.length - 1)
        .concat([last(threadPath) + 1]);
      Transforms.insertNodes(
        editor,
        { text },
        {
          at: insertPath,
          hanging: true,
        }
      );
      Transforms.select(
        editor,
        threadPath
          .slice(0, threadPath.length - 1)
          .concat([last(threadPath) + 2])
      );
      Transforms.collapse(editor, { edge: 'end' });
      insertHasBeenHandled = true;
    }
  }

  return insertHasBeenHandled;
}
