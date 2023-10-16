import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classes from "./SearchBar.module.css";
const SearchBar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.search_icon}>
        <FontAwesomeIcon icon={faSearch} size="2xl"/>
      </div>
      <input className={classes.search} type="text" placeholder="Search..." />
    </div>
  );
};

export default SearchBar;
