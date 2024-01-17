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
    <div onClick={handleOnClick} className="py-4">
      <img alt="recipe-thumbnail" src={image} />
      <h3 className="font-bold">{title}</h3>
      <p>
        <span className="font-bold">Ready in:</span> {timeToCook} minutes
      </p>
    </div>
  );
};
