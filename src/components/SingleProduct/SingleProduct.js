import React from 'react';
import './SingleProduct.css';

const SingleProduct = ({id, name, brand, description, productType, tags,  website, img}) => {
    const styledTags = tags.join(", ");
    
    return (
      <div className="detailsPage">
        <h1>{name}</h1>
        <h2>{brand}</h2>
        <img src={img} alt={name} className="cosmeticDetailsImage"></img>
        <a href={website}>{website}</a>
        <p>{description}</p>
        <p className="tags">{styledTags}</p>
      </div>
    );
}

export default SingleProduct;