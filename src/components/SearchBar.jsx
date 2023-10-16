import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classes from "./SearchBar.module.css";
import React from "react";
const SearchBar = () => {
  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.search_icon}>
          <FontAwesomeIcon icon={faSearch} size="2xl" />
        </div>
        <input className={classes.search} type="text" placeholder="Search..." />
      </div>
      <button type="button" className={classes.submit__button}>SEARCH</button>
    </React.Fragment>
  );
};

export default SearchBar;
