import { NavigationBar } from "./navigation-bar";
import { SearchBar } from "../search/search-bar";

export const Header = () => {
  return (
    <div className="flex flex-col items-center w-full md:flex-row md:justify-between h-full px-4 border-b-2 border-red-200">
      <span>
        <h2 className="text-4xl text-lime-200 font-bold my-2">TastyBites</h2>
      </span>
      <div className="flex flex-col md:flex-row items-center gap-y-2 my-2">
        <NavigationBar />
        <SearchBar />
      </div>
    </div>
  );
};
