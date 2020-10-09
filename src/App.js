// @flow

import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import "./css/App.scss";
import "./css/buttons.css";


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route component={() => <div>404 Not found </div>} />
        </Switch>
      </div>
    );
  }
}
