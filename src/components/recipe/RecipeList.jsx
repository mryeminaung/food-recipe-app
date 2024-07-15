import RecipeCard from "./RecipeCard";
import SearchRecipe from "./SearchRecipe";
import { useRecipeContext } from "../../context/RecipeContext";
import SkeletonCard from "./SkeletonCard";

const RecipeList = () => {
    const { recipes } = useRecipeContext();

    return (
        <section className="">
            <SearchRecipe />
            <div className="flex items-center justify-center flex-wrap gap-8">
                {recipes
                    ? recipes.map((recipe) => (
                          <RecipeCard key={recipe.recipe_id} recipe={recipe} />
                      ))
                    : [1, 2, 3, 4, 5, 6, 7, 8].map((receipe) => (
                          <SkeletonCard key={receipe} />
                      ))}
            </div>
        </section>
    );
};

export default RecipeList;
