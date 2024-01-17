import { FC } from "react";
import { useNavigate } from "react-router-dom";


export const SearchBar: FC = () => {
  const navigate = useNavigate()

  const handleSearch = (e: any): void => {
    e.preventDefault()
    navigate('/recipes', { state: { term: e.target[0].value }})
  }

  return (
    <div className="w-auto flex flex-wrap content-center">
      <form onSubmit={handleSearch} className="border-gray-500">
        <input
          type="search"
          id="search-bar"
          name="search"
          placeholder="Search recipes..."
        />
      </form>
    </div>
  );
};
