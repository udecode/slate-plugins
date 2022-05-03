import { useSlateStatic } from 'slate-react';
import { Value } from '../slate/types/TEditor';
import { PlateEditor } from '../types/PlateEditor';

/**
 * Typed {@link useSlateStatic} & PlateEditor.
 * Needs to be called in a child component of `Plate`.
 * Else, use `usePlateEditorRef`.
 */
export const useEditorRef = <V extends Value = Value, T = {}>() =>
  (useSlateStatic() as unknown) as PlateEditor<V, T>;
