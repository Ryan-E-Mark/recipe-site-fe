import { useLocation } from "react-router-dom";
import { RecipeListItem } from "./recipe-list-item";
import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";

type SearchResults =
  | {
      id: number;
      title: string;
      readyInMinutes: number;
      image: string;
      imageUrls: string[];
    }[]
  | [];

const BASE_IMAGE_URL = "https://spoonacular.com/recipeImages/";

export const RecipeList = () => {
  const searchTerm = useLocation().state.term;
  const [searchResults, setSearchResults] = useState<SearchResults>([]);
  const [isLoading, setIsLoading] = useState(false);

  const options = useMemo(() => {
    return {
      method: "GET",
      url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search",
      params: {
        query: searchTerm,
        diet: "",
        excludeIngredients: "",
        intolerances: "",
        number: "10",
        offset: "0",
        type: "",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RECIPE_SEARCH_API_KEY,
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };
  }, [searchTerm]);

  const fetchRecipes = useCallback(async () => {
    setIsLoading(true);
    try {
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
  }, [searchTerm, options, fetchRecipes]);

  return (
    <div className="justify-center content-center ">
      {isLoading && (
        <div className="flex justify-center">
          <Oval height="60" width="60" />
        </div>
      )}
      {!isLoading && mockedData?.length > 0 && (
        <div className="flex flex-wrap justify-center content-center">
          <h2 className="m-4">Results for "{searchTerm}"</h2>
          <div className="grid grid-cols-4 gap-4 my-6 mx-2">
            {mockedData?.map((recipe) => {
              const imgUrl = `${BASE_IMAGE_URL}${recipe.image}`;
              return (
                <RecipeListItem
                  id={recipe.id}
                  image={imgUrl}
                  title={recipe.title}
                  timeToCook={recipe.readyInMinutes}
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
    readyInMinutes: 60,
    sourceUrl:
      "http://www.delish.com/cooking/recipe-ideas/recipes/a23995/apple-cardamom-cakes-cider-icing/",
    image: "apple-cardamom-cakes-with-apple-cider-icing-822282.jpg",
    servings: 24,
    id: 822282,
    title: "Apple-Cardamom Cakes with Apple Cider Icing",
  },
  {
    readyInMinutes: 45,
    sourceUrl:
      "http://www.epicurious.com/recipes/food/views/Apple-Date-Compote-with-Apple-Cider-Yogurt-Cheese-5696",
    image: "Apple-Date-Compote-with-Apple-Cider-Yogurt-Cheese-185877.jpg",
    servings: 6,
    id: 185877,
    title: "Apple-Date Compote with Apple-Cider Yogurt Cheese",
  },
  {
    readyInMinutes: 25,
    sourceUrl:
      "http://www.cafeterrablog.com/2012/09/29/apple-party-from-the-vault-apple-craisin-bread-pudding/",
    image: "Apple-Party-From-the-Vault--Apple-Craisin-Bread-Pudding-515137.jpg",
    servings: 10,
    id: 515137,
    title: "Apple Party! From the Vault – Apple Craisin Bread Pudding",
  },
  {
    readyInMinutes: 20,
    sourceUrl:
      "http://www.brighteyedbaker.com/2014/10/07/spiced-apple-muffins-with-apple-cinnamon-glaze/",
    image: "spiced-apple-muffins-with-apple-cinnamon-glaze-616320.jpg",
    servings: 12,
    id: 616320,
    title: "Spiced Apple Muffins with Apple Cinnamon Glaze",
  },
  {
    readyInMinutes: 50,
    sourceUrl:
      "http://www.ohsweetbasil.com/2013/05/heirloom-apple-rolls-recipe.html",
    image: "Heirloom-Apple-Rolls-549120.jpg",
    servings: 9,
    id: 549120,
    title: "Heirloom Apple Rolls",
  },
  {
    readyInMinutes: 150,
    sourceUrl:
      "https://www.howsweeteats.com/2019/10/apple-cider-donut-cake-with-brown-butter/",
    image: "apple-cider-donut-cake-with-brown-butter-1140226.jpg",
    servings: 8,
    id: 1140226,
    title: "Apple Cider Donut Cake with Brown Butter",
  },
  {
    readyInMinutes: 380,
    sourceUrl:
      "http://simple-nourished-living.com/2013/11/slow-cooker-sweet-potato-apple-casserole/",
    image: "Slow-Cooker-Sweet-Potato-Apple-Casserole-525571.jpg",
    servings: 8,
    id: 525571,
    title: "Slow Cooker Sweet Potato Apple Casserole",
  },
  {
    readyInMinutes: 45,
    sourceUrl:
      "http://www.epicurious.com/recipes/food/views/Grilled-Monster-Pork-Chops-with-Tomatillo-and-Green-Apple-Sauce-109529",
    image:
      "grilled-monster-pork-chops-with-tomatillo-and-green-apple-sauce-2-26371.jpg",
    servings: 6,
    id: 26371,
    title: "Grilled Monster Pork Chops with Tomatillo and Green Apple Sauce",
  },
  {
    readyInMinutes: 1,
    sourceUrl:
      "http://www.kraftrecipes.com/recipes/1-minute-apple-tortilla-76126.aspx",
    image: "1-minute-apple-tortilla-267780.jpg",
    servings: 1,
    id: 267780,
    title: "1-Minute Apple Tortilla",
  },
  {
    readyInMinutes: 60,
    sourceUrl: "http://www.food.com/recipe/baked-apple-pancakes-80718",
    image: "baked-apple-pancakes-2-123908.jpg",
    servings: 6,
    id: 123908,
    title: "Baked Apple Pancakes",
  },
];
