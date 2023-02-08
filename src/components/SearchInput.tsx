import React, { useEffect } from "react";
import { useState, useReducer } from "react";
import { useSearchByQuery } from "../hooks/useSearchByQuery";
import { moviesReducer } from "../reducer/moviesReducer";

export const SearchInput = ({ navRef }: any) => {
  const [inputValue, setInputValue] = useState("");

  const { filteredMovies } = useSearchByQuery(inputValue);
  const moviesState = {
    filteredMovies: filteredMovies,
  };
  const [state, dispatch] = useReducer(moviesReducer, moviesState);
  const dispatchFilteredMovies = () => {
    dispatch({ type: "addFilteredMovies", payload: filteredMovies });
  };

  useEffect(() => {
    dispatchFilteredMovies();
  }, [inputValue]);

  return (
    <div className="search-bar" ref={navRef}>
      <input
        className="input"
        placeholder="Search movies"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};
