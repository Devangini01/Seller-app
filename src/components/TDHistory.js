import React from "react";
import "./TDHistory.css";
import data from "../data";
const TDHistory = () => {
  return (
    <div>
      <div className="limiter2">
        <div className="container-table1002">
          <div className="wrap-table1002">
            <div className="table1002 ver12 m-b-110">
              <div className="table1002-head">
                <table>
                  <thead className="bg-table">
                    <tr className="row100 head">
                      <th className="cell100 column11">Offer</th>
                      <th className="cell100 column12">Expired on</th>
                      <th className="cell100 column14">Total Coupons</th>
                      <th className="cell100 column15">Total Views</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="table1002-body ">
                <table>
                  <tbody>
                    {data.history.map((hist) => {
                      return (
                        <tr className="row100 body">
                          <td className="cell100 column11">{hist.offer}</td>
                          <td className="cell100 column12">{hist.date}</td>

                          <td className="cell100 column14">{hist.coupons}</td>
                          <td className="cell100 column15">{hist.views}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TDHistory;
