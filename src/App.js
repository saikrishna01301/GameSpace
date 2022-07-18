import "./App.css";
import { useState, useEffect } from "react";
import SearchBox from "./Components/Search/SearchBox";
import CardList from "./Components/Card/CardList";
import "./data.json";

import { ReactComponent as UpDown } from "./assets/up-down-arrow.svg";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [gamesList, setGamesList] = useState([]);
  const [filteredArray, setFilteredArray] = useState(gamesList);

  //getting search value from UI and updating the searchField state
  const onSearchHandler = (e) => {
    e.preventDefault();
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    const newFilteredArray = gamesList.filter((games) => {
      return games.title.toLowerCase().includes(searchField);
    });
    setFilteredArray(newFilteredArray);
  }, [gamesList, searchField]);
  //////////////////////////////////////////////////////////////////
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((games) => setGamesList(games));
  }, []);

  //////////////////////////////////////////////////////////////////

  // console.log(gamesList);
  // console.log(filteredArray);

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
      <div className="arrow-container">
        <div >Games list</div>
        <UpDown className="arrow" />
      </div>
      <CardList gamesList={filteredArray} />
    </div>
  );
};

export default App;
