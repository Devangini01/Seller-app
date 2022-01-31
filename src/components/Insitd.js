import React from "react";
import "./Insitd.css";
import data from "../data";
const Insitd = () => {
  return (
    <div>
      <div className="content1">
        <div className="animated fadeIn">
          <div className="row start">
            {data.data2.map((data) => {
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
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insitd;
