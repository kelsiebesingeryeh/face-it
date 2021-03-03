import React, {useEffect, useState} from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Details.css';
import { Redirect } from "react-router-dom";

const Details = ({ makeup, id }) => {
  const [singleProduct, setSingleProduct] = useState(null);
  useEffect(() => {
    detailsAPI();
    console.log('state', singleProduct)
  }, [id]);

  const detailsAPI = () => {
    return fetch("http://localhost:3001/api/v1/makeup")
      .then((response) => response.json())
      .then((data) => {
        const allMakeup = makeup.length ? makeup : data
        const singleMakeup = allMakeup.find((item) => item.id === parseInt(id))
        if (singleMakeup) {
          setSingleProduct(singleMakeup)
        }
      })
  }
  
  //need a fetch in the useEffect

    // const findProduct = () => {
        
    //   //   console.log('single', singleMakeup)
    //   //  return setSingleProduct(singleMakeup);
    // } 

    const detailsOnDisplay = () => {
      // const ourProduct = findProduct();
        if (!singleProduct) {
          return <Redirect to="/error" />;
        }
        // console.log('singleDetail', singleProduct)
        return (
          <SingleProduct
            id={singleProduct.id}
            key={singleProduct.id}
            brand={singleProduct.brand}
            name={singleProduct.name}
            img={singleProduct["image_link"]}
            description={singleProduct.description}
            productType={singleProduct["product_type"]}
            tags={singleProduct["tag_list"]}
            website={singleProduct["website_link"]}
          />
        );
      }
    
    return <div className="productDetailsContainer">{detailsOnDisplay()}</div>;
      
  
};

export default Details;