import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { useRecipeContext } from "../context/RecipeContext";
import RelatedRecipes from "../components/recipe/relatedRecipes/RelatedRecipes";

const RecipeDetailLayout = () => {
  const { favRecipes, setFavRecipes } = useRecipeContext();
  const [currentRecipe, setCurrentRecipe] = useState();
  const { recipeId } = useParams();
  const location = useLocation();
  const isFav = favRecipes.find((recipe) => recipe.recipe_id === recipeId);

  const fetchRecipe = () => {
    axios
      .get(`https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`)
      .then((res) => {
        setCurrentRecipe(res.data.recipe);
      });
  };

  useEffect(() => {
    fetchRecipe();
  }, [recipeId]);

  return (
    <section className="">
      <Link
        to={`${location.state ? location.state.pathname : "/recipes"}`}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 m-2 md:m-5 lg:m-8"
      >
        Back to Recipes
      </Link>

      {currentRecipe && (
        <div className="flex flex-col md:flex-row items-start mt-2 gap-y-4 md:gap-x-2">
          <div className="w-full md:w-3/5 bg-white rounded-lg md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-2 md:p-5 lg:p-8">
            <div className="flex items-center w-full relative">
              <img
                src={currentRecipe.image_url}
                className="object-cover w-full rounded-t-lg h-96 md:w-full md:rounded-lg"
                alt={currentRecipe.title}
              />
              <button
                type="button"
                onClick={() => {
                  setFavRecipes((preRecipes) => {
                    const isRecipeInFavorites = preRecipes.some(
                      (recipe) => recipe.recipe_id === currentRecipe.recipe_id
                    );

                    // If the recipe is already in favorites, return the previous state
                    if (isRecipeInFavorites) {
                      const filteredRecipes = preRecipes.filter(
                        (recipe) => recipe.recipe_id !== currentRecipe.recipe_id
                      );
                      return filteredRecipes;
                    } else {
                      // If the recipe is not in favorites, add it
                      return [...preRecipes, currentRecipe];
                    }
                  });
                }}
                className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-3 rounded-full py-3 dark:bg-blue-900 dark:text-blue-300 absolute top-2 right-2"
              >
                <svg
                  className={`w-6 h-6 ${
                    isFav ? "text-red-800" : "text-blue-800"
                  } bg-blue-50 dark:text-white`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.8 2c-.5 0-1 .2-1.3.6A2 2 0 0 0 6 3.9V21a1 1 0 0 0 1.6.8l4.4-3.5 4.4 3.5A1 1 0 0 0 18 21V3.9c0-.5-.2-1-.5-1.3-.4-.4-.8-.6-1.3-.6H7.8Z" />
                </svg>
              </button>
            </div>
            <div className="mt-4">
              <div className="flex flex-col justify-between leading-normal">
                <span className="text-gray-800">{currentRecipe.publisher}</span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {currentRecipe.title}
                </h5>
              </div>
              <div className="pb-2">
                <Link
                  to="."
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Details
                </Link>
                <Link
                  to="photos"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Photos
                </Link>
                <Link
                  to="ingredients"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Ingredients
                </Link>
              </div>
              {/* sub details pages will go here... */}
              <div className="border shadow bg-white p-3 rounded-lg mt-4">
                <Outlet context={{ currentRecipe: currentRecipe }} />
              </div>
            </div>
          </div>
          <div className="w-full mt-5 md:mt-0 md:w-2/5 bg-white">
            <RelatedRecipes current={currentRecipe} />
          </div>
        </div>
      )}
    </section>
  );
};

export default RecipeDetailLayout;
