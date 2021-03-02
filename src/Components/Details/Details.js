import React, {useEffect, useState} from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Details.css';
import { Redirect } from "react-router-dom";

const Details = ({ makeup, id }) => {
  console.log('makeup', makeup)

    const findProduct = () => {
        return makeup.find((item) => item.id === parseInt(id));
    } 

    const detailsOnDisplay = () => {
        const ourProduct = findProduct()
        console.log('ourProduct', ourProduct)
        if (makeup.length === 0) {
          return <Redirect to="/error" />;
        }
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
        )}
    
    return <div className="productDetailsContainer">{detailsOnDisplay()}</div>;
      
  
};

export default Details;