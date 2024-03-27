import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { RecipeDetailsType } from "../components/recipe-details/types";
import { RecipeDetails } from "../components/recipe-details/recipe-details";
import { SimilarRecipes } from "../components/recipe-details/similar-recipes";
import { Loader } from "../components/common/loader";

export const IndividualRecipeDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState<RecipeDetailsType>();
  const recipeId = useLocation().state.id;

  const options = useMemo(() => {
    return {
      method: "GET",
      url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/information`,
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RECIPE_SEARCH_API_KEY,
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };
  }, [recipeId]);

  const fetchRecipeDetails = useCallback(async () => {
    setIsLoading(true);
    try {
      const results = await axios.request(options);
      setRecipeDetails(results.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [options]);

  useEffect(() => {
    if (recipeId) {
      fetchRecipeDetails();
    }
  }, [recipeId, fetchRecipeDetails]);

  return (
    <div className="flex flex-wrap flex-col content-center justify-content">
      {isLoading && (
        <div className="h-screen flex justify-center items-center">
          <Loader />
        </div>
      )}
      {!isLoading && (
        <div className="flex flex-col items-center">
          <RecipeDetails recipeDetails={recipeDetails} />
          <SimilarRecipes recipeId={recipeId} />
        </div>
      )}
    </div>
  );
};

const mock = {
  vegetarian: true,
  vegan: false,
  glutenFree: false,
  dairyFree: false,
  veryHealthy: false,
  cheap: false,
  veryPopular: false,
  sustainable: false,
  lowFodmap: false,
  weightWatcherSmartPoints: 8,
  gaps: "no",
  preparationMinutes: 35,
  cookingMinutes: 25,
  aggregateLikes: 41,
  healthScore: 0,
  creditsText: "Delish",
  sourceName: "Delish",
  pricePerServing: 27.32,
  extendedIngredients: [
    {
      id: 1009016,
      aisle: "Beverages",
      image: "apple-cider.jpg",
      consistency: "SOLID",
      name: "apple cider",
      nameClean: "apple cider",
      original: "3 tbsp. apple cider",
      originalName: "apple cider",
      amount: 3,
      unit: "tbsp",
      meta: [],
      measures: {
        us: {
          amount: 3,
          unitShort: "Tbsps",
          unitLong: "Tbsps",
        },
        metric: {
          amount: 3,
          unitShort: "Tbsps",
          unitLong: "Tbsps",
        },
      },
    },
    {
      id: 9019,
      aisle: "Canned and Jarred",
      image: "applesauce.png",
      consistency: "SOLID",
      name: "applesauce",
      nameClean: "applesauce",
      original: "1 c. applesauce",
      originalName: "applesauce",
      amount: 1,
      unit: "c",
      meta: [],
      measures: {
        us: {
          amount: 1,
          unitShort: "cup",
          unitLong: "cup",
        },
        metric: {
          amount: 244,
          unitShort: "ml",
          unitLong: "milliliters",
        },
      },
    },
    {
      id: 18372,
      aisle: "Baking",
      image: "white-powder.jpg",
      consistency: "SOLID",
      name: "baking soda",
      nameClean: "baking soda",
      original: "1 tsp. baking soda",
      originalName: "baking soda",
      amount: 1,
      unit: "tsp",
      meta: [],
      measures: {
        us: {
          amount: 1,
          unitShort: "tsp",
          unitLong: "teaspoon",
        },
        metric: {
          amount: 1,
          unitShort: "tsp",
          unitLong: "teaspoon",
        },
      },
    },
    {
      id: 1001,
      aisle: "Milk, Eggs, Other Dairy",
      image: "butter-sliced.jpg",
      consistency: "SOLID",
      name: "butter",
      nameClean: "butter",
      original: "½ c. butter",
      originalName: "butter",
      amount: 0.5,
      unit: "c",
      meta: [],
      measures: {
        us: {
          amount: 0.5,
          unitShort: "cups",
          unitLong: "cups",
        },
        metric: {
          amount: 113.5,
          unitShort: "g",
          unitLong: "grams",
        },
      },
    },
    {
      id: 1001,
      aisle: "Milk, Eggs, Other Dairy",
      image: "butter-sliced.jpg",
      consistency: "SOLID",
      name: "butter",
      nameClean: "butter",
      original: "2 tbsp. butter, melted",
      originalName: "butter, melted",
      amount: 2,
      unit: "tbsp",
      meta: ["melted"],
      measures: {
        us: {
          amount: 2,
          unitShort: "Tbsps",
          unitLong: "Tbsps",
        },
        metric: {
          amount: 2,
          unitShort: "Tbsps",
          unitLong: "Tbsps",
        },
      },
    },
    {
      id: 19336,
      aisle: "Baking",
      image: "powdered-sugar.jpg",
      consistency: "SOLID",
      name: "confectioners' sugar",
      nameClean: "powdered sugar",
      original: "1¼ c. confectioners' sugar",
      originalName: "confectioners' sugar",
      amount: 1.25,
      unit: "c",
      meta: [],
      measures: {
        us: {
          amount: 1.25,
          unitShort: "cups",
          unitLong: "cups",
        },
        metric: {
          amount: 150,
          unitShort: "g",
          unitLong: "grams",
        },
      },
    },
    {
      id: 1123,
      aisle: "Milk, Eggs, Other Dairy",
      image: "egg.png",
      consistency: "SOLID",
      name: "eggs",
      nameClean: "egg",
      original: "2 eggs",
      originalName: "eggs",
      amount: 2,
      unit: "",
      meta: [],
      measures: {
        us: {
          amount: 2,
          unitShort: "",
          unitLong: "",
        },
        metric: {
          amount: 2,
          unitShort: "",
          unitLong: "",
        },
      },
    },
    {
      id: 20081,
      aisle: "Baking",
      image: "flour.png",
      consistency: "SOLID",
      name: "flour",
      nameClean: "wheat flour",
      original: "2¼ c. flour",
      originalName: "flour",
      amount: 2.25,
      unit: "c",
      meta: [],
      measures: {
        us: {
          amount: 2.25,
          unitShort: "cups",
          unitLong: "cups",
        },
        metric: {
          amount: 281.25,
          unitShort: "g",
          unitLong: "grams",
        },
      },
    },
    {
      id: 1089003,
      aisle: "Produce",
      image: "grannysmith-apple.png",
      consistency: "SOLID",
      name: "granny smith apple",
      nameClean: "granny smith apple",
      original: "1½ c. peeled and chopped Granny Smith apple",
      originalName: "peeled and chopped Granny Smith apple",
      amount: 1.5,
      unit: "c",
      meta: ["peeled", "chopped"],
      measures: {
        us: {
          amount: 1.5,
          unitShort: "cups",
          unitLong: "cups",
        },
        metric: {
          amount: 187.5,
          unitShort: "g",
          unitLong: "grams",
        },
      },
    },
    {
      id: 1032006,
      aisle: "Spices and Seasonings",
      image: "cardamom-ground.jpg",
      consistency: "SOLID",
      name: "ground cardamom",
      nameClean: "cardamom powder",
      original: "1 tsp. ground cardamom",
      originalName: "ground cardamom",
      amount: 1,
      unit: "tsp",
      meta: [],
      measures: {
        us: {
          amount: 1,
          unitShort: "tsp",
          unitLong: "teaspoon",
        },
        metric: {
          amount: 1,
          unitShort: "tsp",
          unitLong: "teaspoon",
        },
      },
    },
    {
      id: 9156,
      aisle: "Produce",
      image: "zest-lemon.jpg",
      consistency: "SOLID",
      name: "lemon zest",
      nameClean: "lemon peel",
      original: "1½ tsp. lemon zest",
      originalName: "lemon zest",
      amount: 1.5,
      unit: "tsp",
      meta: [],
      measures: {
        us: {
          amount: 1.5,
          unitShort: "tsps",
          unitLong: "teaspoons",
        },
        metric: {
          amount: 1.5,
          unitShort: "tsps",
          unitLong: "teaspoons",
        },
      },
    },
    {
      id: 2047,
      aisle: "Spices and Seasonings",
      image: "salt.jpg",
      consistency: "SOLID",
      name: "salt",
      nameClean: "table salt",
      original: "½ tsp. salt",
      originalName: "salt",
      amount: 0.5,
      unit: "tsp",
      meta: [],
      measures: {
        us: {
          amount: 0.5,
          unitShort: "tsps",
          unitLong: "teaspoons",
        },
        metric: {
          amount: 0.5,
          unitShort: "tsps",
          unitLong: "teaspoons",
        },
      },
    },
    {
      id: 1056,
      aisle: "Milk, Eggs, Other Dairy",
      image: "sour-cream.jpg",
      consistency: "SOLID",
      name: "cream",
      nameClean: "sour cream",
      original: "½ c. sour cream",
      originalName: "sour cream",
      amount: 0.5,
      unit: "c",
      meta: ["sour"],
      measures: {
        us: {
          amount: 0.5,
          unitShort: "cups",
          unitLong: "cups",
        },
        metric: {
          amount: 115,
          unitShort: "ml",
          unitLong: "milliliters",
        },
      },
    },
    {
      id: 19335,
      aisle: "Baking",
      image: "sugar-in-bowl.png",
      consistency: "SOLID",
      name: "sugar",
      nameClean: "sugar",
      original: "1½ c. sugar",
      originalName: "sugar",
      amount: 1.5,
      unit: "c",
      meta: [],
      measures: {
        us: {
          amount: 1.5,
          unitShort: "cups",
          unitLong: "cups",
        },
        metric: {
          amount: 300,
          unitShort: "g",
          unitLong: "grams",
        },
      },
    },
    {
      id: 2050,
      aisle: "Baking",
      image: "vanilla-extract.jpg",
      consistency: "LIQUID",
      name: "vanilla extract",
      nameClean: "vanilla extract",
      original: "1½ tsp. vanilla extract",
      originalName: "vanilla extract",
      amount: 1.5,
      unit: "tsp",
      meta: [],
      measures: {
        us: {
          amount: 1.5,
          unitShort: "tsps",
          unitLong: "teaspoons",
        },
        metric: {
          amount: 1.5,
          unitShort: "tsps",
          unitLong: "teaspoons",
        },
      },
    },
  ],
  id: 822282,
  title: "Apple-Cardamom Cakes with Apple Cider Icing",
  readyInMinutes: 60,
  servings: 24,
  sourceUrl:
    "http://www.delish.com/cooking/recipe-ideas/recipes/a23995/apple-cardamom-cakes-cider-icing/",
  image: "https://spoonacular.com/recipeImages/822282-556x370.jpg",
  imageType: "jpg",
  summary:
    'If you have about <b>1 hour</b> to spend in the kitchen, Apple-Cardamom Cakes with Apple Cider Icing might be an excellent <b>lacto ovo vegetarian</b> recipe to try. One portion of this dish contains about <b>2g of protein</b>, <b>6g of fat</b>, and a total of <b>182 calories</b>. For <b>27 cents per serving</b>, you get a dessert that serves 24. If you have ground cardamom, vanillan extract, salt, and a few other ingredients on hand, you can make it. This recipe from Delish has 41 fans. All things considered, we decided this recipe <b>deserves a spoonacular score of 13%</b>. This score is rather bad. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/cardamom-apple-cider-butter-48353">Cardamom Apple Cider Butter</a>, <a href="https://spoonacular.com/recipes/apple-cider-pork-with-red-cabbage-and-oak-aged-apple-cider-5-616596">Apple Cider Pork with Red Cabbage and Oak Aged Apple Cider 5</a>, and <a href="https://spoonacular.com/recipes/loaded-apple-cider-oatmeal-muffins-with-brown-butter-apple-cider-glaze-525519">Loaded Apple Cider Oatmeal Muffins with Brown Butter Apple Cider Glaze</a>.',
  cuisines: [],
  dishTypes: ["dessert"],
  diets: ["lacto ovo vegetarian"],
  occasions: [],
  winePairing: {
    pairedWines: ["cream sherry", "port wine", "moscato dasti"],
    pairingText:
      "Dessert works really well with Cream Sherry, Port Wine, and Moscato d'Asti. A common wine pairing rule is to make sure your wine is sweeter than your food. Delicate desserts go well with Moscato d'Asti, nutty desserts with cream sherry, and caramel or chocolate desserts pair well with port. The NV Solera Cream Sherry with a 4.5 out of 5 star rating seems like a good match. It costs about 17 dollars per bottle.",
    productMatches: [
      {
        id: 428475,
        title: "NV Solera Cream Sherry",
        description:
          "The Solera Cream Sherry has a brilliant amber and deep copper hue. With butterscotch and pecan aromas, the sweet salted nut and brown spice aromas carry a complex caramel accent. A sweet entry leads to a rounded, lush, moderately full-bodied palate with a lengthy, flavorful finish.",
        price: "$16.989999771118164",
        imageUrl: "https://spoonacular.com/productImages/428475-312x231.jpg",
        averageRating: 0.8999999761581421,
        ratingCount: 4,
        score: 0.8230768992350652,
        link: "https://www.amazon.com/NV-Solera-Cream-Sherry-750/dp/B00HSME8OW?tag=spoonacular-20",
      },
    ],
  },
  instructions:
    "Heat oven to 400 degrees F. Butter and flour 24 3 1/2-ounce cake molds or 2 12-cup cupcake tins and set aside.Sift the flour, baking soda, salt, and cardamom together and set aside.Beat the eggs and sugar together, using a mixer set on medium-high speed, until the mixture forms a thick ribbon when the beaters are lifted from the bowl. Reduce speed to low and mix in the vanilla and applesauce. Add 1/2 cup of the melted butter, sour cream, and zest and beat until combined. Gradually add the flour mixture and mix until smooth.Fold in the apples and divide the batter among the prepared molds (about 1/4 cup per mold). Bake until a skewer inserted in the center of the cake tests clean -- 20 to 25 minutes.Cool for 5 minutes in the pan on a wire rack. Unmold the cakes and cool completely on the rack.Stir the remaining melted butter, confectioners' sugar, and apple cider together in a medium bowl until smooth and drizzle over the cooled cakes and let the icing set before serving.",
  analyzedInstructions: [
    {
      name: "",
      steps: [
        {
          number: 1,
          step: "Heat oven to 400 degrees F. Butter and flour 24 3 1/2-ounce cake molds or 2 12-cup cupcake tins and set aside.Sift the flour, baking soda, salt, and cardamom together and set aside.Beat the eggs and sugar together, using a mixer set on medium-high speed, until the mixture forms a thick ribbon when the beaters are lifted from the bowl. Reduce speed to low and mix in the vanilla and applesauce.",
          ingredients: [
            {
              id: 18372,
              name: "baking soda",
              localizedName: "baking soda",
              image: "white-powder.jpg",
            },
            {
              id: 9019,
              name: "applesauce",
              localizedName: "applesauce",
              image: "applesauce.png",
            },
            {
              id: 2006,
              name: "cardamom",
              localizedName: "cardamom",
              image: "cardamom.jpg",
            },
            {
              id: 18139,
              name: "cupcakes",
              localizedName: "cupcakes",
              image: "plain-cupcake.jpg",
            },
            {
              id: 1052050,
              name: "vanilla",
              localizedName: "vanilla",
              image: "vanilla.jpg",
            },
            {
              id: 1001,
              name: "butter",
              localizedName: "butter",
              image: "butter-sliced.jpg",
            },
            {
              id: 20081,
              name: "all purpose flour",
              localizedName: "all purpose flour",
              image: "flour.png",
            },
            {
              id: 19335,
              name: "sugar",
              localizedName: "sugar",
              image: "sugar-in-bowl.png",
            },
            {
              id: 1123,
              name: "egg",
              localizedName: "egg",
              image: "egg.png",
            },
            {
              id: 2047,
              name: "salt",
              localizedName: "salt",
              image: "salt.jpg",
            },
          ],
          equipment: [
            {
              id: 404726,
              name: "blender",
              localizedName: "blender",
              image: "blender.png",
            },
            {
              id: 404783,
              name: "bowl",
              localizedName: "bowl",
              image: "bowl.jpg",
            },
            {
              id: 404784,
              name: "oven",
              localizedName: "oven",
              image: "oven.jpg",
              temperature: {
                number: 400,
                unit: "Fahrenheit",
              },
            },
          ],
        },
        {
          number: 2,
          step: "Add 1/2 cup of the melted butter, sour cream, and zest and beat until combined. Gradually add the flour mixture and mix until smooth.Fold in the apples and divide the batter among the prepared molds (about 1/4 cup per mold).",
          ingredients: [
            {
              id: 1056,
              name: "sour cream",
              localizedName: "sour cream",
              image: "sour-cream.jpg",
            },
            {
              id: 9003,
              name: "apple",
              localizedName: "apple",
              image: "apple.jpg",
            },
            {
              id: 1001,
              name: "butter",
              localizedName: "butter",
              image: "butter-sliced.jpg",
            },
            {
              id: 20081,
              name: "all purpose flour",
              localizedName: "all purpose flour",
              image: "flour.png",
            },
          ],
          equipment: [],
        },
        {
          number: 3,
          step: "Bake until a skewer inserted in the center of the cake tests clean -- 20 to 25 minutes.Cool for 5 minutes in the pan on a wire rack. Unmold the cakes and cool completely on the rack.Stir the remaining melted butter, confectioners' sugar, and apple cider together in a medium bowl until smooth and drizzle over the cooled cakes and let the icing set before serving.",
          ingredients: [
            {
              id: 19336,
              name: "powdered sugar",
              localizedName: "powdered sugar",
              image: "powdered-sugar.jpg",
            },
            {
              id: 1009016,
              name: "apple cider",
              localizedName: "apple cider",
              image: "apple-cider.jpg",
            },
            {
              id: 1001,
              name: "butter",
              localizedName: "butter",
              image: "butter-sliced.jpg",
            },
            {
              id: 10019230,
              name: "icing",
              localizedName: "icing",
              image: "frosting-or-icing.png",
            },
          ],
          equipment: [
            {
              id: 405900,
              name: "wire rack",
              localizedName: "wire rack",
              image: "wire-rack.jpg",
            },
            {
              id: 404784,
              name: "oven",
              localizedName: "oven",
              image: "oven.jpg",
            },
            {
              id: 3065,
              name: "skewers",
              localizedName: "skewers",
              image: "wooden-skewers.jpg",
            },
            {
              id: 404783,
              name: "bowl",
              localizedName: "bowl",
              image: "bowl.jpg",
            },
            {
              id: 404645,
              name: "frying pan",
              localizedName: "frying pan",
              image: "pan.png",
            },
          ],
          length: {
            number: 25,
            unit: "minutes",
          },
        },
      ],
    },
  ],
  originalId: null,
  spoonacularScore: 4.599127769470215,
};
