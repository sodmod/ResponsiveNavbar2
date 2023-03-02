import { useState } from "react";
import "./NavbarStyle.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((previous) => !previous);
  };

  return (
    <>
      <nav className="navbarItems">
        <h1 className="logo">
          React <i className="fa-brands fa-react" />
        </h1>
        <div className="menu-icons" onClick={handleClick}>
          <i className={clicked ? "fa-solid fa-bars" : "fa-solid fa-xmark"} />
        </div>
        <ul className={clicked ? "nav-menu " : "nav-menu active"}>
          <li>
            <a href="index.html" className="nav-links">
              <i className="fa-solid fa-house-user" />
              Home
            </a>
          </li>
          <li>
            <a href="index.html" className="nav-links">
              <i className="fa-solid fa-circle-info" />
              About
            </a>
          </li>
          <li>
            <a href="index.html" className="nav-links">
              <i className="fa-solid fa-briefcase" />
              Service
            </a>
          </li>
          <li>
            <a href="index.html" className="nav-links">
              <i className="fa-solid fa-address-book" />
              Contact
            </a>
          </li>
          <li>
            <a href="index.html" className="nav-links">
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
