import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="flex">
      <div className="flex">
        <a href="">About</a>
        <a href="">Projects</a>
        <a href="">Speaking</a>
        <a href="">Uses</a>
      </div>

      <div className="icons">
        <div className="icon icon-instagram"></div>
        <div className="icon icon-github"></div>
        <div className="icon icon-twitter"></div>
      </div>
    </footer>
  );
};

export default Footer;
