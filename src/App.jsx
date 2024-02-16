import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import RecipeLayout from "./layout/RecipeLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/recipes" element={<RecipeLayout />}>
          <Route index element={<RecipeList />} />
          <Route path="detail/:recipeId" element={<RecipeDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
