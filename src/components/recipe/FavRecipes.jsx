import { useRecipeContext } from "../../context/RecipeContext";
import RecipeCard from "./RecipeCard";

const FavRecipes = () => {
  const { favRecipes } = useRecipeContext();

  return (
    <section className="">
      <h1 className="text-3xl font-bold">Favourited Recipes</h1>
      <div className="flex items-center flex-wrap justify-start gap-8 py-10">
        {favRecipes.map((recipe) => (
          <RecipeCard key={recipe.recipe_id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};

export default FavRecipes;
