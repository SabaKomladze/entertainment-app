import { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Movies from "./components/Movies/Movies";
import TvSeries from "./components/TVSERIES/TvSeries";
import Book from "./components/Bookmarks/Bookmark";
import Author from "./components/Authorization/Author";
function App() {
  const [search, setSearch] = useState("");
  const [enterSite, setEnterSite] = useState(false);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              search={search}
              setSearch={setSearch}
              enterSite={enterSite}
              setEnterSite={setEnterSite}
            />
          }
        />
        <Route
          path="/movies"
          element={<Movies search={search} setSearch={setSearch} />}
        />
        <Route
          path="/tvseries"
          element={<TvSeries search={search} setSearch={setSearch} />}
        />
        <Route
          path="/bookmark"
          element={<Book search={search} setSearch={setSearch} />}
        />
        <Route
          path="/authorization"
          element={<Author enterSite={enterSite} setEnterSite={setEnterSite} />}
        />

        {/* <Route
          path="/login"
          element={
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
          }
        />
        <Route
          path="/signup"
          element={
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
          }
        /> */}
      </Routes>
    </>
  );
}

export default App;
