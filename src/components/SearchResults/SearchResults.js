import React from 'react';
import SearchResult from '../SearchResult/SearchResult';
import './SearchResults.css';

//when search button is clicked, the search method is triggered
//add a property that changes the state.didsearch to true
//add a conditional render that evaluates if the didsearch === true, then 
//how to get back to main view?  how/when to switch didsearch state back to false?

const SearchResults = ({filteredItems}) => {
  const itemsToDisplay = filteredItems.map(item => {
      return <SearchResult
          id={item.id}
          key={item.id}
          name={item.name}
          brand={item.brand}
          img={item["image_link"]}
          tags={item["tag_list"]}
          productType={item["product_type"]}
        />
      
  })
  return (
    <div className="searchResultsContainer">
      {itemsToDisplay}
    </div>
  )
}

export default SearchResults;