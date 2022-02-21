import React, { useState } from "react";
import validator from "validator";

import "./login.css";

function Login() {
  const initValues = { mailid: "", password: "" };
  const [formValue, setFormValue] = useState(initValues);
  const [errormail, seterrormail] = useState("");
  const [errorpassword, seterrorpassword] = useState("");

  const mailValidator = (value) => {
    setFormValue(value);
    // let re =
    //   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (validator.isEmail(value)) {
      setFormValue(value);
      seterrormail("correct mail");
    } else {
      seterrormail("not correct mail");
    }
  };
  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      seterrorpassword("Is Strong Password");
    } else {
      seterrorpassword("Is Not Strong Password");
    }
  };
  return (
    <div className="sizing">
      <form>
        <h1>Login Form</h1>
        <div>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control col-xs-2"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name_="mailid"
            value={formValue.mailid}
            onChange={(e) => mailValidator(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            {errormail}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name_="password"
            value={formValue.password}
            onChange={(e) => validate(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <label className="form-check-label" htmlFor="exampleCheck1">
            {errorpassword}
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
