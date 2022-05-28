import {
  getBlockAbove,
  getEndPoint,
  getNode,
  getStartPoint,
  hasNode,
  moveSelection,
  PlateEditor,
  select,
  Value,
  withoutNormalizing,
} from '@udecode/plate-core';
import { getSubTableAbove } from '../queries/getSubTableAbove';
import { getCellTypes } from '../utils/getCellType';

/**
 * Move selection by cell unit.
 */
export const moveSelectionFromCell = <V extends Value = Value>(
  editor: PlateEditor<V>,
  {
    reverse,
    edge,
  }: {
    /**
     * false: move selection to cell below
     * true: move selection to cell above
     */
    reverse?: boolean;
    /**
     * Expand cell selection to an edge.
     */
    edge?: 'top' | 'left' | 'right' | 'bottom';
  } = {}
) => {
  if (edge) {
    const cellEntries = getSubTableAbove(editor, { format: 'cell' });

    if (cellEntries.length > 0) {
      const [, firstCellPath] = cellEntries[0];
      const [, lastCellPath] = cellEntries[cellEntries.length - 1];

      const anchorPath = [...firstCellPath];
      const focusPath = [...lastCellPath];

      if (edge === 'bottom') {
        focusPath[focusPath.length - 2] += 1;
      } else if (edge === 'top') {
        anchorPath[anchorPath.length - 2] -= 1;
      } else if (edge === 'right') {
        focusPath[focusPath.length - 1] += 1;
      } else if (edge === 'left') {
        anchorPath[anchorPath.length - 1] -= 1;
      }

      if (hasNode(editor, anchorPath) && hasNode(editor, focusPath)) {
        select(editor, {
          anchor: {
            path: anchorPath.concat([0]),
            offset: 0,
          },
          focus: {
            path: focusPath.concat([0]),
            offset: 0,
          },
        });
      }
      return true;
    }
    return;
  }

  const cellEntry = getBlockAbove(editor, {
    match: { type: getCellTypes(editor) },
  });

  if (cellEntry) {
    const [, cellPath] = cellEntry;

    const nextCellPath = [...cellPath];

    const offset = reverse ? -1 : 1;

    nextCellPath[nextCellPath.length - 2] += offset;

    const nextCell = getNode(editor, nextCellPath);
    if (nextCell) {
      select(editor, { path: nextCellPath.concat([0]), offset: 0 });
    } else {
      const tablePath = cellPath.slice(0, -2);

      if (reverse) {
        withoutNormalizing(editor, () => {
          select(editor, getStartPoint(editor, tablePath));
          moveSelection(editor, { reverse: true });
        });
      } else {
        withoutNormalizing(editor, () => {
          select(editor, getEndPoint(editor, tablePath));
          moveSelection(editor);
        });
      }
    }

    return true;
  }
};
