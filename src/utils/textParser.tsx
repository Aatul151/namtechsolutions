import { ReactNode } from 'react';
import { GradientText } from '../components/ui/GradientText';

/**
 * Parses a string with gradient markers and returns React elements
 * 
 * Usage:
 * - Wrap text in double brackets: "Build [[Premium Software]] That Scales"
 * - Multiple gradients: "[[Fast]] and [[Reliable]] Solutions"
 * 
 * @param text - The text string with [[markers]]
 * @param gradientClassName - Optional className for GradientText component
 * @returns Array of React elements
 */
export function parseGradientText(
  text: string,
  gradientClassName?: string
): ReactNode[] {
  // Match [[text]] pattern
  const regex = /\[\[([^\]]+)\]\]/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    // Add text before the marker
    if (match.index > lastIndex) {
      parts.push(
        <span key={`text-${key++}`}>
          {text.slice(lastIndex, match.index)}
        </span>
      );
    }

    // Add the gradient text
    parts.push(
      <GradientText key={`gradient-${key++}`} className={gradientClassName}>
        {match[1]}
      </GradientText>
    );

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text after last marker
  if (lastIndex < text.length) {
    parts.push(
      <span key={`text-${key++}`}>
        {text.slice(lastIndex)}
      </span>
    );
  }

  // If no markers found, return the original text
  if (parts.length === 0) {
    return [text];
  }

  return parts;
}
