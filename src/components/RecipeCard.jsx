import { Heart, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
	return (
		<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg group">
			<div className="relative">
				<img
					className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
					src={recipe.image_url}
					alt={recipe.title}
				/>

				<span className="absolute top-2 left-2 bg-white text-gray-800 text-xs font-medium px-2 py-1 rounded-full shadow">
					Dessert
				</span>

				<button className="absolute top-2 right-2 bg-white rounded-lg p-2 shadow hover:bg-gray-100">
					<Heart className="w-5 h-5 text-red-500" />
				</button>
			</div>

			<div className="p-5">
				<h5 className="text-lg font-bold text-gray-900 line-clamp-1 transition-colors duration-300 group-hover:text-orange-500">
					{recipe.title}
				</h5>
				<p className="text-sm text-gray-500 mt-1 line-clamp-2">
					Soft and chewy homemade cookies with premium chocolate chips and a
					hint of vanilla...
				</p>

				<div className="flex items-center justify-between text-gray-600 text-sm mt-4">
					<div className="flex items-center gap-x-3">
						<div className="flex items-center space-x-1">
							<Clock className="w-4 h-4" />
							<span>25 mins</span>
						</div>
						<div className="flex items-center space-x-1">
							<Users className="w-4 h-4" />
							<span>24</span>
						</div>
					</div>
					<span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium">
						Easy
					</span>
				</div>

				<Link
					to={`/recipes/details/${recipe.recipe_id}`}
					className="w-full block text-center text-sm mt-5 py-2 px-4 text-white font-medium rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-500 hover:to-orange-700">
					View Recipe
				</Link>
			</div>
		</div>
	);
};

export default RecipeCard;
