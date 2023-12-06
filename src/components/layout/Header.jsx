import React from 'react'
 import {
  NavLink,
} from "react-router-dom";
function Header() {
 
  return (
    <header>
      <nav>
        <h2 id="title">Pizza Feedback</h2>
        <ul>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
 
export default Header
