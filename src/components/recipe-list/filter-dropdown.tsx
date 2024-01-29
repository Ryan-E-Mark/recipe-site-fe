import { FC, useMemo, useState } from "react";
import { CUISINE_FILTERS, DIET_FILTERS, INTOLERANCES_FILTERS } from "./filter-helpers";

interface FilterDropdownProps {
  entity: keyof FilterDropdownEntities;
}

type FilterDropdownEntities = {
  cuisine: boolean;
  diet: boolean;
  intolerances: boolean;
};

export const FilterDropdown: FC<FilterDropdownProps> = ({ entity }) => {
  const [isDropdownActive, setIsDropdownActive] =
    useState<FilterDropdownEntities>({
      cuisine: false,
      diet: false,
      intolerances: false,
    });

    const filtersByEntity = useMemo(() => {
        if (entity === 'cuisine') {
            return CUISINE_FILTERS
        }
        if (entity === 'diet') {
            return DIET_FILTERS
        }
        if (entity === 'intolerances') {
            return INTOLERANCES_FILTERS
        }
    },[entity])

  const handleDropdownClick = (
    dropdown: keyof FilterDropdownEntities
  ): void => {
    setIsDropdownActive({
      ...isDropdownActive,
      [dropdown]: !isDropdownActive[dropdown],
    });
  };

  const handleFilterClick = (e: any) => {
    console.log(e.target.value)
  }

  return (
    <div className="w-auto">
      <label onClick={() => handleDropdownClick(entity)} className="">{entity.toUpperCase()}</label>
        <div className="bg-white rounded-lg shadow dark:bg-gray-700">
            <ul className="">
          {Object.keys(filtersByEntity).map((filter, idx) => {
            return (
                <li key={idx} className="w-full border-b rounded-t-lg">
                  <div className="flex items-center ps-3">
                      <input
                        type="checkbox"
                        value={filtersByEntity[filter]}
                        onChange={handleFilterClick}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label className="w-full py-3 ms-2 text-sm font-medium dark:text-gray-300">
                        {filter}
                      </label>
                  </div>
                </li>
            );
        })}
        </ul>
        <button>Clear</button>
        <button>Apply</button>
        </div>
    </div>
  );
};
