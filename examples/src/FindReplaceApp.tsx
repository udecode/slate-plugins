import React, { useMemo, useState } from 'react';
import { Search } from '@styled-icons/material/Search';
import {
  createFindReplacePlugin,
  createPlateUI,
  Plate,
  SearchHighlightToolbar,
} from '@udecode/plate';
import { basicNodesPlugins } from './basic-nodes/basicNodesPlugins';
import { editableProps } from './common/editableProps';
import { findReplaceValue } from './find-replace/findReplaceValue';
import { createMyPlugins, MyValue } from './typescript/plateTypes';

export default () => {
  const [search, setSearch] = useState('');

  const plugins = useMemo(
    () =>
      createMyPlugins(
        [
          ...basicNodesPlugins,
          createFindReplacePlugin({ options: { search } }),
        ],
        {
          components: createPlateUI(),
        }
      ),
    [search]
  );

  return (
    <>
      <SearchHighlightToolbar icon={Search} setSearch={setSearch} />

      <Plate<MyValue>
        editableProps={editableProps}
        plugins={plugins}
        initialValue={findReplaceValue}
      />
    </>
  );
};
