/* import React, { useState } from "react"; */
//import { Link } from "react-router-dom";
import "./Navbar.css";
import "./Button.css";

function Navbar() {
  /* const [click, setClick] = useState(false); */
  /* const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }; */

  /* window.addEventListener("resize", showButton); */
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          The Flat Finder
          {/* <button classname="hamburger" id="hamburger">
            <i classname="fas fa-times"></i>
          </button> 
          {/* <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div> */}
          {/*<div className="container">
              <span id="box-holder">
                <input
                  className="search-bar"
                  type="search"
                  placeholder="Search"
                  onChange={(e) => setQuery(e.target.value)}
                  value={query}
                />
              </span>
        </div> */}
          <ul className="nav-links">
            <li>
              <a href="/">Profile</a>
            </li>
          </ul>
          {/*{button && <button buttonStyle="btn--outline">Profile</button>}*/}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
