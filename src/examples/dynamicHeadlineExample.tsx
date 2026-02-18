/**
 * Example: How to use dynamic gradient text with API data
 * 
 * In your API response, send headline strings with [[markers]]:
 * 
 * API Response Example:
 * {
 *   "headline": "Build [[Premium Software]] That Scales",
 *   "subtitle": "We offer [[Fast]] and [[Reliable]] Solutions"
 * }
 */

import { parseGradientText } from '../utils/textParser';

// Example component using API data
export function ExampleWithAPI() {
  // Simulate API data
  const apiData = {
    headline: 'Build [[Premium Software]] That Scales',
    subtitle: 'We deliver [[Fast]], [[Secure]], and [[Scalable]] Solutions',
  };

  return (
    <div>
      <h1 className="text-4xl font-bold">
        {parseGradientText(apiData.headline, 'text-4xl')}
      </h1>
      
      <p className="text-xl mt-4">
        {parseGradientText(apiData.subtitle, 'text-xl')}
      </p>
    </div>
  );
}

/**
 * Usage Examples:
 * 
 * Single gradient:
 * "Build [[Premium Software]] That Scales"
 * 
 * Multiple gradients:
 * "[[Fast]], [[Secure]], and [[Reliable]] Solutions"
 * 
 * No gradient (normal text):
 * "Build Premium Software That Scales"
 * 
 * Mixed:
 * "We offer [[Enterprise]] solutions with [[24/7]] support"
 */
