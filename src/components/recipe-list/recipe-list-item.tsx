import { FC } from "react";

interface RecipeListItemProps {
    image: string
    title: string
    timeToCook: number
}

export const RecipeListItem: FC<RecipeListItemProps> = ({ image, title, timeToCook }) => {
  return (
    <div className="py-4">
      <img alt="recipe-thumbnail" src={image} />
      <h3 className="font-bold">
         {title}
      </h3>
      <p>
        <span className="font-bold">Ready in:</span> {timeToCook}
      </p>
    </div>
  );
};
