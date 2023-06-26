import { useState, useEffect } from "react";
import "./Login.css";
import { Routes, Route, Link } from "react-router-dom";
function Login(props) {
  const [savedEmail, setSavedEmail] = useState("");
  const [savedPass, setSavedPass] = useState("");
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    console.log(typeof isLoggedIn);

    if (isLoggedIn === true) {
      props.setEnterSite(true);
    }
  }, []);
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
        <Link to={props.enterSite ? "/" : "/authorization"}>
          <button
            type="button"
            className="login-btn"
            onClick={() => {
              if (
                savedEmail === props.email &&
                savedEmail !== "" &&
                savedPass === props.pass &&
                savedPass !== ""
              ) {
                localStorage.setItem("isLoggedIn", true);
                props.setEnterSite(true);
              } else {
                props.setEnterSite(false);
              }
            }}
          >
            Login to your account
          </button>
        </Link>
        <p className="suggest-signup">
          Don’t have an account?{" "}
          <span
            className="span-signup"
            onClick={() => {
              props.setSignUp(true);
            }}
          >
            {" "}
            Sign Up
          </span>{" "}
        </p>
      </div>
    </div>
  );
}
export default Login;
