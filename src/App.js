import React, { useState } from "react";
import Axios from "axios";
import Search from "./components/Search";
import Results from "./components/Results";
import Popup from "./components/Popup";

const App = () => {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });

  const API_key = "https://www.omdbapi.com/?apikey=cbc5e34c";

  const search = async (e) => {
    if (e.key === "Enter") {
      const res = await Axios.get(`${API_key}&s=${state.s}`);
      console.log(res.data.Search);

      setState((prevState) => {
        return { ...prevState, results: res.data.Search };
      });
    }
  };

  const openPopup = async (id) => {
    const { data } = await Axios.get(`${API_key}&i=${id}`);
    console.log(data);
    setState((prevState) => {
      return { ...prevState, selected: data };
    });
  };

  const closePopup = async () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  const handleInput = (e) => {
    let s = e.target.value;

    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  return (
    <div className='App'>
      <header>
        <h1>Movie Datebase</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />

        <Results results={state.results} openPopup={openPopup} />

        {typeof state.selected.Title != "undefined" ? (
          <Popup selected={state.selected} closePopup={closePopup} />
        ) : (
          false
        )}
      </main>
    </div>
  );
};

export default App;
