import { useState } from "react";
import { SearchBar } from "./search-bar";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  console.log(searchTerm)
  const handleSearch = (e: any): void => {
    setSearchTerm(e.target)
  }

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
    </div>
  );
};
