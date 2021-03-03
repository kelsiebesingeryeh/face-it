import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Nav = ({handleClick}) => {
  return (
    <nav>
        <Link to='/'>
          <p onClick={() => handleClick()}>Home</p>
        </Link>
      <div className='categoryNavList'>
        <Link to='/eco'>
          <p onClick={() => handleClick()}>Eco</p>
        </Link>
        <Link to='/allergenFriendly'>
          <p onClick={() => handleClick()}>Allergen Friendly</p>
        </Link>
        <Link to='/vegan'>
          <p onClick={() => handleClick()}>Vegan</p>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

Nav.propTypes = {
handleClick: PropTypes.func
};