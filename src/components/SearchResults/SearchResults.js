import React from 'react';
import './SearchResults.css';

//when search button is clicked, the search method is triggered
//add a property that changes the state.didsearch to true
//add a conditional render that evaluates if the didsearch === true, then 
//how to get back to main view?  how/when to switch didsearch state back to false?

const SearchResults = ({filteredItems}) => {
  const itemsToDisplay = filteredItems.map(item => {
      return (
          <h3>{item.brand}</h3>
      )
  })
  return (
    <div className="searchResultsContainer">
      {itemsToDisplay}
    </div>
  )
}

export default SearchResults;