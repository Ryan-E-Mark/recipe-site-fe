import { FC } from "react";

interface SearchBarProps {
  handleSearch: (e: any) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ handleSearch }) => {
  return (
    <div className="w-auto">
      <form onSubmit={handleSearch} className="border-gray-500">
        <input
          type="search"
          id="search-bar"
          name="search"
          placeholder="search recipes..."
        />
      </form>
    </div>
  );
};
