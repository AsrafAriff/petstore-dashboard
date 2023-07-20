import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <a href="home">Home</a>
        <a href="about">About</a>
        <a href="services">Services</a>
        <a href="contact">Contact</a>
      </div>
      <div className="menu-icon" onClick={handleMenuToggle}>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
