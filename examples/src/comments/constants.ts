import { TComment } from '@udecode/plate-comments';
import { MyValue } from '../typescript/plateTypes';

export const usersData = {
  1: {
    id: '1',
    name: 'Foo',
    avatarUrl: 'https://avatars.githubusercontent.com/u/1863771?v=4',
  },
  2: {
    id: '2',
    name: 'Bar',
    avatarUrl: 'https://avatars.githubusercontent.com/u/1863771?v=4',
  },
};

export const commentsData: Record<string, TComment> = {
  1: {
    id: '1',
    userId: '1',
    value: [{ type: 'p', children: [{ text: 'This is a comment.' }] }],
    createdAt: 1663453625129,
  },
  2: {
    id: '2',
    userId: '1',
    value: [{ type: 'p', children: [{ text: 'What?' }] }],
    createdAt: 1663453729191,
  },
  3: {
    id: '3',
    userId: '1',
    value: [{ type: 'p', children: [{ text: 'This is a resolved comment.' }] }],
    isResolved: true,
    createdAt: 1663453740180,
  },
  4: {
    id: '4',
    userId: '2',
    value: [{ type: 'p', children: [{ text: 'This is a reply.' }] }],
    threadId: '3',
    createdAt: 1663453740181,
  },
};

export const commentsValue: MyValue = [
  {
    type: 'p',
    children: [
      { text: 'A line of text in a ' },
      {
        text: 'paragraph',
        comment: true,
        comment_1: true,
      },
      { text: '.' },
    ],
  },
  {
    type: 'p',
    children: [
      {
        text: 'Lorem',
        comment: true,
        comment_2: true,
      },
      { text: 'amet' },
      {
        text: 'paragraph',
        comment: true,
        comment_3: true,
      },
      {
        text:
          ' consectetur, adipisicing elit. Nobis consequuntur modi odit incidunt unde animi molestias necessitatibus nisi ab optio dolorum, libero placeat aut, facere tempore accusamus veniam voluptatem aspernatur.',
      },
    ],
  },
  { type: 'p', children: [{ text: '' }] },
];
