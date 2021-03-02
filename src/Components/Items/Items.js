import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Items.css';
import PropTypes from "prop-types";


const Items = ({ data, type, category }) => {
  const cosmeticTypes = data.filter(item => item['product_type'] === type)
  const cosmeticToDisplay = cosmeticTypes.map(item => {
    return <Cosmetic
    id={item.id}
    key={item.id}
    name={item.name}
    brand={item.brand}
    img={item["image_link"]}
    tags={item["tag_list"]}
    productType={item["product_type"]}
    category={category}
    />
  })

  return (
    <div className="productTypeContainer">
      {cosmeticToDisplay}
    </div>
  )
}

export default Items;

Items.propTypes = {
  data: PropTypes.array,
  type: PropTypes.string,
  category: PropTypes.string,
};