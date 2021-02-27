import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Items = ({ data, type }) => {
    const cosmeticTypes = data.filter(item => item['product_type'] === type)
    const cosmeticToDisplay = cosmeticTypes.map(item => {
      return <Cosmetic />
    })
    //we have filtered arrays; next question ...
    //map over items (array of objects)
    //and return an array of details
    //cosemetic = card
    return (
        <div>{cosmeticToDisplay}</div>
    )
}

export default Items;
