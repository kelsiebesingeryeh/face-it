import React, { useState } from 'react';
import './Form.css';

const Form = ({ searchMakeup }) => {
  const [userInput, setUserInput] = useState("");
  const updateForm = (event) => {
    setUserInput(event.target.value.toLowerCase());
  };

  const filterSearchMakeup = (event) => {
    event.preventDefault();
    searchMakeup(userInput);
    setUserInput("");
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
      >
      </input>
      <button onClick={filterSearchMakeup} className="searchButton">
        Search
      </button>
    </form>
  );
};

export default Form;