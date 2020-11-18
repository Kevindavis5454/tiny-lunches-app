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
    this.props.history.push("/");
  };

  renderLoginLink() {
    return (
      <button
        onClick={() => this.setState({ isOpen: true })}
        className="btnIconHeader"
      >
        <div className="logout-link">
          <img
            className="logout-png"
            src={require("../Images/login-32.png")}
          ></img>
        </div>
        <div className="circleIconHeader"></div>
      </button>
    );
  }

  renderLogoutLink() {
    return (
      <button className="btnIconHeader" onClick={this.handleLogoutClick}>
        <Link className="logout-link" to="/">
          <img
            className="logout-png"
            src={require("../Images/logout-32.png")}
          ></img>
          <div className="circleIconHeader"></div>
        </Link>
      </button>
    );
  }

  renderAuthNav() {
    return (
      <>
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
          <Link to="/pantry" onClick={() => this.setState({ showMenu: false })}>
            Pantry
          </Link>
        </li>
      </>
    );
  }

  renderNoAuthNav() {
    return (
      <li>
        <Link to="/" onClick={() => this.setState({ showMenu: false })}>
          Home
        </Link>
      </li>
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
              {TokenService.hasAuthToken()
                ? this.renderAuthNav()
                : this.renderNoAuthNav()}
            </ul>
          </div>
        </div>
      </>
    );
  }
}
