import React from "react";
import data from "../data";
import "./Insi.css";
const Insi = () => {
  return (
    // <div className="card1">
    //   <div className="card-body text-center" style={{ padding: 0 }}>
    //     <div className="row">
    //       <div className="col-3">
    //         <div className="stat-icon1 dib flat-color-1">
    //           <i className="pe-7s-graph1" />
    //         </div>
    //       </div>
    //       {data.insi.map((i1) => {
    //         return (
    //           <div className="col-3 border-end border-light">
    //             <h5 className="text-muted mt-1 mb-2 fw-normal">{i1.heading}</h5>
    //             <h2 className="mb-0 fw-bold">{i1.count}</h2>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>

    <div>
      <div className="row ">
        <div className=" col-md-4">
          <div className="card77 l-bg-blue-dark">
            <div className="card-statistic-3 p-4">
              <div className="card-icon card-icon-large">
                <i className="fas fa-shopping-cart" />
              </div>
              <div className="mb-4">
                <h5 className="card-title mb-0">Active ads</h5>
              </div>
              <div className="row align-items-center mb-2 d-flex">
                <div className="col-8">
                  <h2 className="d-flex align-items-center mb-0">3,243</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" col-md-4">
          <div className="card77 l-bg-green-dark">
            <div className="card-statistic-3 p-4">
              <div className="card-icon card-icon-large">
                <i className="fas fa-ticket-alt" />
              </div>
              <div className="mb-4">
                <h5 className="card-title mb-0">Coupons claimed</h5>
              </div>
              <div className="row align-items-center mb-2 d-flex">
                <div className="col-8">
                  <h2 className="d-flex align-items-center mb-0">578</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" col-md-4">
          <div className="card77 l-bg-orange-dark">
            <div className="card-statistic-3 p-4">
              <div className="card-icon card-icon-large">
                <i className="fas fa-dollar-sign" />
              </div>
              <div className="mb-4">
                <h5 className="card-title mb-0">Wallet Today</h5>
              </div>
              <div className="row align-items-center mb-2 d-flex">
                <div className="col-8">
                  <h2 className="d-flex align-items-center mb-0">$11.61k</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insi;
