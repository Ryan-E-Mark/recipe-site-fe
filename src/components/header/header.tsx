import webName from "../../imgs/webName.png";
import { NavigationBar } from "./navigation-bar";
import { SearchBar } from "../search/search-bar";

export const Header = () => {
  return (
    <div className="flex flex-row justify-between flex-wrap h-full px-4 border-b-2 border-red-200 sticky-top-0">
      <span>
        <img alt="website name" src={webName} className="h-12" />
      </span>
      <div className="flex">
        <NavigationBar />
        <SearchBar />
      </div>
    </div>
  );
};
