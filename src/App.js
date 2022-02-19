import React from "react";
// import Sidebar from "./partials/Sidebar";
import Header from "./partials/Header";
import "./App.css";
import Home from "./Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Store from "./Store";
import TableDetail from "./TableDetail";
import Seller from "./Seller";
import RequestCoupon from "./RequestCoupon";
import Header2 from "./partials/Header2";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/TableDetail" exact component={TableDetail} />
          <Route path="/" exact component={Login} />
          <Route path="/Seller" component={Seller} />
          <Route path="/RequestCoupon" component={RequestCoupon} />
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
