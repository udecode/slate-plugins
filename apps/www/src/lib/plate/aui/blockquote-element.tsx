import React from 'react';
import { cn, PlateElement, PlateElementProps } from '@udecode/plate-tailwind';

// REVIEWW
const BlockquoteElement = React.forwardRef<
  React.ElementRef<typeof PlateElement>,
  PlateElementProps
>(({ className, ...props }, ref) => {
  return (
    <PlateElement
      ref={ref}
      as="blockquote"
      className={cn(
        'mx-0 my-2 border-l-2 py-2.5 pl-4 pr-5',
        'border-[#ddd] text-[#aaa]',
        className
      )}
      {...props}
    />
  );
});

BlockquoteElement.displayName = 'BlockquoteElement';

export { BlockquoteElement };
