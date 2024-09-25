import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<>Loading...</>}>
        <Routes />
      </Suspense>
    </BrowserRouter>
  );
};

export { AppRoutes };
