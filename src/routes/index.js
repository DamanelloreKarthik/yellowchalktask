import React, { Suspense, lazy } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";

const CreateRecipe = lazy(() => import("pages/createrecipes"));
const ListOfRecipes = lazy(() => import("pages/listofrecipes"));

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <CreateRecipe />,
    },
    {
      path: "/listofrecipes",
      element: <ListOfRecipes />,
    },
  ]);

  return <>{routes}</>;
};

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
