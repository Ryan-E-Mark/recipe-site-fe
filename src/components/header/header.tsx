import webName from "../../imgs/webName.png";
import { NavigationBar } from "./navigation-bar";
import { SearchBar } from "../search/search-bar";

export const Header = () => {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-between flex-wrap h-full px-4 border-b-2 border-red-200">
      <span>
        <h2 className="text-4xl text-lime-200 font-bold my-2">TastyBites</h2>
      </span>
      <div className="flex items-center">
        <NavigationBar />
        <SearchBar />
      </div>
    </div>
  );
};
