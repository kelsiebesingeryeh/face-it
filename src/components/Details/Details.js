import React from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const Details = ({ makeup, id }) => {
    const findProduct = () => makeup.find(item => item.id === parseInt(id))

    const detailsOnDisplay = () => {
        return (
          <SingleProduct
            id={findProduct.id}
            key={findProduct.id}
            brand={findProduct.brand}
            name={'name'}
            description={findProduct.description}
            productType={findProduct["product_type"]}
            tags={findProduct["tags_list"]}
            website={findProduct["website_link"]}
          />
        );}

  return <div className="productDetailsContainer">{detailsOnDisplay()}</div>;
};

export default Details;