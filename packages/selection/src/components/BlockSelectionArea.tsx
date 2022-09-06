import React, { ReactNode } from 'react';
import {
  deselectEditor,
  findNode,
  focusEditor,
  getEndPoint,
  PlateEditor,
  removeNodes,
  useHotkeys,
  withoutNormalizing,
} from '@udecode/plate-core';
import SelectionArea, { SelectionEvent } from '@viselect/react';
import {
  blockSelectionActions,
  blockSelectionSelectors,
} from '../blockSelectionStore';

export const BlockStartArea = ({
  direction = 'left',
}: {
  direction: 'top' | 'bottom' | 'left' | 'right';
}) => {
  return (
    <div
      className="slate-start-area"
      style={{
        position: 'absolute',
        top: ['top', 'left'].includes(direction) ? 0 : undefined,
        left: ['top', 'left'].includes(direction) ? 0 : undefined,
        bottom: ['bottom', 'right'].includes(direction) ? 0 : undefined,
        right: ['bottom', 'right'].includes(direction) ? 0 : undefined,
        width: ['left', 'right'].includes(direction) ? 28 : '100%',
        height: ['top', 'bottom'].includes(direction) ? 28 : '100%',
        zIndex: 1,
        userSelect: 'none',
        cursor: 'text',
      }}
    />
  );
};

export const BlockSelectionArea = ({
  children,
  editor,
}: {
  children: ReactNode;
  editor: PlateEditor;
}) => {
  useHotkeys(
    'enter',
    () => {
      if (blockSelectionSelectors.isSelecting()) {
        // get the first block in the selection
        const entry = findNode(editor, {
          match: (n) => blockSelectionSelectors.selectedIds().has(n.id),
        });

        if (entry) {
          const [, path] = entry;

          setTimeout(() => {
            // focus the end of that block
            focusEditor(editor, getEndPoint(editor, path));
            blockSelectionActions.reset();
          }, 0);
        }
      }
    },
    [editor]
  );

  useHotkeys(
    'backspace, delete',
    () => {
      if (blockSelectionSelectors.isSelecting()) {
        withoutNormalizing(editor, () => {
          blockSelectionSelectors.selectedIds().forEach((id) => {
            const entry = findNode(editor, { match: { id } });

            if (entry) {
              const [, path] = entry;

              removeNodes(editor, {
                at: path,
              });
            }
          });
        });

        setTimeout(() => {
          blockSelectionActions.reset();
        }, 0);
      }
    },
    [editor]
  );

  // useHotkeys(
  //   'cmd+v',
  //   () => {
  //     editor.insertData(data)
  //   },
  //   []
  // );

  const onStart = ({ event, selection }: SelectionEvent) => {
    deselectEditor(editor);

    if (!event?.shiftKey) {
      selection.clearSelection();
      blockSelectionActions.reset();
    }
  };

  const onMove = ({ store: { changed } }: SelectionEvent) => {
    if (!changed.added.length && !changed.removed.length) return;

    blockSelectionActions.setSelectedIds(changed);
  };

  return (
    <SelectionArea
      className="slate-SelectionArea"
      onStart={onStart}
      onMove={onMove}
      // Class for the selection-area itself (the element).
      selectionAreaClass="slate-selection-area"
      // Class for the selection-area container.
      // selectionContainerClass="selection-area-container"
      // Query selector or dom-node to set up container for the selection-area element.
      // container="body"
      // document object - if you want to use it within an embed document (or iframe).
      // document={window.document}
      // Query selectors for elements which can be selected.
      selectables=".slate-selectable"
      // Query selectors for elements from where a selection can be started from.
      startAreas=".slate-start-area"
      // Query selectors for elements which will be used as boundaries for the selection.
      // boundaries={['html']}
      // Behaviour related options.
      // behaviour={{
      //   // Specifies what should be done if already selected elements get selected again.
      //   //   invert: Invert selection for elements which were already selected
      //   //   keep: Keep selected elements (use clearSelection() to remove those)
      //   //   drop: Remove stored elements after they have been touched
      //   overlap: 'invert',
      //
      //   // On which point an element should be selected.
      //   // Available modes are cover (cover the entire element), center (touch the center) or
      //   // the default mode is touch (just touching it).
      //   intersect: 'touch',
      //
      //   // px, how many pixels the point should move before starting the selection (combined distance).
      //   // Or specifiy the threshold for each axis by passing an object like {x: <number>, y: <number>}.
      //   startThreshold: 10,
      //
      //   // Scroll configuration.
      //   scrolling: {
      //     // On scrollable areas the number on px per frame is devided by this amount.
      //     // Default is 10 to provide a enjoyable scroll experience.
      //     speedDivider: 10,
      //
      //     // Browsers handle mouse-wheel events differently, this number will be used as
      //     // numerator to calculate the mount of px while scrolling manually: manualScrollSpeed / scrollSpeedDivider.
      //     manualSpeed: 750,
      //
      //     // This property defines the virtual inset margins from the borders of the container
      //     // component that, when crossed by the mouse/touch, trigger the scrolling. Useful for
      //     // fullscreen containers.
      //     startScrollMargins: { x: 0, y: 0 },
      //   },
      // }}
      // // Features.
      // features={{
      //   // Enable / disable touch support.
      //   touch: true,
      //
      //   // Range selection.
      //   range: true,
      //
      //   // Configuration in case a selectable gets just clicked.
      //   singleTap: {
      //     // Enable single-click selection (Also disables range-selection via shift + ctrl).
      //     allow: true,
      //
      //     // 'native' (element was mouse-event target) or 'touch' (element visually touched).
      //     intersect: 'native',
      //   },
      // }}
    >
      <BlockStartArea direction="top" />
      {children}
    </SelectionArea>
  );
};
