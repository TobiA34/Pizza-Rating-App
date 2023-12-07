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
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive ? "active-style" : "none"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={(navData) =>
              navData.isActive ? "active-style" : "none"
            }
          >
            About
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
 
export default Header
