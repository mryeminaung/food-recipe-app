import { Outlet } from "react-router-dom";

const RecipeDetailLayout = () => {
  return (
    <div className="flex flex-col md:flex-row items-start">
      <div className="w-full md:w-3/5 p-2 bg-white border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-10">
        <div className="flex items-center w-full">
          <img
            src={recipe.image_url}
            className="object-cover w-full rounded-t-lg h-80 md:w-full md:rounded-lg"
            alt=""
          />
        </div>
        <div className="">
          <div className="flex flex-col justify-between leading-normal">
            <span className="text-gray-800">{recipe.publisher}</span>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {recipe.title}
            </h5>
          </div>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Details
          </button>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Photos
          </button>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Ingredients
          </button>
        </div>
      </div>
      <div className="w-2/5 bg-white border border-gray-200 rounded-lg shadow">
        <h2>Related Recipes</h2>
      </div>
    </div>
  );
};

export default RecipeDetailLayout;
