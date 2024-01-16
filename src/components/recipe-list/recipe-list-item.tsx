import { FC } from "react";

interface RecipeListItemProps {
    image: string
    title: string
    description: string
}

export const RecipeListItem: FC<RecipeListItemProps> = ({ image, title, description }) => {
  return (
    <div className="py-4">
      <img alt="recipe-thumbnail" src={image} />
      <h3 className="">
        <span className="font-bold">Recipe:</span> {title}
      </h3>
      <p>
        <span className="font-bold">Description:</span> {description}
      </p>
    </div>
  );
};
