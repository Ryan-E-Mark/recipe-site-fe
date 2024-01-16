import { SearchBar } from "./search-bar";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const navigate = useNavigate()

  const handleSearch = (e: any): void => {
    e.preventDefault()
    navigate('/recipes', { state: { term: e.target[0].value }})
  }

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
    </div>
  );
};
