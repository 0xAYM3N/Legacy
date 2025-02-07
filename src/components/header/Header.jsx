import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  return (
    <header className="  flex">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu icon-menu flex"
      >
      </button>
      <div />

      <nav>
        <div className="flex">
          <Link to="/">Home</Link>
          <Link to="/Articles">Articles</Link>
          <Link to="">Projects</Link>
          <Link to="">Contact</Link>
        </div>
      </nav>

      <button className="mode flex">
        <span className="icon-moon-o"></span>
      </button>

      {showModal && (
        <div className="fixed">
          <div className="modal ">
            <button
              className="icon-close"
              onClick={() => {
                setshowModal(false);
              }}
            />

            <Link to="/">Home</Link>
            <Link to="/Articles">Articles</Link>
            <Link to="">Projects</Link>
            <Link to="">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
