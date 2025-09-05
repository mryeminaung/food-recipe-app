import { useEffect, useState } from "react";
import RecipeCard from "@/components/RecipeCard";
import SearchRecipe from "@/components/SearchRecipe";
import { useRecipeContext } from "@/context/RecipeContext";
import SkeletonCard from "@/components/SkeletonCard";
import { redirect } from "react-router-dom";

const AllRecipes = () => {
	const { recipes } = useRecipeContext();
	const [selectedPublisher, setSelectedPublisher] = useState("");

	const publishers = [...new Set(recipes.map((r) => r.publisher))];

	const filteredRecipes = selectedPublisher
		? recipes.filter((recipe) => recipe.publisher === selectedPublisher)
		: recipes;

	return (
		<>
			<div className="bg-[#FDFCFB] pt-36 pb-10">
				<div className="max-w-screen-xl mx-auto px-5">
					<h1 className="text-3xl text-center md:text-5xl font-bold text-gray-900">
						All Recipes
					</h1>
					<p className="mt-3 text-lg text-center text-gray-600 mx-auto">
						Browse our complete collection of delicious recipes from around the
						world
					</p>

					<SearchRecipe />

					<div className="flex items-center gap-3 flex-wrap justify-center mt-6">
						<button
							onClick={() => setSelectedPublisher("")}
							className={`px-4 py-1 rounded-full transition text-sm font-medium
								${
									selectedPublisher === ""
										? "text-white bg-gradient-to-r from-orange-500 to-orange-400"
										: "bg-gray-200 text-gray-700 hover:bg-gray-300"
								}`}>
							All
						</button>
						{publishers.map((publisher) => (
							<button
								key={publisher}
								onClick={() => setSelectedPublisher(publisher)}
								className={`px-4 py-1 rounded-full transition text-sm font-medium
									${
										selectedPublisher === publisher
											? "text-white bg-gradient-to-r from-orange-500 to-orange-400"
											: "bg-gray-200 text-gray-700 hover:bg-gray-300"
									}`}>
								{publisher}
							</button>
						))}
					</div>
				</div>
			</div>

			<div className="bg-[#F8F6F3] py-10">
				<div className="grid max-w-screen-xl px-5 mx-auto gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{filteredRecipes?.length > 0
						? filteredRecipes.map((recipe) => (
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

export default AllRecipes;
