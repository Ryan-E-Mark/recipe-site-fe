import { FC } from "react";
import { useNavigate } from "react-router-dom";


export const SearchBar: FC = () => {
  const navigate = useNavigate()

  const handleSearch = (e: any): void => {
    e.preventDefault()
    navigate('/recipes', { state: { term: e.target[0].value }})
  }

  return (
      <form onSubmit={handleSearch} className="h-1/2">
        <input
          type="text"
          id="search-bar"
          name="search"
          placeholder="Search recipes..."
          className="w-auto h-full bg-white border-2 rounded-lg focus:outline-lime-200 focus:border-lime-200 focus:bg-gray-50"
        />
      </form>
  );
};
