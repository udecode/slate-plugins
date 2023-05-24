import React from 'react';
import {
  focusEditor,
  useEventPlateId,
  usePlateEditorRef,
} from '@udecode/plate-common';

import {
  ToolbarButtonOld,
  ToolbarButtonProps,
} from '@/plate/toolbar/ToolbarButtonOld';

type PlateCommentsShowResolvedButtonProps = ToolbarButtonProps & {
  fetchContacts: () => Promise<void>;
  renderContainer: (props: any) => JSX.Element;
  retrieveUser: () => Promise<void>;
};

export function PlateCommentsShowResolvedButton(
  props: PlateCommentsShowResolvedButtonProps
) {
  const { id, fetchContacts, renderContainer, retrieveUser, ...otherProps } =
    props;

  const editor = usePlateEditorRef(useEventPlateId(id));
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const isActive = Boolean(anchorEl);

  return (
    <div>
      <ToolbarButtonOld
        aria-label="Show resolved comments"
        active={isActive}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();

          setAnchorEl(e.currentTarget);

          focusEditor(editor);
        }}
        {...otherProps}
      />
    </div>
  );
}
