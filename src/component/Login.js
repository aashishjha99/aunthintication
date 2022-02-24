import React, { useState } from "react";
import "./login.css";

function Login({ login, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });

  const submit = (e) => {
    e.preventDefault(); // stop re render
    login(details);
  };

  const onPassword = (e) => {
    setDetails({ ...details, password: e.target.value });
  };

  const onmail = (e) => {
    setDetails({ ...details, email: e.target.value });
  };

  return (
    <form onSubmit={submit}>
      <div className="form-inner ">
        <h2>Login</h2>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            className="email"
            id="email"
            onChange={onmail}
            value={details.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            className="password"
            id="password"
            onChange={onPassword}
            value={details.password}
          />
        </div>
        <label htmlFor="" className="passproperties">
          Password should be 8- 10 character
        </label>
        <input type="submit" value="Login" className="loginbtn" />
      </div>
    </form>
  );
}

export default Login;
