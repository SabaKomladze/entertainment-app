import "./Author.css";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import { useState } from "react";
function Author(props) {
  const [signUp, setSignUp] = useState(false);
  const [saveEmail, setsaveEmail] = useState("");
  const [pass, setPass] = useState("");

  const [email, setEmail] = useState("");
  return (
    <div>
      {signUp == false ? (
        <Login
          signUp={signUp}
          setSignUp={setSignUp}
          setsaveEmail={setsaveEmail}
          saveEmail={saveEmail}
          pass={pass}
          setPass={setPass}
          enterSite={props.enterSite}
          setEnterSite={props.setEnterSite}
          email={email}
          setEmail={setEmail}
        />
      ) : (
        <SignUp
          signUp={signUp}
          setSignUp={setSignUp}
          setsaveEmail={setsaveEmail}
          saveEmail={saveEmail}
          pass={pass}
          setPass={setPass}
          email={email}
          setEmail={setEmail}
        />
      )}
    </div>
  );
}
export default Author;
