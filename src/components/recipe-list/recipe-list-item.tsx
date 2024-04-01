import { FC } from "react";
import { useNavigate } from "react-router-dom";
import clock from "../../imgs/clock.png";
import { getCookingTimeFormatted } from "../../utils/get-cooking-time-formatted";
import { NutritionPill } from "../nutrition-pill";

interface RecipeListItemProps {
  id: number;
  image: string;
  title: string;
  cookingTime: number;
  glutenFree: boolean
  vegan: boolean
  vegetarian: boolean
  dairyFree: boolean
}

export const RecipeListItem: FC<RecipeListItemProps> = ({
  id,
  image,
  title,
  cookingTime,
  glutenFree,
  vegan,
  vegetarian,
  dairyFree
}) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/recipes/${id}`, { state: { id: id } });
  };

  return (
    <div className="flex flex-col flex-wrap pb-3 items-center justify-between gap-y-4 border border-gray-50 rounded-lg shadow">
      <NutritionPill glutenFree={glutenFree} vegan={vegan} vegetarian={vegetarian} dairyFree={dairyFree}/>
        <img
          alt="recipe-thumbnail"
          src={image}
          className="w-full h-60 rounded-lg hover:cursor-pointer"
          onClick={handleOnClick}
        />
        <div className="hover:cursor-pointer hover:underline" onClick={handleOnClick}>
        <h3 className="font-bold text-lg mx-auto text-center px-2">{title}</h3>
        </div>
        <div className="flex justify-center bg-gray-200 rounded-lg w-2/5 gap-x-2">
          <img alt="spoon&fork" src={clock} className="w-6 h-6 p-1" />
          <span>- {getCookingTimeFormatted(cookingTime)}</span>
        </div>
    </div>
  );
};
