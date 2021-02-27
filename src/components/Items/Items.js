import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Items.css';

const Items = ({ data, type }) => {
    const cosmeticTypes = data.filter(item => item['product_type'] === type)
    console.log('data', data)
    console.log('type', type)
    const cosmeticToDisplay = cosmeticTypes.map(item => {
      return <Cosmetic
      id={item.id}
      key={item.id}
      name={item.name}
      brand={item.brand}
      img={item["image_link"]}
      tags={item["tag_list"]}
      productType={item["product_type"]}
      />
    })
    //we have filtered arrays; next question ...
    //map over items (array of objects)
    //and return an array of details
    //cosemetic = card
    return (
        <div className="productTypeContainer">
          {cosmeticToDisplay}
        </div>
    )
}

export default Items;
