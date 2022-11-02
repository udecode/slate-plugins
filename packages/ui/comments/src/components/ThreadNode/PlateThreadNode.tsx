import React, { useMemo } from 'react';
import { ThreadElement as TThreadElement } from '@udecode/plate-comments';
import { Value } from '@udecode/plate-core';
import {
  getRootProps,
  StyledElementProps,
} from '@udecode/plate-styled-components';
import {
  threadElementResolvedCss,
  threadElementRootCss,
  threadElementSelectedCss,
} from './styles';

export const PlateThreadNode = (
  props: StyledElementProps<Value, TThreadElement>
) => {
  const { attributes, children, nodeProps, element } = props;

  const { thread } = element;

  const rootProps = getRootProps(props);

  const style = useMemo(() => {
    if (thread.isResolved) {
      return threadElementResolvedCss;
    }

    if (element.selected) {
      return threadElementSelectedCss;
    }

    return threadElementRootCss;
  }, [element.selected, thread.isResolved]);

  return (
    <span {...attributes} css={style} {...rootProps} {...nodeProps}>
      {children}
    </span>
  );
};
