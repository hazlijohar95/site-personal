
import React from 'react';
import { FallbackProps } from 'react-error-boundary';
import { Button } from '@/components/ui/button';

/**
 * ErrorFallback component displays when an error occurs in the application
 * It provides users with a friendly error message and a way to recover
 */
export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => (
  <div className="flex flex-col items-center justify-center min-h-screen p-4">
    <h2 className="text-xl font-bold mb-4">Something went wrong</h2>
    <pre className="bg-muted p-4 rounded mb-4 max-w-md overflow-auto text-sm">
      {error.message}
    </pre>
    <Button 
      onClick={resetErrorBoundary}
      variant="default"
      className="px-4 py-2"
    >
      Try again
    </Button>
  </div>
);

export default ErrorFallback;
