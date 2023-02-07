import React from "react";
import { useState, useEffect } from "react";
import { useDebouncedValue } from "../hooks/useDebouncedValue";

export const SearchInput = ({ navRef }: any) => {
  console.log(navRef);
  const [inputValue, setInputValue] = useState("");

  const debouncedValue = useDebouncedValue(inputValue);

  useEffect(() => {
    console.log({ debouncedValue });
  }, [debouncedValue]);

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
