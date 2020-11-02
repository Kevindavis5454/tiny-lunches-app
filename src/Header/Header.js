import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignInModal from "../SignInModal/SignInModal";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="logo-div">
        <img
          id="tiny-logo"
          alt="tiny lunches logo"
          src={require("./TinyLunchesCropped.png")}
        ></img>
      </div>
      <button onClick={() => setIsOpen(true)} className="signUp-signIn">
        <span role="img" aria-label="login">
          🔐
        </span>
      </button>
      <SignInModal open={isOpen} onClose={() => setIsOpen(false)} />
      <div className="menu-wrapper">
        <input
          type="checkbox"
          className="toggle"
          checked={showMenu}
          onChange={() => setShowMenu(!showMenu)}
        ></input>
        <div className="hamburger">
          <div className="bar"></div>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/" onClick={() => setShowMenu(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/myLists" onClick={() => setShowMenu(false)}>
                My Saved Lunches
              </Link>
            </li>
            <li>
              <Link to="/pantry" onClick={() => setShowMenu(false)}>
                Pantry
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <nav className="large-screen-nav">
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/myLists">My Saved Lunches</Link>
          </li>
          <li>
            <Link to="/pantry">Pantry</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
