import { createBrowserRouter } from "react-router";
import RootLayout from "@/layout/RootLayout";
import FavRecipes from "@/pages/FavRecipes";
import HomeRecipes from "@/pages/HomeRecipes";
import AllRecipes from "@/pages/AllRecipes";
import RecipeDetail from "@/pages/RecipeDetail";
import NotFound from "@/components/NotFound";

const routes = [
	{
		path: "/",
		Component: RootLayout,
		children: [
			{ index: true, Component: HomeRecipes },
			{ path: "recipes", Component: AllRecipes },
			{ path: "recipes/details/:recipeId", Component: RecipeDetail },
			{ path: "recipes/favourites", Component: FavRecipes },
		],
	},
];

let router = createBrowserRouter(routes);

export default router;
