import React from "react";
import { useConstantsContext } from "providers/constantsprovider";

const FormDataErrorMessage = () => {
  const dataOne = useConstantsContext();

  const DataOne = {
    title: "",
    subTitle: "",
    description: "",
  };

  const DataTwo = {
    titleOne: "",
    subTitleOne: "",
    descriptionOne: "",
  };

  return { DataOne, DataTwo };
};

export { FormDataErrorMessage };
