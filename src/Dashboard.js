import React from "react";
import "./Dashboard.css";
import Card from "./components/Card";
import Insights from "./components/Insights";
import Transaction from "./components/Transaction";
import Insitd from "./components/Insitd";
import Adcards from "./components/Adcards";
import DashAds from "./components/DashAds";

const Home = () => {
  return (
    <div className="home100">
      <div className="content100" style={{ marginTop: 100 }}>
        <div className="row">
          <div className="col-lg-3">
            <div className="card bg-c-blue1 ">
              <p className="m-b-0">
                Total Stores : <span>45</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="one" style={{ marginTop: 30 }}>
        <h4>Insights Today</h4>
        <Insitd />
      </div>
      <div className="one">
        <h4>Insights Till Date </h4>
        <Insights />
      </div>
      <div className="one" style={{ marginTop: 30 }}>
        <h4>Top Viewed Ads</h4>
        <DashAds />
      </div>
      <div className="one" style={{ marginTop: 30 }}>
        <h4>Top Availed Ads</h4>
        <DashAds />
      </div>
      <div className="one" style={{ marginTop: 30 }}>
        <h4>Most Visited Stores</h4>
        <Card />
      </div>
      <div className="one">
        <h4>Recent Transactions</h4>
        <Transaction />
      </div>
    </div>
  );
};

export default Home;
