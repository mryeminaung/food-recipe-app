import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="max-w-[320px] w-full overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all hover:scale-105 duration-150">
      <img
        className="rounded-t-lg w-full h-[250px] hover:scale-110 duration-150"
        src={recipe.image_url}
        alt=""
      />
      <div className="p-5">
        <span className="text-gray-800">{recipe.publisher}</span>
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 h-7 overflow-clip text-ellipsis dark:text-white">
          {recipe.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
        <Link
          to={`/recipes/detail/${recipe.recipe_id}`}
          state={recipe}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
