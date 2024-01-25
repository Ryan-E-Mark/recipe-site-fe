import { FC, useState } from "react";
import { SearchFilters } from "./types";
import { FilterDropdown } from "./filter-dropdown";

interface SearchFiltersProps {
  handleApply: (filters: SearchFilters) => void;
}

export const RecipeFilters: FC<SearchFiltersProps> = ({ handleApply }) => {
  const [tmpFilters, setTmpFilters] = useState<SearchFilters>();

  return (
    <div className="border-2 border-lime-200 rounded-md flex flex-col items-center">
      <h3>Filter your results</h3>
      <div className="flex gap-x-4">
        <FilterDropdown entity="cuisine" />
        <FilterDropdown entity="diet" />
        <FilterDropdown entity="intolerances" />
      </div>
      <button>Apply</button>
    </div>
  );
};
