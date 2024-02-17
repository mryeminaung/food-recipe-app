import { Link } from "react-router-dom";

const RecipeFooter = () => {
  return (
    <footer className="bg-white border-t-2 rounded-lg shadow dark:bg-gray-800 fixed bottom-0 left-0 right-0">
      <div className="w-full mx-auto max-w-screen-2xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <Link to="/" className="hover:underline">
            Ye Min Aung
          </Link>{" "}
          © 2024. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default RecipeFooter;
