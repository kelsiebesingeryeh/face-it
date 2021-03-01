import React from 'react';
import './SingleProduct.css';

const SingleProduct = ({id, name, brand, description, productType, tags,  website, img}) => {
    const styledTags = tags.join(", ");
    
    return (
      <div className="detailsPageWrapper">
        <section className="detailsPage">
          <h2 className="singleProductTitle">{name}</h2>
          <h3 className="singleProductBrand">{brand}</h3>
          <img src={img} alt={name} className="cosmeticDetailsImage"></img>
          <a href={website} target="_blank">{website}</a>
          <div className="singleProductDescriptionWrapper">
            <p>{description}</p>
          </div>
            <p className="tags">{styledTags}</p>
        </section>
      </div>
    );
}

export default SingleProduct;