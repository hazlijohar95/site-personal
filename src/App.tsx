
import React from 'react';
import { Routes, Route } from "react-router-dom";
import AppProviders from "@/providers/AppProviders";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ROUTES } from "./constants/routes";

/**
 * Main App component that sets up routing
 */
const App = () => {
  return (
    <AppProviders>
      <Routes>
        <Route path={ROUTES.HOME} element={<Index />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </AppProviders>
  );
};

export default App;
