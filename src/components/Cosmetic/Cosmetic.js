import React from 'react';
import './Cosmetic.css';
import { Link } from "react-router-dom";

const Cosmetic = ({name, brand, img, tags, productType, id}) => {
  const styledTags = tags.join(', ')

  return (
    <>
      <article className="cosmeticCard">
        <img src={img} alt={name} className="cosmeticCardImage"></img>
        <p>{brand}</p>
        <p>{name}</p>
        <span>
          <p>{styledTags}</p>
        </span>
      </article>
    </>
  );
}

export default Cosmetic;


// const Type = ({ img, title, category }) => {
//   return (
//     <Link to={`/${category}/${title}`}>
//       <article
//         className="productType"
//         style={{ backgroundImage: `url(${img})` }}
//       >
//         <h3>{title}</h3>
//       </article>
//     </Link>
//   );
// };

// export default Type;
