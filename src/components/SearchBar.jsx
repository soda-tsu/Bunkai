import React from "react";
import { StyledSearchBar } from "../styles/SearchBar";
import searchIcon from "../assets/searchIcon.png";
import { toHiragana } from "wanakana";
import { useState } from "react";

function SearchBar() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const text = event.target.value;
    const hiraganaText = toHiragana(text);
    setInputValue(hiraganaText);
  };

  function onSubmit(e) {
    e.preventDefault();
    console.log("pesquisou");
  }

  return (
    <StyledSearchBar onSubmit={onSubmit}>
      <input type="text" onChange={handleInputChange} value={inputValue} />
      <button type="submit">
        <img src={searchIcon} alt="search icon" />
      </button>
    </StyledSearchBar>
  );
}

export default SearchBar;
