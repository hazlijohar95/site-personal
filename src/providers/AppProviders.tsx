
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/hooks/use-theme";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/error/ErrorFallback";

/**
 * AppProviders component encapsulates all providers for the application
 * This helps keep the App component clean and focused on routing
 */
export const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Create query client instance inside component to fix React hooks issue
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
      },
    },
  });
  
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              {children}
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default AppProviders;
