import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { useHistory } from "react-router-dom";
import Home from "./Dashboard";
import "./Login.css";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    //     <div className="bo">

    //     <div className="wrapper">
    //   <div className="col-md-12">

    //     <form className="form">
    //     <center> <h1>Welcome</h1></center>
    //       <input type="text" placeholder="Username" />
    //       <input type="password" placeholder="Password" />
    //      <center><button type="submit" id="login-button" onClick={() =>{history.push("/Dashboard")}}>Login</button></center>
    //     </form>
    //   </div>
    //   <ul className="bg-bubbles">
    //     <li />
    //     <li />
    //     <li />
    //     <li />
    //     <li />
    //     <li />
    //     <li />
    //     <li />
    //     <li />
    //     <li />
    //   </ul>
    // </div>

    //     </div>
    <div className="bo">
      <div className="main">
        <section className="sign-in">
          <div className="container0">
            <div className="signin-content">
              <div className="signin-image">
                <figure>
                  <img
                    src="/images/signin-image.jpg"
                    alt="sing up image"
                    className="img10"
                  />
                </figure>
                <a href="#" className="signup-image-link">
                  Create an account
                </a>
              </div>
              <center>
                <div className="signin-form">
                  <div>
                    <center>
                      <a href="">
                        <img src="/images/logo.png" height={50}></img>
                      </a>
                    </center>
                  </div>
                  <h2 className="form-title" style={{marginTop:20}}>Sign In</h2>
                  <form method="POST" className="register-form" id="login-form">
                    <div className="form-group">
                      <label htmlFor="your_name">
                        <i className="fa fa-user" />
                      </label>
                      <input
                        type="text"
                        name="your_name"
                        id="your_name"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="your_pass">
                        <i className="fa fa-unlock-alt" />
                      </label>
                      <input
                        type="password"
                        name="your_pass"
                        id="your_pass"
                        placeholder="Password"
                      />
                    </div>
                    
                    <div className="form-group form-button">
                      <button
                        className="button"
                        onClick={() => {
                          history.push("/Dashboard");
                        }}
                      >
                        <span style={{ Color: "#000", fontWeight: "bold" }}>
                          Login
                        </span>
                      </button>

                      {/* <center><input type="Log In" name="signin" id="signin" className="form-submit" defaultValue="Log in"  onClick={() =>{history.push("/Dashboard")}} /></center> */}
                    </div>
                  </form>
                  <div className="social-login">
                    <span className="social-label">
                      Or login via <a href="#">otp</a>
                    </span>
                  </div>
                </div>
              </center>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
