import RecipeCard from "./RecipeCard";
import SearchRecipe from "./SearchRecipe";
import { useRecipeContext } from "@/context/RecipeContext";
import SkeletonCard from "./SkeletonCard";

const RecipeList = () => {
	const { recipes } = useRecipeContext();

	return (
		<>
			<div className=" bg-[#FDFCFB] pt-28 pb-10">
				<div className="max-w-screen-xl mx-auto px-5">
					<h1 className="text-3xl text-center md:text-5xl font-bold text-gray-900">
						All Recipes
					</h1>
					<p className="mt-3 text-lg text-center text-gray-600 mx-auto">
						Browse our complete collection of delicious recipes from around the
						world
					</p>

					<SearchRecipe />

					<div className="flex items-center gap-x-3">
						<button className="px-4 text-white py-1 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-500 hover:to-orange-700">
							All
						</button>
						<button className="px-4 py-1 rounded-full border-gray-300 border">
							Easy
						</button>
						<button className="px-4 py-1 rounded-full border-gray-300 border">
							Medium
						</button>
						<button className="px-4 py-1 rounded-full border-gray-300 border">
							Hard
						</button>
					</div>
				</div>
			</div>

			<div className="bg-[#F8F6F3] py-20">
				<div className="grid max-w-screen-xl px-5 mx-auto gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
					{recipes
						? recipes.map((recipe) => (
								<RecipeCard
									key={recipe.recipe_id}
									recipe={recipe}
								/>
						  ))
						: [1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
								<SkeletonCard key={index} />
						  ))}
				</div>
			</div>
		</>
	);
};

export default RecipeList;
