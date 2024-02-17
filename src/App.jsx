import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeList from "./components/recipe/RecipeList";
import RecipeLayout from "./layout/RecipeLayout";
import RootLayout from "./layout/RootLayout";
import FavRecipes from "./components/recipe/FavRecipes";
import { RecipeContextProvider } from "./context/RecipeContext";
import RecipePhoto from "./components/recipe/detail/RecipePhoto";
import Ingredients from "./components/recipe/detail/Ingredients";
import RecipeDetailLayout from "./layout/RecipeDetailLayout";
import RecipeDetail from "./components/recipe/detail/RecipeDetail";

const App = () => {
  return (
    <RecipeContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="recipes" element={<RecipeLayout />}>
              <Route index element={<RecipeList />} />
              <Route path="favourites" element={<FavRecipes />} />

              <Route path="detail/:recipeId" element={<RecipeDetailLayout />}>
                <Route index element={<RecipeDetail />} />
                <Route path="photos" element={<RecipePhoto />} />
                <Route path="ingredients" element={<Ingredients />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </RecipeContextProvider>
  );
};

export default App;
