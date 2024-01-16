import { RecipeListItem } from "./recipe-list-item";

const mockData = [
  {
    title: "Chicken Rigis",
    description: "Delicious chicken and pasta.",
    url: "",
  },
  {
    title: "Green Curry",
    description: "Rich thai green curry.",
    url: "",
  },
  {
    title: "Vegetable Stew",
    description: "Healthy and hardy stew, great for the winter",
    url: "",
  },
  {
    title: "Banana Bread",
    description: "Fluffy banana bread with hints of cinnamon and brown sugar",
    url: "",
  },
];

export const RecipeList = () => {
  return (
    <div className="w-60 flex flex-wrap flex-col justify-center content-center h-50 overflow-y-scroll">
      {mockData.map((recipe, idx) => {
        return (
          <div key={idx}>
            <RecipeListItem
              image={recipe.url}
              title={recipe.title}
              description={recipe.description}
            />
          </div>
        );
      })}
    </div>
  );
};
