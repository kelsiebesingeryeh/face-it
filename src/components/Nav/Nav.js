import React from 'react';
import './Nav.css';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <div className="categoryNavList">
            <Link to="eco">
              <li>Eco</li>
            </Link>
            <Link to="allergenFriendly">
              <li>Allergen Friendly</li>
            </Link>
            <Link to="vegan">
              <li>Vegan</li>
            </Link>
          </div>
        </ul>
      </nav>
    );
}

export default Nav;