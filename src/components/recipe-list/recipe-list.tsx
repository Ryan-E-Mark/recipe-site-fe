import { RecipeListItem } from "./recipe-list-item";
import { FC } from "react";
import { SearchResults } from "./types";
import { Loader } from "../common/loader";
import { NoResults } from "../no-results";

export const RESULTS_PER_PAGE = 12;

interface RecipeListProps {
  searchTerm: string;
  searchResults: SearchResults | [];
  isLoading: boolean;
}

export const RecipeList: FC<RecipeListProps> = ({
  searchTerm,
  searchResults,
  isLoading,
}) => {
  return (
    <>
      <div className="h-full flex flex-wrap justify-center items-center">
        {isLoading && <Loader />}
      </div>
      {!isLoading && searchResults?.length > 0 && (
        <div className="flex justify-center content-center">
          <div className="flex-col">
            <h2 className="m-8 text-center text-lg">
              Results for <span className="font-bold">"{searchTerm}"</span>
            </h2>
            <div className="grid grid-cols-4 gap-8 my-4 mx-4">
              {searchResults?.map((recipe, idx) => {
                return (
                  <RecipeListItem
                    key={idx}
                    id={recipe.id}
                    image={recipe.image}
                    title={recipe.title}
                    cookingTime={recipe.readyInMinutes}
                    glutenFree={recipe.glutenFree}
                    vegan={recipe.vegan}
                    vegetarian={recipe.vegetarian}
                    dairyFree={recipe.dairyFree}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
      {!isLoading && !searchResults?.length && (
        <div className="h-full">
          <NoResults searchTerm={searchTerm} />
        </div>
      )}
    </>
  );
};
