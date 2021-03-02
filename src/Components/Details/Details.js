import React, {useEffect, useState} from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Details.css';
import { Redirect } from "react-router-dom";

const Details = ({ makeup, id }) => {
  const [singleProduct, setSingleProduct] = useState(null);
  console.log('makeup', makeup);
  console.log("before", singleProduct);
  // useEffect(() => {
  //   // findProduct(id);
  //   // console.log('state', singleProduct)
  // }, []);

    // const findProduct = () => {
    //     const singleMakeup = makeup.find((item) => item.id === parseInt(id));
    //     // returns an object with the id that matches in makeup array
    //     console.log('single', singleMakeup)
    //    setSingleProduct(singleMakeup);
    // } 

    const detailsOnDisplay = () => {
        // findProduct();
        // if (makeup.length === 0) {
        //   return <Redirect to="/error" />;
        // }
        setSingleProduct(makeup.find((item) => item.id === parseInt(id)));
        console.log('after', singleProduct)
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