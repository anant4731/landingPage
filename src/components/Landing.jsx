import classes from "./Landing.module.css";
import List from "./List";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
const Landing = () => {
  return (
    <div className={classes.container}>
      <div className={classes.grid_container}>
        <div className={classes.sidebar}>
          <Sidebar />
        </div>
        <div className={classes.content}>
          <div className={classes.search_bar}>
            <SearchBar />
          </div>
          <div className={classes.item_list}>
            <List />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
