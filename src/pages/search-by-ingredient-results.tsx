import axios from "axios";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Loader } from "../components/common/loader";
import { NoResults } from "../components/no-results";

type SearchResultType = {
  id: number;
  title: string;
  image: string;
}[];

export const SearchByIngredientResults: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResultType>();
  const ingredient = useLocation().state.ingredient;
  const navigate = useNavigate();

  const options = useMemo(() => {
    return {
      method: "GET",
      url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients",
      params: {
        ingredients: ingredient,
        number: "24",
        ignorePantry: "true",
        ranking: "1",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RECIPE_SEARCH_API_KEY,
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };
  }, [ingredient]);

  const handleOnClick = (id: number) => {
    navigate(`/recipes/${id}`, { state: { id: id } });
  };

  const fetchRecipes = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.request(options);
      setSearchResults(response.data);
      console.log(response);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [options]);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  return (
    <div className="h-screen">
        {isLoading && (
      <div className="h-full flex flex-wrap justify-center items-center">
          <Loader
          />
      </div>
        )}
      {!isLoading && searchResults?.length && (
        <div className="flex flex-col justify-center items-center">
          <h2 className="m-8 text-center text-lg">Results for <span className="font-bold">"{ingredient}"</span></h2>
          <div className="grid grid-cols-4 gap-8 my-4 mx-4">
          {searchResults.map((recipe, idx) => {
            return (

              <div
                className="flex flex-col justify-center items-center gap-y-2"
              >
                <img
                  alt="recipe-thumbnail"
                  src={recipe.image}
                  className="w-full hover:cursor-pointer rounded-md filter-none"
                  onClick={() => handleOnClick(recipe.id)}
                />
                <h3
                  className="font-bold text-xl text-center hover:underline hover:cursor-pointer"
                  onClick={() => handleOnClick(recipe.id)}
                >
                  {recipe.title}
                </h3>
              </div>
            );
          })}
          </div>
        </div>
      )}
      {!isLoading && !searchResults?.length && (
        <div className="h-full flex justify-center items-center">
        <NoResults searchTerm={ingredient} />
        </div>
      )}
    </div>
  );
};

const mockResponse = [
  {
    id: 559005,
    title: "Super Simple Sliders",
    image: "https://spoonacular.com/recipeImages/559005-312x231.jpg",
    imageType: "jpg",
    usedIngredientCount: 1,
    missedIngredientCount: 2,
    missedIngredients: [
      {
        id: 10118192,
        amount: 1,
        unit: "can",
        unitLong: "can",
        unitShort: "can",
        aisle: "Sweet Snacks",
        name: "pillsbury grands biscuits",
        original: "1 can Pillsbury Grands refrigerated biscuits",
        originalName: "Pillsbury Grands refrigerated biscuits",
        meta: ["refrigerated"],
        extendedName: "canned refrigerated pillsbury grands biscuits",
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/shortbread-cookies.jpg",
      },
      {
        id: 1011026,
        amount: 8,
        unit: "oz",
        unitLong: "ounces",
        unitShort: "oz",
        aisle: "Cheese",
        name: "cheese",
        original: "8oz of shredded cheese (any kind works!)",
        originalName: "shredded cheese (any kind works!)",
        meta: ["shredded", "(any kind works!)"],
        extendedName: "shredded cheese",
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png",
      },
    ],
    usedIngredients: [
      {
        id: 10023572,
        amount: 1,
        unit: "lb",
        unitLong: "pound",
        unitShort: "lb",
        aisle: "Meat",
        name: "ground beef",
        original: "1lb of cooked ground beef",
        originalName: "cooked ground beef",
        meta: ["cooked"],
        extendedName: "cooked ground beef",
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/fresh-ground-beef.jpg",
      },
    ],
    unusedIngredients: [],
    likes: 769,
  },
  {
    id: 247649,
    title: "Wagyu Burgers",
    image: "https://spoonacular.com/recipeImages/247649-312x231.jpg",
    imageType: "jpg",
    usedIngredientCount: 1,
    missedIngredientCount: 2,
    missedIngredients: [
      {
        id: 98940,
        amount: 4,
        unit: "",
        unitLong: "",
        unitShort: "",
        aisle: "Bakery/Bread",
        name: "buns",
        original: "4 buns",
        originalName: "buns",
        meta: [],
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/french-rolls.jpg",
      },
      {
        id: 11529,
        amount: 4,
        unit: "servings",
        unitLong: "servings",
        unitShort: "servings",
        aisle: "Produce",
        name: "tomatoes",
        original: "tomatoes (sliced, optional)",
        originalName: "tomatoes (sliced, optional)",
        meta: ["sliced", "(, optional)"],
        image: "https://spoonacular.com/cdn/ingredients_100x100/tomato.png",
      },
    ],
    usedIngredients: [
      {
        id: 10023572,
        amount: 1.5,
        unit: "pounds",
        unitLong: "pounds",
        unitShort: "lb",
        aisle: "Meat",
        name: "ground wagyu beef",
        original: "1 1/2 pounds ground wagyu beef",
        originalName: "ground wagyu beef",
        meta: [],
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/fresh-ground-beef.jpg",
      },
    ],
    unusedIngredients: [],
    likes: 549,
  },
  {
    id: 462988,
    title: "Bacon Meat Loaf",
    image: "https://spoonacular.com/recipeImages/462988-312x231.jpg",
    imageType: "jpg",
    usedIngredientCount: 1,
    missedIngredientCount: 2,
    missedIngredients: [
      {
        id: 10123,
        amount: 4,
        unit: "",
        unitLong: "",
        unitShort: "",
        aisle: "Meat",
        name: "bacon strips",
        original: "4 bacon strips, halved",
        originalName: "bacon strips, halved",
        meta: ["halved"],
        image: "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png",
      },
      {
        id: 11549,
        amount: 8,
        unit: "ounces",
        unitLong: "ounces",
        unitShort: "oz",
        aisle: "Canned and Jarred",
        name: "tomato sauce",
        original: "1 can (8 ounces) tomato sauce",
        originalName: "can tomato sauce",
        meta: ["canned"],
        extendedName: "canned tomato sauce",
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/tomato-sauce-or-pasta-sauce.jpg",
      },
    ],
    usedIngredients: [
      {
        id: 10023572,
        amount: 1,
        unit: "serving",
        unitLong: "serving",
        unitShort: "serving",
        aisle: "Meat",
        name: "ground beef mix",
        original: "1 serving Ground Beef Mix, thawed",
        originalName: "Ground Beef Mix, thawed",
        meta: ["thawed"],
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/fresh-ground-beef.jpg",
      },
    ],
    unusedIngredients: [],
    likes: 32,
  },
  {
    id: 247569,
    title: "Taco Seasoned Ground Beef",
    image: "https://spoonacular.com/recipeImages/247569-312x231.jpg",
    imageType: "jpg",
    usedIngredientCount: 1,
    missedIngredientCount: 2,
    missedIngredients: [
      {
        id: 20027,
        amount: 1,
        unit: "teaspoon",
        unitLong: "teaspoon",
        unitShort: "tsp",
        aisle: "Baking",
        name: "cornstarch",
        original: "1 teaspoon cornstarch",
        originalName: "cornstarch",
        meta: [],
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg",
      },
      {
        id: 2073,
        amount: 1,
        unit: "",
        unitLong: "",
        unitShort: "",
        aisle: "Spices and Seasonings",
        name: "batch taco seasoning",
        original: "1 batch taco seasoning",
        originalName: "batch taco seasoning",
        meta: [],
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/chili-powder.jpg",
      },
    ],
    usedIngredients: [
      {
        id: 10023572,
        amount: 1,
        unit: "pound",
        unitLong: "pound",
        unitShort: "lb",
        aisle: "Meat",
        name: "ground beef",
        original: "1 pound ground beef",
        originalName: "ground beef",
        meta: [],
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/fresh-ground-beef.jpg",
      },
    ],
    unusedIngredients: [],
    likes: 25,
  },
  {
    id: 1180111,
    title: "Crockpot Taco Meat",
    image: "https://spoonacular.com/recipeImages/1180111-312x231.jpg",
    imageType: "jpg",
    usedIngredientCount: 1,
    missedIngredientCount: 2,
    missedIngredients: [
      {
        id: 6164,
        amount: 16,
        unit: "ounces",
        unitLong: "ounces",
        unitShort: "oz",
        aisle: "Ethnic Foods",
        name: "salsa",
        original: "2 cups (16 ounces) salsa",
        originalName: "cups salsa",
        meta: [],
        image: "https://spoonacular.com/cdn/ingredients_100x100/salsa.png",
      },
      {
        id: 2073,
        amount: 2,
        unit: "tablespoons",
        unitLong: "tablespoons",
        unitShort: "Tbsp",
        aisle: "Spices and Seasonings",
        name: "envelope taco seasoning",
        original: "2 tablespoons or 1 envelope taco seasoning",
        originalName: "or 1 envelope taco seasoning",
        meta: [],
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/chili-powder.jpg",
      },
    ],
    usedIngredients: [
      {
        id: 10023572,
        amount: 2,
        unit: "pounds",
        unitLong: "pounds",
        unitShort: "lb",
        aisle: "Meat",
        name: "ground meat",
        original: "2 pounds lean ground meat",
        originalName: "lean ground meat",
        meta: ["lean"],
        extendedName: "lean ground meat",
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/fresh-ground-beef.jpg",
      },
    ],
    unusedIngredients: [],
    likes: 0,
  },
  {
    id: 264511,
    title: "Saucy Meatballs with Creamy Dipping Sauce",
    image: "https://spoonacular.com/recipeImages/264511-312x231.jpg",
    imageType: "jpg",
    usedIngredientCount: 1,
    missedIngredientCount: 2,
    missedIngredients: [
      {
        id: 6150,
        amount: 2,
        unit: "Tbsp",
        unitLong: "Tbsps",
        unitShort: "Tbsp",
        aisle: "Condiments",
        name: "original barbecue sauce",
        original: "2 Tbsp. KRAFT Original Barbecue Sauce",
        originalName: "KRAFT Original Barbecue Sauce",
        meta: ["kraft"],
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/barbecue-sauce.jpg",
      },
      {
        id: 4014,
        amount: 0.5,
        unit: "cup",
        unitLong: "cups",
        unitShort: "cup",
        aisle: "Condiments",
        name: "miracle whip dressing",
        original: "1/2 cup MIRACLE WHIP Dressing",
        originalName: "MIRACLE WHIP Dressing",
        meta: [],
        image: "https://spoonacular.com/cdn/ingredients_100x100/mayonnaise.png",
      },
    ],
    usedIngredients: [
      {
        id: 10023572,
        amount: 1,
        unit: "lb",
        unitLong: "pound",
        unitShort: "lb",
        aisle: "Meat",
        name: "ground beef",
        original: "1 lb. ground beef",
        originalName: "ground beef",
        meta: [],
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/fresh-ground-beef.jpg",
      },
    ],
    unusedIngredients: [],
    likes: 0,
  },
  {
    id: 282161,
    title: "Chimichurri Burgers",
    image: "https://spoonacular.com/recipeImages/282161-312x231.jpg",
    imageType: "jpg",
    usedIngredientCount: 1,
    missedIngredientCount: 2,
    missedIngredients: [
      {
        id: 18350,
        amount: 6,
        unit: "",
        unitLong: "",
        unitShort: "",
        aisle: "Bakery/Bread",
        name: "hamburger buns",
        original: "6 hamburger buns",
        originalName: "hamburger buns",
        meta: [],
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/hamburger-bun.jpg",
      },
      {
        id: 1190,
        amount: 6,
        unit: "",
        unitLong: "",
        unitShort: "",
        aisle: "Cheese",
        name: "singles",
        original: "6 KRAFT Singles",
        originalName: "KRAFT Singles",
        meta: ["kraft"],
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/american-cheese.jpg",
      },
    ],
    usedIngredients: [
      {
        id: 10023572,
        amount: 1.5,
        unit: "lb",
        unitLong: "pounds",
        unitShort: "lb",
        aisle: "Meat",
        name: "ground beef",
        original: "1-1/2 lb. ground beef",
        originalName: "ground beef",
        meta: [],
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/fresh-ground-beef.jpg",
      },
    ],
    unusedIngredients: [],
    likes: 0,
  },
  {
    id: 69787,
    title: "French-Fry Pie",
    image: "https://spoonacular.com/recipeImages/69787-312x231.jpg",
    imageType: "jpg",
    usedIngredientCount: 1,
    missedIngredientCount: 2,
    missedIngredients: [
      {
        id: 11408,
        amount: 4,
        unit: "cups",
        unitLong: "cups",
        unitShort: "cup",
        aisle: "Frozen",
        name: "shoe-string fries",
        original: "4 cups frozen shoe-string French fries",
        originalName: "frozen shoe-string French fries",
        meta: ["frozen", "french"],
        extendedName: "french frozen shoe-string fries",
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/french-fries-isolated.jpg",
      },
      {
        id: 10111549,
        amount: 14,
        unit: "ounce",
        unitLong: "ounces",
        unitShort: "oz",
        aisle: "Pasta and Rice",
        name: "marinara sauce",
        original: "1 14-ounce jar marinara sauce",
        originalName: "marinara sauce",
        meta: [],
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/tomato-sauce-or-pasta-sauce.jpg",
      },
    ],
    usedIngredients: [
      {
        id: 10023572,
        amount: 1.5,
        unit: "pounds",
        unitLong: "pounds",
        unitShort: "lb",
        aisle: "Meat",
        name: "ground beef",
        original: "1 1/2 pounds ground beef",
        originalName: "ground beef",
        meta: [],
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/fresh-ground-beef.jpg",
      },
    ],
    unusedIngredients: [],
    likes: 0,
  },
  {
    id: 138667,
    title: "Chili Mac",
    image: "https://spoonacular.com/recipeImages/138667-312x231.png",
    imageType: "png",
    usedIngredientCount: 1,
    missedIngredientCount: 2,
    missedIngredients: [
      {
        id: 6972,
        amount: 1,
        unit: "bottle",
        unitLong: "bottle",
        unitShort: "bottle",
        aisle: "Ethnic Foods",
        name: "heinz chili sauce",
        original: "1 bottle heinz chili sauce",
        originalName: "heinz chili sauce",
        meta: [],
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/tomato-sauce-or-pasta-sauce.jpg",
      },
      {
        id: 20420,
        amount: 2,
        unit: "servings",
        unitLong: "servings",
        unitShort: "servings",
        aisle: "Pasta and Rice",
        name: "pasta",
        original: "pasta",
        originalName: "pasta",
        meta: [],
        image: "https://spoonacular.com/cdn/ingredients_100x100/fusilli.jpg",
      },
    ],
    usedIngredients: [
      {
        id: 10023572,
        amount: 1,
        unit: "lb",
        unitLong: "pound",
        unitShort: "lb",
        aisle: "Meat",
        name: "ground beef",
        original: "1 lb ground beef",
        originalName: "ground beef",
        meta: [],
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/fresh-ground-beef.jpg",
      },
    ],
    unusedIngredients: [],
    likes: 0,
  },
  {
    id: 92674,
    title: "Cabbage Burgers (Runzas)",
    image: "https://spoonacular.com/recipeImages/92674-312x231.jpg",
    imageType: "jpg",
    usedIngredientCount: 1,
    missedIngredientCount: 2,
    missedIngredients: [
      {
        id: 11109,
        amount: 1,
        unit: "head",
        unitLong: "head",
        unitShort: "head",
        aisle: "Produce",
        name: "cabbage",
        original: "1 head of cabbage",
        originalName: "cabbage",
        meta: [],
        image: "https://spoonacular.com/cdn/ingredients_100x100/cabbage.jpg",
      },
      {
        id: 11282,
        amount: 2,
        unit: "large",
        unitLong: "larges",
        unitShort: "large",
        aisle: "Produce",
        name: "onions",
        original: "2 large onions",
        originalName: "onions",
        meta: [],
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.png",
      },
    ],
    usedIngredients: [
      {
        id: 10023572,
        amount: 1.5,
        unit: "lbs",
        unitLong: "pounds",
        unitShort: "lb",
        aisle: "Meat",
        name: "ground beef",
        original: "1 1/2 lbs ground beef",
        originalName: "ground beef",
        meta: [],
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/fresh-ground-beef.jpg",
      },
    ],
    unusedIngredients: [],
    likes: 0,
  },
  {
    id: 459064,
    title: "Cocktail Meatballs IV",
    image: "https://spoonacular.com/recipeImages/459064-312x231.jpg",
    imageType: "jpg",
    usedIngredientCount: 1,
    missedIngredientCount: 3,
    missedIngredients: [
      {
        id: 6972,
        amount: 0.25,
        unit: "cup",
        unitLong: "cups",
        unitShort: "cup",
        aisle: "Ethnic Foods",
        name: "chili sauce",
        original: "1/4 cup chili sauce",
        originalName: "chili sauce",
        meta: [],
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/tomato-sauce-or-pasta-sauce.jpg",
      },
      {
        id: 10519297,
        amount: 10,
        unit: "ounces",
        unitLong: "ounces",
        unitShort: "oz",
        aisle: "Nut butters, Jams, and Honey",
        name: "grape jelly",
        original: "10 ounces grape jelly",
        originalName: "grape jelly",
        meta: [],
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/grape-jelly.jpg",
      },
      {
        id: 2046,
        amount: 2,
        unit: "tablespoons",
        unitLong: "tablespoons",
        unitShort: "Tbsp",
        aisle: "Condiments",
        name: "mustard",
        original: "2 tablespoons prepared mustard",
        originalName: "prepared mustard",
        meta: ["prepared"],
        extendedName: "cooked mustard",
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/regular-mustard.jpg",
      },
    ],
    usedIngredients: [
      {
        id: 10023572,
        amount: 2,
        unit: "pounds",
        unitLong: "pounds",
        unitShort: "lb",
        aisle: "Meat",
        name: "ground beef",
        original: "2 pounds ground beef",
        originalName: "ground beef",
        meta: [],
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/fresh-ground-beef.jpg",
      },
    ],
    unusedIngredients: [],
    likes: 38,
  },
  {
    id: 671902,
    title:
      "Best Ever Juicy Burger + Albertsons-Safeway and Best Foods Sweepstakes",
    image: "https://spoonacular.com/recipeImages/671902-312x231.jpg",
    imageType: "jpg",
    usedIngredientCount: 1,
    missedIngredientCount: 3,
    missedIngredients: [
      {
        id: 18079,
        amount: 0.5,
        unit: "cup",
        unitLong: "cups",
        unitShort: "cup",
        aisle: "Pasta and Rice",
        name: "bread crumbs",
        original: "½ cup plain dry bread crumbs",
        originalName: "plain dry bread crumbs",
        meta: ["plain", "dry"],
        extendedName: "dry plain bread crumbs",
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/breadcrumbs.jpg",
      },
      {
        id: 18350,
        amount: 8,
        unit: "",
        unitLong: "",
        unitShort: "",
        aisle: "Bakery/Bread",
        name: "hamburger buns",
        original: "8 hamburger buns",
        originalName: "hamburger buns",
        meta: [],
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/hamburger-bun.jpg",
      },
      {
        id: 4025,
        amount: 0.5,
        unit: "cup",
        unitLong: "cups",
        unitShort: "cup",
        aisle: "Condiments",
        name: "real mayonnaise",
        original: "½ cup Best Foods® Real Mayonnaise",
        originalName: "Best Foods® Real Mayonnaise",
        meta: ["best foods®"],
        image: "https://spoonacular.com/cdn/ingredients_100x100/mayonnaise.png",
      },
    ],
    usedIngredients: [
      {
        id: 10023572,
        amount: 2,
        unit: "lbs",
        unitLong: "pounds",
        unitShort: "lb",
        aisle: "Meat",
        name: "ground beef [or ground turkey]",
        original: "2 lbs. ground beef [or ground turkey]",
        originalName: "ground beef [or ground turkey]",
        meta: [],
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/fresh-ground-beef.jpg",
      },
    ],
    unusedIngredients: [],
    likes: 20,
  },
];
