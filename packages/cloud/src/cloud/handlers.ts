import React from 'react';
import { Value } from '@udecode/plate-core';
import { Transforms } from 'slate';
import { ReactEditor } from 'slate-react';
import { PlateCloudEditor } from './types';
import { uploadFiles } from './uploadFiles';

export const onDropCloud = <V extends Value = Value>(
  editor: PlateCloudEditor<V>,
  e: React.DragEvent
): boolean => {
  const { files } = e.dataTransfer;
  if (files.length === 0) return false;
  /**
   * Without this, the dropped file replaces the page
   */
  e.preventDefault();
  e.stopPropagation();
  /**
   * When we drop a file, the selection won't move automatically to the drop
   * location. Find the location from the event and upload the files at that
   * location.
   */
  const at = ReactEditor.findEventRange(editor, e);
  Transforms.select(editor, at);
  uploadFiles(editor, files);
  return true;
};

export const onPasteCloud = <V extends Value = Value>(
  editor: PlateCloudEditor<V>,
  e: React.ClipboardEvent
): boolean => {
  const { files } = e.clipboardData;
  if (files.length === 0) return false;
  e.preventDefault();
  e.stopPropagation();
  uploadFiles<V>(editor, files);
  return true;
};
