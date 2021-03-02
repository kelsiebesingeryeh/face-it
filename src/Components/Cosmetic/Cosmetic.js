import React from 'react';
import './Cosmetic.css';
import { Link } from "react-router-dom";

const Cosmetic = ({name, brand, img, tags, productType, id, category}) => {
  const styledTags = tags.join(', ');

  return (
    <Link to={`/${category}/${productType}/${id}`}>
      <article className="cosmeticCard">
        <img src={img} alt={name} className="cosmeticCardImage" id={id}></img>
        <p className="cosmeticDetail">
          <strong>{brand}</strong>
        </p>
        <p className="cosmeticDetail">{name}</p>
        <p className="tags">{styledTags}</p>
      </article>
    </Link>
  );
}

export default Cosmetic;
