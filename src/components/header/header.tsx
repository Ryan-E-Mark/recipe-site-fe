import { Search } from "../search/search";
import webName from '../../imgs/webName.png'

export const Header = () => {
  return (
    <div>
      <span>
        <img alt="website name" src={webName} />
      </span>
      <Search />
    </div>
  );
};
