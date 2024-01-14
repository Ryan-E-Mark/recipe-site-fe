import { useState } from "react";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <input
        type="search"
        id="search-bar"
        name="search"
        placeholder="search recipes..."
      ></input>
    </div>
  );
};
