import React from "react";
// import Sidebar from "./partials/Sidebar";
import Header from "./partials/Header";
import "./App.css";
import Home from "./Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Store from "./Store";
import TableDetail from "./TableDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/TableDetail" exact component={TableDetail} />
          <Route path="/" exact component={Login} />
          <div>
            <Header />
            <Route path="/Dashboard" component={Home} />
            <Route path="/Store" component={Store} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
