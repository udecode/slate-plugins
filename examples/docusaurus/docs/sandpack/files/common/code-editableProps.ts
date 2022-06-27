export const editablePropsCode = `import { TEditableProps } from '@udecode/plate';

export const editableProps: TEditableProps = {
  spellCheck: false,
  autoFocus: false,
  placeholder: 'Type…',
  style: {
    padding: '15px',
  },
};
`;

export const editablePropsFile = {
  '/common/editableProps.ts': editablePropsCode,
};
