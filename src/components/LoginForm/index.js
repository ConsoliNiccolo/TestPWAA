// @flow
import React, { Component } from "react";

import "../../css/Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

let classNames = require("classnames");

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignupFormShown: false,
      isLoginFormShown: false,
      signupExit: true,
      loginExit: true,
    };
  }

  componentDidMount() {
    //State already filled.
    console.log(this.state);
  }

  handleLoginClick() {
    if (!this.state.isLoginFormShown) {
      this.setState((state, props) => ({
        isLoginFormShown: true,
        loginExit: false,
      }));
    } else {
      this.setState((state, props) => ({
        isLoginFormShown: false,
        loginExit: true,
      }));
    }
  }

  handleSignupClick() {
    if (!this.state.isSignupFormShown) {
        // Form up to be showed.
      this.setState((state, props) => ({
        isSignupFormShown: true,
        signupExit: false,
      }));
    } else {
        // Form down.
      this.setState((state, props) => ({
        isSignupFormShown: false,
        signupExit: true,
      }));
    }
  }

  handleLoginExit() {
    if (this.state.isLoginFormShown) {
      this.setState((state, props) => ({
        isLoginFormShown: false,
        loginExit: true,
      }));
    }
  }

  handleSignupExit() {
    if (this.state.isSignupFormShown) {
      this.setState((state, props) => ({
        isSignupFormShown: false,
        signupExit: true,
      }));
    }
  }

  render() {
    let loginFormClasses = classNames({
      "slide-up": !this.state.isLoginFormShown,
      login: true,
    });

    let signupFormClasses = classNames({
      "slide-up": !this.state.isSignupFormShown,
      signup: true,
    });

    let loginExitClasses = classNames({
      "d-none": this.state.loginExit,
    });

    let signupExitClasses = classNames({
      "d-none": this.state.signupExit, 
    });

    return (
      <div className="form-structor">
        <div className="info__login">
          <img
            className="image__logo"
            src="https://i.pinimg.com/originals/bf/57/89/bf5789aba519ae9091dd75825dff18cc.png"
          />

          <div className="buttons">
            <button
              onClick={() => {
                this.handleLoginClick();
              }}
              className="btn-initial"
              id="login"
            >
              Login
            </button>
            <button
              onClick={() => {
                this.handleSignupClick();
              }}
              className="btn-initial"
              id="signup"
            >
              Signup
            </button>
          </div>

          <div className="socials">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" />
          </div>
        </div>
        <div className={loginFormClasses} id="login-panel">
          <div
            className="login-exit-button"
            onClick={() => {
              this.handleLoginExit();
            }}
          >
            <FontAwesomeIcon
              icon={faTimes}
              className={loginExitClasses}
              size="lg"
            />
          </div>

          <div className="center">
            <div className="form-holder">
              <input type="email" className="input" placeholder="Email" />
              <input type="password" className="input" placeholder="Password" />
            </div>
            <button className="submit-btn">Log in</button>
          </div>
        </div>
        <div className={signupFormClasses} id="signup-panel">
          <div
            className="signup-exit-button"
            onClick={() => {
              this.handleSignupExit();
            }}
          >
            <FontAwesomeIcon
              icon={faTimes}
              className={signupExitClasses}
              size="lg"
            />
          </div>
          <div className="center">
            <div className="form-holder">
              <input
                type="email"
                className="input"
                placeholder="Email-Signup"
              />
              <input
                type="password"
                className="input"
                placeholder="Password-Signup"
              />
            </div>
            <button className="submit-btn">Log in</button>
          </div>
        </div>
      </div>
    );
  }
}
