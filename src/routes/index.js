import React, { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";

const CreateRecipe = lazy(() => import("pages/createrecipes"));
const ListOfRecipes = lazy(() => import("pages/listofrecipes"));

const AppRoutes = () => {
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

  return <Suspense fallback={<>Loading...</>}>{routes}</Suspense>;
};

export { AppRoutes };
