import React from "react";
import TokenService from "../services/token-service";
import AuthApiService from "../services/auth-api-service";
import ReactDom from "react-dom";

export default class SignInModal extends React.Component {
  static defaultProps = {
    onLoginSuccess: () => {},
    onRegistrationSuccess: () => {},
  };

  state = { error: null };

  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { username, password } = ev.target;

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then((res) => {
        username.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        /* Set Local Storage with User Id Here */
        this.props.onLoginSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { display_name, username, password } = ev.target;

    this.setState({ error: null });
    AuthApiService.postUser({
      username: username.value,
      password: password.value,
      display_name: display_name.value,
    })
      .then((user) => {
        display_name.value = "";
        username.value = "";
        password.value = "";
        this.props.onRegistrationSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    if (!this.props.open) return null;
    const { error } = this.state;

    return ReactDom.createPortal(
      <>
        <div className="item-modal-overlay" />
        <div className="item-modal-wrapper">
          <div className="signin-modal-wrapper">
            <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
              <h3>Sign in!</h3>
              <label htmlFor="LoginForm__username">Username</label>
              <input name="username" id="LoginForm__username"></input>
              <label htmlFor="LoginForm__password">Password</label>
              <input
                name="password"
                type="password"
                id="LoginForm__password"
              ></input>
              <button type="submit" id="sign-in-btn" className="btn">
                <span className="noselect">Sign In</span>
                <div className="circle"></div>
              </button>
            </form>
          </div>
          <div className="signup-modal-wrapper">
            <form className="RegistrationForm" onSubmit={this.handleSubmit}>
              <h3>Sign up!</h3>
              <label htmlFor="RegistrationForm__display_name">
                Display Name
              </label>
              <input
                name="display_name"
                type="text"
                required
                id="RegistrationForm__display_name"
              ></input>
              <label htmlFor="RegistrationForm__username">Username</label>
              <input
                name="username"
                type="text"
                required
                id="RegistrationForm__username"
              ></input>
              <label htmlFor="RegistrationForm__password">Password</label>
              <input
                name="password"
                type="password"
                required
                id="RegistrationForm__password"
              ></input>
              <button type="submit" id="sign-up-btn" className="btn">
                <span className="noselect">Sign Up</span>
                <div className="circle"></div>
              </button>
            </form>
          </div>
          <div className="modal-close-wrapper">
            <button className="btn" onClick={this.props.onClose}>
              <span className="noselect">Close</span>
              <div className="circle"></div>
            </button>
          </div>
        </div>
      </>,
      document.getElementById("portal")
    );
  }
}
