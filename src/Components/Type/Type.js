import React from 'react';
import './Type.css';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

const Type = ({img, title, category}) => {
  const checkTitle = (title) => {
    if (title.includes('_')){
      return title.split('_').join(' ')
    } else {
      return title
    }
  }

  return (
    <Link to={`/${category}/${title}`}>
      <article className="productType" style={{backgroundImage:`url(${img})`}}>
        <h3>{checkTitle(title)}</h3>
      </article>
    </Link>
  );
}

export default Type;

Type.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
};
