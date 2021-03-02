import React, { useState } from 'react';
import './Form.css';

const Form = ({ searchMakeup, handleClick}) => {
  const [userInput, setUserInput] = useState("");
  const updateForm = (event) => {
    setUserInput(event.target.value.toLowerCase());
  };

  const filterSearchMakeup = (event) => {
    event.preventDefault();
    searchMakeup(userInput);
    setUserInput("");
    // handleClick()
  };
  return (
    <form className="searchForm">
      <input
        type="text"
        placeholder='Search by Brand or Tag (e.g.: "natural")'
        value={userInput}
        onChange={updateForm}
        aria-label="Search Makeup Items"
        aria-required="true"
      ></input>
      <button onClick={filterSearchMakeup} className="searchButton">
        Search
      </button>
    </form>
  );
};
//We need to add some way to clear the search results and return to home 

export default Form;