import { RecipeListItem } from "./recipe-list-item";
import { FC } from "react";
import { SearchResults } from "./types";
import { Loader } from "../common/loader";

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
        {(isLoading || !searchResults.length) && (
          <Loader
          />
        )}
      </div>
      <div className="flex justify-center content-center">
        {!isLoading && searchResults?.length > 0 && (
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
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const mockedData = [
  {
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    veryHealthy: false,
    cheap: false,
    veryPopular: false,
    sustainable: false,
    lowFodmap: false,
    weightWatcherSmartPoints: 4,
    gaps: "no",
    preparationMinutes: 25,
    cookingMinutes: 0,
    aggregateLikes: 3,
    healthScore: 0,
    creditsText: "Betty Crocker",
    sourceName: "Betty Crocker",
    pricePerServing: 20.58,
    id: 172934,
    title: "Doughnut Holes 5 Ways",
    readyInMinutes: 25,
    servings: 38,
    sourceUrl:
      "http://www.bettycrocker.com/recipes/five-way-doughnut-holes/e8ef7425-dedb-43c2-8d98-ad7154056802",
    image: "https://spoonacular.com/recipeImages/172934-312x231.jpg",
    imageType: "jpg",
    summary:
      'Doughnut Holes 5 Ways is a breakfast that serves 38. One portion of this dish contains around <b>1g of protein</b>, <b>3g of fat</b>, and a total of <b>84 calories</b>. For <b>21 cents per serving</b>, this recipe <b>covers 1%</b> of your daily requirements of vitamins and minerals. If you have ground cinnamon, sugars, vanilla, and a few other ingredients on hand, you can make it. 3 people found this recipe to be yummy and satisfying. It is brought to you by Betty Crocker. From preparation to the plate, this recipe takes roughly <b>25 minutes</b>. Overall, this recipe earns a <b>very bad (but still fixable) spoonacular score of 7%</b>. <a href="https://spoonacular.com/recipes/applesauce-doughnut-holes-1737433">Applesauce Doughnut Holes</a>, <a href="https://spoonacular.com/recipes/art-doughnut-holes-587037">ART Doughnut Holes</a>, and <a href="https://spoonacular.com/recipes/chocolate-doughnut-holes-738181">Chocolate Doughnut Holes</a> are very similar to this recipe.',
    cuisines: [],
    dishTypes: ["morning meal", "brunch", "breakfast"],
    diets: [],
    occasions: [],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "In deep fryer or 2-quart heavy saucepan, heat 2 to 3 inches oil to 375F.",
            ingredients: [
              {
                id: 4582,
                name: "cooking oil",
                localizedName: "cooking oil",
                image: "vegetable-oil.jpg",
              },
            ],
            equipment: [
              {
                id: 404759,
                name: "deep fryer",
                localizedName: "deep fryer",
                image: "deep-fryer.jpg",
              },
              {
                id: 404669,
                name: "sauce pan",
                localizedName: "sauce pan",
                image: "sauce-pan.jpg",
              },
            ],
          },
          {
            number: 2,
            step: "Place one of the Coating Flavors into a brown paper lunch bag (about 10 3/4 x 5 inches) or medium bowl.",
            ingredients: [],
            equipment: [
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
          },
          {
            number: 3,
            step: "Lightly spoon Bisquick mix into measuring cup; level off with straight edge of knife.",
            ingredients: [
              {
                id: 18010,
                name: "baking mix",
                localizedName: "baking mix",
                image: "brown-flour.jpg",
              },
            ],
            equipment: [
              {
                id: 404766,
                name: "measuring cup",
                localizedName: "measuring cup",
                image: "measuring-cup.jpg",
              },
              {
                id: 404745,
                name: "knife",
                localizedName: "knife",
                image: "chefs-knife.jpg",
              },
            ],
          },
          {
            number: 4,
            step: "Add to medium bowl along with remaining Doughnut Hole ingredients; mix just until dough forms. Work with half of the dough at a time; cover and refrigerate remaining half of dough. Shape dough into 1-inch balls.",
            ingredients: [
              {
                id: 0,
                name: "dough",
                localizedName: "dough",
                image: "pizza-dough",
              },
            ],
            equipment: [
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
          },
          {
            number: 5,
            step: "Sprinkle fingers and hands with Bisquick mix if they get sticky. Carefully drop balls, 5 or 6 at a time, into hot oil. Fry 1 to 2 minutes or until golden brown all around; drain on paper towels. Immediately gently shake 2 or 3 doughnut holes at a time in bag, or roll in coating in bowl. Repeat with refrigerated dough.",
            ingredients: [
              {
                id: 18010,
                name: "baking mix",
                localizedName: "baking mix",
                image: "brown-flour.jpg",
              },
              {
                id: 0,
                name: "dough",
                localizedName: "dough",
                image: "pizza-dough",
              },
              {
                id: 0,
                name: "shake",
                localizedName: "shake",
                image: "",
              },
              {
                id: 0,
                name: "roll",
                localizedName: "roll",
                image: "dinner-yeast-rolls.jpg",
              },
              {
                id: 4582,
                name: "cooking oil",
                localizedName: "cooking oil",
                image: "vegetable-oil.jpg",
              },
            ],
            equipment: [
              {
                id: 405895,
                name: "paper towels",
                localizedName: "paper towels",
                image: "paper-towels.jpg",
              },
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
            length: {
              number: 1,
              unit: "minutes",
            },
          },
        ],
      },
    ],
    spoonacularScore: 10.513004302978516,
  },
  {
    vegetarian: false,
    vegan: false,
    glutenFree: true,
    dairyFree: true,
    veryHealthy: false,
    cheap: false,
    veryPopular: false,
    sustainable: false,
    lowFodmap: true,
    weightWatcherSmartPoints: 7,
    gaps: "no",
    preparationMinutes: 10,
    cookingMinutes: 20,
    aggregateLikes: 0,
    healthScore: 0,
    creditsText: "My Recipes",
    sourceName: "My Recipes",
    pricePerServing: 52.14,
    id: 329853,
    title: "Doughnut Bites with Bacon Sugar",
    readyInMinutes: 30,
    servings: 100,
    sourceUrl:
      "http://www.myrecipes.com/recipe/dough-nut-bites-with-bacon-sugar-00420000006826/",
    image: "https://spoonacular.com/recipeImages/329853-312x231.jpg",
    imageType: "jpg",
    summary:
      'You can never have too many breakfast recipes, so give Doughnut Bites with Bacon Sugar a try. Watching your figure? This gluten free, dairy free, and fodmap friendly recipe has <b>157 calories</b>, <b>3g of protein</b>, and <b>9g of fat</b> per serving. This recipe serves 100 and costs 52 cents per serving. 1 person has made this recipe and would make it again. This recipe from My Recipes requires chocolate glaze, coffee, bacon, and vanillan extract. From preparation to the plate, this recipe takes around <b>30 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 9%</b>, which is improvable. Similar recipes include <a href="https://spoonacular.com/recipes/maple-bacon-doughnut-bites-383902">Maple-Bacon Doughnut Bites</a>, <a href="https://spoonacular.com/recipes/bacon-brown-sugar-cream-doughnut-holes-897386">Bacon Brown Sugar Cream Doughnut Holes</a>, and <a href="https://spoonacular.com/recipes/pumpkin-doughnuts-with-powdered-sugar-glaze-and-spiced-sugar-doughnut-holes-185766">Pumpkin Doughnuts with Powdered Sugar Glaze and Spiced Sugar Doughnut Holes</a>.',
    cuisines: [],
    dishTypes: ["morning meal", "brunch", "breakfast"],
    diets: ["gluten free", "dairy free", "fodmap friendly"],
    occasions: [],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "COMBINE water and instant potato flakes in large bowl. Stir until moistened.",
            ingredients: [
              {
                id: 11378,
                name: "instant potatoes flakes",
                localizedName: "instant potatoes flakes",
                image: "instant-potatoes.png",
              },
              {
                id: 14412,
                name: "water",
                localizedName: "water",
                image: "water.png",
              },
            ],
            equipment: [
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
          },
          {
            number: 2,
            step: "Add egg yolk, 1 tablespoon oil, sugar and vanilla; mix well. Gradually stir in 1 1/2 cups pancake mix.",
            ingredients: [
              {
                id: 18292,
                name: "pancake mix",
                localizedName: "pancake mix",
                image: "pancakes-isolated.jpg",
              },
              {
                id: 1125,
                name: "egg yolk",
                localizedName: "egg yolk",
                image: "egg-yolk.jpg",
              },
              {
                id: 1052050,
                name: "vanilla",
                localizedName: "vanilla",
                image: "vanilla.jpg",
              },
              {
                id: 19335,
                name: "sugar",
                localizedName: "sugar",
                image: "sugar-in-bowl.png",
              },
              {
                id: 4582,
                name: "cooking oil",
                localizedName: "cooking oil",
                image: "vegetable-oil.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 3,
            step: "SPRINKLE work surface with remaining 1 tablespoon pancake mix. Turn dough out onto work surface. Knead dough until well blended, about 1 minute. Shape into a 4-inch disk. Wrap in plastic wrap and chill 1 hour or overnight.",
            ingredients: [
              {
                id: 18292,
                name: "pancake mix",
                localizedName: "pancake mix",
                image: "pancakes-isolated.jpg",
              },
              {
                id: 0,
                name: "dough",
                localizedName: "dough",
                image: "pizza-dough",
              },
              {
                id: 10018364,
                name: "wrap",
                localizedName: "wrap",
                image: "flour-tortilla.jpg",
              },
            ],
            equipment: [
              {
                id: 404730,
                name: "plastic wrap",
                localizedName: "plastic wrap",
                image: "plastic-wrap.jpg",
              },
            ],
            length: {
              number: 61,
              unit: "minutes",
            },
          },
          {
            number: 4,
            step: "For Bacon Sugar Coating: MINCE cooked bacon in food processor until very fine.",
            ingredients: [
              {
                id: 10862,
                name: "cooked bacon",
                localizedName: "cooked bacon",
                image: "cooked-bacon.jpg",
              },
              {
                id: 10123,
                name: "bacon",
                localizedName: "bacon",
                image: "raw-bacon.png",
              },
              {
                id: 0,
                name: "ground meat",
                localizedName: "ground meat",
                image: "fresh-ground-beef.jpg",
              },
              {
                id: 19335,
                name: "sugar",
                localizedName: "sugar",
                image: "sugar-in-bowl.png",
              },
            ],
            equipment: [
              {
                id: 404771,
                name: "food processor",
                localizedName: "food processor",
                image: "food-processor.png",
              },
            ],
          },
          {
            number: 5,
            step: "Add sugar; pulse 2 to 3 seconds just until blended.",
            ingredients: [
              {
                id: 19335,
                name: "sugar",
                localizedName: "sugar",
                image: "sugar-in-bowl.png",
              },
            ],
            equipment: [],
          },
          {
            number: 6,
            step: "For Optional Chocolate Glaze: PLACE syrup and chocolate in small microwave-safe bowl. Microwave on HIGH 30 to 45 seconds. Stir until mixture is smooth. Stir in powdered sugar. Gradually blend in coffee until desired consistency.",
            ingredients: [
              {
                id: 19375,
                name: "chocolate glaze",
                localizedName: "chocolate glaze",
                image: "chocolate-glaze.png",
              },
              {
                id: 19336,
                name: "powdered sugar",
                localizedName: "powdered sugar",
                image: "powdered-sugar.jpg",
              },
              {
                id: 19081,
                name: "chocolate",
                localizedName: "chocolate",
                image: "milk-chocolate.jpg",
              },
              {
                id: 14209,
                name: "coffee",
                localizedName: "coffee",
                image: "brewed-coffee.jpg",
              },
              {
                id: 0,
                name: "syrup",
                localizedName: "syrup",
                image: "",
              },
            ],
            equipment: [
              {
                id: 404762,
                name: "microwave",
                localizedName: "microwave",
                image: "microwave.jpg",
              },
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
          },
          {
            number: 7,
            step: "POUR oil into large heavy saucepan to 1-inch depth.",
            ingredients: [
              {
                id: 4582,
                name: "cooking oil",
                localizedName: "cooking oil",
                image: "vegetable-oil.jpg",
              },
            ],
            equipment: [
              {
                id: 404669,
                name: "sauce pan",
                localizedName: "sauce pan",
                image: "sauce-pan.jpg",
              },
            ],
          },
          {
            number: 8,
            step: "Heat oil to 350F.",
            ingredients: [
              {
                id: 4582,
                name: "cooking oil",
                localizedName: "cooking oil",
                image: "vegetable-oil.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 9,
            step: "ROLL out dough to a 1/2-inch thickness on floured surface.",
            ingredients: [
              {
                id: 0,
                name: "dough",
                localizedName: "dough",
                image: "pizza-dough",
              },
              {
                id: 0,
                name: "roll",
                localizedName: "roll",
                image: "dinner-yeast-rolls.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 10,
            step: "Cut out small rounds using a 1 1/2-inch round pastry cutter or cut into 1 1/2-inch squares using a sharp knife. Working in batches, fry dough 30 to 60 seconds or until puffed and golden brown on all sides.",
            ingredients: [
              {
                id: 0,
                name: "dough",
                localizedName: "dough",
                image: "pizza-dough",
              },
            ],
            equipment: [
              {
                id: 406916,
                name: "pastry cutter",
                localizedName: "pastry cutter",
                image: "dough-cutter.jpg",
              },
              {
                id: 404745,
                name: "knife",
                localizedName: "knife",
                image: "chefs-knife.jpg",
              },
            ],
          },
          {
            number: 11,
            step: "Drain on paper towels.",
            ingredients: [],
            equipment: [
              {
                id: 405895,
                name: "paper towels",
                localizedName: "paper towels",
                image: "paper-towels.jpg",
              },
            ],
          },
          {
            number: 12,
            step: "Roll in Bacon Sugar Coating or dip one side in Chocolate Glaze and then in Bacon Sugar Coating.",
            ingredients: [
              {
                id: 19375,
                name: "chocolate glaze",
                localizedName: "chocolate glaze",
                image: "chocolate-glaze.png",
              },
              {
                id: 10123,
                name: "bacon",
                localizedName: "bacon",
                image: "raw-bacon.png",
              },
              {
                id: 19335,
                name: "sugar",
                localizedName: "sugar",
                image: "sugar-in-bowl.png",
              },
              {
                id: 0,
                name: "roll",
                localizedName: "roll",
                image: "dinner-yeast-rolls.jpg",
              },
              {
                id: 0,
                name: "dip",
                localizedName: "dip",
                image: "",
              },
            ],
            equipment: [],
          },
          {
            number: 13,
            step: "Serve warm.",
            ingredients: [],
            equipment: [],
          },
        ],
      },
    ],
    spoonacularScore: 9.369304656982422,
  },
  {
    vegetarian: true,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    veryHealthy: false,
    cheap: false,
    veryPopular: false,
    sustainable: false,
    lowFodmap: false,
    weightWatcherSmartPoints: 3,
    gaps: "no",
    preparationMinutes: 10,
    cookingMinutes: 5,
    aggregateLikes: 28,
    healthScore: 0,
    creditsText: "Guilty Kitchen",
    sourceName: "Guilty Kitchen",
    pricePerServing: 10.28,
    id: 619463,
    title: "Doughnut FRYday – French Crullers",
    readyInMinutes: 15,
    servings: 30,
    sourceUrl:
      "http://guiltykitchen.com/2014/10/24/doughnut-fryday-french-crullers/",
    image: "https://spoonacular.com/recipeImages/619463-312x231.jpg",
    imageType: "jpg",
    summary:
      'Doughnut FRYday – French Crullers takes about <b>15 minutes</b> from beginning to end. For <b>10 cents per serving</b>, this recipe <b>covers 1%</b> of your daily requirements of vitamins and minerals. This recipe serves 30. This breakfast has <b>67 calories</b>, <b>1g of protein</b>, and <b>4g of fat</b> per serving. 28 people were impressed by this recipe. A mixture of milk, eggs, honey, and a handful of other ingredients are all it takes to make this recipe so tasty. It is a <b>very affordable</b> recipe for fans of Mediterranean food. It is brought to you by Guilty Kitchen. It is a good option if you\'re following a <b>lacto ovo vegetarian</b> diet. Overall, this recipe earns an <b>improvable spoonacular score of 10%</b>. Similar recipes are <a href="https://spoonacular.com/recipes/doughnut-fryday-glazed-doughnuts-615785">Doughnut FRYday – Glazed Doughnuts</a>, <a href="https://spoonacular.com/recipes/doughnut-fryday-old-fashioned-cake-616640">Doughnut FRYday – Old Fashioned Cake</a>, and <a href="https://spoonacular.com/recipes/french-crullers-151640">French Crullers</a>.',
    cuisines: ["Mediterranean", "French", "European"],
    dishTypes: ["morning meal", "brunch", "breakfast"],
    diets: ["lacto ovo vegetarian"],
    occasions: [],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "In a small saucepan, bring the water, butter, sugar and salt to a simmer over medium high heat.",
            ingredients: [
              {
                id: 1001,
                name: "butter",
                localizedName: "butter",
                image: "butter-sliced.jpg",
              },
              {
                id: 19335,
                name: "sugar",
                localizedName: "sugar",
                image: "sugar-in-bowl.png",
              },
              {
                id: 14412,
                name: "water",
                localizedName: "water",
                image: "water.png",
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
                id: 404669,
                name: "sauce pan",
                localizedName: "sauce pan",
                image: "sauce-pan.jpg",
              },
            ],
          },
          {
            number: 2,
            step: "Add the flour and stir with a wooden spoon until its turns into a thick paste and pulls cleanly away from the sides of the saucepan.",
            ingredients: [
              {
                id: 20081,
                name: "all purpose flour",
                localizedName: "all purpose flour",
                image: "flour.png",
              },
            ],
            equipment: [
              {
                id: 404732,
                name: "wooden spoon",
                localizedName: "wooden spoon",
                image: "wooden-spoon.jpg",
              },
              {
                id: 404669,
                name: "sauce pan",
                localizedName: "sauce pan",
                image: "sauce-pan.jpg",
              },
            ],
          },
          {
            number: 3,
            step: "Remove from the heat and either transfer to a bowl or the bowl of a stand mixer fitted with the paddle attachment. Beat on low for a minute or so to allow to cool slightly.",
            ingredients: [],
            equipment: [
              {
                id: 404665,
                name: "stand mixer",
                localizedName: "stand mixer",
                image: "stand-mixer.jpg",
              },
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
          },
          {
            number: 4,
            step: 'Add the first egg and beat on medium speed until fully incorporated. Scrape down the sides and add the remaining eggs one at a time, stirring till each egg is incorporated.When dough is glossy and smooth, spoon rounded teaspoonfuls into 360F oil (in a deep fryer or at least 2-3" in a pot over medium low heat).Balls will float to the surface and turn themselves over. Allow to fry for 2-3 minutes or until golden brown. (Do not remove too soon as undercooked crullers will deflate and be very sad). Dip or brush on glaze while still warm. Best eaten same day or given to neighbours as bribes for helping you with your dogs...:)Stir all ingredients until smooth.',
            ingredients: [
              {
                id: 0,
                name: "dough",
                localizedName: "dough",
                image: "pizza-dough",
              },
              {
                id: 0,
                name: "glaze",
                localizedName: "glaze",
                image: "",
              },
              {
                id: 21118,
                name: "hot dogs",
                localizedName: "hot dogs",
                image: "hotdogs.png",
              },
              {
                id: 1123,
                name: "egg",
                localizedName: "egg",
                image: "egg.png",
              },
              {
                id: 0,
                name: "dip",
                localizedName: "dip",
                image: "",
              },
              {
                id: 4582,
                name: "cooking oil",
                localizedName: "cooking oil",
                image: "vegetable-oil.jpg",
              },
            ],
            equipment: [
              {
                id: 404759,
                name: "deep fryer",
                localizedName: "deep fryer",
                image: "deep-fryer.jpg",
              },
              {
                id: 404752,
                name: "pot",
                localizedName: "pot",
                image: "stock-pot.jpg",
              },
            ],
            length: {
              number: 3,
              unit: "minutes",
            },
          },
        ],
      },
    ],
    spoonacularScore: 4.020780086517334,
  },
  {
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
    preparationMinutes: 60,
    cookingMinutes: 3,
    aggregateLikes: 24,
    healthScore: 2,
    creditsText: "Guilty Kitchen",
    sourceName: "Guilty Kitchen",
    pricePerServing: 30.39,
    id: 615785,
    title: "Doughnut FRYday – Glazed Doughnuts",
    readyInMinutes: 63,
    servings: 6,
    sourceUrl:
      "http://guiltykitchen.com/2014/10/03/doughnut-fryday-glazed-doughnuts/",
    image: "https://spoonacular.com/recipeImages/615785-312x231.jpg",
    imageType: "jpg",
    summary:
      'The recipe Doughnut FRYday – Glazed Doughnuts can be made <b>in around 1 hour and 3 minutes</b>. This recipe serves 6 and costs 30 cents per serving. One serving contains <b>232 calories</b>, <b>5g of protein</b>, and <b>6g of fat</b>. 24 people found this recipe to be scrumptious and satisfying. A mixture of milk, natural cane sugar, egg, and a handful of other ingredients are all it takes to make this recipe so delicious. It works well as an inexpensive breakfast. It is brought to you by Guilty Kitchen. It is a good option if you\'re following a <b>lacto ovo vegetarian</b> diet. With a spoonacular <b>score of 32%</b>, this dish is not so tremendous. Try <a href="https://spoonacular.com/recipes/doughnut-fryday-french-crullers-619463">Doughnut FRYday – French Crullers</a>, <a href="https://spoonacular.com/recipes/doughnut-fryday-old-fashioned-cake-616640">Doughnut FRYday – Old Fashioned Cake</a>, and <a href="https://spoonacular.com/recipes/glazed-doughnut-muffins-1252787">Glazed Doughnut Muffins</a> for similar recipes.',
    cuisines: [],
    dishTypes: ["morning meal", "brunch", "breakfast"],
    diets: ["lacto ovo vegetarian"],
    occasions: [],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "In a small bowl, stir together 1/2 cup of the flour with the sugar, salt and yeast. Stir in the milk, butter and egg and stir until smooth.",
            ingredients: [
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
                id: 18375,
                name: "yeast",
                localizedName: "yeast",
                image: "yeast-granules.jpg",
              },
              {
                id: 1077,
                name: "milk",
                localizedName: "milk",
                image: "milk.png",
              },
              {
                id: 2047,
                name: "salt",
                localizedName: "salt",
                image: "salt.jpg",
              },
              {
                id: 1123,
                name: "egg",
                localizedName: "egg",
                image: "egg.png",
              },
            ],
            equipment: [
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
          },
          {
            number: 2,
            step: 'Add another 3/4 cup of the flour and pour out onto countertop covered in remaining flour. Knead dough until smooth and elastic. Dust a small amount of flour onto rolling surface and roll dough out to 1/2" thick.',
            ingredients: [
              {
                id: 0,
                name: "dough",
                localizedName: "dough",
                image: "pizza-dough",
              },
              {
                id: 20081,
                name: "all purpose flour",
                localizedName: "all purpose flour",
                image: "flour.png",
              },
              {
                id: 0,
                name: "roll",
                localizedName: "roll",
                image: "dinner-yeast-rolls.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 3,
            step: 'Cut using a doughnut cutter or two sizes of round cookie cutters (one at least 1" smaller than the other).',
            ingredients: [
              {
                id: 10118192,
                name: "cookies",
                localizedName: "cookies",
                image: "shortbread-cookies.jpg",
              },
            ],
            equipment: [
              {
                id: 221429,
                name: "cookie cutter",
                localizedName: "cookie cutter",
                image: "cookie-cutters.jpg",
              },
            ],
          },
          {
            number: 4,
            step: "Place on a greased surface or on greased parchment squares for even easier removal. Cover and let rise in a turned off oven with the inside light turned on. For added heat, place a bowl of warm water in the bottom of the oven as well. Allow dough to rise for 30-40 minutes or until doubled.",
            ingredients: [
              {
                id: 0,
                name: "dough",
                localizedName: "dough",
                image: "pizza-dough",
              },
              {
                id: 14412,
                name: "water",
                localizedName: "water",
                image: "water.png",
              },
            ],
            equipment: [
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
              },
            ],
            length: {
              number: 40,
              unit: "minutes",
            },
          },
          {
            number: 5,
            step: 'Heat fryer or pot of oil (at least 2" deep) to 360F, Drop dough in one at a time (do not crowd) and cook for 1 minute, flip and cook for an additional 1 minute.',
            ingredients: [
              {
                id: 0,
                name: "dough",
                localizedName: "dough",
                image: "pizza-dough",
              },
              {
                id: 4582,
                name: "cooking oil",
                localizedName: "cooking oil",
                image: "vegetable-oil.jpg",
              },
            ],
            equipment: [
              {
                id: 404752,
                name: "pot",
                localizedName: "pot",
                image: "stock-pot.jpg",
              },
            ],
            length: {
              number: 2,
              unit: "minutes",
            },
          },
          {
            number: 6,
            step: "Remove with slotted spoon, and place on paper towels to drain. Cool slightly before brushing glaze on.",
            ingredients: [
              {
                id: 0,
                name: "glaze",
                localizedName: "glaze",
                image: "",
              },
            ],
            equipment: [
              {
                id: 404636,
                name: "slotted spoon",
                localizedName: "slotted spoon",
                image: "slotted-spoon.jpg",
              },
              {
                id: 405895,
                name: "paper towels",
                localizedName: "paper towels",
                image: "paper-towels.jpg",
              },
            ],
          },
          {
            number: 7,
            step: "Whisk all ingredients together until smooth.",
            ingredients: [],
            equipment: [
              {
                id: 404661,
                name: "whisk",
                localizedName: "whisk",
                image: "whisk.png",
              },
            ],
          },
        ],
      },
    ],
    spoonacularScore: 38.72344970703125,
  },
  {
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    veryHealthy: false,
    cheap: false,
    veryPopular: false,
    sustainable: false,
    lowFodmap: false,
    weightWatcherSmartPoints: 9,
    gaps: "no",
    preparationMinutes: 45,
    cookingMinutes: 30,
    aggregateLikes: 3,
    healthScore: 0,
    creditsText: "Foodnetwork",
    sourceName: "Foodnetwork",
    pricePerServing: 83.68,
    id: 317169,
    title: "Doughnut Holes With Strawberry Syrup",
    readyInMinutes: 75,
    servings: 24,
    sourceUrl:
      "http://www.foodnetwork.com/recipes/food-network-kitchens/doughnut-holes-with-strawberry-syrup-recipe.html",
    image: "https://spoonacular.com/recipeImages/317169-312x231.jpeg",
    imageType: "jpeg",
    summary:
      'Doughnut Holes With Strawberry Syrup might be a good recipe to expand your breakfast recipe box. This recipe makes 24 servings with <b>206 calories</b>, <b>2g of protein</b>, and <b>7g of fat</b> each. For <b>84 cents per serving</b>, this recipe <b>covers 3%</b> of your daily requirements of vitamins and minerals. It can be enjoyed any time, but it is especially good for <b>Mother\'s Day</b>. Not a lot of people made this recipe, and 3 would say it hit the spot. It is brought to you by Foodnetwork. From preparation to the plate, this recipe takes around <b>1 hour and 15 minutes</b>. If you have baking powder, elderflower liqueur, heavy cream, and a few other ingredients on hand, you can make it. Taking all factors into account, this recipe <b>earns a spoonacular score of 14%</b>, which is rather bad. Similar recipes include <a href="https://spoonacular.com/recipes/doughnut-pancakes-with-doughnut-glaze-syrup-543571">Doughnut Pancakes with Doughnut Glaze Syrup</a>, <a href="https://spoonacular.com/recipes/applesauce-doughnut-holes-579661">Applesauce Doughnut Holes</a>, and <a href="https://spoonacular.com/recipes/powdered-doughnut-holes-699639">Powdered Doughnut Holes</a>.',
    cuisines: [],
    dishTypes: ["morning meal", "brunch", "breakfast"],
    diets: [],
    occasions: ["mother's day"],
    analyzedInstructions: [
      {
        name: "Make the syrup",
        steps: [
          {
            number: 1,
            step: "Combine 1 cup water, the jelly and 2 tablespoons elderflower liqueur in a saucepan over medium heat; bring to a boil, then reduce the heat to low and simmer until syrupy, 20 to 25 minutes.",
            ingredients: [
              {
                id: 99126,
                name: "elderflower liqueur",
                localizedName: "elderflower liqueur",
                image: "elderflower-tea.jpg",
              },
              {
                id: 19297,
                name: "jelly",
                localizedName: "jelly",
                image: "grape-jelly.jpg",
              },
              {
                id: 14412,
                name: "water",
                localizedName: "water",
                image: "water.png",
              },
            ],
            equipment: [
              {
                id: 404669,
                name: "sauce pan",
                localizedName: "sauce pan",
                image: "sauce-pan.jpg",
              },
            ],
            length: {
              number: 20,
              unit: "minutes",
            },
          },
        ],
      },
      {
        name: "Transfer to a bowl and let cool, stirring occasionally. Meanwhile, make the doughnuts",
        steps: [
          {
            number: 1,
            step: "Whisk the flour, sugar, baking powder, salt and nutmeg in a large bowl. Stir in the cream, eggs, vanilla and the remaining 3 tablespoons elderflower liqueur until smooth.",
            ingredients: [
              {
                id: 99126,
                name: "elderflower liqueur",
                localizedName: "elderflower liqueur",
                image: "elderflower-tea.jpg",
              },
              {
                id: 18369,
                name: "baking powder",
                localizedName: "baking powder",
                image: "white-powder.jpg",
              },
              {
                id: 1052050,
                name: "vanilla",
                localizedName: "vanilla",
                image: "vanilla.jpg",
              },
              {
                id: 2025,
                name: "nutmeg",
                localizedName: "nutmeg",
                image: "ground-nutmeg.jpg",
              },
              {
                id: 1053,
                name: "cream",
                localizedName: "cream",
                image: "fluid-cream.jpg",
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
                id: 404661,
                name: "whisk",
                localizedName: "whisk",
                image: "whisk.png",
              },
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
          },
          {
            number: 2,
            step: "Heat about 1/3 inches vegetable oil in a large pot over medium heat until a deep=fry thermometer registers 350 degrees F. Working in batches, drop heaping tablespoonfuls of the batter into the oil and fry, turning, until golden, 4 minutes. (Reduce the heat if the doughnuts are browning too quickly.)",
            ingredients: [
              {
                id: 4669,
                name: "vegetable oil",
                localizedName: "vegetable oil",
                image: "vegetable-oil.jpg",
              },
              {
                id: 4582,
                name: "cooking oil",
                localizedName: "cooking oil",
                image: "vegetable-oil.jpg",
              },
            ],
            equipment: [
              {
                id: 404789,
                name: "kitchen thermometer",
                localizedName: "kitchen thermometer",
                image: "food-thermometer.jpg",
              },
              {
                id: 404752,
                name: "pot",
                localizedName: "pot",
                image: "stock-pot.jpg",
              },
            ],
            length: {
              number: 4,
              unit: "minutes",
            },
          },
          {
            number: 3,
            step: "Remove with a slotted spoon and drain on paper towels, then roll in cinnamon sugar.",
            ingredients: [
              {
                id: 10219335,
                name: "cinnamon sugar",
                localizedName: "cinnamon sugar",
                image: "cinnamon-sugar.png",
              },
              {
                id: 0,
                name: "roll",
                localizedName: "roll",
                image: "dinner-yeast-rolls.jpg",
              },
            ],
            equipment: [
              {
                id: 404636,
                name: "slotted spoon",
                localizedName: "slotted spoon",
                image: "slotted-spoon.jpg",
              },
              {
                id: 405895,
                name: "paper towels",
                localizedName: "paper towels",
                image: "paper-towels.jpg",
              },
            ],
          },
          {
            number: 4,
            step: "Serve with the strawberry syrup.",
            ingredients: [
              {
                id: 9316,
                name: "strawberries",
                localizedName: "strawberries",
                image: "strawberries.png",
              },
              {
                id: 0,
                name: "syrup",
                localizedName: "syrup",
                image: "",
              },
            ],
            equipment: [],
          },
          {
            number: 5,
            step: "Photograph by Con Poulos",
            ingredients: [],
            equipment: [],
          },
        ],
      },
    ],
    spoonacularScore: 4.922598361968994,
  },
  {
    vegetarian: true,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    veryHealthy: false,
    cheap: false,
    veryPopular: true,
    sustainable: false,
    lowFodmap: false,
    weightWatcherSmartPoints: 1,
    gaps: "no",
    preparationMinutes: -1,
    cookingMinutes: -1,
    aggregateLikes: 739,
    healthScore: 0,
    creditsText: "Laurens Latest",
    sourceName: "Laurens Latest",
    pricePerServing: 6.38,
    id: 587037,
    title: "ART Doughnut Holes",
    readyInMinutes: 45,
    servings: 40,
    sourceUrl:
      "http://www.laurenslatest.com/sugared-doughnut-holes-from-art-restaurant-the-four-seasons-seattle/",
    image: "https://spoonacular.com/recipeImages/587037-312x231.jpg",
    imageType: "jpg",
    summary:
      'Need a <b>lacto ovo vegetarian breakfast</b>? ART Doughnut Holes could be a tremendous recipe to try. For <b>6 cents per serving</b>, this recipe <b>covers 1%</b> of your daily requirements of vitamins and minerals. This recipe makes 40 servings with <b>50 calories</b>, <b>1g of protein</b>, and <b>3g of fat</b> each. It is brought to you by Laurens Latest. If you have active yeast, warm milk, salt, and a few other ingredients on hand, you can make it. 739 people have made this recipe and would make it again. From preparation to the plate, this recipe takes around <b>45 minutes</b>. With a spoonacular <b>score of 17%</b>, this dish is rather bad. <a href="https://spoonacular.com/recipes/chocolate-doughnut-holes-594478">Chocolate Doughnut Holes</a>, <a href="https://spoonacular.com/recipes/applesauce-doughnut-holes-579661">Applesauce Doughnut Holes</a>, and <a href="https://spoonacular.com/recipes/chocolate-doughnut-holes-738181">Chocolate Doughnut Holes</a> are very similar to this recipe.',
    cuisines: [],
    dishTypes: ["morning meal", "brunch", "breakfast"],
    diets: ["lacto ovo vegetarian"],
    occasions: [],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Whisk yeast together with milk in mixing bowl.",
            ingredients: [
              {
                id: 18375,
                name: "yeast",
                localizedName: "yeast",
                image: "yeast-granules.jpg",
              },
              {
                id: 1077,
                name: "milk",
                localizedName: "milk",
                image: "milk.png",
              },
            ],
            equipment: [
              {
                id: 405907,
                name: "mixing bowl",
                localizedName: "mixing bowl",
                image: "mixing-bowl.jpg",
              },
              {
                id: 404661,
                name: "whisk",
                localizedName: "whisk",
                image: "whisk.png",
              },
            ],
          },
          {
            number: 2,
            step: "Add ½ c bread flour and mix together until mixture becomes a dry chunky mixture. Cover mixture with remainder of bread flour, all purpose flour, sugar, and salt and let sit for 30 minutes (even though the mixture is dry, it will rise).",
            ingredients: [
              {
                id: 20081,
                name: "all purpose flour",
                localizedName: "all purpose flour",
                image: "flour.png",
              },
              {
                id: 10120129,
                name: "bread flour",
                localizedName: "bread flour",
                image: "flour.png",
              },
              {
                id: 19335,
                name: "sugar",
                localizedName: "sugar",
                image: "sugar-in-bowl.png",
              },
              {
                id: 2047,
                name: "salt",
                localizedName: "salt",
                image: "salt.jpg",
              },
            ],
            equipment: [],
            length: {
              number: 30,
              unit: "minutes",
            },
          },
          {
            number: 3,
            step: "Add 3 eggs and mix in a stand up mixer with a dough hook on medium speed for about 10 minutes, scraping down the bowl every once in a while.",
            ingredients: [
              {
                id: 0,
                name: "dough",
                localizedName: "dough",
                image: "pizza-dough",
              },
              {
                id: 1123,
                name: "egg",
                localizedName: "egg",
                image: "egg.png",
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
            ],
            length: {
              number: 10,
              unit: "minutes",
            },
          },
          {
            number: 4,
            step: "Add the remaining egg and mix for 3 more minutes.Slowly add the butter in pieces, mixing each piece in completely before adding more, scraping down the mixing bowl often.When dough is done, it will be very shiny and elastic. If the dough is not elastic, continue mixing: it will come together!",
            ingredients: [
              {
                id: 1001,
                name: "butter",
                localizedName: "butter",
                image: "butter-sliced.jpg",
              },
              {
                id: 0,
                name: "dough",
                localizedName: "dough",
                image: "pizza-dough",
              },
              {
                id: 1123,
                name: "egg",
                localizedName: "egg",
                image: "egg.png",
              },
            ],
            equipment: [
              {
                id: 405907,
                name: "mixing bowl",
                localizedName: "mixing bowl",
                image: "mixing-bowl.jpg",
              },
            ],
            length: {
              number: 3,
              unit: "minutes",
            },
          },
          {
            number: 5,
            step: "Place dough in a bowl that is big enough to allow it to double in size, cover with plastic wrap, and let sit out at room temperature for 1 ½ hours.Fold dough over on itself and then cover again with plastic wrap—chill in refrigerator overnight.Dough is now ready to fry, separate in about 40-1/2 ounce pieces and roll in to balls if you wish. {My batter was too sticky to roll, so I used a small cookie scoop and plopped them right into the hot oil...worked like a charm!} Deep fry in oil about 350 degrees Farrenheit until golden brown and toss in sugar right from the oil. Make sure these take a minute or two to fry so they get completely cooked. My oil was too hot at first and cooked the outside but not the inside. Be sure your oil is at 350!",
            ingredients: [
              {
                id: 10118192,
                name: "cookies",
                localizedName: "cookies",
                image: "shortbread-cookies.jpg",
              },
              {
                id: 0,
                name: "dough",
                localizedName: "dough",
                image: "pizza-dough",
              },
              {
                id: 19335,
                name: "sugar",
                localizedName: "sugar",
                image: "sugar-in-bowl.png",
              },
              {
                id: 0,
                name: "roll",
                localizedName: "roll",
                image: "dinner-yeast-rolls.jpg",
              },
              {
                id: 10018364,
                name: "wrap",
                localizedName: "wrap",
                image: "flour-tortilla.jpg",
              },
              {
                id: 4582,
                name: "cooking oil",
                localizedName: "cooking oil",
                image: "vegetable-oil.jpg",
              },
            ],
            equipment: [
              {
                id: 404730,
                name: "plastic wrap",
                localizedName: "plastic wrap",
                image: "plastic-wrap.jpg",
              },
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
          },
          {
            number: 6,
            step: "Serve immediately right out of the oil and sugar! So so yummy :)",
            ingredients: [
              {
                id: 19335,
                name: "sugar",
                localizedName: "sugar",
                image: "sugar-in-bowl.png",
              },
              {
                id: 4582,
                name: "cooking oil",
                localizedName: "cooking oil",
                image: "vegetable-oil.jpg",
              },
            ],
            equipment: [],
          },
        ],
      },
    ],
    spoonacularScore: 10.39863395690918,
  },
  {
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    veryHealthy: false,
    cheap: false,
    veryPopular: false,
    sustainable: false,
    lowFodmap: false,
    weightWatcherSmartPoints: 15,
    gaps: "no",
    preparationMinutes: 30,
    cookingMinutes: 0,
    aggregateLikes: 0,
    healthScore: 2,
    creditsText: "Taste of Home",
    sourceName: "Taste of Home",
    pricePerServing: 35.63,
    id: 383904,
    title: "Cake Doughnut Mix",
    readyInMinutes: 30,
    servings: 24,
    sourceUrl: "http://www.tasteofhome.com/Recipes/cake-doughnut-mix",
    image: "https://spoonacular.com/recipeImages/383904-312x231.jpg",
    imageType: "jpg",
    summary:
      'Cake Doughnut Mix requires roughly <b>30 minutes</b> from start to finish. One portion of this dish contains about <b>5g of protein</b>, <b>28g of fat</b>, and a total of <b>414 calories</b>. This recipe serves 24. For <b>36 cents per serving</b>, this recipe <b>covers 7%</b> of your daily requirements of vitamins and minerals. This recipe is liked by 1 foodies and cooks. Only a few people really liked this breakfast. A mixture of baking powder, vanillan extract, shortening, and a handful of other ingredients are all it takes to make this recipe so tasty. It is brought to you by Taste of Home. With a spoonacular <b>score of 25%</b>, this dish is not so excellent. Similar recipes include <a href="https://spoonacular.com/recipes/doughnut-pancakes-with-doughnut-glaze-syrup-543571">Doughnut Pancakes with Doughnut Glaze Syrup</a>, <a href="https://spoonacular.com/recipes/birthday-cake-doughnut-343290">Birthday Cake Doughnut</a>, and <a href="https://spoonacular.com/recipes/cake-doughnut-muffins-65619">Cake Doughnut Muffins</a>.',
    cuisines: [],
    dishTypes: ["morning meal", "brunch", "breakfast"],
    diets: [],
    occasions: [],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "In a large bowl, combine the flour, milk powder, sugar, baking powder, salt, cinnamon and nutmeg; cut in shortening until crumbly. Store in an airtight container in a cool dry place for up to 6 months.",
            ingredients: [
              {
                id: 18369,
                name: "baking powder",
                localizedName: "baking powder",
                image: "white-powder.jpg",
              },
              {
                id: 1090,
                name: "powdered milk",
                localizedName: "powdered milk",
                image: "milk-powdered.jpg",
              },
              {
                id: 4615,
                name: "shortening",
                localizedName: "shortening",
                image: "shortening.jpg",
              },
              {
                id: 2010,
                name: "cinnamon",
                localizedName: "cinnamon",
                image: "cinnamon.jpg",
              },
              {
                id: 2025,
                name: "nutmeg",
                localizedName: "nutmeg",
                image: "ground-nutmeg.jpg",
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
                id: 2047,
                name: "salt",
                localizedName: "salt",
                image: "salt.jpg",
              },
            ],
            equipment: [
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
          },
        ],
      },
    ],
    spoonacularScore: 31.650928497314453,
  },
  {
    vegetarian: true,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    veryHealthy: false,
    cheap: false,
    veryPopular: true,
    sustainable: false,
    lowFodmap: false,
    weightWatcherSmartPoints: 8,
    gaps: "no",
    preparationMinutes: -1,
    cookingMinutes: -1,
    aggregateLikes: 4946,
    healthScore: 0,
    creditsText: "Bakers Royale",
    sourceName: "Bakers Royale",
    pricePerServing: 48.48,
    id: 673355,
    title: "Jelly Doughnut",
    readyInMinutes: 45,
    servings: 18,
    sourceUrl:
      "http://www.bakersroyale.com/cakes/homemade-jelly-doughnut-recipe/",
    image: "https://spoonacular.com/recipeImages/673355-312x231.jpg",
    imageType: "jpg",
    summary:
      'Jelly Doughnut requires about <b>45 minutes</b> from start to finish. One portion of this dish contains approximately <b>3g of protein</b>, <b>10g of fat</b>, and a total of <b>214 calories</b>. This recipe serves 18 and costs 48 cents per serving. 4946 people were impressed by this recipe. Head to the store and pick up active yeast, egg yolks, vegetable oil, and a few other things to make it today. It works well as a cheap breakfast. It is brought to you by Bakers Royale. It is a good option if you\'re following a <b>lacto ovo vegetarian</b> diet. Overall, this recipe earns a <b>rather bad spoonacular score of 23%</b>. Similar recipes are <a href="https://spoonacular.com/recipes/jelly-doughnut-1262779">Jelly Doughnut</a>, <a href="https://spoonacular.com/recipes/jelly-doughnut-pancakes-493898">Jelly Doughnut Pancakes</a>, and <a href="https://spoonacular.com/recipes/jelly-glazed-doughnut-cookies-762873">Jelly-Glazed Doughnut Cookies</a>.',
    cuisines: [],
    dishTypes: ["morning meal", "brunch", "breakfast"],
    diets: ["lacto ovo vegetarian"],
    occasions: [],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Recipe adapted from Martha Stewart",
            ingredients: [],
            equipment: [],
          },
          {
            number: 2,
            step: "Placeyeast, warm milk, and 1 teaspoon sugar in a small bowl. Set aside until foamy and doubled in size, about 15 minutes.",
            ingredients: [
              {
                id: 19335,
                name: "sugar",
                localizedName: "sugar",
                image: "sugar-in-bowl.png",
              },
              {
                id: 1077,
                name: "milk",
                localizedName: "milk",
                image: "milk.png",
              },
            ],
            equipment: [
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
            length: {
              number: 15,
              unit: "minutes",
            },
          },
          {
            number: 3,
            step: "Place flour in a large bowl. Create a well in the center and add eggs, yeast mixture, 1/4 cup sugar, butter, and salt. Using a wooden spoon, stir dough starts to come together and is sticky. Flour a work surface and knead until dough is smooth, soft, and bounces back when poked with a finger, about 8 minutes (add more flour if necessary).",
            ingredients: [
              {
                id: 1001,
                name: "butter",
                localizedName: "butter",
                image: "butter-sliced.jpg",
              },
              {
                id: 0,
                name: "dough",
                localizedName: "dough",
                image: "pizza-dough",
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
                id: 18375,
                name: "yeast",
                localizedName: "yeast",
                image: "yeast-granules.jpg",
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
                id: 404732,
                name: "wooden spoon",
                localizedName: "wooden spoon",
                image: "wooden-spoon.jpg",
              },
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
            length: {
              number: 8,
              unit: "minutes",
            },
          },
          {
            number: 4,
            step: "Place in a lightly oiled bowl; cover with plastic wrap. Set in a warm place to rise until doubled, 1 to 1 1/2 hours.Lightly flour a work surface, roll dough to 1/4-inch thickness. Using a 2 1/2-inch-round cutter, cut 20 rounds. Cover with plastic wrap; let rise 15 minutes.In medium saucepan over medium heat, heat oil until a deep-frying thermometer registers 370 degrees. Using a slotted spoon, carefully slip 2 rounds into oil. Fry until golden, about 40 seconds. Turn doughnuts over; fry until golden on other side, another 40 seconds. Using a slotted spoon, transfer to a paper-towel-lined baking sheet.",
            ingredients: [
              {
                id: 0,
                name: "dough",
                localizedName: "dough",
                image: "pizza-dough",
              },
              {
                id: 20081,
                name: "all purpose flour",
                localizedName: "all purpose flour",
                image: "flour.png",
              },
              {
                id: 12135,
                name: "nuts",
                localizedName: "nuts",
                image: "nuts-mixed.jpg",
              },
              {
                id: 0,
                name: "roll",
                localizedName: "roll",
                image: "dinner-yeast-rolls.jpg",
              },
              {
                id: 10018364,
                name: "wrap",
                localizedName: "wrap",
                image: "flour-tortilla.jpg",
              },
              {
                id: 4582,
                name: "cooking oil",
                localizedName: "cooking oil",
                image: "vegetable-oil.jpg",
              },
            ],
            equipment: [
              {
                id: 404789,
                name: "kitchen thermometer",
                localizedName: "kitchen thermometer",
                image: "food-thermometer.jpg",
              },
              {
                id: 404636,
                name: "slotted spoon",
                localizedName: "slotted spoon",
                image: "slotted-spoon.jpg",
              },
              {
                id: 404727,
                name: "baking sheet",
                localizedName: "baking sheet",
                image: "baking-sheet.jpg",
              },
              {
                id: 404730,
                name: "plastic wrap",
                localizedName: "plastic wrap",
                image: "plastic-wrap.jpg",
              },
              {
                id: 404669,
                name: "sauce pan",
                localizedName: "sauce pan",
                image: "sauce-pan.jpg",
              },
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
            length: {
              number: 135,
              unit: "minutes",
            },
          },
          {
            number: 5,
            step: "Roll in sugar while warm. Fry all dough, and roll in sugar.Fill a pastry bag fitted with a #4 tip with jam. Using a wooden skewer or toothpick, make a hole in the side of each doughnut. Fit the pastry tip into a hole, pipe about 2 teaspoons jam into doughnut. Repeat with remaining doughnuts.",
            ingredients: [
              {
                id: 0,
                name: "dough",
                localizedName: "dough",
                image: "pizza-dough",
              },
              {
                id: 19335,
                name: "sugar",
                localizedName: "sugar",
                image: "sugar-in-bowl.png",
              },
              {
                id: 12135,
                name: "nuts",
                localizedName: "nuts",
                image: "nuts-mixed.jpg",
              },
              {
                id: 0,
                name: "roll",
                localizedName: "roll",
                image: "dinner-yeast-rolls.jpg",
              },
              {
                id: 19297,
                name: "jam",
                localizedName: "jam",
                image: "strawberry-jam.png",
              },
            ],
            equipment: [
              {
                id: 404757,
                name: "pastry bag",
                localizedName: "pastry bag",
                image: "pastry-bag.jpg",
              },
              {
                id: 404644,
                name: "toothpicks",
                localizedName: "toothpicks",
                image: "toothpicks.jpg",
              },
              {
                id: 3065,
                name: "skewers",
                localizedName: "skewers",
                image: "wooden-skewers.jpg",
              },
            ],
          },
        ],
      },
    ],
    spoonacularScore: 6.000303268432617,
  },
  {
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    veryHealthy: false,
    cheap: false,
    veryPopular: false,
    sustainable: false,
    lowFodmap: false,
    weightWatcherSmartPoints: 13,
    gaps: "no",
    preparationMinutes: 15,
    cookingMinutes: 15,
    aggregateLikes: 48,
    healthScore: 1,
    creditsText: "A Family Feast ",
    sourceName: "A Family Feast ",
    pricePerServing: 49.45,
    id: 675854,
    title: "Apple Doughnut Bombs",
    readyInMinutes: 30,
    servings: 9,
    sourceUrl: "http://www.afamilyfeast.com/apple-doughnut-bombs/",
    image: "https://spoonacular.com/recipeImages/675854-312x231.jpg",
    imageType: "jpg",
    summary:
      'Apple Doughnut Bombs takes roughly <b>30 minutes</b> from beginning to end. This recipe serves 9 and costs 49 cents per serving. One serving contains <b>297 calories</b>, <b>4g of protein</b>, and <b>16g of fat</b>. 48 people found this recipe to be delicious and satisfying. A few people really liked this breakfast. A mixture of apple pie spice, granulated sugar, butter, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It is brought to you by A Family Feast . Overall, this recipe earns a <b>rather bad spoonacular score of 26%</b>. Try <a href="https://spoonacular.com/recipes/apple-cider-doughnut-holes-827427">Apple Cider Doughnut Holes</a>, <a href="https://spoonacular.com/recipes/apple-cider-doughnut-cake-196244">Apple Cider Doughnut Cake</a>, and <a href="https://spoonacular.com/recipes/apple-cinnamon-doughnut-minis-162025">Apple Cinnamon Doughnut Minis</a> for similar recipes.',
    cuisines: [],
    dishTypes: ["morning meal", "brunch", "breakfast"],
    diets: [],
    occasions: [],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Preheat oven to 350 degrees F.In the bowl of a stand mixer with the paddle attachment, mix both types of flour and baking powder until blended.",
            ingredients: [
              {
                id: 18369,
                name: "baking powder",
                localizedName: "baking powder",
                image: "white-powder.jpg",
              },
              {
                id: 20081,
                name: "all purpose flour",
                localizedName: "all purpose flour",
                image: "flour.png",
              },
            ],
            equipment: [
              {
                id: 404665,
                name: "stand mixer",
                localizedName: "stand mixer",
                image: "stand-mixer.jpg",
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
                  number: 350,
                  unit: "Fahrenheit",
                },
              },
            ],
          },
          {
            number: 2,
            step: "Add sugar, spice, and salt and mix again to combine.",
            ingredients: [
              {
                id: 19335,
                name: "sugar",
                localizedName: "sugar",
                image: "sugar-in-bowl.png",
              },
              {
                id: 2047,
                name: "salt",
                localizedName: "salt",
                image: "salt.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 3,
            step: "Add cold butter and mix to break up into a crumb like mixture.",
            ingredients: [
              {
                id: 1001,
                name: "butter",
                localizedName: "butter",
                image: "butter-sliced.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 4,
            step: "Heat the cream and sour cream in the microwave for about a minute to hot but not boiling.",
            ingredients: [
              {
                id: 1056,
                name: "sour cream",
                localizedName: "sour cream",
                image: "sour-cream.jpg",
              },
              {
                id: 1053,
                name: "cream",
                localizedName: "cream",
                image: "fluid-cream.jpg",
              },
            ],
            equipment: [
              {
                id: 404762,
                name: "microwave",
                localizedName: "microwave",
                image: "microwave.jpg",
              },
            ],
          },
          {
            number: 5,
            step: "Add vanilla and eggs to dry mix and start mixer. Then slowly add hot cream mixture and mix just to combine. Do not over mix.Spray standard muffin tin with kitchen pan spray.Using an ice-cream scoop, scoop half the mixture into nine cups of the tin.Take nine apple pieces and plunge into the center of the batter in each cup then top with the remaining batter. (You will not use the entire apple)",
            ingredients: [
              {
                id: 1052050,
                name: "vanilla",
                localizedName: "vanilla",
                image: "vanilla.jpg",
              },
              {
                id: 9003,
                name: "apple",
                localizedName: "apple",
                image: "apple.jpg",
              },
              {
                id: 1053,
                name: "cream",
                localizedName: "cream",
                image: "fluid-cream.jpg",
              },
              {
                id: 1123,
                name: "egg",
                localizedName: "egg",
                image: "egg.png",
              },
              {
                id: 10014412,
                name: "ice",
                localizedName: "ice",
                image: "ice-cubes.png",
              },
            ],
            equipment: [
              {
                id: 404671,
                name: "muffin tray",
                localizedName: "muffin tray",
                image: "muffin-tray.jpg",
              },
              {
                id: 404726,
                name: "blender",
                localizedName: "blender",
                image: "blender.png",
              },
            ],
          },
          {
            number: 6,
            step: "Bake for 15 minutes then remove from the oven.While the apple bombs are baking, melt butter in a medium bowl and place sugar and cinnamon in another medium bowl. Stir cinnamon into sugar.When muffins come out of oven, immediately roll each one all over in the butter then the cinnamon sugar.",
            ingredients: [
              {
                id: 10219335,
                name: "cinnamon sugar",
                localizedName: "cinnamon sugar",
                image: "cinnamon-sugar.png",
              },
              {
                id: 2010,
                name: "cinnamon",
                localizedName: "cinnamon",
                image: "cinnamon.jpg",
              },
              {
                id: 1001,
                name: "butter",
                localizedName: "butter",
                image: "butter-sliced.jpg",
              },
              {
                id: 9003,
                name: "apple",
                localizedName: "apple",
                image: "apple.jpg",
              },
              {
                id: 19335,
                name: "sugar",
                localizedName: "sugar",
                image: "sugar-in-bowl.png",
              },
              {
                id: 0,
                name: "roll",
                localizedName: "roll",
                image: "dinner-yeast-rolls.jpg",
              },
            ],
            equipment: [
              {
                id: 404784,
                name: "oven",
                localizedName: "oven",
                image: "oven.jpg",
              },
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
            length: {
              number: 15,
              unit: "minutes",
            },
          },
          {
            number: 7,
            step: "Place on a rack to cool. Repeat for all nine apple bombs.",
            ingredients: [
              {
                id: 9003,
                name: "apple",
                localizedName: "apple",
                image: "apple.jpg",
              },
            ],
            equipment: [],
          },
        ],
      },
    ],
    spoonacularScore: 31.963422775268555,
  },
  {
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    veryHealthy: false,
    cheap: false,
    veryPopular: false,
    sustainable: false,
    lowFodmap: false,
    weightWatcherSmartPoints: 9,
    gaps: "no",
    preparationMinutes: 10,
    cookingMinutes: 30,
    aggregateLikes: 100,
    healthScore: 0,
    creditsText: "Diethood",
    sourceName: "Diethood",
    pricePerServing: 31.61,
    id: 566582,
    title: "Yogurt Doughnut Holes",
    readyInMinutes: 40,
    servings: 30,
    sourceUrl: "http://diethood.com/2013/04/25/yogurt-doughnut-holes/",
    image: "https://spoonacular.com/recipeImages/566582-312x231.jpg",
    imageType: "jpg",
    summary:
      'Yogurt Doughnut Holes takes approximately <b>40 minutes</b> from beginning to end. One serving contains <b>204 calories</b>, <b>2g of protein</b>, and <b>4g of fat</b>. For <b>32 cents per serving</b>, this recipe <b>covers 3%</b> of your daily requirements of vitamins and minerals. This recipe serves 30. This recipe from Diethood has 100 fans. Head to the store and pick up baking powder, oil, sugar, and a few other things to make it today. It works well as a breakfast. Overall, this recipe earns a <b>not so amazing spoonacular score of 20%</b>. Users who liked this recipe also liked <a href="https://spoonacular.com/recipes/art-doughnut-holes-587037">ART Doughnut Holes</a>, <a href="https://spoonacular.com/recipes/chocolate-doughnut-holes-738181">Chocolate Doughnut Holes</a>, and <a href="https://spoonacular.com/recipes/powdered-doughnut-holes-699639">Powdered Doughnut Holes</a>.',
    cuisines: [],
    dishTypes: ["morning meal", "brunch", "breakfast"],
    diets: [],
    occasions: [],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "In a medium size mixing bowl sift together the flour and baking powder, set aside.In a small bowl, mix together the yogurt, vanilla, beaten eggs, and sugar.",
            ingredients: [
              {
                id: 18369,
                name: "baking powder",
                localizedName: "baking powder",
                image: "white-powder.jpg",
              },
              {
                id: 1052050,
                name: "vanilla",
                localizedName: "vanilla",
                image: "vanilla.jpg",
              },
              {
                id: 1116,
                name: "yogurt",
                localizedName: "yogurt",
                image: "plain-yogurt.jpg",
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
            ],
            equipment: [
              {
                id: 405907,
                name: "mixing bowl",
                localizedName: "mixing bowl",
                image: "mixing-bowl.jpg",
              },
            ],
          },
          {
            number: 2,
            step: "Add the yogurt mixture to the flour mixture and mix until thoroughly combined.",
            ingredients: [
              {
                id: 1116,
                name: "yogurt",
                localizedName: "yogurt",
                image: "plain-yogurt.jpg",
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
            step: 'Heat the oil.Once the oil is hot, lower the heat to medium-low. That\'s about a "3" on my gas stove.Drop about a teaspoon of the batter into the saucepan, 3 to 4 doughnuts at a time.Fry for about 1 minute, or until golden, and then flip and continue to cook for one more minute, or until done.',
            ingredients: [
              {
                id: 4582,
                name: "cooking oil",
                localizedName: "cooking oil",
                image: "vegetable-oil.jpg",
              },
            ],
            equipment: [
              {
                id: 404669,
                name: "sauce pan",
                localizedName: "sauce pan",
                image: "sauce-pan.jpg",
              },
              {
                id: 404794,
                name: "stove",
                localizedName: "stove",
                image: "oven.jpg",
              },
            ],
            length: {
              number: 2,
              unit: "minutes",
            },
          },
          {
            number: 4,
            step: "Drain on paper towels.Top with chocolate syrup and powdered sugar.",
            ingredients: [
              {
                id: 14181,
                name: "chocolate syrup",
                localizedName: "chocolate syrup",
                image: "chocolate-syrup.jpg",
              },
              {
                id: 19336,
                name: "powdered sugar",
                localizedName: "powdered sugar",
                image: "powdered-sugar.jpg",
              },
            ],
            equipment: [
              {
                id: 405895,
                name: "paper towels",
                localizedName: "paper towels",
                image: "paper-towels.jpg",
              },
            ],
          },
          {
            number: 5,
            step: "Serve warm.",
            ingredients: [],
            equipment: [],
          },
        ],
      },
    ],
    spoonacularScore: 4.037530899047852,
  },
  {
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    veryHealthy: false,
    cheap: false,
    veryPopular: false,
    sustainable: false,
    lowFodmap: false,
    weightWatcherSmartPoints: 9,
    gaps: "no",
    preparationMinutes: 10,
    cookingMinutes: 5,
    aggregateLikes: 0,
    healthScore: 0,
    creditsText: "Taste of Home",
    sourceName: "Taste of Home",
    pricePerServing: 16.28,
    id: 373887,
    title: "Pumpkin Doughnut Drops",
    readyInMinutes: 15,
    servings: 42,
    sourceUrl: "http://www.tasteofhome.com/Recipes/pumpkin-doughnut-drops",
    image: "https://spoonacular.com/recipeImages/373887-312x231.jpg",
    imageType: "jpg",
    summary:
      'Pumpkin Doughnut Drops is a breakfast that serves 42. One portion of this dish contains around <b>2g of protein</b>, <b>15g of fat</b>, and a total of <b>243 calories</b>. For <b>16 cents per serving</b>, this recipe <b>covers 4%</b> of your daily requirements of vitamins and minerals. 1 person were glad they tried this recipe. Head to the store and pick up additional sugar, lemon-lime soda, ground cinnamon, and a few other things to make it today. From preparation to the plate, this recipe takes roughly <b>15 minutes</b>. It is brought to you by Taste of Home. All things considered, we decided this recipe <b>deserves a spoonacular score of 17%</b>. This score is rather bad. Similar recipes are <a href="https://spoonacular.com/recipes/pumpkin-doughnut-drops-104288">Pumpkin Doughnut Drops</a>, <a href="https://spoonacular.com/recipes/pecan-pumpkin-drops-707120">Pecan-Pumpkin Drops</a>, and <a href="https://spoonacular.com/recipes/pumpkin-doughnut-muffins-596936">Pumpkin Doughnut Muffins</a>.',
    cuisines: [],
    dishTypes: ["morning meal", "brunch", "breakfast"],
    diets: [],
    occasions: [],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "In a large bowl, beat the eggs, sugar and shortening.",
            ingredients: [
              {
                id: 4615,
                name: "shortening",
                localizedName: "shortening",
                image: "shortening.jpg",
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
            ],
            equipment: [
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
          },
          {
            number: 2,
            step: "Add the pumpkin, vinegar and vanilla.",
            ingredients: [
              {
                id: 11422,
                name: "pumpkin",
                localizedName: "pumpkin",
                image: "pumpkin.png",
              },
              {
                id: 1052050,
                name: "vanilla",
                localizedName: "vanilla",
                image: "vanilla.jpg",
              },
              {
                id: 2053,
                name: "vinegar",
                localizedName: "vinegar",
                image: "vinegar-(white).jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 3,
            step: "Combine the dry ingredients; add to the pumpkin mixture alternately with soda.",
            ingredients: [
              {
                id: 11422,
                name: "pumpkin",
                localizedName: "pumpkin",
                image: "pumpkin.png",
              },
              {
                id: 0,
                name: "pop",
                localizedName: "soft drink",
                image: "",
              },
            ],
            equipment: [],
          },
          {
            number: 4,
            step: "In an electric skillet or deep-fat fryer, heat oil to 375°. Drop teaspoonfuls of batter, a few at a time, into hot oil. Fry for 1 minute on each side or until golden brown.",
            ingredients: [
              {
                id: 4582,
                name: "cooking oil",
                localizedName: "cooking oil",
                image: "vegetable-oil.jpg",
              },
            ],
            equipment: [
              {
                id: 404645,
                name: "frying pan",
                localizedName: "frying pan",
                image: "pan.png",
              },
            ],
            length: {
              number: 1,
              unit: "minutes",
            },
          },
          {
            number: 5,
            step: "Drain on paper towels; roll in sugar while warm.",
            ingredients: [
              {
                id: 19335,
                name: "sugar",
                localizedName: "sugar",
                image: "sugar-in-bowl.png",
              },
              {
                id: 0,
                name: "roll",
                localizedName: "roll",
                image: "dinner-yeast-rolls.jpg",
              },
            ],
            equipment: [
              {
                id: 405895,
                name: "paper towels",
                localizedName: "paper towels",
                image: "paper-towels.jpg",
              },
            ],
          },
        ],
      },
    ],
    spoonacularScore: 10.334733963012695,
  },
  {
    vegetarian: true,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    veryHealthy: false,
    cheap: false,
    veryPopular: false,
    sustainable: false,
    lowFodmap: false,
    weightWatcherSmartPoints: 15,
    gaps: "no",
    preparationMinutes: 10,
    cookingMinutes: 20,
    aggregateLikes: 0,
    healthScore: 4,
    creditsText: "Simple Bites",
    sourceName: "Simple Bites",
    pricePerServing: 82.89,
    id: 1604759,
    title: "The Best Doughnut",
    readyInMinutes: 40,
    servings: 12,
    sourceUrl: "https://simplebites.net/the-best-doughnut-recipe/",
    image: "https://spoonacular.com/recipeImages/1604759-312x231.jpg",
    imageType: "jpg",
    summary:
      'The recipe The Best Doughnut can be made <b>in approximately 40 minutes</b>. One portion of this dish contains roughly <b>6g of protein</b>, <b>28g of fat</b>, and a total of <b>424 calories</b>. This recipe serves 12. For <b>83 cents per serving</b>, this recipe <b>covers 11%</b> of your daily requirements of vitamins and minerals. It is a good option if you\'re following a <b>lacto ovo vegetarian</b> diet. 1 person were impressed by this recipe. It works well as a very affordable breakfast. If you have maple syrup, flour, butter, and a few other ingredients on hand, you can make it. It is brought to you by Simple Bites. With a spoonacular <b>score of 26%</b>, this dish is rather bad. Try <a href="https://spoonacular.com/recipes/doughnut-pancakes-with-doughnut-glaze-syrup-543571">Doughnut Pancakes with Doughnut Glaze Syrup</a>, <a href="https://spoonacular.com/recipes/doughnut-soup-205695">Doughnut Soup</a>, and <a href="https://spoonacular.com/recipes/doughnut-pies-203040">Doughnut Pies</a> for similar recipes.',
    cuisines: [],
    dishTypes: ["morning meal", "brunch", "breakfast"],
    diets: ["lacto ovo vegetarian"],
    occasions: [],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Have all ingredients at room temperature. In a small bowl, stir together the yeast and warm water.",
            ingredients: [
              {
                id: 14412,
                name: "water",
                localizedName: "water",
                image: "water.png",
              },
              {
                id: 18375,
                name: "yeast",
                localizedName: "yeast",
                image: "yeast-granules.jpg",
              },
            ],
            equipment: [
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
          },
          {
            number: 2,
            step: "Let stand in a warm place until it begins to 'bloom' (foam).",
            ingredients: [],
            equipment: [],
          },
          {
            number: 3,
            step: "In the bowl of a stand mixer fitted with the dough hook, combine milk, butter, egg yolks, sugar, yeast mixture. Stir to losely combine, then dump in the flour, salt and nutmeg.",
            ingredients: [
              {
                id: 1125,
                name: "egg yolk",
                localizedName: "egg yolk",
                image: "egg-yolk.jpg",
              },
              {
                id: 1001,
                name: "butter",
                localizedName: "butter",
                image: "butter-sliced.jpg",
              },
              {
                id: 2025,
                name: "nutmeg",
                localizedName: "nutmeg",
                image: "ground-nutmeg.jpg",
              },
              {
                id: 0,
                name: "dough",
                localizedName: "dough",
                image: "pizza-dough",
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
                id: 18375,
                name: "yeast",
                localizedName: "yeast",
                image: "yeast-granules.jpg",
              },
              {
                id: 1077,
                name: "milk",
                localizedName: "milk",
                image: "milk.png",
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
                id: 404665,
                name: "stand mixer",
                localizedName: "stand mixer",
                image: "stand-mixer.jpg",
              },
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
          },
          {
            number: 4,
            step: "Mix on low speed until a soft, rugged dough forms.",
            ingredients: [
              {
                id: 0,
                name: "dough",
                localizedName: "dough",
                image: "pizza-dough",
              },
            ],
            equipment: [],
          },
          {
            number: 5,
            step: "Increase mixer to medium high and beat dough for 3 minutes. Once or twice, stop the mixer and scrape down the sides of the bowl and the dough hook. You will end up with a soft, supple dough.",
            ingredients: [
              {
                id: 0,
                name: "dough",
                localizedName: "dough",
                image: "pizza-dough",
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
            ],
            length: {
              number: 3,
              unit: "minutes",
            },
          },
        ],
      },
      {
        name: "Do-Ahead Directions",
        steps: [
          {
            number: 1,
            step: "Place the dough in a lightly oiled, medium-size bowl. Cover tightly with plastic wrap. Refrigerate for up to 24 hours.",
            ingredients: [
              {
                id: 0,
                name: "dough",
                localizedName: "dough",
                image: "pizza-dough",
              },
              {
                id: 10018364,
                name: "wrap",
                localizedName: "wrap",
                image: "flour-tortilla.jpg",
              },
            ],
            equipment: [
              {
                id: 404730,
                name: "plastic wrap",
                localizedName: "plastic wrap",
                image: "plastic-wrap.jpg",
              },
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
            length: {
              number: 1440,
              unit: "minutes",
            },
          },
          {
            number: 2,
            step: "Eat Now Directions: Cover the bowl with a clean tea towel and place in a warm corner of the kitchen. Allow dough to rise and double in bulk. Meanwhile, prepare glazes and cinnamon sugar (recipes below).",
            ingredients: [
              {
                id: 10219335,
                name: "cinnamon sugar",
                localizedName: "cinnamon sugar",
                image: "cinnamon-sugar.png",
              },
              {
                id: 0,
                name: "dough",
                localizedName: "dough",
                image: "pizza-dough",
              },
              {
                id: 14355,
                name: "tea",
                localizedName: "tea",
                image: "tea-bags.jpg",
              },
            ],
            equipment: [
              {
                id: 221439,
                name: "kitchen towels",
                localizedName: "kitchen towels",
                image: "dish-towel.jpg",
              },
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
          },
          {
            number: 3,
            step: "Lightly flour the kitchen counter and turn the dough out of the bowl. With a floured rolling pin, roll the dough into a circle about 13-inches round and 1/2-inch thick.",
            ingredients: [
              {
                id: 0,
                name: "dough",
                localizedName: "dough",
                image: "pizza-dough",
              },
              {
                id: 20081,
                name: "all purpose flour",
                localizedName: "all purpose flour",
                image: "flour.png",
              },
              {
                id: 0,
                name: "roll",
                localizedName: "roll",
                image: "dinner-yeast-rolls.jpg",
              },
            ],
            equipment: [
              {
                id: 404746,
                name: "rolling pin",
                localizedName: "rolling pin",
                image: "rolling-pin.jpg",
              },
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
          },
          {
            number: 4,
            step: "Cut as many doughnuts as possible with a 3-inch cutter.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 5,
            step: "Transfer doughnuts to a lightly floured baking sheet, keeping them 1 inch apart.",
            ingredients: [],
            equipment: [
              {
                id: 404727,
                name: "baking sheet",
                localizedName: "baking sheet",
                image: "baking-sheet.jpg",
              },
            ],
          },
          {
            number: 6,
            step: "Cover doughnuts with a kitchen towel and let rise in a warm place until slightly puffed, about 30 minutes (or 45 if the dough was refrigerated). Meanwhile, prepare your fry station.",
            ingredients: [
              {
                id: 0,
                name: "dough",
                localizedName: "dough",
                image: "pizza-dough",
              },
              {
                id: 12135,
                name: "nuts",
                localizedName: "nuts",
                image: "nuts-mixed.jpg",
              },
            ],
            equipment: [
              {
                id: 221439,
                name: "kitchen towels",
                localizedName: "kitchen towels",
                image: "dish-towel.jpg",
              },
            ],
            length: {
              number: 30,
              unit: "minutes",
            },
          },
          {
            number: 7,
            step: "Heat oil in a deep 4-quart heavy pot until it reaches 350F. You will need to monitor it frequently with a thermometer and maintain this temperature throughout the fry. Fry doughnuts in batches of three, turning with a wire skimmer when they are a deep golden brown.",
            ingredients: [
              {
                id: 4582,
                name: "cooking oil",
                localizedName: "cooking oil",
                image: "vegetable-oil.jpg",
              },
            ],
            equipment: [
              {
                id: 404789,
                name: "kitchen thermometer",
                localizedName: "kitchen thermometer",
                image: "food-thermometer.jpg",
              },
              {
                id: 405894,
                name: "skimmer",
                localizedName: "skimmer",
                image: "skimmer-spoon.jpg",
              },
              {
                id: 404752,
                name: "pot",
                localizedName: "pot",
                image: "stock-pot.jpg",
              },
            ],
          },
          {
            number: 8,
            step: "Transfer to drain on a wire rack placed over a baking sheet, or use paper towel. Repeat until all the doughnuts and doughnut holes are fried.",
            ingredients: [],
            equipment: [
              {
                id: 404727,
                name: "baking sheet",
                localizedName: "baking sheet",
                image: "baking-sheet.jpg",
              },
              {
                id: 405895,
                name: "paper towels",
                localizedName: "paper towels",
                image: "paper-towels.jpg",
              },
              {
                id: 405900,
                name: "wire rack",
                localizedName: "wire rack",
                image: "wire-rack.jpg",
              },
            ],
          },
          {
            number: 9,
            step: "For cinnamon sugar doughnuts, shake doughnuts in a bowl with 3/4 cup cinnamon sugar. For glazed doughnuts, dip doughnuts in maple glaze and return to the wire rack to set.",
            ingredients: [
              {
                id: 10219335,
                name: "cinnamon sugar",
                localizedName: "cinnamon sugar",
                image: "cinnamon-sugar.png",
              },
              {
                id: 0,
                name: "glaze",
                localizedName: "glaze",
                image: "",
              },
              {
                id: 19911,
                name: "maple syrup",
                localizedName: "maple syrup",
                image: "maple-syrup.png",
              },
              {
                id: 0,
                name: "shake",
                localizedName: "shake",
                image: "",
              },
              {
                id: 0,
                name: "dip",
                localizedName: "dip",
                image: "",
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
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
          },
          {
            number: 10,
            step: "Let glaze set for about 20 minutes. Enjoy your fresh homemade doughnuts!",
            ingredients: [
              {
                id: 0,
                name: "glaze",
                localizedName: "glaze",
                image: "",
              },
            ],
            equipment: [],
            length: {
              number: 20,
              unit: "minutes",
            },
          },
        ],
      },
    ],
    spoonacularScore: 38.29102325439453,
  },
];
