import React from 'react';

const Category = ({ data }) => {
  const filteredMakeupTypes = data.map(item => item["product_type"])
  const productTypes = filteredMakeupTypes.filter((item, index) => filteredMakeupTypes.indexOf(item) === index)
  
  const productsToDisplay = productTypes.map((item) => {
    if (item === "mascara") {
      return (
        <img
          src="https://images.unsplash.com/photo-1512207128881-1baee87126fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=899&q=80"
          alt="mascara"
        ></img>
      );
    }
  });
  return <div>{productsToDisplay}</div>;
};

export default Category;