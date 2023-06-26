import "./Header.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function Header(props) {
  console.log(props.enterSite);
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    console.log(typeof isLoggedIn);

    if (isLoggedIn === "true") {
      props.setEnterSite(true);
    }
  }, []);
  console.log(props);
  return (
    <header>
      <img src="./assets/logo.svg" alt="logo" className="logo-header" />
      <nav>
        <Link to="/">
          <img
            src="./assets/icon-nav-home.svg"
            alt="home"
            className="home navlist"
          />
        </Link>
        <Link to="/movies">
          <img
            src="./assets/icon-nav-movies.svg"
            alt="movies"
            className="movies navlist"
          />
        </Link>
        <Link to="/tvseries">
          <img
            src="./assets/icon-nav-tv-series.svg"
            alt=" tv series icon"
            className="tv-series navlist"
          />
        </Link>
        <Link to="/bookmark">
          <img
            src="./assets/icon-nav-bookmark.svg"
            alt="bookmark icon"
            className="bookmark-icon navlist"
          />
        </Link>
      </nav>
      <Link to="/authorization">
        {props.enterSite ? (
          <img
            src="./assets/image-avatar.png"
            alt="avatar"
            className="avatar"
          />
        ) : (
          <img src="./assets/nan.png" alt="avatar" className="avatar" />
        )}
      </Link>
    </header>
  );
}
export default Header;
