import React from "react";
import "./Header2.css";
import { useHistory } from "react-router-dom";

const Header2 = () => {
  const history = useHistory();
  return (
    <nav
      className="navbar navbar-expand-lg  fixed-top"
      style={{ background: "#232323" }}
    >
      <div className="container">
        <div
          onClick={() => {
            history.push("/Seller");
          }}
        >
          <a href="">
            <img src="/images/logo.png" height={40} />
            <span style={{ marginLeft: 10 }}>Citybubble</span>
          </a>
        </div>
        {/* <div className="nav-title">
          <h5>Mall Of Amritsar</h5>
        </div> */}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li
              className="nav-item"
              onClick={() => {
                history.push("/RequestCoupon");
              }}
            >
              <a
                style={{ Color: "#fff" }}
                className="nav-link d-flex flex-column text-center"
                aria-current="page"
                href="#"
              >
                <i className="fas fa-store fa-lg" />
                <span>Coupon Requests</span>
              </a>
            </li>

            <li
              className="nav-item"
              onClick={() => {
                history.push("/");
              }}
              style={{ marginLeft: 30 }}
            >
              <a
                className="nav-link d-flex flex-column text-center"
                aria-current="page"
                href="#"
              >
                <i class="fas fa-sign-out-alt fa-lg" />
                <span>Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header2;
