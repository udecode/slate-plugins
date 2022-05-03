import { GetAboveNodeOptions } from '../../slate/editor/getAboveNode';
import { getStartPoint } from '../../slate/editor/getStartPoint';
import { TEditor, Value } from '../../slate/types/TEditor';
import { getBlockAbove } from './getBlockAbove';
import { getPointFromLocation } from './getPointFromLocation';

/**
 * Get the range from the start of the block above a location (default: selection) to the location.
 */
export const getRangeFromBlockStart = <V extends Value>(
  editor: TEditor<V>,
  options: Omit<GetAboveNodeOptions<V>, 'match'> = {}
) => {
  const path = getBlockAbove(editor, options)?.[1];
  if (!path) return;

  const start = getStartPoint(editor, path);

  const focus = getPointFromLocation(editor, options);

  if (!focus) return;

  return { anchor: start, focus };
};
