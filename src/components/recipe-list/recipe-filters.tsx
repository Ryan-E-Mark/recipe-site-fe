import { FC, useState } from "react";
import { SearchFilters } from "./types";

interface SearchFiltersProps {
  handleApply: (filters: SearchFilters) => void;
}

const CUISINE_FILTERS = {
    african: 'african',
    chinese: 'chinese', 
    japanese: 'japanese', 
    korean: 'korean', 
    vietnamese: 'vietnamese', 
    thai: 'thai', 
    indian: 'indian', 
    british: 'british', 
    irish: 'irish', 
    french: 'french', 
    italian: 'italian', 
    mexican: 'mexican', 
    spanish: 'spanish', 
    middleEastern: 'middle eastern', 
    jewish: 'jewish', 
    american: 'american', 
    cajun: 'cajun', 
    southern: 'southern', 
    greek: 'greek', 
    german: 'german', 
    nordic: 'nordic', 
    easternEuropean: 'eastern european', 
    caribbean: 'caribbean', 
    latinAmerican: 'latin american',
}

const DIET_FILTERS = {
    pescetarian: 'pescetarian',
    vegan: 'vegan',
    vegetarian: 'vegetarian',
    paleo: 'paleo',
    primal: 'primal',
}

const INTOLERANCES_FILTERS = {
    dairy: 'dairy',
    egg: 'egg',
    gluten: 'gluten',
    peanut: 'peanut',
    sesame: 'sesame',
    seafood: 'seafood',
    shellfish: 'shellfish',
    soy: 'soy',
    sulfite: 'sulfite',
    treeNut: 'tree nut',
    wheat: 'wheat',
}

export const RecipeFilters: FC<SearchFiltersProps> = ({ handleApply }) => {
    const [tmpFilters, setTmpFilters] = useState<SearchFilters>()

  return (
    <div className="border-2 border-lime-200 rounded-md flex flex-col items-center">
      <h3>Filter your results</h3>
      <div className="flex gap-x-4">
        <div className="">
          <button>Cuisine</button>
          <ul>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label className="w-full py-3 ms-2 text-sm font-medium dark:text-gray-300">
                  Vue JS
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <label>Diet</label>
          <ul>
            <li></li>
          </ul>
        </div>
        <div>
          <label>Intolerances</label>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
      <button>Apply</button>
    </div>
  );
};
