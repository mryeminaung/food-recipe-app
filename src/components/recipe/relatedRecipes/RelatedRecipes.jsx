import { useEffect, useState } from "react";
import { useRecipeContext } from "../../../context/RecipeContext";
import axios from "axios";
import { Link } from "react-router-dom";

const RelatedRecipes = ({ current }) => {
  const { search } = useRecipeContext();
  const [relatedRecipes, setRelatedRecipes] = useState();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const fetchRelatedRecipes = () => {
    axios
      .get(
        `https://forkify-api.herokuapp.com/api/search?q=${
          search ? search : "pizza"
        }`
      )
      .then((res) => {
        const recipes = res.data.recipes.filter(
          (recipe) => recipe.recipe_id !== current.recipe_id
        );
        setRelatedRecipes(recipes.slice(5, 10));
      });
  };

  useEffect(() => {
    fetchRelatedRecipes();
  }, [current.recipe_id]);

  return (
    <div className="py-3">
      <h2 className="text-2xl font-bold -mt-8 mb-3 text-center">
        Related Recipes
      </h2>
      <ul className="px-3 flex flex-wrap gap-y-8 md:gap-y-4">
        {relatedRecipes &&
          relatedRecipes.map((recipe) => (
            <li
              key={recipe.recipe_id}
              className="w-full duration-150 hover:scale-105"
            >
              <Link
                to={`/recipes/detail/${recipe.recipe_id}`}
                onClick={scrollToTop}
                className="flex flex-col text-left md:text-left md:items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  className="object-cover w-full h-48 p-3 lg:w-48 rounded-2xl"
                  src={recipe.image_url}
                  alt=""
                />
                <div className="flex flex-col justify-start p-2  leading-normal">
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {recipe.publisher}
                  </p>
                  <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {recipe.title}
                  </h5>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RelatedRecipes;
