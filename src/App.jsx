import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecipeContextProvider } from "./context/RecipeContext";
import RootLayout from "@/layout/RootLayout";
import FavRecipes from "@/pages/FavRecipes";
import HomeRecipes from "@/pages/HomeRecipes";
import AllRecipes from "@/pages/AllRecipes";
import RecipeDetail from "@/pages/RecipeDetail";
import { ScrollToTop } from "@/libs/utils";

const App = () => {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<RecipeContextProvider>
				<Routes>
					<Route
						path="/"
						element={<RootLayout />}>
						<Route
							index
							element={<HomeRecipes />}
						/>
						<Route
							path="recipes"
							element={<AllRecipes />}
						/>

						<Route
							path="recipes/details/:recipeId"
							element={<RecipeDetail />}
						/>

						<Route
							path="recipes/favourites"
							element={<FavRecipes />}
						/>
					</Route>
				</Routes>
			</RecipeContextProvider>
		</BrowserRouter>
	);
};

export default App;
