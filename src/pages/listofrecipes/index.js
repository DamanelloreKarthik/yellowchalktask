import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import recipeImg from "assets/images/recipeImg.svg";
import leftArrowImg from "assets/images/leftArrow.png";
import styles from "./styles.module.css";

const ListOfAllRecipes = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    if (storedRecipes.length === 0) {
      navigate("/", { replace: true });
    } else {
      setRecipes(storedRecipes);
    }
  }, [navigate]);

  const handleEdit = (recipe) => {
    navigate("/", { state: { recipeToEdit: recipe } });
  };

  const handleDelete = (indexToDelete) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this recipe?"
    );

    if (confirmDelete) {
      const updatedRecipes = recipes.filter(
        (_, index) => index !== indexToDelete
      );
      setRecipes(updatedRecipes);
      localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm)
  );

  const renderTopSection = () => {
    return (
      <section className={styles.topSectionStyle}>
        <div className={styles.titleAndArrowViewStyle}>
          <div className={styles.arrowImgStyle} onClick={() => navigate("/")}>
            <img
              src={leftArrowImg}
              alt="arrowImg"
              className={styles.imageStyles}
            />
          </div>
          <h1 className={styles.titleTextStyle}>List Of All Recipes</h1>
        </div>
        <input
          type="text"
          name="search"
          placeholder="Search recipe by title"
          value={searchTerm}
          onChange={handleSearchChange}
          className={styles.inputStyles}
        />
      </section>
    );
  };

  const renderBottomSection = () => {
    return (
      <section className={styles.bottomSectionStyle}>
        <div className={styles.bottomSubSectionStyle}>
          {filteredRecipes?.length > 0 ? (
            filteredRecipes.map((recipe, index) => (
              <div key={index} className={styles.cardSurfaceStyle}>
                <div className={styles.recipeImgStyles}>
                  <img
                    src={recipeImg}
                    alt="Recipe"
                    className={styles.recipeImageStyle}
                  />
                </div>
                <div className={styles.cardContentStyle}>
                  <h5 className={styles.cardTitleStyle}>{recipe.title}</h5>
                  <div className={styles.cardContentBlockStyle}>
                    <p className={styles.subTitleStyle}>Ingredients:</p>
                    <p className={styles.subTitleStyle}>
                      {recipe.ingredientList}
                    </p>
                  </div>
                  <div className={styles.ingredientDescStyle}>
                    <p className={styles.subTitleStyle}>Description:</p>
                    <p className={styles.subTitleStyle}>
                      {recipe.preparationSteps}
                    </p>
                  </div>
                </div>
                <div className={styles.cardActionBlockStyle}>
                  <button
                    className={styles.editBtnStyle}
                    onClick={() => handleEdit(recipe)}
                  >
                    Edit
                  </button>
                  <button
                    className={styles.deleteBtnStyle}
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className={styles.noDataFoundTextStyle}>No Data Found</p>
          )}
        </div>
      </section>
    );
  };

  return (
    <main className={styles.containerStyle}>
      {renderTopSection()}
      {renderBottomSection()}
    </main>
  );
};

export default ListOfAllRecipes;
