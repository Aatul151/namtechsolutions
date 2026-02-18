/**
 * Example: How to use the global loader for API calls
 * 
 * This file shows how to control the loader state when making API calls.
 * You can import useLoader in any component and control the loading state.
 */

import { useLoader } from '../hooks/useLoader';

// Example component showing how to use loader with API calls
export function ExampleComponent() {
  const { setLoading } = useLoader();

  const fetchCompanyDetails = async () => {
    try {
      // Set loader to true before API call
      setLoading(true);

      // Your API call here
      // const response = await fetch('/api/company-details');
      // const data = await response.json();
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Handle response...
      // setCompanyData(data);

    } catch (error) {
      console.error('Error fetching company details:', error);
    } finally {
      // Always set loader to false after API call completes
      setLoading(false);
    }
  };

  return (
    <button onClick={fetchCompanyDetails}>
      Fetch Company Details
    </button>
  );
}

/**
 * Usage in your API service file:
 * 
 * import { useLoader } from '../hooks/useLoader';
 * 
 * export async function getCompanyDetails() {
 *   const { setLoading } = useLoader();
 *   
 *   setLoading(true);
 *   try {
 *     const response = await fetch('/api/company-details');
 *     return await response.json();
 *   } finally {
 *     setLoading(false);
 *   }
 * }
 */
