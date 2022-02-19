import React from 'react'
import { useHistory } from "react-router-dom";
const Button2 = () => {
    const history = useHistory();
    function refreshPage() {
      window.location.reload(false);
    }
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
          <button
    type="button" className="btn btn-info"
    onClick={() => {
      history.push("/Seller");
    }}
  >
    <span style={{ Color: "#000", fontWeight: "bold" }}>
      Login
    </span>
  </button>
  <div>
  <span className="social-label">
                      Or 
                    </span>
                    <div className="form-group">
          <label htmlFor="your_name">
            <i className="fa fa-user" />
          </label>
          <input
            type="text"
            name="your_name"
            id="your_name"
            placeholder="Mobile Number"
          />
        </div>
        <button
    type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModalCenter" 
    
  >
    <span style={{ Color: "#000", fontWeight: "bold" }}>
      Get otp
    </span>
  </button>
                    </div>
  </div></form>

  <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body">

     <div className="container height-100 d-flex justify-content-center align-items-center">
  <div className="position-relative">
    <div className="card p-2 text-center">
      <h6>Please enter the one time password <br /> to verify your account</h6>
      <div> <span>A code has been sent to</span> <small>*******9897</small> </div>
      <div id="otp" className="inputs d-flex flex-row justify-content-center mt-2"> <input className="m-2 text-center form-control rounded" type="text" id="first" maxLength={1} /> <input className="m-2 text-center form-control rounded" type="text" id="second" maxLength={1} /> <input className="m-2 text-center form-control rounded" type="text" id="third" maxLength={1} /> <input className="m-2 text-center form-control rounded" type="text" id="fourth" maxLength={1} /> <input className="m-2 text-center form-control rounded" type="text" id="fifth" maxLength={1} /> <input className="m-2 text-center form-control rounded" type="text" id="sixth" maxLength={1} /> </div>
      <div className="mt-4"> <button className="btn btn-danger px-4 validate" data-backdrop="static">Validate</button> </div>
    </div>
    <div className="card-2">
      <div className="content d-flex justify-content-center align-items-center"> <span>Didn't get the code</span> <a href="#" className="text-decoration-none ms-3">Resend(1/3)</a> </div>
    </div>
  </div>
</div>


      </div>
      <div className="modal-footer">
        
        <button type="button" className="btn btn-primary" data-backdrop="static" onClick={refreshPage} onClick={() => {
      history.push("/Seller");
    }} >Verify</button>
      </div>
    </div>
  </div>
</div>

  </div>

  )
}

export default Button2