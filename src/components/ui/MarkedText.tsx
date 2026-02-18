import { type ElementType, type ComponentPropsWithoutRef } from 'react';

import { parseGradientText } from '../../utils/textParser';

type MarkedTextProps<TAs extends ElementType> = {
  as?: TAs;
  text: string;
  className?: string;
  gradientClassName?: string;
} & Omit<ComponentPropsWithoutRef<TAs>, 'as' | 'children' | 'className'>;

export function MarkedText<TAs extends ElementType = 'span'>({
  as,
  text,
  className,
  gradientClassName,
  ...rest
}: MarkedTextProps<TAs>) {
  const Component = (as ?? 'span') as ElementType;

  return (
    <Component className={className} {...rest}>
      {parseGradientText(text, gradientClassName)}
    </Component>
  );
}

