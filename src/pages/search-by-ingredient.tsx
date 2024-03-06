import { Divider } from "../components/common/divider"

export const SearchByIngredients = () => {
    return (
        <div>
            <h3>Find an ingredient by it's first letter.</h3>
            <div className="flex">
            {INGREDIENTS.map((ingr, idx) => {
                return (
                <div key={idx} className="px-1">
                    <a href={`#${ingr.letter}`}>{ingr.letter}</a>
                </div>
                )
            })}
            </div>
            <div className="flex flex-col my-4">
                {INGREDIENTS.map((ingr, idx) => {
                    if(ingr.ingredients.length) {
                        return (
                            <div key={idx} id={ingr.letter} className="my-4">
                                <h3>{ingr.letter}</h3>
                                <Divider />
                                <div className="flex">
                                {ingr.ingredients.sort().map((individual_ingredients, idx) => {
                                    return (
                                        <div key={idx} className="px-2 hover:underline hover:cursor-pointer">
                                            <p>{individual_ingredients}</p>
                                        </div>
                                    )
                                })}
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

const INGREDIENTS = [
    {
        letter: 'A',
        ingredients: ['almonds', 'almond flour', 'apples', 'avocados', 'apricots', ]
    },
    {
        letter: 'B',
        ingredients: ['bananas', 'barley', 'beef', 'bacon', 'blueberries', 'brisket']
    },
    {
        letter: 'C',
        ingredients: ['cheese', 'cherries', 'chia seeds', 'chicken', 'chocolate', 'coconut', 'corn', 'corn flour', 'cinnamon', 'crab' ]
    },
    {
        letter: 'D',
        ingredients: ['duck', 'dates',]
    },
    {
        letter: 'E',
        ingredients: ['eggs', 'eggplant', '']
    },
    {
        letter: 'F',
        ingredients: ['fish', 'flax seeds', 'flour', 'feta', 'fig', 'falafel',]
    },
    {
        letter: 'G',
        ingredients: ['ground beef', 'ground chicken', 'ground turkey', ]
    },
    {
        letter: 'H',
        ingredients: ['ham', 'hummus', 'honey',]
    },
    {
        letter: 'I',
        ingredients: []
    },
    {
        letter: 'J',
        ingredients: ['jalapeno', 'jelly',]
    },
    {
        letter: 'K',
        ingredients: ['kale', 'kiwi',]
    },
    {
        letter: 'L',
        ingredients: ['lamb', 'lentils', 'lime', 'lobster', 'leeks']
    },
    {
        letter: 'M',
        ingredients: ['mangos', 'millet', 'mushrooms', 'melon', 'milk']
    },
    {
        letter: 'N',
        ingredients: ['nectarines',]
    },
    {
        letter: 'O',
        ingredients: ['oranges', 'oats', 'okra', 'onion', 'olives',]
    },
    {
        letter: 'P',
        ingredients: ['peaches', 'peanuts', 'pears', 'pineapple', 'pork', 'plums', 'potatoes']
    },
    {
        letter: 'Q',
        ingredients: ['quinoa', 'quail',]
    },
    {
        letter: 'R',
        ingredients: ['radish', 'raisins', 'raspberry', 'rhubarb', 'rice']
    },
    {
        letter: 'S',
        ingredients: ['sausage', 'steak', 'shellfish', 'salmon', 'scallops', 'spinach', 'shrimp',]
    },
    {
        letter: 'T',
        ingredients: ['turkey', 'tapioca', 'tangerine', 'tomatoes', 'truffle',]
    },
    {
        letter: 'U',
        ingredients: []
    },
    {
        letter: 'V',
        ingredients: ['veal', 'venison', 'vanilla',]
    },
    {
        letter: 'W',
        ingredients: []
    },
    {
        letter: 'X',
        ingredients: []
    },
    {
        letter: 'Y',
        ingredients: ['yuca', 'yams', 'yogurt', 'yuzu',]
    },
    {
        letter: 'Z',
        ingredients: ['zucchini',]
    },
]