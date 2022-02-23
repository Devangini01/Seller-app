import React from "react";
import "./TableDetail.css";
import { useHistory } from "react-router-dom";
import TDHistory from "./components/TDHistory";
import Adcards from "./components/Adcards";
import Insi from "./components/Insi";
import Profile from "./components/Profile";
import Pagination from "./components/Pagination";
import Slider from "./components/Slider";


const TableDetail = () => {
  const history = useHistory();

  const handleRowClick = () => {
    history.push("/Store");
  };

  return (
    <div>
      <div className="detail">
        <div>
          <button onClick={handleRowClick}>
            {" "}
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </button>
        </div>

        <div className="row">
          <div className="col-md-3">
            <Profile />
          </div>{" "}
          <div className="col-md-8">
            <div className="one">
              <h4>Insights Till Date</h4>
            </div>
            <div className="row">
              <Insi />
            </div>
          </div>
        </div>
      </div>

      <div className="one">
        <h4>Live Ads</h4>
        <Adcards />
      </div>

      <div className="one" style={{ marginTop: 20 }}>
  <h4>History</h4>
     <Slider />
</div>

<div className="one" style={{ marginTop: 20 }}>
  <h4>Recent Transaction</h4>
     <Pagination />
</div>
    </div>
  );
};

export default TableDetail;
