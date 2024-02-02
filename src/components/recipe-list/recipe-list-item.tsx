import { FC, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import clock from "../../imgs/clock.png";

interface RecipeListItemProps {
  id: number;
  image: string;
  title: string;
  cookingTime: number;
}

export const RecipeListItem: FC<RecipeListItemProps> = ({
  id,
  image,
  title,
  cookingTime,
}) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/recipes/${id}`, { state: { id: id } });
  };

  const cookingTimeFormatted = useMemo(() => {
    if (cookingTime >= 60) {
      const timeUnit = Math.floor(cookingTime/60) > 1 ? 'hours' : 'hour'
      return `${Math.floor(cookingTime/60)} ${timeUnit}`
    } 
    return `${cookingTime} minutes`
  }, [cookingTime])

  return (
    <div className="border border-gray-200 shadow-md rounded-lg flex flex-col flex-wrap pb-3 items-center justify-between gap-y-8">
      <div className="flex flex-col flex-wrap items-center w-full gap-y-2">
        <img
          alt="recipe-thumbnail"
          src={image}
          className="w-full h-60 rounded-lg"
        />
        <h3 className="font-bold text-lg mx-auto text-center px-2">{title}</h3>
        <div className="flex justify-center bg-gray-200 rounded-lg w-2/5 gap-x-2">
          <img alt="spoon&fork" src={clock} className="w-6 h-6 p-1" />
          <span>- {cookingTimeFormatted}</span>
        </div>
      </div>
      <button
        onClick={handleOnClick}
        className="w-1/2 border-2 border-solid border-lime-200 active:border-lime-400 hover:bg-lime-200 active:bg-lime-400 text-black font-bold py-2 px-4 rounded-full mx-auto"
      >
        View Recipe
      </button>
    </div>
  );
};
