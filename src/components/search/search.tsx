import { useState } from "react";
import { SearchBar } from "./search-bar";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: any): void => {
    e.preventDefault()
    setSearchTerm(e.target[0].value)
  }

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
    </div>
  );
};
