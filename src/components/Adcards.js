import React from "react";
import "./Adcards.css";
import Gallery from "./Gallery";
import data from "../data";
const Adcards = () => {
  return (
    <div className="cards-2 section-gray">
      <div className="container">
        <div className="row">
          {data.content1.map((ad) => {
            return (
              <div className="col-md-3">
                <div className="card10 card10-blog">
                  <div className="card10-image">
                    <a href="#">
                      {" "}
                      <img
                        className="img img-raised"
                        src="/images/coupon.jpg"
                      />{" "}
                    </a>
                    <div className="ripple-cont" />
                  </div>
                  <div className="table">
                    <p className="category info">{ad.info}</p>

                    <p className="card-description">{ad.desc}</p>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="profile-overview">
                        <p>{ad.pro1}</p>
                        <h6>{ad.date1}</h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="profile-overview">
                        <p>{ad.pro2}</p>
                        <h6>{ad.date2}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="profile-overview">
                        <p>{ad.pro3}</p>
                        <h6>{ad.count}</h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="profile-overview">
                        <p>{ad.pro4}</p>
                        <h6>{ad.count}</h6>
                      </div>
                    </div>
                    <div className="row" style={{ marginBottom: 10 }}>
                      <Gallery />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Adcards;
