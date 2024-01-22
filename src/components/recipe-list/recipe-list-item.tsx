import { FC } from "react";
import { useNavigate } from "react-router-dom";
import spoon from '../../imgs/spoon.png'

interface RecipeListItemProps {
  id: number;
  image: string;
  title: string;
  nutrition: {
    name: string;
    amount: number;
    unit: string;
  }[];
}

export const RecipeListItem: FC<RecipeListItemProps> = ({
  id,
  image,
  title,
  nutrition,
}) => {
  const navigate = useNavigate();

 

  console.log(nutrition)

  const handleOnClick = () => {
    navigate(`/recipes/${id}`, { state: { id: id } });
  };

  return (
    <div className="border border-red-200 shadow-md rounded-lg flex flex-col flex-wrap gap-y-3 content-center pb-3">
      <img
        alt="recipe-thumbnail"
        src={image}
        className="w-full h-60 rounded-lg"
      />
      <p className="font-bold text-lg mx-auto text-center px-2">{title}</p>
      <div className="flex justify-center bg-gray-200 rounded-full w-3/4">
        <img alt="spoon&fork" src={spoon} className="w-8 h-8" />
        <span>Cal - </span>
      </div>
      <button
        onClick={handleOnClick}
        className="w-1/2 border border-solid border-lime-200 hover:bg-lime-200 text-black font-bold py-2 px-4 rounded-full mx-auto"
      >
        View Recipe
      </button>
    </div>
  );
};
