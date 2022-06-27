export const basicEditorDefaultAppCode = `import React from 'react';
import { Plate, TEditableProps } from '@udecode/plate';

const editableProps: TEditableProps = {
  placeholder: 'Type...',
  style: {
    padding: 15,
  },
};

export default () => <Plate editableProps={editableProps} />;
`;

export const basicEditorDefaultAppFile = {
  '/BasicEditorDefaultApp.tsx': basicEditorDefaultAppCode,
};
