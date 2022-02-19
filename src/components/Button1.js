import React from 'react'
import { useHistory } from "react-router-dom";
const Button1 = () => {
    const history = useHistory();
  return (
    <div>
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
                        placeholder="UserName"
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
                      <button type="button" className="btn btn-info"
    
    onClick={() => {
      history.push("/Dashboard");
    }}
  >
    
    <span style={{ Color: "#000", fontWeight: "bold" }}>
      Login
    </span>
  </button>
  
                    {/* <span className="social-label">
                      Or login via <a href="#">otp</a>
                    </span> */}
                
  </div>
  </form>
  </div>
                  
                 
              
  )
}

export default Button1