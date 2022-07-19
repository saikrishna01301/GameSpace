import "./SearchBox.css";
import { ReactComponent as SearchLogo } from "../../assets/search.svg";
const SearchBox = (props) => {
  return (
    <form className="form-search">
      <SearchLogo className="search-logo" />
      <input
        autoComplete="on"
        type="search"
        className={`search-box ${props.className}`}
        placeholder={props.placeholder}
        onChange={props.onChangeHandler}
      />
    </form>
  );
};

export default SearchBox;
