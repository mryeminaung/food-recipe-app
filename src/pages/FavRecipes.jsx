import RecipeCard from "@/components/RecipeCard";
import { useRecipeContext } from "@/context/RecipeContext";
import { useState } from "react";
import SearchFav from "../components/SearchFav";

const FavRecipes = () => {
	const { favRecipes } = useRecipeContext();
	const [query, setQuery] = useState("");

	const showFavRecipes = query
		? favRecipes.filter((recipe) =>
				recipe.title.toLowerCase().includes(query.toLowerCase()),
		  )
		: favRecipes;

	return (
		<>
			<SearchFav setQuery={setQuery} />

			<section className="bg-[#FDFCFB] py-16">
				<div className="max-w-screen-xl mx-auto px-5">
					<h3 className="text-2xl font-semibold">Your Collection</h3>
					<p className="text-gray-500">{favRecipes.length} favorite recipes</p>
					<div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-10">
						{showFavRecipes.length > 0 ? (
							showFavRecipes.map((recipe, index) => (
								<RecipeCard
									key={index}
									recipe={recipe}
								/>
							))
						) : (
							<p className="text-gray-500 col-span-full text-center">
								{favRecipes.length === 0
									? "You have no favorite recipes yet."
									: "No recipes found for your search."}
							</p>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default FavRecipes;
