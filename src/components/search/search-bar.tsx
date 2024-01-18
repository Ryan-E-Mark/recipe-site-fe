import { FC } from "react";
import { useNavigate } from "react-router-dom";


export const SearchBar: FC = () => {
  const navigate = useNavigate()

  const handleSearch = (e: any): void => {
    e.preventDefault()
    navigate('/recipes', { state: { term: e.target[0].value }})
  }

  return (
    <div className="w-auto flex flex-wrap content-center border rounded-lg h-3/4">
      <form onSubmit={handleSearch} className="border-gray-500">
        <input
          type="text"
          id="search-bar"
          name="search"
          placeholder="Search recipes..."
          className="h-full"
        />
      </form>
    </div>
  );
};
