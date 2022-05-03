import { PlateEditor, Value } from '@udecode/plate-core';
import { findMentionInput } from '../queries';
import { removeMentionInput } from '../transforms';
import { KeyboardEventHandler } from './KeyboardEventHandler';
import {
  moveSelectionByOffset,
  MoveSelectionByOffsetOptions,
} from './moveSelectionByOffset';

export const mentionOnKeyDownHandler: <V extends Value>(
  options?: MoveSelectionByOffsetOptions
) => (editor: PlateEditor<V>) => KeyboardEventHandler = (options) => (
  editor
) => (event) => {
  if (event.key === 'Escape') {
    event.preventDefault();
    const currentMentionInput = findMentionInput(editor)!;
    if (currentMentionInput) {
      removeMentionInput(editor, currentMentionInput[1]);
    }
    return true;
  }

  return moveSelectionByOffset(editor, options)(event);
};
