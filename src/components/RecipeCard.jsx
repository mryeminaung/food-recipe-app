import { Heart, Clock, Users, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRecipeContext } from "@/context/RecipeContext";

const RecipeCard = ({ recipe }) => {
	const { favRecipes, setFavRecipes } = useRecipeContext();

	const isFavRecipe = favRecipes.some(
		(favRecipe) => favRecipe.recipe_id === recipe.recipe_id,
	);

	const toggleFavRecipe = () => {
		if (isFavRecipe) {
			setFavRecipes(
				favRecipes.filter(
					(favRecipe) => favRecipe.recipe_id !== recipe.recipe_id,
				),
			);
		} else {
			setFavRecipes([...favRecipes, recipe]);
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, ease: "easeOut" }}
			whileHover={{ scale: 1.03 }}
			className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden group">
			<div className="relative overflow-hidden">
				<img
					className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
					src={recipe.image_url}
					alt={recipe.title}
					loading="lazy"
				/>

				{/* Overlay Gradient */}
				<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

				{/* Publisher Badge */}
				<span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
					{recipe.publisher}
				</span>

				{/* Favorite Button */}
				<button
					onClick={toggleFavRecipe}
					className="absolute top-2 right-2 rounded-lg bg-white p-2 shadow hover:bg-gray-100 transition"
					aria-label="Add to favorites">
					<Heart
						className={`w-5 h-5 transition-transform duration-200 ${
							isFavRecipe
								? "fill-orange-500 text-orange-500 scale-110"
								: "text-gray-500"
						}`}
					/>
				</button>
			</div>

			<div className="p-5">
				{/* Title */}
				<h5 className="text-lg font-bold text-gray-900 line-clamp-1 transition-colors duration-300 group-hover:text-orange-500">
					{recipe.title}
				</h5>

				{/* Publisher Info */}
				<p className="text-sm text-gray-600 mt-1 line-clamp-2 italic">
					Recipe from {recipe.publisher}
				</p>

				{/* Info Section */}
				<div className="flex flex-wrap items-center gap-2 text-gray-600 text-xs mt-4">
					<span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
						<Clock className="w-4 h-4" /> 25 mins
					</span>
					<span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
						<Users className="w-4 h-4" /> 2–4 servings
					</span>
					<span className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
						Easy
					</span>
					<span className="flex items-center gap-1 bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">
						<Flame className="w-4 h-4" /> {Math.round(recipe.social_rank)}%
					</span>
				</div>

				{/* Button */}
				<Link
					to={`/recipes/details/${recipe.recipe_id}`}
					className="w-full block text-center text-sm mt-5 py-2 px-4 text-white font-medium rounded-lg 
					bg-gradient-to-r from-orange-500 to-orange-400 hover:shadow-lg hover:scale-[1.02] transition">
					View Recipe
				</Link>
			</div>
		</motion.div>
	);
};

export default RecipeCard;
