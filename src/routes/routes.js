import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";

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

  return routes;
};

export { Routes };
