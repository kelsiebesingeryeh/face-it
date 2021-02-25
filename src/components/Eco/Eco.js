import React from 'react';
import Type from '../Type/Type';

const Eco = ({eco}) => {
    const filterMakeupTypes = eco.map((item) => item["product_type"]);
    const productTypes = filterMakeupTypes.filter(
      (item, index) => filterMakeupTypes.indexOf(item) === index
    );
    
    const ecoProductsOnDisplay = productTypes.map((item) => {
      return <Type 
      title={item} 
      key={item} />
    });
    return (
        <div className="ecoContainer">
            {ecoProductsOnDisplay}
        </div>
    )
}

export default Eco;