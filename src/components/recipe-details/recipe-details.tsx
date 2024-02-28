import { FC } from "react";
import { RecipeDetailsType } from "./types";

interface RecipeDetailsProps {
    recipeDetails: RecipeDetailsType | undefined
}

export const RecipeDetails: FC<RecipeDetailsProps> = ({ recipeDetails }) => {
    return (
        <>
          <div className="flex flex-row justify-center m-10">
            <div className="flex flex-col">
              <h2 className="font-bold text-3xl text-center">
                {recipeDetails?.title}
              </h2>
              <div className="flex py-4 gap-4 justify-center">
                <p>
                  <span className="font-bold">Preparation Time:</span>{" "}
                  {recipeDetails?.preparationMinutes} minutes
                </p>
                <p>
                  <span className="font-bold">Cooking Time:</span>{" "}
                  {recipeDetails?.cookingMinutes} minutes
                </p>
                <p>
                  <span className="font-bold">Total Time:</span>{" "}
                  {recipeDetails?.readyInMinutes} minutes
                </p>
              </div>
              <div className="flex gap-x-20">
                <div className="flex flex-wrap flex-col justify-center content-center bg-gray-100 py-6 px-10 rounded-md">
                  <h3 className="font-bold border-b-2 text-xl">Ingredients</h3>
                  {recipeDetails?.extendedIngredients.map((ingr, idx) => {
                    return (
                      <p>
                        -
                        <span className="font-bold" key={idx}>
                          {ingr.measures.us.amount} {ingr.measures.us.unitShort}
                        </span>{" "}
                        {ingr.name}
                      </p>
                    );
                  })}
                </div>
                <img
                  alt="recipe-thumbnail"
                  src={recipeDetails?.image}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-3/5 flex flex-col justify-start">
              <h3 className="font-bold border-b-2 border-gray-100 text-xl pl-7">
                Instructions
              </h3>
              {recipeDetails?.analyzedInstructions[0].steps.map(
                (instr, idx) => {
                  return (
                    <div className="flex flex-row gap-x-3 p-6">
                      <div className="font-bold flex justify-center items-center text-black bg-lime-200 rounded-full h-8 w-8 ">
                        {idx + 1}
                      </div>
                      <div className="w-full">
                        <p>{instr.step}</p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </>
    )
}