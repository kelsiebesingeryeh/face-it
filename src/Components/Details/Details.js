import React, {useEffect, useState} from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Details.css';
import Error from '../Error/Error';
import { Redirect } from "react-router-dom";
import LoadingMessage from '../Loading/Loading';
import apiCalls from '../../apiCalls';

const Details = ({ makeup, id }) => {
  const [singleProduct, setSingleProduct] = useState(null);
  const [incorrectId, setIncorrectId] = useState(false);

  useEffect(() => {
    const detailsAPI = () => {
      return apiCalls.getApiData()
      .then((data) => {
        if( data.length ) {
          const singleMakeup = data.find((item) => item.id === parseInt(id))
          if (singleMakeup) {
            setSingleProduct(singleMakeup)
          } else {
            setIncorrectId(true)
          }
        }
      })

    }
    detailsAPI();
  }, [id]);

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
