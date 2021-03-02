import React from 'react';
import './Nav.css';
import { Link } from "react-router-dom";

const Nav = ({handleClick}) => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li onClick={() => handleClick()}>Home</li>
        </Link>
        <div className="categoryNavList">
          <Link to="/eco">
            <li onClick={() => handleClick()}>Eco</li>
          </Link>
          <Link to="/allergenFriendly">
            <li onClick={() => handleClick()}>Allergen Friendly</li>
          </Link>
          <Link to="/vegan">
            <li onClick={() => handleClick()}>Vegan</li>
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;