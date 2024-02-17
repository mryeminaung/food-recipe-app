import { createContext, useContext, useState } from "react";

const RecipeContext = createContext();

export const RecipeContextProvider = ({ children }) => {
  const [favRecipes, setFavRecipes] = useState();

  return (
    <RecipeContext.Provider value={{ favRecipes, setFavRecipes }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = () => useContext(RecipeContext);

export default RecipeContext;
