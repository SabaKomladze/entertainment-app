import { Link } from "react-router-dom";
import "./SignUp.css";
import { useEffect, useState } from "react";
function SignUp(props) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [emailInvalid, setEmailInvalid] = useState(false);

  const [repPass, setRepPass] = useState("");

  return (
    <div className="login">
      <div className="login-inputs">
        <h1 className="login-header">Sign Up</h1>
        <input
          type="email"
          placeholder="Email address"
          className="login-email"
          onChange={(e) => props.setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="password-login"
          onChange={(e) => props.setPass(e.target.value)}
        />
        <input
          type="password"
          placeholder="Repeat Password"
          className="repeat"
          onChange={(e) => setRepPass(e.target.value)}
        />

        <button
          type="button"
          className="login-btn"
          onClick={(e) => {
            e.preventDefault();
            if (props.pass === "") {
              props.setSignUp(true);
            } else {
              if (props.pass === repPass) {
                props.setSignUp(false);
              }
            }
            if (emailRegex.test(props.email)) {
              setEmailInvalid(false);
            } else {
              setEmailInvalid(true);
              props.setSignUp(true);
            }
          }}
        >
          Create an account
        </button>

        <p className="suggest-signup">
          Alread have an account?{"  "}
          <Link to="/">
            <span
              className="span-signup"
              onClick={() => {
                props.setSignUp(false);
              }}
            >
              Login
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
