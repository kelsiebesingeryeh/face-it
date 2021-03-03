import React from 'react';
import './Category.css';

const Category = ({ data }) => {
  const filteredMakeupTypes = data.map(item => {
    return (item = {
      product_type: item["product_type"],
      image_link: item["image_link"],
    });
  })
  const productTypes = filteredMakeupTypes.filter((item, index) => filteredMakeupTypes.indexOf(item) === index)
  
  const productsToDisplay = productTypes.map((item) => {
    if (item === "mascara") {
      return (
        <img
          className="productTypeImage"
          src="https://images.unsplash.com/photo-1512207128881-1baee87126fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=899&q=80"
          alt="mascara"
        ></img>
      );
    }
    else if (item === 'blush') {
      return (
        <h1>blush</h1>
      )
    }
  });
  return <div>{productsToDisplay}</div>;
};

export default Category;
