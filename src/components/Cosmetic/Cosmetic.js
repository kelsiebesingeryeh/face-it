import React from 'react';
import './Cosmetic.css';
import { Link } from "react-router-dom";

const Cosmetic = ({name, brand, img, tags, productType, id}) => {
  const styledTags = tags.join(', ');

  return (
      <article className="cosmeticCard">
        <img src={img} alt={name} className="cosmeticCardImage"></img>
        <p className="cosmeticDetail">
          <strong>{brand}</strong>
        </p>
        <p className="cosmeticDetail">{name}</p>
        <p className="tags">{styledTags}</p>
      </article>
  );
}

export default Cosmetic;
