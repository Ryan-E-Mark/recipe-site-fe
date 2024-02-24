import { FC } from "react";
import { useNavigate } from "react-router-dom";


export const SearchBar: FC = () => {
  const navigate = useNavigate()

  const handleSearch = (e: any): void => {
    e.preventDefault()
    navigate('/recipes', { state: { term: e.target[0].value }})
  }

  return (
      <form onSubmit={handleSearch} className="h-1/2 focus:ring-lime-200 focus:border-lime-200">
        <input
          type="text"
          id="search-bar"
          name="search"
          placeholder="Search recipes..."
          className="w-auto h-full border-2 rounded-lg focus:ring-lime-200 focus:border-lime-200"
        />
      </form>
  );
};
