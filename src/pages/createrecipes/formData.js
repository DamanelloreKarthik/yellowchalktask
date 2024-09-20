import React from "react";
import { useConstantsContext } from "providers/constantsprovider";

const FormDataConstants = () => {
  const dataOne = useConstantsContext();

  // create RecipeData One
  const createRecipeDataOne = {
    title: "",
    subTitle: "",
    description: "",
  };

  // create RecipeData Two
  const createRecipeDataTwo = {
    titleOne: "",
    subTitleOne: "",
    descriptionOne: "",
  };

  return { createRecipeDataOne, createRecipeDataTwo };
};

export { FormDataConstants };
