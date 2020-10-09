// @flow
import React, { Component } from "react";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import {LoginForm} from "../LoginForm/index.js";

import "../../css/Home.scss";

type Props = {
  getLoginInfo: Function,
  isLogged: Boolean
};



export class Home extends Component<Props> {

  componentDidMount() {
    this.props.getLoginInfo();
    console.log("ISLOGGED", this.props);
  }

  render() {
    /* Wrap Login Page with isLogged State */
    return (
      <div className="main">
          <LoginForm></LoginForm>
      </div>
    );
  }
}
