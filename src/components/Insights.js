import React from "react";
import "./Insights.css";
import data from "../data";
const Insights = () => {
  return (
    <div>
      <div className="content">
        <div className="animated fadeIn">
          <div className="row">
            {data.data1.map((data) => {
              return (
                <div className="col-lg-4 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="stat-widget-five">
                        <div className={"stat-icon " + data.color + " dib"}>
                          <i className={data.icon} />
                        </div>
                        <div className="stat-content">
                          <div className="text-left dib">
                            <div className="row">
                              <div className="stat-text">
                                <span className="count">{data.count}</span>
                              </div>
                              <div className="stat-heading">{data.heading}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
