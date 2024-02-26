export type RecipeDetailsType = {
    title: string;
    cookingMinutes: number;
    preparationMinutes: number;
    readyInMinutes: number;
    image: string;
    analyzedInstructions: {
      name: string;
      steps: {
        ingredients: {
          id: number;
          name: string;
        }[];
        step: string;
      }[];
    }[];
    servings: number;
    extendedIngredients: {
      aisle: string;
      image: string;
      name: string;
      measures: {
        us: {
          amount: number;
          unitShort: string;
        };
      };
    }[];
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    sourceUrl: string;
  };