
/**
 * Utility functions for error handling
 */

/**
 * Logs an error with additional context information
 * @param error The error object
 * @param context Additional context information
 */
export const logError = (error: unknown, context?: string): void => {
  console.error(`Error ${context ? `in ${context}` : ''}:`, error);
};

/**
 * Formats an error message for display
 * @param error The error object
 * @returns A user-friendly error message
 */
export const formatErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  
  if (typeof error === 'string') {
    return error;
  }
  
  return 'An unknown error occurred';
};
