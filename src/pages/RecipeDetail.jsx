import { useEffect, useState } from "react";
import { Bookmark, Share2, Clock, Users, Star } from "lucide-react";
import { useParams, Link } from "react-router";
import axios from "axios";
import Instructions from "@/components/Instructions";
import RelatedRecipes from "@/components/RelatedRecipes";

const RecipeDetail = () => {
	const [activeTab, setActiveTab] = useState("overview");

	let { recipeId } = useParams();
	const [currentRecipe, setCurrentRecipe] = useState("");

	const fetchRecipe = async () => {
		const res = await axios.get(
			`https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`,
		);
		setCurrentRecipe(res.data.recipe);
	};

	useEffect(() => {
		fetchRecipe();
	}, []);

	return (
		<div className="pt-28 pb-16 bg-[#FAF9F6]">
			<div className="max-w-7xl mx-auto px-4">
				<Link
					to="/recipes"
					className="inline-block mb-8 px-4 py-2 text-sm font-medium  rounded-lg shadow bg-gradient-to-r from-orange-400 to-orange-500 text-white hover:opacity-90">
					← Back to Recipes
				</Link>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div className="lg:col-span-2 space-y-6">
						<div className="relative rounded-2xl overflow-hidden shadow-md">
							<img
								src={currentRecipe.image_url}
								alt="Supreme Pizza Burger"
								className="w-full h-80 object-cover"
							/>
							<div className="absolute top-4 left-4 bg-white text-sm px-3 py-1 rounded-full shadow">
								American
							</div>
							<div className="absolute bottom-6 left-6 text-white">
								<h1 className="text-3xl font-bold">{currentRecipe.title}</h1>
								<p className="text-sm">by {currentRecipe.publisher}</p>
							</div>
							<div className="absolute top-4 right-4 flex gap-2">
								<button className="p-2 bg-white rounded-md shadow hover:bg-gray-100">
									<Bookmark size={18} />
								</button>
								<button className="p-2 bg-white rounded-md shadow hover:bg-gray-100">
									<Share2 size={18} />
								</button>
							</div>
						</div>

						<div className="flex items-center shadow-sm gap-6 text-sm text-gray-600 bg-white py-6 px-5 rounded-md justify-between">
							<div className="flex items-center gap-x-5">
								<div className="flex items-center gap-2">
									<Clock size={16} /> <span>40 mins</span>
								</div>
								<div className="flex items-center gap-2">
									<Users size={16} /> <span>4 Serves</span>
								</div>
								<div className="flex items-center gap-2">
									<span className="font-medium">Medium</span>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<Star
									className="text-yellow-500"
									size={16}
								/>
								<span>4.8 (127 reviews)</span>
							</div>
						</div>

						<div className="flex p-1 text-sm rounded-md bg-[#F7F5F3]">
							{["overview", "ingredients", "nutrition"].map((tab) => (
								<button
									key={tab}
									className={`px-16 py-2.5 font-medium capitalize hover:cursor-pointer transition ${
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
							{activeTab === "overview" && (
								<div>
									<h2 className="text-lg font-semibold mb-2">
										About This Recipe
									</h2>
									<p className="text-gray-600 mb-4">
										The ultimate fusion of pizza and burger! Juicy beef patties
										topped with marinara sauce, mozzarella, pepperoni, and fresh
										basil on toasted brioche buns.
									</p>
									<div className="flex flex-wrap gap-2">
										{["Burger", "Pizza", "Beef", "Cheese", "Comfort Food"].map(
											(tag) => (
												<span
													key={tag}
													className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
													{tag}
												</span>
											),
										)}
									</div>
								</div>
							)}
							{activeTab === "ingredients" && (
								<Instructions ingredients={currentRecipe.ingredients} />
							)}
							{activeTab === "nutrition" && <p>Nutrition details go here...</p>}
						</div>
					</div>

					{/* right section */}
					<div className="space-y-6">
						<div className="bg-white p-6 rounded-xl shadow-sm shadow-orange-300 space-y-3">
							<button className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-2 rounded-lg font-medium hover:opacity-90">
								Save Recipe
							</button>
							<button className="w-full border py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2">
								<Share2 size={16} /> Share Recipe
							</button>
						</div>

						<RelatedRecipes currentRecipe={currentRecipe} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecipeDetail;
