import { useEffect, useState } from "react";
import { useRecipeContext } from "../context/RecipeContext";
import axios from "axios";
import { useNavigate } from "react-router";
import { Clock } from "lucide-react";

const RelatedRecipes = ({ currentRecipe }) => {
	const navigate = useNavigate();

	const { search } = useRecipeContext();
	const [relatedRecipes, setRelatedRecipes] = useState();

	const fetchRelatedRecipes = () => {
		axios
			.get(
				`https://forkify-api.herokuapp.com/api/search?q=${
					search ? search : "pizza"
				}`,
			)
			.then((res) => {
				const recipes = res.data.recipes.filter(
					(recipe) => recipe.recipe_id !== currentRecipe.recipe_id,
				);
				setRelatedRecipes(recipes.slice(5, 8));
			});
	};

	useEffect(() => {
		fetchRelatedRecipes();
	}, [relatedRecipes]);

	return (
		<div className="bg-white p-6 rounded-xl shadow-sm shadow-orange-300 space-y-6">
			<h3 className="font-semibold">Related Recipes</h3>
			<div className="space-y-3">
				{relatedRecipes &&
					relatedRecipes.map((recipe) => (
						<div
							key={recipe.recipe_id}
							onClick={() => navigate(`/recipes/details/${recipe.recipe_id}`)}
							className="flex hover:shadow-orange-300 items-start gap-3 shadow-sm hover:scale-[1.03] transition-all hover:cursor-pointer rounded-lg p-3 hover:bg-gray-50">
							<div className="w-16 h-16 rounded overflow-hidden">
								<img
									src={recipe.image_url}
									alt={recipe.title}
									className="w-full h-full object-cover"
								/>
							</div>
							<div>
								<p className="text-sm font-medium">{recipe.title}</p>
								<div className="flex items-center gap-1 mt-1 font-light text-sm">
									<Clock size={14} /> <span>40 mins</span>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default RelatedRecipes;
