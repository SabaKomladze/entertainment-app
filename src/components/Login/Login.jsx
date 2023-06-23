import { useState } from "react";
import "./Login.css";
import { Routes, Route, Link } from "react-router-dom";
function Login(props) {
  const [savedEmail, setSavedEmail] = useState("");
  const [savedPass, setSavedPass] = useState("");
  return (
    <div className="login">
      <div className="login-inputs">
        <h1 className="login-header">Login</h1>
        <input
          type="email"
          placeholder="Email address"
          className="login-email"
          onChange={(e) => {
            setSavedEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          className="password-login"
          onChange={(e) => {
            setSavedPass(e.target.value);
          }}
        />
        <button
          type="button"
          className="login-btn"
          onClick={() => {
            if (savedEmail === props.email && savedPass === props.pass) {
              props.setEnterSite(true);
              console.log("vamos");
            } else {
              props.setEnterSite(false);
            }
          }}
        >
          Login to your account
        </button>
        <p className="suggest-signup">
          Don’t have an account?{" "}
          <Link to="signup">
            <span
              className="span-signup"
              onClick={() => {
                props.setSignUp(true);
              }}
            >
              {" "}
              Sign Up
            </span>{" "}
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Login;
