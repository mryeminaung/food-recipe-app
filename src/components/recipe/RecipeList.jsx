import RecipeCard from "./RecipeCard";
import SearchRecipe from "./SearchRecipe";
import { useRecipeContext } from "../../context/RecipeContext";

const RecipeList = () => {
  const { recipes } = useRecipeContext();

  return (
    <section className="">
      <SearchRecipe />
      <div className="flex items-center justify-center flex-wrap gap-8">
        {recipes &&
          recipes.map((recipe) => (
            <RecipeCard key={recipe.recipe_id} recipe={recipe} />
          ))}
      </div>
    </section>
  );
};

export default RecipeList;
