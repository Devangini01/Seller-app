import React, { useState,useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

import Home from "./Dashboard";
import "./Login.css";
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";

const Login = () => {
  const [car, setCar] = useState("select option");

  const [SellerVisible, setSellerVisible] = useState(false);
  const [AggregatorVisible, setAggregatorVisible] = useState(false);
  

  useEffect(() => {
    car === "seller"
      ? setSellerVisible(true)
      : setSellerVisible(false);
    car === "aggregator" ? setAggregatorVisible(true) : setAggregatorVisible(false);
    
  }, [car]);

  const handleOnChange = (e) => {
    setCar(e.target.value);
  };

  const makeFirstLetterCapital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderResult = () => {
    let result;
    car === "select option"
      ? (result = "select option")
      : (result = makeFirstLetterCapital(car));
    return result;
  };


 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }


 

  
  
    
    

 
  return (
    
    <div className="bo">
      <div className="main">
        <section className="sign-in">
          <div className="container0">
          {/* <center><a href="" className="main-2">
            <img src="/images/logo.png" height={60} />
            <span style={{ marginLeft: 10, color:"#000" }}>Citybubble</span>
          </a></center> */}
            <div className="signin-content">
              <div className="signin-image">
                <figure>
                  <img
                    src="/images/logo.png"
                    alt="sing up image"
                    className="img10"
                  /><span style={{ marginLeft: 10, color:"#000" }}>Citybubble</span>
                </figure>
                
              </div>
              <center>
                <div className="signin-form">
                  {/* <div>
                    <center>
                      <a href="">
                        <img src="/images/logo.png" height={50}></img>
                      </a>
                    </center>
                  </div> */}

                  
                  <div class="dropdown">
                    <h5>I am </h5>
                    <div className="mt-4">
        <select className="form-select" value={car} onChange={handleOnChange}>
          <option value="select option">Select Option</option>
          <option value="seller">Seller</option>
          <option value="aggregator">Aggregator</option>
        </select>
      </div>
                    
                    
                  </div>
                  
                    {SellerVisible && <Button2 />}
                    {AggregatorVisible && <Button1 />}
                      
                      {/* <center><input type="Log In" name="signin" id="signin" className="form-submit" defaultValue="Log in"  onClick={() =>{history.push("/Dashboard")}} /></center> */}
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
