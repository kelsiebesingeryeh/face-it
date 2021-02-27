import React from 'react';
import './Cosmetic.css';
import { Link } from "react-router-dom";

const Cosmetic = ({name, brand, img, tags, productType, id}) => {
  return (
    <article className="productType"
    style={{ backgroundImage: `url(${img})` }}
    >
      
    </article>
  )
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
