import React from "react";
import "./Transaction.css";
import data from "../data";

const Transaction = () => {
  return (
    <div>
      <div className="content">
        <div className="limiter3">
          <div className="container-table1003">
            <div className="wrap-table1003">
              <div className="table100 ver13 m-b-110">
                <div className="table100-head">
                  <table>
                    <thead className="bg-table">
                      <tr className="row100 head ">
                        <th className="cell100 column22">Store</th>
                        <th className="cell100 column23">Category</th>
                        <th className="cell100 column24">Date Time</th>
                        <th className="cell100 column25">Amount</th>
                        <th className="cell100 column26">Offer</th>
                      </tr>
                    </thead>
                  </table>
                </div>
                <div className="table100-body ">
                  <table>
                    <tbody>
                      {data.transaction.map((t1) => {
                        return (
                          <tr className="row100 body">
                            <td className="cell100 column22">{t1.store}</td>
                            <td className="cell100 column23">{t1.category}</td>
                            <td className="cell100 column24">{t1.date}</td>
                            <td className="cell100 column25">{t1.amount}</td>
                            <td className="cell100 column26">{t1.offers}</td>
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
    </div>
  );
};
export default Transaction;
