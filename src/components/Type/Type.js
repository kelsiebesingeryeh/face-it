import React from 'react';
import './Type.css';
import {Link} from 'react-router-dom';

const Type = ({img, title, category}) => {
    return (
      <Link to={`/${category}/${title}`}>
        <article className="productType" style={{backgroundImage:`url(${img})`}}>
          <h3>{title}</h3>
        </article>
      </Link>
    );
}

export default Type;
