import { useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import Movies from "./components/Movies/Movies";
import TvSeries from "./components/TVSERIES/TvSeries";
function App() {
  const [signUp, setSignUp] = useState(false);
  const [saveEmail, setsaveEmail] = useState("");
  const [pass, setPass] = useState("");
  const [enterSite, setEnterSite] = useState(false);
  const [email, setEmail] = useState("");
  const [search, setSearch] = useState("");
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home search={search} setSearch={setSearch} />}
        />
        <Route
          path="/movies"
          element={<Movies search={search} setSearch={setSearch} />}
        />
        <Route
          path="/tvseries"
          element={<TvSeries search={search} setSearch={setSearch} />}
        />
      </Routes>

      {/* {enterSite ? (
        <Home />
      ) : signUp ? (
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
      ) : (
        <Login
              signUp={signUp}
              setSignUp={setSignUp}
              setsaveEmail={setsaveEmail}
              saveEmail={saveEmail}
              pass={pass}
              setPass={setPass}
              enterSite={enterSite}
              setEnterSite={setEnterSite}
              email={email}
              setEmail={setEmail}
            />
      )} */}
    </>
  );
}

export default App;
