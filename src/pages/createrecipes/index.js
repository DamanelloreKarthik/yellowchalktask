import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const CreateRecipes = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const recipeToEdit = location?.state?.recipeToEdit;

  console.log("111", recipeToEdit);

  const [recipeData, setRecipeData] = useState({
    title: "",
    ingredientList: "",
    preparationSteps: "",
  });

  const [errorMsg, setErrorMsg] = useState({
    title: "",
    ingredientList: "",
    preparationSteps: "",
  });

  // get the recipe data:
  useEffect(() => {
    if (recipeToEdit) {
      setRecipeData(recipeToEdit);
    }
  }, [recipeToEdit]);

  const handleValidation = () => {
    const newErrorMessage = {};

    if (recipeData.title === "") {
      newErrorMessage.title = "Please Enter Title";
    }

    if (recipeData.ingredientList === "") {
      newErrorMessage.ingredientList = "Please Enter Ingredients";
    }

    if (recipeData.preparationSteps === "") {
      newErrorMessage.preparationSteps = "Please Enter Preparation Steps";
    }

    setErrorMsg(newErrorMessage);

    if (Object.keys(newErrorMessage).length === 0) {
      handleCreateRecipe();
    }
  };

  const handleCreateRecipe = () => {
    const existingRecipes = JSON.parse(localStorage.getItem("recipes")) || [];

    let updatedRecipes;
    if (recipeToEdit) {
      // Update existing recipe
      updatedRecipes = existingRecipes.map((recipe) =>
        recipe?.title === recipeToEdit?.title ? recipeData : recipe
      );
    } else {
      // Add new recipe
      updatedRecipes = [...existingRecipes, recipeData];
    }

    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    navigate("/listofrecipes");
  };

  const renderTitleInputSection = () => {
    return (
      <section className={styles.titleInputSectionStyle}>
        <label className={styles.labelStyle}>Enter Recipe Title</label>
        <input
          type="text"
          name="recipeTitle"
          value={recipeData.title}
          onChange={(e) =>
            setRecipeData({ ...recipeData, title: e.target.value })
          }
          onFocus={() => setErrorMsg({ ...errorMsg, title: "" })}
          className={styles.inputStyle}
        />
        <p className={styles.errorMsgStyle}>
          {errorMsg.title && errorMsg?.title}
        </p>
      </section>
    );
  };

  const renderIngredientSection = () => {
    return (
      <section className={styles.ingredientTextAreaSectionStyle}>
        <label className={styles.labelStyle}>Enter Ingredients List</label>

        <textarea
          type="text"
          name="ingredientList"
          value={recipeData.ingredientList}
          onChange={(e) =>
            setRecipeData({ ...recipeData, ingredientList: e.target.value })
          }
          onFocus={() => setErrorMsg({ ...errorMsg, ingredientList: "" })}
          className={styles.textAreaStyle}
        />
        <p className={styles.errorMsgStyle}>
          {errorMsg.ingredientList && errorMsg?.ingredientList}
        </p>
      </section>
    );
  };

  const renderPreparationStepsSection = () => {
    return (
      <section className={styles.ingredientTextAreaSectionStyle}>
        <label className={styles.labelStyle}>Enter Preparation Steps</label>

        <textarea
          type="text"
          name="preparationSteps"
          value={recipeData.preparationSteps}
          onChange={(e) =>
            setRecipeData({ ...recipeData, preparationSteps: e.target.value })
          }
          onFocus={() => setErrorMsg({ ...errorMsg, preparationSteps: "" })}
          className={styles.textAreaStyle}
        />
        <p className={styles.errorMsgStyle}>
          {errorMsg.preparationSteps && errorMsg?.preparationSteps}
        </p>
      </section>
    );
  };

  const renderSubmitBtnSection = () => {
    return (
      <button
        onClick={() => handleValidation()}
        className={styles.createRecipeBtnStyle}
      >
        {recipeToEdit ? "Edit Recipe" : "Create Recipe"}
      </button>
    );
  };

  return (
    <main className={styles.mainContainerStyle}>
      <div className={styles.subContainerStyles}>
        <h2 className={styles.titleTextStyle}>
          {recipeToEdit ? "Edit Recipe" : "Create Recipe"}
        </h2>
        {renderTitleInputSection()}
        {renderIngredientSection()}
        {renderPreparationStepsSection()}
        {renderSubmitBtnSection()}
      </div>
    </main>
  );
};

export default CreateRecipes;
