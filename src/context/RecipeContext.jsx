import { createContext, useContext, useEffect, useState } from "react";

const RecipeContext = createContext();

export const RecipeContextProvider = ({ children }) => {
  const initialState = JSON.parse(localStorage.getItem("favRecipes")) ?? [];
  const [favRecipes, setFavRecipes] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("favRecipes", JSON.stringify(favRecipes));
  }, [favRecipes]);

  return (
    <RecipeContext.Provider value={{ favRecipes, setFavRecipes }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = () => useContext(RecipeContext);

export default RecipeContext;
