import { FC, useState } from "react";
import { SearchFilters } from "./types";
import { FilterDropdown } from "./filter-dropdown";

interface SearchFiltersProps {
  handleApply: (filters: SearchFilters) => void;
}

export const RecipeFilters: FC<SearchFiltersProps> = ({ handleApply }) => {
  const [tmpFilters, setTmpFilters] = useState<SearchFilters>();

  return (
    <div className="border-2 bg-gray-200 rounded-md flex flex-col items-center">
      <h3>Filter your results</h3>
      <div className="flex-col gap-y-4">
        <FilterDropdown entity="cuisine" />
        <FilterDropdown entity="diet" />
        <FilterDropdown entity="intolerances" />
      </div>
      <div className="w-3/4 flex flex-wrap justify-between">
      <button>Clear</button>
      <button>Apply</button>

      </div>
    </div>
  );
};
