import Instructions from "@/components/Instructions";
import RelatedRecipes from "@/components/RelatedRecipes";
import { useRecipeContext } from "@/context/RecipeContext";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Share2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const RecipeDetail = () => {
	const [activeTab, setActiveTab] = useState("overview");

	let { recipeId } = useParams();
	const [currentRecipe, setCurrentRecipe] = useState("");
	const { favRecipes, setFavRecipes, search } = useRecipeContext();

	const isFavRecipe = favRecipes.find(
		(favRecipe) => favRecipe.recipe_id === currentRecipe?.recipe_id,
	);

	const toggleFavRecipe = () => {
		if (
			favRecipes.some(
				(favRecipe) => favRecipe.recipe_id === currentRecipe?.recipe_id,
			)
		) {
			setFavRecipes(
				favRecipes.filter(
					(favRecipe) => favRecipe.recipe_id !== currentRecipe?.recipe_id,
				),
			);
		} else {
			setFavRecipes([...favRecipes, currentRecipe]);
		}
	};

	const fetchRecipe = async () => {
		const res = await axios.get(
			`https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`,
		);
		setCurrentRecipe(res.data.recipe);
	};

	useEffect(() => {
		fetchRecipe();
	}, [recipeId]);

	return (
		<div className="pt-28 pb-16 bg-[#FAF9F6]">
			<div className="max-w-7xl mx-auto px-4">
				<Link
					to={`/recipes?type=${search}`}
					className="inline-block mb-8 px-4 py-2 text-sm font-medium rounded-lg shadow bg-gradient-to-r from-orange-400 to-orange-500 text-white hover:opacity-90">
					← Back to Recipes
				</Link>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* LEFT */}
					<div className="lg:col-span-2 space-y-6">
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, ease: "easeOut" }}
							className="relative rounded-2xl overflow-hidden shadow-md">
							<img
								src={currentRecipe.image_url}
								alt={currentRecipe.title}
								className="w-full h-80 object-cover"
							/>
							<span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
								{currentRecipe.publisher}
							</span>
							<div className="absolute bottom-6 left-6 text-white">
								<motion.h1
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.3 }}
									className="text-3xl font-bold">
									{currentRecipe.title}
								</motion.h1>
								<motion.p
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.5 }}
									className="text-sm">
									by {currentRecipe.publisher}
								</motion.p>
							</div>
							<div className="absolute top-4 right-4 flex gap-2">
								<motion.button
									whileTap={{ scale: 0.8 }}
									whileHover={{ scale: 1.1 }}
									className="p-2 bg-white rounded-md shadow hover:bg-gray-100 hover:cursor-pointer"
									onClick={toggleFavRecipe}>
									<Heart
										className={`w-5 h-5 text-red-500 ${
											isFavRecipe && "fill-orange-500"
										}`}
									/>
								</motion.button>
								<motion.button
									whileHover={{ scale: 1.1 }}
									className="p-2 bg-white rounded-md shadow hover:bg-gray-100">
									<Share2 size={18} />
								</motion.button>
							</div>
						</motion.div>

						<div className="flex p-1 flex-wrap text-sm rounded-md bg-[#F7F5F3]">
							{["overview", "ingredients"].map((tab) => (
								<button
									key={tab}
									className={`px-16 w-full sm:w-auto py-2.5 font-medium capitalize hover:cursor-pointer transition ${
										activeTab === tab
											? "bg-white rounded-md text-orange-600 border border-orange-600 shadow-sm"
											: "text-gray-500 hover:text-gray-700"
									}`}
									onClick={() => setActiveTab(tab)}>
									{tab}
								</button>
							))}
						</div>

						<div className="bg-white p-6 rounded-xl shadow-sm shadow-orange-300">
							<AnimatePresence mode="wait">
								{activeTab === "overview" && (
									<motion.div
										key="overview"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -20 }}
										transition={{ duration: 0.4 }}>
										<h2 className="text-lg font-semibold mb-2">
											About This Recipe
										</h2>
										<p className="text-gray-600 mb-4">
											The ultimate fusion of pizza and burger! Juicy beef
											patties topped with marinara sauce, mozzarella, pepperoni,
											and fresh basil on toasted brioche buns.
										</p>
										<div className="flex flex-wrap gap-2">
											{[
												"Burger",
												"Pizza",
												"Beef",
												"Cheese",
												"Comfort Food",
											].map((tag) => (
												<span
													key={tag}
													className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
													{tag}
												</span>
											))}
										</div>
									</motion.div>
								)}

								{activeTab === "ingredients" && (
									<motion.div
										key="ingredients"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -20 }}
										transition={{ duration: 0.4 }}>
										<Instructions ingredients={currentRecipe.ingredients} />
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</div>

					<motion.div
						initial={{ opacity: 0, x: 60 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
						className="space-y-6">
						<div className="bg-white p-6 rounded-xl shadow-sm shadow-orange-300 space-y-3">
							<motion.button
								onClick={toggleFavRecipe}
								whileTap={{ scale: 0.95 }}
								className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-2 hover:cursor-pointer rounded-lg font-medium hover:opacity-90">
								{isFavRecipe ? "Remove from Favourite" : "Save Recipe"}
							</motion.button>
							<motion.button
								whileHover={{ scale: 1.05 }}
								className="w-full border border-gray-300 shadow-sm py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-50 hover:shadow-orange-300 flex items-center justify-center gap-2">
								<Share2 size={16} /> Share Recipe
							</motion.button>
						</div>

						<RelatedRecipes currentRecipe={currentRecipe} />
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default RecipeDetail;
