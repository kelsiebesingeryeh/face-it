// import React from 'react';
// import SingleProduct from '../SingleProduct/SingleProduct';
// import './Details.css';

// const Details = ({ makeup, id }) => {
//     const findProduct = () => {
//         return makeup.find((item) => item.id === parseInt(id));
//     } 

//     const detailsOnDisplay = () => {
//         const ourProduct = findProduct()
//         return (
//           <SingleProduct
//             id={ourProduct.id}
//             key={ourProduct.id}
//             brand={ourProduct.brand}
//             name={ourProduct.name}
//             img={ourProduct["image_link"]}
//             description={ourProduct.description}
//             productType={ourProduct["product_type"]}
//             tags={ourProduct["tag_list"]}
//             website={ourProduct["website_link"]}
//           />
//         );}

//   return <div className="productDetailsContainer">{detailsOnDisplay()}</div>;
// };

// export default Details;

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

