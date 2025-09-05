import homeBg from "../assets/homeBg.jpg";
import { useRecipeContext } from "@/context/RecipeContext";
import RecipeCard from "@/components/RecipeCard";
import { ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";

const HomeRecipes = () => {
	const { recipes } = useRecipeContext();

	return (
		<div className="mt-16">
			<div className="relative h-[500px] w-full overflow-hidden">
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{
						backgroundImage: `url(${homeBg})`,
					}}>
					<div className="absolute inset-0 bg-black/20" />
				</div>

				<div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
					<p className="text-white text-lg mb-2 flex items-center gap-2">
						✨ Discover Amazing Recipes
					</p>

					<h1 className="text-4xl md:text-6xl font-bold text-white">
						Cook Something <br />
						<span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
							Extraordinary
						</span>
					</h1>

					<p className="text-gray-200 text-xl my-6 max-w-3xl">
						Explore thousands of delicious recipes from around the world. From
						quick weeknight dinners to elaborate weekend feasts.
					</p>
					<div className="flex items-center justify-end">
						<Link
							to="/recipes"
							className="group inline-flex items-center justify-center max-w-fit py-2.5 px-6 text-sm font-semibold rounded-full 
                   transition-all duration-300 ease-in-out 
                   text-white bg-gradient-to-r from-orange-500 to-orange-400 shadow-md hover:shadow-lg hover:scale-105">
							Browse All Recipes
							<ArrowRight className="ml-2 w-4 h-4 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1.5" />
						</Link>
					</div>

					<div className="hidden w-full gap-x-3 max-w-2xl">
						<div className="relative flex-grow">
							<span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
								<Search size={18} />
							</span>
							<input
								type="text"
								placeholder="Search your favorite recipes..."
								className="w-full pl-10 pr-4 py-4 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
							/>
						</div>

						<button className="flex items-center gap-2 px-8 py-3 text-white rounded-lg  bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-500 hover:to-orange-700">
							<span className="text-sm font-medium">Search</span>
						</button>
					</div>
				</div>
			</div>

			<div className="bg-[#FDFCFB] pt-10 pb-10">
				<div className="max-w-screen-xl mx-auto px-5">
					<h1 className="text-3xl text-center md:text-5xl font-bold text-gray-900">
						Featured Recipes
					</h1>
					<p className="mt-3 text-lg text-center text-gray-600 mx-auto">
						Handpicked favorites from our community of home chefs
					</p>

					<div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-8">
						{recipes.slice(0, 4).map((recipe) => (
							<RecipeCard
								key={recipe.image_url}
								recipe={recipe}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeRecipes;
