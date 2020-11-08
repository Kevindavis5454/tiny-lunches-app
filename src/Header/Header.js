import React from "react";
import { Link } from "react-router-dom";
import SignInModal from "../SignInModal/SignInModal";
import TokenService from "../services/token-service";

export default class Header extends React.Component {
  state = {
    isOpen: false,
    showMenu: false,
  };

  handleLogoutClick = () => {
    localStorage.clear();
  };

  renderLoginLink() {
    return (
      <button
        onClick={() => this.setState({ isOpen: true })}
        className="signUp-signIn"
      >
        <span role="img" aria-label="login">
          🔐
        </span>
      </button>
    );
  }

  renderLogoutLink() {
    return (
      <button className="signUp-signIn" onClick={this.handleLogoutClick}>
        <Link to="/">
          <span role="img" aria-label="login">
            🚫
          </span>
        </Link>
      </button>
    );
  }

  render() {
    return (
      <>
        <div className="logo-div">
          <img
            id="tiny-logo"
            alt="tiny lunches logo"
            src={require("./TinyLunchesCropped.png")}
          ></img>
        </div>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
        <SignInModal
          open={this.state.isOpen}
          onClose={() => this.setState({ isOpen: false })}
        />
        <div className="menu-wrapper">
          <input
            type="checkbox"
            className="toggle"
            checked={this.state.showMenu}
            onChange={() => this.setState({ showMenu: !this.state.showMenu })}
          ></input>
          <div className="hamburger">
            <div className="bar"></div>
          </div>
          <div className="menu">
            <ul>
              <li>
                <Link to="/" onClick={() => this.setState({ showMenu: false })}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/myLists"
                  onClick={() => this.setState({ showMenu: false })}
                >
                  Saved Lunches
                </Link>
              </li>
              <li>
                <Link
                  to="/pantry"
                  onClick={() => this.setState({ showMenu: false })}
                >
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
              <Link to="/myLists">Saved Lunches</Link>
            </li>
            <li>
              <Link to="/pantry">Pantry</Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}
