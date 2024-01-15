import { Search } from "../search/search";
import webName from '../../imgs/webName.png'

export const Header = () => {
  return (
    <div
      className="flex flex-row justify-between flex-wrap h-full px-4"
    >
      <span
      >
        <img alt="website name" src={webName} className="h-12"/>
      </span>
      <Search />
    </div>
  );
};
