import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const RecipeContext = createContext();

export const RecipeContextProvider = ({ children }) => {
  const initialState = JSON.parse(localStorage.getItem("favRecipes")) ?? [];
  const [favRecipes, setFavRecipes] = useState(initialState);
  const [recipes, setRecipes] = useState();
  const [search, setSearch] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  let typeFilter = searchParams.get("type");

  const handleFilterChange = (key, value) => {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  };

  useEffect(() => {
    axios
      .get(
        `https://forkify-api.herokuapp.com/api/search?q=${
          typeFilter ? typeFilter : "pizza"
        }`
      )
      .then((res) => setRecipes(res.data.recipes));
  }, []);

  const searchRecipe = () => {
    axios
      .get(
        `https://forkify-api.herokuapp.com/api/search?q=${
          search ? search : "pizza"
        }`
      )
      .then((res) => setRecipes(res.data.recipes));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchRecipe();
    handleFilterChange("type", search ? search : null);
  };

  useEffect(() => {
    localStorage.setItem("favRecipes", JSON.stringify(favRecipes));
  }, [favRecipes]);

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        setRecipes,
        search,
        setSearch,
        handleSearch,
        favRecipes,
        setFavRecipes,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = () => useContext(RecipeContext);

export default RecipeContext;
