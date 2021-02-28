import React from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const Details = ({ makeup, id }) => {
    const findProduct = () => {
        return makeup.find((item) => item.id === parseInt(id));
    } 

    const detailsOnDisplay = () => {
        const ourProduct = findProduct()
        return (
          <SingleProduct
            id={ourProduct.id}
            key={ourProduct.id}
            brand={ourProduct.brand}
            name={ourProduct.name}
            img={ourProduct["image_link"]}
            description={ourProduct.description}
            productType={ourProduct["product_type"]}
            tags={ourProduct["tag_list"]}
            website={ourProduct["website_link"]}
          />
        );}

  return <div className="productDetailsContainer">{detailsOnDisplay()}</div>;
};

export default Details;