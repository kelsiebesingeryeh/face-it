import React from "react";

const AllergenFriendly = ({ allergenFriendly }) => {
  const allergenFriendlyProductsOnDisplay = allergenFriendly.map((item) => {
    console.log(item);
  });
  return <h2>AllergenFriendly</h2>;
};

export default AllergenFriendly;
