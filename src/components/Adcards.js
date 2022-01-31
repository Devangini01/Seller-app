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
                  <div className="dates">
                    <div className="start">
                      <strong>{ad.pro1}</strong>
                      {ad.date1}
                      <span />
                    </div>
                    <div className="ends">
                      <strong>{ad.pro2}</strong> {ad.date2}
                    </div>
                  </div>
                  <div className="stats">
                    <div>
                      <strong>{ad.pro3}</strong>
                      {ad.count}
                    </div>
                    <div>
                      <strong>{ad.pro4}</strong> {ad.count}
                    </div>
                    <div>
                      <strong>DECLINED</strong> 182
                    </div>
                  </div>

                  <div className="row" style={{ marginBottom: 10 }}>
                    <Gallery />
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
