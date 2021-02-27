import React from 'react';

const Items = ({ data, type }) => {
    const cosmeticTypes = data.filter(item => item['product_type'] === type)
    console.log('filtered', cosmeticTypes)
    //we have filtered arrays; next question ...
    //map over items (array of objects)
    //and return an array of details
    //cosemetic = card
    return (
        <h2>Items</h2>
    )
}

export default Items;
