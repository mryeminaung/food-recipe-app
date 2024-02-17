import { useOutletContext } from "react-router-dom";

const RecipePhoto = () => {
  const { currentRecipe } = useOutletContext();

  return (
    <img
      src={currentRecipe.image_url}
      alt={currentRecipe.title}
      className="w-56 rounded-md"
    />
  );
};

export default RecipePhoto;
