import { useLocation } from "react-router-dom";
import { RecipeListItem } from "./recipe-list-item";
import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { RecipeFilters } from "./recipe-filters";

type SearchResults = { id: number; image: string; title: string; nutrition: { nutrients: { name: string; amount: number; unit: string; }[]; }; }[]

export const RecipeList = () => {
  const searchTerm = useLocation().state.term;
  const [searchResults, setSearchResults] = useState<SearchResults>([]);
  const [isLoading, setIsLoading] = useState(false);

  const options = useMemo(() => {
    return {
      method: "GET",
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
      params: {
        query: searchTerm,
        cuisine: "",
        excludeCuisine: "",
        diet: "",
        intolerances: "",
        equipment: "",
        includeIngredients: "",
        excludeIngredients: "",
        type: "",
        instructionsRequired: "true",
        fillIngredients: "",
        addRecipeInformation: "",
        titleMatch: "",
        maxReadyTime: "",
        ignorePantry: "true",
        sort: "",
        sortDirection: "",
        offset: "0",
        number: "12",
        limitLicense: "false",
        ranking: "2",
      },
      headers: {
        "X-RapidAPI-Key": '84db66e0e3msh7bae98aeb1c8530p1be287jsn05741f213ed7',
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };
  }, [searchTerm]);

  const fetchRecipes = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.request(options);
      setSearchResults(response.data.results);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [options]);

  useEffect(() => {
    if (searchTerm) {
      // fetchRecipes();
    }
  }, [searchTerm, fetchRecipes]);

  return (
    <div className="justify-center content-center">
      {isLoading && (
        <div className="flex justify-center">
          <Oval
            height="60"
            width="60"
            secondaryColor="#ecfccb"
            color="#bef264"
          />
        </div>
      )}
      {!isLoading && mockedData?.length > 0 && (
        <div className="flex flex-wrap justify-center content-center">
          <div className="flex flex-col">
          <h2 className="m-4">Results for "{searchTerm}"</h2>
          <RecipeFilters />
          </div>
          <div className="grid grid-cols-4 gap-8 my-4 mx-4">
            {mockedData?.map((recipe) => {
              return (
                <RecipeListItem
                  id={recipe.id}
                  image={recipe.image}
                  title={recipe.title}
                  nutrition={recipe.nutrition.nutrients}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const mockedData = [
  {
    id: 539276,
    title: "Crockpot Pumpkin Apple Butter",
    image: "https://spoonacular.com/recipeImages/539276-312x231.jpg",
    imageType: "jpg",
    nutrition: {
      nutrients: [
        {
          name: "Calories",
          amount: 32.9376,
          unit: "kcal",
        },
        {
          name: "Protein",
          amount: 0.446548,
          unit: "g",
        },
        {
          name: "Fat",
          amount: 0.138004,
          unit: "g",
        },
        {
          name: "Carbohydrates",
          amount: 7.01398,
          unit: "g",
        },
        {
          name: "Alcohol",
          amount: 0.086,
          unit: "g",
        },
        {
          name: "Caffeine",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Copper",
          amount: 0.0426361,
          unit: "mg",
        },
        {
          name: "Calcium",
          amount: 18.2787,
          unit: "mg",
        },
        {
          name: "Cholesterol",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Choline",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Fluoride",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Saturated Fat",
          amount: 0.0709731,
          unit: "g",
        },
        {
          name: "Vitamin A",
          amount: 4773.79,
          unit: "IU",
        },
        {
          name: "Vitamin C",
          amount: 2.06943,
          unit: "mg",
        },
        {
          name: "Vitamin D",
          amount: 0,
          unit: "µg",
        },
        {
          name: "Vitamin E",
          amount: 0.356644,
          unit: "mg",
        },
        {
          name: "Vitamin K",
          amount: 5.30235,
          unit: "µg",
        },
        {
          name: "Vitamin B1",
          amount: 0.0118141,
          unit: "mg",
        },
        {
          name: "Vitamin B2",
          amount: 0.0242486,
          unit: "mg",
        },
        {
          name: "Vitamin B3",
          amount: 0.14063,
          unit: "mg",
        },
        {
          name: "Vitamin B5",
          amount: 0.139239,
          unit: "mg",
        },
        {
          name: "Vitamin B6",
          amount: 0.0265802,
          unit: "mg",
        },
        {
          name: "Vitamin B12",
          amount: 0,
          unit: "µg",
        },
        {
          name: "Fiber",
          amount: 1.50946,
          unit: "g",
        },
        {
          name: "Folate",
          amount: 4.35987,
          unit: "µg",
        },
        {
          name: "Folic Acid",
          amount: 0,
          unit: "µg",
        },
        {
          name: "Iron",
          amount: 0.527449,
          unit: "mg",
        },
        {
          name: "Magnesium",
          amount: 10.186,
          unit: "mg",
        },
        {
          name: "Manganese",
          amount: 0.149116,
          unit: "mg",
        },
        {
          name: "Phosphorus",
          amount: 14.0136,
          unit: "mg",
        },
        {
          name: "Potassium",
          amount: 101.323,
          unit: "mg",
        },
        {
          name: "Selenium",
          amount: 0.254525,
          unit: "µg",
        },
        {
          name: "Sodium",
          amount: 12.9827,
          unit: "mg",
        },
        {
          name: "Sugar",
          amount: 5.77879,
          unit: "g",
        },
        {
          name: "Zinc",
          amount: 0.0750962,
          unit: "mg",
        },
      ],
    },
  },
  {
    id: 763998,
    title: "Crock Pot BBQ Chicken with Applesauce",
    image: "https://spoonacular.com/recipeImages/763998-312x231.jpg",
    imageType: "jpg",
    nutrition: {
      nutrients: [
        {
          name: "Calories",
          amount: 40.7038,
          unit: "kcal",
        },
        {
          name: "Protein",
          amount: 0.5477,
          unit: "g",
        },
        {
          name: "Fat",
          amount: 0.1774,
          unit: "g",
        },
        {
          name: "Carbohydrates",
          amount: 9.95885,
          unit: "g",
        },
        {
          name: "Alcohol",
          amount: 0,
          unit: "g",
        },
        {
          name: "Caffeine",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Copper",
          amount: 0.0367313,
          unit: "mg",
        },
        {
          name: "Calcium",
          amount: 9.06125,
          unit: "mg",
        },
        {
          name: "Cholesterol",
          amount: 0.92,
          unit: "mg",
        },
        {
          name: "Choline",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Fluoride",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Saturated Fat",
          amount: 0.0346575,
          unit: "g",
        },
        {
          name: "Vitamin A",
          amount: 138.626,
          unit: "IU",
        },
        {
          name: "Vitamin C",
          amount: 7.34775,
          unit: "mg",
        },
        {
          name: "Vitamin D",
          amount: 0.001,
          unit: "µg",
        },
        {
          name: "Vitamin E",
          amount: 0.3905,
          unit: "mg",
        },
        {
          name: "Vitamin K",
          amount: 1.0665,
          unit: "µg",
        },
        {
          name: "Vitamin B1",
          amount: 0.0169025,
          unit: "mg",
        },
        {
          name: "Vitamin B2",
          amount: 0.0579075,
          unit: "mg",
        },
        {
          name: "Vitamin B3",
          amount: 0.434915,
          unit: "mg",
        },
        {
          name: "Vitamin B5",
          amount: 0.04614,
          unit: "mg",
        },
        {
          name: "Vitamin B6",
          amount: 0.06818,
          unit: "mg",
        },
        {
          name: "Vitamin B12",
          amount: 0.0055,
          unit: "µg",
        },
        {
          name: "Fiber",
          amount: 0.44125,
          unit: "g",
        },
        {
          name: "Folate",
          amount: 3.6125,
          unit: "µg",
        },
        {
          name: "Folic Acid",
          amount: 0,
          unit: "µg",
        },
        {
          name: "Iron",
          amount: 0.318431,
          unit: "mg",
        },
        {
          name: "Magnesium",
          amount: 4.88438,
          unit: "mg",
        },
        {
          name: "Manganese",
          amount: 0.0468475,
          unit: "mg",
        },
        {
          name: "Phosphorus",
          amount: 12.2825,
          unit: "mg",
        },
        {
          name: "Potassium",
          amount: 118.878,
          unit: "mg",
        },
        {
          name: "Selenium",
          amount: 0.560687,
          unit: "µg",
        },
        {
          name: "Sodium",
          amount: 649.716,
          unit: "mg",
        },
        {
          name: "Sugar",
          amount: 7.97095,
          unit: "g",
        },
        {
          name: "Zinc",
          amount: 0.08815,
          unit: "mg",
        },
      ],
    },
  },
  {
    id: 104182,
    title: "Fall Pumpkin Apple Butter Crockpot",
    image: "https://spoonacular.com/recipeImages/104182-312x231.jpg",
    imageType: "jpg",
    nutrition: {
      nutrients: [
        {
          name: "Calories",
          amount: 62.2835,
          unit: "kcal",
        },
        {
          name: "Protein",
          amount: 0.456723,
          unit: "g",
        },
        {
          name: "Fat",
          amount: 0.14649,
          unit: "g",
        },
        {
          name: "Carbohydrates",
          amount: 14.3721,
          unit: "g",
        },
        {
          name: "Alcohol",
          amount: 0,
          unit: "g",
        },
        {
          name: "Caffeine",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Copper",
          amount: 0.0482904,
          unit: "mg",
        },
        {
          name: "Calcium",
          amount: 20.7986,
          unit: "mg",
        },
        {
          name: "Cholesterol",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Choline",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Fluoride",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Saturated Fat",
          amount: 0.0599454,
          unit: "g",
        },
        {
          name: "Vitamin A",
          amount: 5521.37,
          unit: "IU",
        },
        {
          name: "Vitamin C",
          amount: 2.16402,
          unit: "mg",
        },
        {
          name: "Vitamin D",
          amount: 0,
          unit: "µg",
        },
        {
          name: "Vitamin E",
          amount: 0.400531,
          unit: "mg",
        },
        {
          name: "Vitamin K",
          amount: 5.95115,
          unit: "µg",
        },
        {
          name: "Vitamin B1",
          amount: 0.0146732,
          unit: "mg",
        },
        {
          name: "Vitamin B2",
          amount: 0.0254543,
          unit: "mg",
        },
        {
          name: "Vitamin B3",
          amount: 0.167548,
          unit: "mg",
        },
        {
          name: "Vitamin B5",
          amount: 0.171094,
          unit: "mg",
        },
        {
          name: "Vitamin B6",
          amount: 0.0319905,
          unit: "mg",
        },
        {
          name: "Vitamin B12",
          amount: 0,
          unit: "µg",
        },
        {
          name: "Fiber",
          amount: 1.40917,
          unit: "g",
        },
        {
          name: "Folate",
          amount: 4.67576,
          unit: "µg",
        },
        {
          name: "Folic Acid",
          amount: 0,
          unit: "µg",
        },
        {
          name: "Iron",
          amount: 0.609529,
          unit: "mg",
        },
        {
          name: "Magnesium",
          amount: 10.6661,
          unit: "mg",
        },
        {
          name: "Manganese",
          amount: 0.10697,
          unit: "mg",
        },
        {
          name: "Phosphorus",
          amount: 15.4971,
          unit: "mg",
        },
        {
          name: "Potassium",
          amount: 118.28,
          unit: "mg",
        },
        {
          name: "Selenium",
          amount: 0.278227,
          unit: "µg",
        },
        {
          name: "Sodium",
          amount: 29.5206,
          unit: "mg",
        },
        {
          name: "Sugar",
          amount: 13.1376,
          unit: "g",
        },
        {
          name: "Zinc",
          amount: 0.0746886,
          unit: "mg",
        },
      ],
    },
  },
  {
    id: 623288,
    title: "Crock Pot Mulled Green Apple Cider",
    image: "https://spoonacular.com/recipeImages/623288-312x231.jpg",
    imageType: "jpg",
    nutrition: {
      nutrients: [
        {
          name: "Calories",
          amount: 64.9803,
          unit: "kcal",
        },
        {
          name: "Protein",
          amount: 0.379923,
          unit: "g",
        },
        {
          name: "Fat",
          amount: 0.302285,
          unit: "g",
        },
        {
          name: "Carbohydrates",
          amount: 13.682,
          unit: "g",
        },
        {
          name: "Alcohol",
          amount: 0.186333,
          unit: "g",
        },
        {
          name: "Caffeine",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Copper",
          amount: 0.0762272,
          unit: "mg",
        },
        {
          name: "Calcium",
          amount: 22.4289,
          unit: "mg",
        },
        {
          name: "Cholesterol",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Choline",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Fluoride",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Saturated Fat",
          amount: 0.0879065,
          unit: "g",
        },
        {
          name: "Vitamin A",
          amount: 74.073,
          unit: "IU",
        },
        {
          name: "Vitamin C",
          amount: 7.81401,
          unit: "mg",
        },
        {
          name: "Vitamin D",
          amount: 0,
          unit: "µg",
        },
        {
          name: "Vitamin E",
          amount: 0.2143,
          unit: "mg",
        },
        {
          name: "Vitamin K",
          amount: 2.614,
          unit: "µg",
        },
        {
          name: "Vitamin B1",
          amount: 0.0246161,
          unit: "mg",
        },
        {
          name: "Vitamin B2",
          amount: 0.0315634,
          unit: "mg",
        },
        {
          name: "Vitamin B3",
          amount: 0.144339,
          unit: "mg",
        },
        {
          name: "Vitamin B5",
          amount: 0.0794946,
          unit: "mg",
        },
        {
          name: "Vitamin B6",
          amount: 0.0497751,
          unit: "mg",
        },
        {
          name: "Vitamin B12",
          amount: 0,
          unit: "µg",
        },
        {
          name: "Fiber",
          amount: 3.07489,
          unit: "g",
        },
        {
          name: "Folate",
          amount: 5.14953,
          unit: "µg",
        },
        {
          name: "Folic Acid",
          amount: 0,
          unit: "µg",
        },
        {
          name: "Iron",
          amount: 0.220115,
          unit: "mg",
        },
        {
          name: "Magnesium",
          amount: 9.71538,
          unit: "mg",
        },
        {
          name: "Manganese",
          amount: 0.145222,
          unit: "mg",
        },
        {
          name: "Phosphorus",
          amount: 14.2866,
          unit: "mg",
        },
        {
          name: "Potassium",
          amount: 137.133,
          unit: "mg",
        },
        {
          name: "Selenium",
          amount: 0.0342567,
          unit: "µg",
        },
        {
          name: "Sodium",
          amount: 13.4361,
          unit: "mg",
        },
        {
          name: "Sugar",
          amount: 12.1429,
          unit: "g",
        },
        {
          name: "Zinc",
          amount: 0.0882365,
          unit: "mg",
        },
      ],
    },
  },
  {
    id: 1039313,
    title: "Crock Pot Applesauce",
    image: "https://spoonacular.com/recipeImages/1039313-312x231.jpg",
    imageType: "jpg",
    nutrition: {
      nutrients: [
        {
          name: "Calories",
          amount: 70.175,
          unit: "kcal",
        },
        {
          name: "Protein",
          amount: 0.33015,
          unit: "g",
        },
        {
          name: "Fat",
          amount: 0.210617,
          unit: "g",
        },
        {
          name: "Carbohydrates",
          amount: 15.5677,
          unit: "g",
        },
        {
          name: "Alcohol",
          amount: 0,
          unit: "g",
        },
        {
          name: "Caffeine",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Copper",
          amount: 0.0345342,
          unit: "mg",
        },
        {
          name: "Calcium",
          amount: 11.305,
          unit: "mg",
        },
        {
          name: "Cholesterol",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Choline",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Fluoride",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Saturated Fat",
          amount: 0.035035,
          unit: "g",
        },
        {
          name: "Vitamin A",
          amount: 66.3242,
          unit: "IU",
        },
        {
          name: "Vitamin C",
          amount: 5.85958,
          unit: "mg",
        },
        {
          name: "Vitamin D",
          amount: 0,
          unit: "µg",
        },
        {
          name: "Vitamin E",
          amount: 0.225033,
          unit: "mg",
        },
        {
          name: "Vitamin K",
          amount: 2.74733,
          unit: "µg",
        },
        {
          name: "Vitamin B1",
          amount: 0.0208317,
          unit: "mg",
        },
        {
          name: "Vitamin B2",
          amount: 0.0317783,
          unit: "mg",
        },
        {
          name: "Vitamin B3",
          amount: 0.116289,
          unit: "mg",
        },
        {
          name: "Vitamin B5",
          amount: 0.07792,
          unit: "mg",
        },
        {
          name: "Vitamin B6",
          amount: 0.05116,
          unit: "mg",
        },
        {
          name: "Vitamin B12",
          amount: 0,
          unit: "µg",
        },
        {
          name: "Fiber",
          amount: 3.05483,
          unit: "g",
        },
        {
          name: "Folate",
          amount: 3.76583,
          unit: "µg",
        },
        {
          name: "Folic Acid",
          amount: 0,
          unit: "µg",
        },
        {
          name: "Iron",
          amount: 0.179233,
          unit: "mg",
        },
        {
          name: "Magnesium",
          amount: 6.40417,
          unit: "mg",
        },
        {
          name: "Manganese",
          amount: 0.0872483,
          unit: "mg",
        },
        {
          name: "Phosphorus",
          amount: 13.6167,
          unit: "mg",
        },
        {
          name: "Potassium",
          amount: 133.683,
          unit: "mg",
        },
        {
          name: "Selenium",
          amount: 0.02875,
          unit: "µg",
        },
        {
          name: "Sodium",
          amount: 1.71417,
          unit: "mg",
        },
        {
          name: "Sugar",
          amount: 14.2547,
          unit: "g",
        },
        {
          name: "Zinc",
          amount: 0.054025,
          unit: "mg",
        },
      ],
    },
  },
  {
    id: 250084,
    title: "Cinnamon CrockPot Apple Butter",
    image: "https://spoonacular.com/recipeImages/250084-312x231.jpg",
    imageType: "jpg",
    nutrition: {
      nutrients: [
        {
          name: "Calories",
          amount: 76.2533,
          unit: "kcal",
        },
        {
          name: "Protein",
          amount: 0.309535,
          unit: "g",
        },
        {
          name: "Fat",
          amount: 0.219502,
          unit: "g",
        },
        {
          name: "Carbohydrates",
          amount: 17.014,
          unit: "g",
        },
        {
          name: "Alcohol",
          amount: 0,
          unit: "g",
        },
        {
          name: "Caffeine",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Copper",
          amount: 0.0320875,
          unit: "mg",
        },
        {
          name: "Calcium",
          amount: 9.49264,
          unit: "mg",
        },
        {
          name: "Cholesterol",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Choline",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Fluoride",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Saturated Fat",
          amount: 0.032614,
          unit: "g",
        },
        {
          name: "Vitamin A",
          amount: 61.9725,
          unit: "IU",
        },
        {
          name: "Vitamin C",
          amount: 6.11831,
          unit: "mg",
        },
        {
          name: "Vitamin D",
          amount: 0,
          unit: "µg",
        },
        {
          name: "Vitamin E",
          amount: 0.261367,
          unit: "mg",
        },
        {
          name: "Vitamin K",
          amount: 3.75401,
          unit: "µg",
        },
        {
          name: "Vitamin B1",
          amount: 0.0257377,
          unit: "mg",
        },
        {
          name: "Vitamin B2",
          amount: 0.0382485,
          unit: "mg",
        },
        {
          name: "Vitamin B3",
          amount: 0.142695,
          unit: "mg",
        },
        {
          name: "Vitamin B5",
          amount: 0.0700678,
          unit: "mg",
        },
        {
          name: "Vitamin B6",
          amount: 0.0591732,
          unit: "mg",
        },
        {
          name: "Vitamin B12",
          amount: 0,
          unit: "µg",
        },
        {
          name: "Fiber",
          amount: 2.8648,
          unit: "g",
        },
        {
          name: "Folate",
          amount: 4.99194,
          unit: "µg",
        },
        {
          name: "Folic Acid",
          amount: 0,
          unit: "µg",
        },
        {
          name: "Iron",
          amount: 0.165353,
          unit: "mg",
        },
        {
          name: "Magnesium",
          amount: 5.96615,
          unit: "mg",
        },
        {
          name: "Manganese",
          amount: 0.0882856,
          unit: "mg",
        },
        {
          name: "Phosphorus",
          amount: 12.8363,
          unit: "mg",
        },
        {
          name: "Potassium",
          amount: 123.992,
          unit: "mg",
        },
        {
          name: "Selenium",
          amount: 0.098875,
          unit: "µg",
        },
        {
          name: "Sodium",
          amount: 1.46273,
          unit: "mg",
        },
        {
          name: "Sugar",
          amount: 15.3763,
          unit: "g",
        },
        {
          name: "Zinc",
          amount: 0.0512092,
          unit: "mg",
        },
      ],
    },
  },
  {
    id: 536607,
    title: "Crockpot Applesauce",
    image: "https://spoonacular.com/recipeImages/536607-312x231.jpg",
    imageType: "jpg",
    nutrition: {
      nutrients: [
        {
          name: "Calories",
          amount: 98.6537,
          unit: "kcal",
        },
        {
          name: "Protein",
          amount: 0.491913,
          unit: "g",
        },
        {
          name: "Fat",
          amount: 0.32055,
          unit: "g",
        },
        {
          name: "Carbohydrates",
          amount: 21.1564,
          unit: "g",
        },
        {
          name: "Alcohol",
          amount: 0.344,
          unit: "g",
        },
        {
          name: "Caffeine",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Copper",
          amount: 0.0532496,
          unit: "mg",
        },
        {
          name: "Calcium",
          amount: 12.9511,
          unit: "mg",
        },
        {
          name: "Cholesterol",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Choline",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Fluoride",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Saturated Fat",
          amount: 0.0529913,
          unit: "g",
        },
        {
          name: "Vitamin A",
          amount: 98.8737,
          unit: "IU",
        },
        {
          name: "Vitamin C",
          amount: 9.828,
          unit: "mg",
        },
        {
          name: "Vitamin D",
          amount: 0,
          unit: "µg",
        },
        {
          name: "Vitamin E",
          amount: 0.336125,
          unit: "mg",
        },
        {
          name: "Vitamin K",
          amount: 4.043,
          unit: "µg",
        },
        {
          name: "Vitamin B1",
          amount: 0.0319775,
          unit: "mg",
        },
        {
          name: "Vitamin B2",
          amount: 0.0488838,
          unit: "mg",
        },
        {
          name: "Vitamin B3",
          amount: 0.174948,
          unit: "mg",
        },
        {
          name: "Vitamin B5",
          amount: 0.11673,
          unit: "mg",
        },
        {
          name: "Vitamin B6",
          amount: 0.0768025,
          unit: "mg",
        },
        {
          name: "Vitamin B12",
          amount: 0,
          unit: "µg",
        },
        {
          name: "Fiber",
          amount: 4.44562,
          unit: "g",
        },
        {
          name: "Folate",
          amount: 6.2175,
          unit: "µg",
        },
        {
          name: "Folic Acid",
          amount: 0,
          unit: "µg",
        },
        {
          name: "Iron",
          amount: 0.233,
          unit: "mg",
        },
        {
          name: "Magnesium",
          amount: 9.66787,
          unit: "mg",
        },
        {
          name: "Manganese",
          amount: 0.0882825,
          unit: "mg",
        },
        {
          name: "Phosphorus",
          amount: 20.46,
          unit: "mg",
        },
        {
          name: "Potassium",
          amount: 200.621,
          unit: "mg",
        },
        {
          name: "Selenium",
          amount: 0.007625,
          unit: "µg",
        },
        {
          name: "Sodium",
          amount: 2.69934,
          unit: "mg",
        },
        {
          name: "Sugar",
          amount: 19.1517,
          unit: "g",
        },
        {
          name: "Zinc",
          amount: 0.0795412,
          unit: "mg",
        },
      ],
    },
  },
  {
    id: 485299,
    title: "Crockpot Apple Butter",
    image: "https://spoonacular.com/recipeImages/485299-312x231.jpg",
    imageType: "jpg",
    nutrition: {
      nutrients: [
        {
          name: "Calories",
          amount: 101.816,
          unit: "kcal",
        },
        {
          name: "Protein",
          amount: 0.19217,
          unit: "g",
        },
        {
          name: "Fat",
          amount: 0.179913,
          unit: "g",
        },
        {
          name: "Carbohydrates",
          amount: 24.6233,
          unit: "g",
        },
        {
          name: "Alcohol",
          amount: 0,
          unit: "g",
        },
        {
          name: "Caffeine",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Copper",
          amount: 0.0212317,
          unit: "mg",
        },
        {
          name: "Calcium",
          amount: 7.17418,
          unit: "mg",
        },
        {
          name: "Cholesterol",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Choline",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Fluoride",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Saturated Fat",
          amount: 0.0219768,
          unit: "g",
        },
        {
          name: "Vitamin A",
          amount: 38.2497,
          unit: "IU",
        },
        {
          name: "Vitamin C",
          amount: 3.20638,
          unit: "mg",
        },
        {
          name: "Vitamin D",
          amount: 0,
          unit: "µg",
        },
        {
          name: "Vitamin E",
          amount: 0.132337,
          unit: "mg",
        },
        {
          name: "Vitamin K",
          amount: 1.63353,
          unit: "µg",
        },
        {
          name: "Vitamin B1",
          amount: 0.0119012,
          unit: "mg",
        },
        {
          name: "Vitamin B2",
          amount: 0.021354,
          unit: "mg",
        },
        {
          name: "Vitamin B3",
          amount: 0.0671577,
          unit: "mg",
        },
        {
          name: "Vitamin B5",
          amount: 0.0431964,
          unit: "mg",
        },
        {
          name: "Vitamin B6",
          amount: 0.0289243,
          unit: "mg",
        },
        {
          name: "Vitamin B12",
          amount: 0,
          unit: "µg",
        },
        {
          name: "Fiber",
          amount: 1.79381,
          unit: "g",
        },
        {
          name: "Folate",
          amount: 2.10876,
          unit: "µg",
        },
        {
          name: "Folic Acid",
          amount: 0,
          unit: "µg",
        },
        {
          name: "Iron",
          amount: 0.123821,
          unit: "mg",
        },
        {
          name: "Magnesium",
          amount: 3.92782,
          unit: "mg",
        },
        {
          name: "Manganese",
          amount: 0.0921401,
          unit: "mg",
        },
        {
          name: "Phosphorus",
          amount: 8.17577,
          unit: "mg",
        },
        {
          name: "Potassium",
          amount: 79.2242,
          unit: "mg",
        },
        {
          name: "Selenium",
          amount: 0.113997,
          unit: "µg",
        },
        {
          name: "Sodium",
          amount: 17.3529,
          unit: "mg",
        },
        {
          name: "Sugar",
          amount: 23.8635,
          unit: "g",
        },
        {
          name: "Zinc",
          amount: 0.0361064,
          unit: "mg",
        },
      ],
    },
  },
  {
    id: 525853,
    title: "Crockpot Apple Cider",
    image: "https://spoonacular.com/recipeImages/525853-312x231.jpg",
    imageType: "jpg",
    nutrition: {
      nutrients: [
        {
          name: "Calories",
          amount: 107.144,
          unit: "kcal",
        },
        {
          name: "Protein",
          amount: 0.269009,
          unit: "g",
        },
        {
          name: "Fat",
          amount: 0.351073,
          unit: "g",
        },
        {
          name: "Carbohydrates",
          amount: 25.4505,
          unit: "g",
        },
        {
          name: "Alcohol",
          amount: 0,
          unit: "g",
        },
        {
          name: "Caffeine",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Copper",
          amount: 0.0314655,
          unit: "mg",
        },
        {
          name: "Calcium",
          amount: 27.1412,
          unit: "mg",
        },
        {
          name: "Cholesterol",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Choline",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Fluoride",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Saturated Fat",
          amount: 0.0853389,
          unit: "g",
        },
        {
          name: "Vitamin A",
          amount: 4.97671,
          unit: "IU",
        },
        {
          name: "Vitamin C",
          amount: 2.07817,
          unit: "mg",
        },
        {
          name: "Vitamin D",
          amount: 0,
          unit: "µg",
        },
        {
          name: "Vitamin E",
          amount: 0.0429796,
          unit: "mg",
        },
        {
          name: "Vitamin K",
          amount: 0.273,
          unit: "µg",
        },
        {
          name: "Vitamin B1",
          amount: 0.0482522,
          unit: "mg",
        },
        {
          name: "Vitamin B2",
          amount: 0.0389853,
          unit: "mg",
        },
        {
          name: "Vitamin B3",
          amount: 0.17884,
          unit: "mg",
        },
        {
          name: "Vitamin B5",
          amount: 0.114263,
          unit: "mg",
        },
        {
          name: "Vitamin B6",
          amount: 0.0424058,
          unit: "mg",
        },
        {
          name: "Vitamin B12",
          amount: 0,
          unit: "µg",
        },
        {
          name: "Fiber",
          amount: 0.944217,
          unit: "g",
        },
        {
          name: "Folate",
          amount: 0.1475,
          unit: "µg",
        },
        {
          name: "Folic Acid",
          amount: 0,
          unit: "µg",
        },
        {
          name: "Iron",
          amount: 0.348755,
          unit: "mg",
        },
        {
          name: "Magnesium",
          amount: 12.0936,
          unit: "mg",
        },
        {
          name: "Manganese",
          amount: 0.324282,
          unit: "mg",
        },
        {
          name: "Phosphorus",
          amount: 16.702,
          unit: "mg",
        },
        {
          name: "Potassium",
          amount: 233.273,
          unit: "mg",
        },
        {
          name: "Selenium",
          amount: 0.255921,
          unit: "µg",
        },
        {
          name: "Sodium",
          amount: 9.17935,
          unit: "mg",
        },
        {
          name: "Sugar",
          amount: 21.8724,
          unit: "g",
        },
        {
          name: "Zinc",
          amount: 0.0640592,
          unit: "mg",
        },
      ],
    },
  },
  {
    id: 589162,
    title: "Crockpot Apple + Pear Compote",
    image: "https://spoonacular.com/recipeImages/589162-312x231.jpg",
    imageType: "jpg",
    nutrition: {
      nutrients: [
        {
          name: "Calories",
          amount: 110.71,
          unit: "kcal",
        },
        {
          name: "Protein",
          amount: 0.619341,
          unit: "g",
        },
        {
          name: "Fat",
          amount: 0.312221,
          unit: "g",
        },
        {
          name: "Carbohydrates",
          amount: 24.4816,
          unit: "g",
        },
        {
          name: "Alcohol",
          amount: 0.114667,
          unit: "g",
        },
        {
          name: "Caffeine",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Copper",
          amount: 0.0726238,
          unit: "mg",
        },
        {
          name: "Calcium",
          amount: 16.5139,
          unit: "mg",
        },
        {
          name: "Cholesterol",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Choline",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Fluoride",
          amount: 0,
          unit: "mg",
        },
        {
          name: "Saturated Fat",
          amount: 0.0512595,
          unit: "g",
        },
        {
          name: "Vitamin A",
          amount: 91.5881,
          unit: "IU",
        },
        {
          name: "Vitamin C",
          amount: 8.58679,
          unit: "mg",
        },
        {
          name: "Vitamin D",
          amount: 0,
          unit: "µg",
        },
        {
          name: "Vitamin E",
          amount: 0.321381,
          unit: "mg",
        },
        {
          name: "Vitamin K",
          amount: 5.04152,
          unit: "µg",
        },
        {
          name: "Vitamin B1",
          amount: 0.0303128,
          unit: "mg",
        },
        {
          name: "Vitamin B2",
          amount: 0.0495242,
          unit: "mg",
        },
        {
          name: "Vitamin B3",
          amount: 0.202083,
          unit: "mg",
        },
        {
          name: "Vitamin B5",
          amount: 0.111465,
          unit: "mg",
        },
        {
          name: "Vitamin B6",
          amount: 0.0733028,
          unit: "mg",
        },
        {
          name: "Vitamin B12",
          amount: 0,
          unit: "µg",
        },
        {
          name: "Fiber",
          amount: 4.88902,
          unit: "g",
        },
        {
          name: "Folate",
          amount: 7.19188,
          unit: "µg",
        },
        {
          name: "Folic Acid",
          amount: 0,
          unit: "µg",
        },
        {
          name: "Iron",
          amount: 0.263742,
          unit: "mg",
        },
        {
          name: "Magnesium",
          amount: 10.3458,
          unit: "mg",
        },
        {
          name: "Manganese",
          amount: 0.100939,
          unit: "mg",
        },
        {
          name: "Phosphorus",
          amount: 21.2943,
          unit: "mg",
        },
        {
          name: "Potassium",
          amount: 206.84,
          unit: "mg",
        },
        {
          name: "Selenium",
          amount: 0.042966,
          unit: "µg",
        },
        {
          name: "Sodium",
          amount: 4.42164,
          unit: "mg",
        },
        {
          name: "Sugar",
          amount: 21.539,
          unit: "g",
        },
        {
          name: "Zinc",
          amount: 0.101695,
          unit: "mg",
        },
      ],
    },
  },
];
