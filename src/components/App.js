import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthenticatedRoute } from "../helpers";
import '../styling/App.css';
import Login from "./Login"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;