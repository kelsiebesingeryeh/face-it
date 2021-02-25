import React from 'react';

const Type = ({img, title}) => {
    return (
      <article className="productType" style={{backgroundImage:`url(${img})`}}>
        <h3>{title}</h3>
      </article>
    );
}

export default Type;
