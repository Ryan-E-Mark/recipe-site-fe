import { useNavigate } from "react-router-dom";
import { Divider } from "../components/common/divider";
import { getStringCapitalized } from "../utils/get-string-capitalized";

export const SearchByIngredients = () => {
  const navigate = useNavigate();

  const handleOnClick = (ingredient: string) => {
    navigate(`/recipe-by-ingredient-results`, {
      state: { ingredient: ingredient },
    });
  };

  return (
    <div className="w-1/4 md:w-full flex flex-col items-center">
      <div className="w-3/4 flex flex-col items-center">
        <div className="flex flex-col mt-12">
          <h3 className="text-lg font-bold">
            Find an ingredient by it's first letter
          </h3>
          <div className="flex">
            {INGREDIENTS.map((ingr, idx) => {
              return (
                <div key={idx} className="px-1">
                  <a
                    className="px-2 border border-lime-200 hover:bg-lime-200 hover:cursor-pointer hover:font-bold"
                    href={`#${ingr.letter}`}
                  >
                    {ingr.letter}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col my-8">
          {INGREDIENTS.map((ingr, idx) => {
            if (ingr.ingredients.length) {
              return (
                <div key={idx} id={ingr.letter} className="my-4">
                  <h3 className="text-2xl font-bold">{ingr.letter}</h3>
                  <Divider />
                  <div className="flex">
                    {ingr.ingredients
                      .sort()
                      .map((individual_ingredient, idx) => {
                        return (
                          <div
                            key={idx}
                            className="px-4 hover:underline hover:cursor-pointer"
                            onClick={() => handleOnClick(individual_ingredient)}
                          >
                            <p>{getStringCapitalized(individual_ingredient)}</p>
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

const INGREDIENTS = [
  {
    letter: "A",
    ingredients: ["almonds", "almond flour", "apples", "avocados", "apricots"],
  },
  {
    letter: "B",
    ingredients: [
      "bananas",
      "barley",
      "beef",
      "bacon",
      "blueberries",
      "brisket",
    ],
  },
  {
    letter: "C",
    ingredients: [
      "cheese",
      "cherries",
      "chia seeds",
      "chicken",
      "chocolate",
      "coconut",
      "corn",
      "corn flour",
      "cinnamon",
      "crab",
    ],
  },
  {
    letter: "D",
    ingredients: ["duck", "dates"],
  },
  {
    letter: "E",
    ingredients: ["eggs", "eggplant"],
  },
  {
    letter: "F",
    ingredients: ["fish", "flax seeds", "flour", "feta", "fig", "falafel"],
  },
  {
    letter: "G",
    ingredients: ["ground beef", "ground chicken", "ground turkey"],
  },
  {
    letter: "H",
    ingredients: ["ham", "hummus", "honey"],
  },
  {
    letter: "I",
    ingredients: [],
  },
  {
    letter: "J",
    ingredients: ["jalapeno", "jelly"],
  },
  {
    letter: "K",
    ingredients: ["kale", "kiwi"],
  },
  {
    letter: "L",
    ingredients: ["lamb", "lentils", "lime", "lobster", "leeks"],
  },
  {
    letter: "M",
    ingredients: ["mangos", "millet", "mushrooms", "melon", "milk"],
  },
  {
    letter: "N",
    ingredients: ["nectarines"],
  },
  {
    letter: "O",
    ingredients: ["oranges", "oats", "okra", "onion", "olives"],
  },
  {
    letter: "P",
    ingredients: [
      "peaches",
      "peanuts",
      "pears",
      "pineapple",
      "pork",
      "plums",
      "potatoes",
    ],
  },
  {
    letter: "Q",
    ingredients: ["quinoa", "quail"],
  },
  {
    letter: "R",
    ingredients: ["radish", "raisins", "raspberry", "rhubarb", "rice"],
  },
  {
    letter: "S",
    ingredients: [
      "sausage",
      "steak",
      "shellfish",
      "salmon",
      "scallops",
      "spinach",
      "shrimp",
    ],
  },
  {
    letter: "T",
    ingredients: ["turkey", "tapioca", "tangerine", "tomatoes", "truffle"],
  },
  {
    letter: "U",
    ingredients: [],
  },
  {
    letter: "V",
    ingredients: ["veal", "venison", "vanilla"],
  },
  {
    letter: "W",
    ingredients: [],
  },
  {
    letter: "X",
    ingredients: [],
  },
  {
    letter: "Y",
    ingredients: ["yuca", "yams", "yogurt", "yuzu"],
  },
  {
    letter: "Z",
    ingredients: ["zucchini"],
  },
];
