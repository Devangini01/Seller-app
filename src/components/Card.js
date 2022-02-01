import React from "react";
import "./Card.css";
import data from "../data";

const Card = () => {
  return (
    <div className="home">
      <div className="content">
        <div className="row">
          {data.stores1.map((store1) => {
            return (
              <div className="col-lg-4 ">
                <div className={"card99 " + store1.color + " order-card"}>
                  <div className="card-block">
                    <div className="row">
                      <div className="col-6">
                        <i className={store1.icon} />
                        <span
                          className="m-b-20 name"
                          style={{ marginLeft: 10 }}
                        >
                          {store1.name}
                        </span>
                      </div>
                      <div className="col-6">
                        <span style={{ float: "right" }}>{store1.id}</span>
                      </div>
                    </div>
                    <div className="row" style={{ marginTop: 30}}>
                      <div className="col-6">
                        <p className="m-b-0 text">Total Coupons</p>
                      </div>
                      <div className="col-6">
                        <span style={{ float: "right" }} className="view">
                          {store1.views}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
