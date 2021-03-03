import React, {useEffect, useState} from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Details.css';
import Error from '../Error/Error';
import { Redirect } from "react-router-dom";
import LoadingMessage from '../Loading/Loading';
const Details = ({ makeup, id }) => {
  const [singleProduct, setSingleProduct] = useState(null);
  const [incorrectId, setIncorrectId] = useState(false)
  useEffect(() => detailsAPI(), [id]);
  const detailsAPI = () => {
    return fetch("http://localhost:3001/api/v1/makeup")
      .then((response) => response.json())
      .then((data) => {
        if( data.length ) {
          const allMakeup = makeup.length ? makeup : data
          const singleMakeup = allMakeup.find((item) => item.id === parseInt(id))
          if (singleMakeup) {
            setSingleProduct(singleMakeup)
          } else {
            setIncorrectId(true)
          }
        }
      })
      
  }

return (
  <div className="productDetailsContainer">
    {incorrectId && <Redirect to="/error" /> && <Error />}
    {!singleProduct && !incorrectId && <LoadingMessage />}
    {singleProduct &&  <SingleProduct
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
    }
  </div> 
)
}
export default Details;

