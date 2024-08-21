import React, { useRef } from 'react';

import {
  type TElement,
  getAboveNode,
  isInline,
  isVoid,
  queryNode,
} from '@udecode/plate-common';
import { findNodePath, useEditorRef } from '@udecode/plate-common/react';
import { Path } from 'slate';

import { BlockSelectionPlugin } from '../BlockSelectionPlugin';
import {
  blockSelectionActions,
  useBlockSelectionSelectors,
} from '../blockSelectionStore';
import { isNodeBlockSelected } from '../queries';

export interface BlockSelectableOptions {
  element: TElement;
  active?: boolean;
}

export const useBlockSelectableState = ({
  active,
  element,
}: BlockSelectableOptions) => {
  const editor = useEditorRef();
  const ref = useRef<HTMLDivElement | null>(null);

  const path = React.useMemo(
    () => findNodePath(editor, element),
    [editor, element]
  );

  if (!path || isInline(editor, element)) {
    return {
      active: active ?? false,
    };
  }

  const { query } = editor.getOptions(BlockSelectionPlugin);

  if (query && !queryNode([element, path], query)) {
    return {
      active: active ?? false,
    };
  }

  return {
    active: active ?? true,
    editor,
    element,
    path,
    ref,
  };
};

export const useBlockSelectable = ({
  editor,
  element,
  path,
  ref,
}: ReturnType<typeof useBlockSelectableState>) => {
  const id = element?.id as string | undefined;
  const isSelected = useBlockSelectionSelectors().isSelected(id);

  const data = {
    'data-key': id,
  };

  return {
    props: {
      className: isSelected
        ? 'slate-selected slate-selectable'
        : 'slate-selectable',
      key: id,
      onContextMenu: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!editor) return;

        const { disableContextMenu = true } =
          editor.getOptions(BlockSelectionPlugin);

        if (disableContextMenu) return;
        if (editor.selection?.focus) {
          const nodeEntry = getAboveNode(editor);

          if (nodeEntry && Path.isCommon(path, nodeEntry[1])) {
            const isSelected = isNodeBlockSelected(nodeEntry[0] as TElement);
            const isOpenAlways =
              (event.target as HTMLElement).dataset?.openContextMenu === 'true';

            /**
             * When "block selected or is void or has openContextMenu props",
             * right click can always open the context menu.
             */
            if (!isSelected && !isVoid(editor, nodeEntry[0]) && !isOpenAlways)
              return event.stopPropagation();
          }
        }

        const aboveHtmlNode = ref.current;

        if (id && aboveHtmlNode) {
          blockSelectionActions.addSelectedRow(id, {
            aboveHtmlNode,
            clear: !event?.shiftKey,
          });
        }
      },
      ref,
      // style: isSelected
      //   ? {
      //       backgroundColor: selectedColor,
      //     }
      //   : undefined,
      ...data,
    },
  };
};

export function BlockSelectable({
  children,
  options,
  ...props
}: { options: BlockSelectableOptions } & React.HTMLAttributes<HTMLDivElement>) {
  const state = useBlockSelectableState(options);
  const { props: rootProps } = useBlockSelectable(state);

  if (!state.active) return <>{children}</>;

  return (
    <div {...rootProps} {...props}>
      {children}
    </div>
  );
}