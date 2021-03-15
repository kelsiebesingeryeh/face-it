import React from 'react';
import './SingleProduct.css';
import PropTypes from 'prop-types';

const SingleProduct = ({name, brand, description, tags,  website, img}) => {
    const styledTags = tags.join(', ');

    return (
      <div className='detailsPageWrapper'>
        <section className='detailsPage'>
          <h2 className='singleProductTitle'>{name}</h2>
          <h3 className='singleProductBrand'>{brand}</h3>
          <img src={img} alt={name} className='cosmeticDetailsImage'></img>
          <a href={website} target='_blank' rel='noreferrer'>{website}</a>
          <div className='singleProductDescriptionWrapper'>
            <p>{description}</p>
          </div>
            <p className='tags'>{styledTags}</p>
        </section>
      </div>
    );
}

export default SingleProduct;

SingleProduct.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  brand: PropTypes.string,
  description: PropTypes.string,
  productType: PropTypes.string,
  tags: PropTypes.array,
  website: PropTypes.string,
  img: PropTypes.string,
};
