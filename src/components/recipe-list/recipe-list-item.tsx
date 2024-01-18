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
    // navigate(`/recipes/${id}`, { state: { id: id } });
  };

  return (
    <div className="border-2 border-red-200 rounded-lg flex flex-col flex-wrap justify-start">
      <img
        alt="recipe-thumbnail"
        src={image}
        className="w-full h-1/2 rounded-lg"
      />
      <h3 className="font-bold ">{title}</h3>
      <p className="">
        <span className="font-bold">Ready in:</span> {timeToCook} minutes
      </p>
      <button
        onClick={handleOnClick}
        className="w-1/2 border border-solid border-lime-200 hover:bg-lime-200 text-black font-bold py-2 px-4 rounded-full"
      >
        Get the recipe
      </button>
    </div>
  );
};
