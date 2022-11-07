import React from 'react';
import { getThreadNodeEntries, Thread, User } from '@udecode/plate-comments';
import { usePlateEditorState } from '@udecode/plate-core';
import { nullUser } from '../../utils';
import { PlateThread } from '../Thread/PlateThread';
import {
  resolvedThreadsBodyCss,
  resolvedThreadsHeaderCss,
  resolvedThreadsRootCss,
} from './styles';

export type PlateResolvedThreadsProps = {
  fetchContacts: () => User[];
  retrieveUser: () => User;
};

export const PlateResolvedThreads = (props: PlateResolvedThreadsProps) => {
  const { fetchContacts, retrieveUser } = props;

  const editor = usePlateEditorState()!;

  const threadNodeEntries = getThreadNodeEntries(editor);

  const resolvedThreads = (threadNodeEntries.map(
    ([threadNodeEntry]) => threadNodeEntry.thread
  ) as Thread[]).filter((thread: Thread) => thread.isResolved);

  return (
    <div css={resolvedThreadsRootCss}>
      <h2 css={resolvedThreadsHeaderCss}>Resolved threads</h2>
      <div css={resolvedThreadsBodyCss}>
        {resolvedThreads.map((thread) => (
          <PlateThread
            key={thread.id}
            thread={thread}
            onSaveComment={() => undefined as any}
            onSubmitComment={() => Promise.resolve() as any}
            onCancelCreateThread={() => undefined}
            onResolveThread={() => undefined}
            showResolveThreadButton={false}
            showReOpenThreadButton
            showMoreButton={false}
            fetchContacts={fetchContacts}
            retrieveUser={retrieveUser}
            retrieveUserByEmailAddress={() => nullUser}
            noTextArea
          />
        ))}
      </div>
    </div>
  );
};
