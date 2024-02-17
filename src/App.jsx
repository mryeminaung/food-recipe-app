import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeList from "./components/recipe/RecipeList";
import RecipeDetail from "./components/recipe/RecipeDetail";
import RecipeLayout from "./layout/RecipeLayout";
import RootLayout from "./layout/RootLayout";
import FavRecipes from "./components/recipe/FavRecipes";
import { RecipeContextProvider } from "./context/RecipeContext";

const App = () => {
  return (
    <RecipeContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="recipes" element={<RecipeLayout />}>
              <Route index element={<RecipeList />} />
              <Route path="favourites" element={<FavRecipes />} />

              <Route path="detail/:recipeId" element={<RecipeLayout />}>
                <Route index element={<RecipeDetail />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </RecipeContextProvider>
  );
};

export default App;
