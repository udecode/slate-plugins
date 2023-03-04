import React from 'react';
import { css } from 'styled-components';
import tw from 'twin.macro';
import { PlateTablePopover } from '../TablePopover/PlateTablePopover';
import { TableElement } from './TableElement';
import { TableElementRootProps } from './TableElementRoot';
import { useTableElementState } from './useTableElementState';

export const PlateTableElement = (props: TableElementRootProps) => {
  const { as, children, ...rootProps } = props;

  const { colSizes, isSelectingCell } = useTableElementState();

  return (
    <TableElement.Root
      css={[
        tw`table table-fixed w-full h-px my-4 ml-px mr-0 border-collapse`,
        isSelectingCell &&
          css`
            *::selection {
              background: none;
            }
          `,
      ]}
      {...rootProps}
    >
      <TableElement.ColGroup>
        {colSizes.map((width, index) => (
          <TableElement.Col
            key={index}
            style={{
              minWidth: 48,
              width: width || undefined,
            }}
          />
        ))}
      </TableElement.ColGroup>

      <PlateTablePopover>
        <TableElement.TBody css={tw`min-w-full`}>{children}</TableElement.TBody>
      </PlateTablePopover>
    </TableElement.Root>
  );
};
