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
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      {/* <div className="stat-widget-five">
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
                      </div> */}
                       <div className="media align-items">
            <div className="p-2 media-body text-left">
              <h5>{data.heading}</h5>
              <h5 className="text-bold-400 mb-0">{data.count}</h5>
            </div>
            <div className={"iconi " + data.color} >
            <div className=" text-center ">
              <i className={data.icon + " font-large-2 "}></i>
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
