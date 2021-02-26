import React from 'react';
import './Type.css';

const Type = ({img, title}) => {
  const checkTitle = (title) => {
      if (title.includes('_')){
      return title.split('_').join(' ')
    } else {
      return title
    }
  }

    return (
      <article className="productType" style={{backgroundImage:`url(${img})`}}>
        <h3>{checkTitle(title)}</h3>
      </article>
    );
}

export default Type;
