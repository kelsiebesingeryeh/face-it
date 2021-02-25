import React from "react";

const Vegan = ({ vegan }) => {
  const veganProductsOnDisplay = vegan.map((item) => {
    console.log(item);
  });
  return <h2>Vegan</h2>;
};

export default Vegan;
