import axios from "axios";
import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import SearchRecipe from "./SearchRecipe";

const RecipeList = () => {
  const [recipes, setRecipes] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://forkify-api.herokuapp.com/api/search?q=pizza")
      .then((res) => setRecipes(res.data.recipes));
  }, []);

  const searchRecipe = () => {
    axios
      .get(`https://forkify-api.herokuapp.com/api/search?q=${search}`)
      .then((res) => setRecipes(res.data.recipes));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    search && searchRecipe();
  };

  return (
    <section className="">
      <SearchRecipe
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      />
      <div className="flex items-center justify-center flex-wrap gap-8">
        {recipes &&
          recipes.map((recipe) => (
            <RecipeCard key={recipe.recipe_id} recipe={recipe} />
          ))}
      </div>
    </section>
  );
};

export default RecipeList;
