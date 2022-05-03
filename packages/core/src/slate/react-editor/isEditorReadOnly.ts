import { ReactEditor } from 'slate-react';
import { Value } from '../types/TEditor';
import { TReactEditor } from '../types/TReactEditor';

/**
 * Check if the editor is in read-only mode.
 */
export const isEditorReadOnly = <V extends Value>(editor: TReactEditor<V>) =>
  ReactEditor.isReadOnly(editor as any);
