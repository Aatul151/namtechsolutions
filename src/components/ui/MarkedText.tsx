import { type ElementType } from 'react';

import { parseGradientText } from '../../utils/textParser';

export function MarkedText({
  as,
  text,
  className = "text-4xl md:text-5xl font-bold mb-4",
  gradientClassName,
  ...rest
}: any) {
  const Component = (as ?? 'span') as ElementType;

  return (
    <Component className={className} {...rest}>
      {parseGradientText(text, gradientClassName)}
    </Component>
  );
}

