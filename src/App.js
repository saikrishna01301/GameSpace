import "./App.css";
import { useState, useEffect } from "react";
import SearchBox from "./Components/Search/SearchBox";
import CardList from "./Components/Card/CardList";
import "./data.json";
// import { ReactComponent as ArrowUp } from "./assets/arrow-up.svg";
// import { ReactComponent as ArrowDown } from "./assets/arrow-down.svg";
import Sort from "./Components/Sort/Sort";

// import { ReactComponent as UpDown } from "./assets/up-down-arrow.svg";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [gamesList, setGamesList] = useState([]);
  const [filteredArray, setFilteredArray] = useState(gamesList);
  const [sort, setSort] = useState("false");
  const [ascArray, setAscArray] = useState([]);
  const [dscArray, setDscArray] = useState([]);

  //getting search value from UI and updating the searchField state
  const onSearchHandler = (e) => {
    e.preventDefault();
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  //it filters gamesList array whenever searchfield changes
  useEffect(() => {
    const newFilteredArray = gamesList.filter((games) => {
      return games.title.toLowerCase().includes(searchField);
    });
    setFilteredArray(newFilteredArray);
  }, [gamesList, searchField]);

  //it fetch the data from JSON file
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((games) => setGamesList(games));
  }, []);

  //arrowUp(ascending order) sorting
  const onArrowUpClickHandler = () => {
    // console.log("onArrowUpClick");
    const newFilteredArray = gamesList.sort((a, b) => {
      return b.score - a.score;
    });
    setSort("asc");
    setAscArray(newFilteredArray);
  };

  //arrowDown(descending order) sorting
  const onArrowDownClickHandler = () => {
    // console.log("onArrowDownClick");
    const newFilteredArray = gamesList.sort((a, b) => {
      return a.score - b.score;
    });
    setSort("dsc");
    setDscArray(newFilteredArray);
  };

  // conditionally updates the UI state
  const switchCase = (x) => {
    switch (x) {
      case "asc":
        return ascArray;
        break;
      case "dsc":
        return dscArray;
        break;
      case "false":
        return filteredArray;
        break;
    }
  };

  useEffect(() => {
    const newFilteredArray = ascArray.filter((games) => {
      return games.title.toLowerCase().includes(searchField);
    });
    setAscArray(newFilteredArray);
  }, [searchField]);

  useEffect(() => {
    const newFilteredArray = dscArray.filter((games) => {
      return games.title.toLowerCase().includes(searchField);
    });
    setDscArray(newFilteredArray);
  }, [searchField]);
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  return (
    <div className="App">
      <div className="header-container">
        <h1 className="App__title">Game Space</h1>
        <SearchBox
          onChangeHandler={onSearchHandler}
          placeholder="Search Games"
          className="monsters__search-box"
        />
      </div>
      <Sort
        onArrowDownClickHandler={onArrowDownClickHandler}
        onArrowUpClickHandler={onArrowUpClickHandler}
      />
      <CardList gamesList={switchCase(sort)} />
    </div>
  );
};

export default App;
