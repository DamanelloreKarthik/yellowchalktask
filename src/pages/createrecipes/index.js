import React from "react";
import { Button } from "components/common/button";
import { FormDataConstants } from "./formData";
import { FormDataErrorMessage } from "./errormessage";
import styles from "./styles.module.css";

const CreateRecipes = () => {
  const { createRecipeDataOne, createRecipeDataTwo } = FormDataConstants();

  const renderTitleInputSection = () => {
    return (
      <section className={styles.titleInputSectionStyle}>
        <label className={styles.labelStyle}>Enter Recipe Title</label>
        <input type="text" name="recipeTitle" className={styles.inputStyle} />
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
          className={styles.textAreaStyle}
        />
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
          className={styles.textAreaStyle}
        />
      </section>
    );
  };

  const renderSubmitBtnSection = () => {
    return (
      <Button
        title="Create recipe"
        customBtnTitleStyle={styles.createRecipeBtnTitleStyle}
        customBtnContainerStyle={styles.btnContainerStyle}
      />
    );
  };

  return (
    <main className={styles.mainContainerStyle}>
      <div className={styles.subContainerStyles}>
        <h2 className={styles.titleTextStyle}>Create Recipe</h2>
        {renderTitleInputSection()}
        {renderIngredientSection()}
        {renderPreparationStepsSection()}
        {renderSubmitBtnSection()}
      </div>
    </main>
  );
};

export default CreateRecipes;
