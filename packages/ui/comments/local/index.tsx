import React, { useState } from 'react';
import { render } from 'react-dom';
import { AddComment } from '@styled-icons/material';
import { createPlugins, Plate } from '@udecode/plate-core';
import { createPlateUI } from '@udecode/plate-ui';
import { AddThreadToolbarButton } from '../src/components/AddThreadToolbarButton';
import { ThreadElement } from '../src/components/ThreadElement';
import { createThreadPlugin, ELEMENT_THREAD } from '../src/createThreadPlugin';
import { Comments } from './Comments';

const initialValue = [
  {
    type: 'p',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
];

const components = createPlateUI({
  [ELEMENT_THREAD]: ThreadElement,
});

const plugins = createPlugins([...[createThreadPlugin()]], {
  components,
});

const App = () => {
  const [commentActions, setCommentActions] = useState<any>();

  console.log(commentActions);

  return (
    <div>
      <Plate
        id="main"
        editableProps={{
          placeholder: 'Enter some plain text...',
        }}
        initialValue={initialValue}
        onChange={console.log}
        plugins={plugins}
      >
        {commentActions ? (
          <AddThreadToolbarButton
            icon={<AddComment />}
            onAddThread={commentActions.onAddThread}
          />
        ) : null}
        <Comments setCommentActions={setCommentActions} />
      </Plate>
    </div>
  );
};

render(<App />, document.getElementById('root'));
