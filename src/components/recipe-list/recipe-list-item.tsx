import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface RecipeListItemProps {
  id: number;
  image: string;
  title: string;
  timeToCook: number;
}

export const RecipeListItem: FC<RecipeListItemProps> = ({
  id,
  image,
  title,
  timeToCook,
}) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/recipes/${id}`, { state: { id: id } });
  };

  return (
    <div className="border border-red-200 rounded-lg flex flex-col flex-wrap gap-y-3 content-center pb-3">
      <img
        alt="recipe-thumbnail"
        src={image}
        className="w-full h-60 rounded-lg"
      />
      <p className="font-bold mx-auto text-center px-2">{title}</p>
      <p className="mx-auto">
        <span className="font-bold">Ready in:</span> {timeToCook} minutes
      </p>        className="w-1/2 border border-solid border-lime-200 hover:bg-lime-200 text-black font-bold py-2 px-4 rounded-full mx-auto"
      <button
        onClick={handleOnClick}

      >
        View Recipe
      </button>
    </div>
  );
};
