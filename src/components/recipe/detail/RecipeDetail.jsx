import { useOutletContext } from "react-router-dom";

const RecipeDetail = () => {
  const { currentRecipe } = useOutletContext();

  return (
    <div className="text-lg">
      <h2>
        <span className="font-semibold">Publisher :</span>{" "}
        {currentRecipe.publisher}
      </h2>
      <h2>
        <span className="font-semibold">Title :</span> {currentRecipe.title}
      </h2>
    </div>
  );
};

export default RecipeDetail;
