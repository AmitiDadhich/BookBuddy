import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import BookCard from "./BookCard";

// NavBar component definition
function NavBar() {
  // Render the navigation bar
  return (
    <nav>
      <ul>
        {/* Logo */}
        <img src="src\assets\logo.png" alt="logo" className="navbarImage" />
        {/* Home link */}
        <li>
          <a href="#cardContainer">Home</a>
        </li>
        {/* About link */}
        <li>
          <a href="#footer">About</a>
        </li>
      </ul>
    </nav>
  );
}

// Export NavBar component
export default NavBar;
