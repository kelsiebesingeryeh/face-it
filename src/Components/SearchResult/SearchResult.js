import React from 'react';
import './SearchResult.css';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SearchResult = ({img, name, id, brand, tags, productType}) => {
    const styledTags = tags.join(', ');
    return (
      <Link to={`/searchResults/${id}`}>
        <article className="cosmeticCard">
          <img src={img} alt={name} className="searchImage" id={id}></img>
          <p className="searchResultDetail">
            <strong>{brand}</strong>
          </p>
          <p className="searchResultDetail">{name}</p>
          <p className="tags">{styledTags}</p>
          <p className="products">{productType}</p>
        </article>
      </Link>
    );
}
export default SearchResult;

SearchResult.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
  brand: PropTypes.string,
  tags: PropTypes.array
};