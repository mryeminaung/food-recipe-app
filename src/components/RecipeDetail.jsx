import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { recipeId } = useParams();
  console.log(recipeId);

  const fetchRecipe = () => {
    axios
      .get(`https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`)
      .then((res) => console.log(res.data));
  };

  useEffect(() => {
    fetchRecipe();
  }, [recipeId]);

  return <div>RecipeDetail for {recipeId}</div>;
};

export default RecipeDetail;
