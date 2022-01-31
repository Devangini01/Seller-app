import React from "react";
import data from "../data";
import "./Tdinsitd.css";
const Tdinsitd = () => {
  return (
    <div className="card1">
      <div className="card-body text-center" style={{ padding: 0 }}>
        <div className="row">
          <div className="col-3">
            <div className="stat-icon1 dib flat-color-1">
              <i className="pe-7s-graph1" />
            </div>
          </div>
          {data.tdinsitd.map((i1) => {
            return (
              <div className="col-3 border-end border-light">
                <h5 className="text-muted mt-1 mb-2 fw-normal">{i1.heading}</h5>
                <h2 className="mb-0 fw-bold">{i1.count}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tdinsitd;
