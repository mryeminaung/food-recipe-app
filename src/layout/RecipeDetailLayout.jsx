import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const RecipeDetailLayout = () => {
  const [relatedRecipes, setRelatedRecipes] = useState();
  const [currentRecipe, setCurrentRecipe] = useState();
  const { recipeId } = useParams();

  const fetchRecipe = () => {
    axios
      .get(`https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`)
      .then((res) => {
        setCurrentRecipe(res.data.recipe);
      });
  };

  const fetchRelatedRecipes = () => {
    axios
      .get(`https://forkify-api.herokuapp.com/api/search?q=pizza`)
      .then((res) => {
        const recipes = res.data.recipes.filter(
          (recipe) => recipe.recipe_id !== recipeId
        );
        console.log(recipes.slice(0, 10));
        // setRelatedRecipes(recipes.slice(0, 10));
      });
  };

  useEffect(() => {
    fetchRecipe();
    fetchRelatedRecipes();
  }, [recipeId]);

  return (
    <>
      <Link
        to="/recipes"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
      >
        Back to Recipes
      </Link>

      {currentRecipe && (
        <div className="flex flex-col md:flex-row items-start mt-4 gap-y-4 md:gap-x-5">
          <div className="w-full md:w-3/5 bg-white border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-2 md:p-5 lg:p-8">
            <div className="flex items-center w-full relative">
              <img
                src={currentRecipe.image_url}
                className="object-cover w-full rounded-t-lg h-96 md:w-full md:rounded-lg"
                alt={currentRecipe.title}
              />
              <span className="bg-blue-100 text-blue-800 text-base font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-gray-700 dark:text-blue-400 border border-blue-400 absolute top-2 right-1">
                {currentRecipe.publisher}
              </span>
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
          <div className="w-full md:w-2/5 bg-white border border-gray-200 rounded-lg shadow">
            <h2 className="text-2xl font-bold">Related Recipes</h2>
            {relatedRecipes ? relatedRecipes : "nothing to show..."}
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeDetailLayout;
