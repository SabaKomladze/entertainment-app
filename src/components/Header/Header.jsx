import "./Header.css";
import { Link } from "react-router-dom";
function Header(props) {
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
        <img
          src="./assets/icon-nav-bookmark.svg"
          alt="bookmark icon"
          className="bookmark-icon navlist"
        />
      </nav>
      <img src="./assets/image-avatar.png" alt="avatar" className="avatar" />
    </header>
  );
}
export default Header;
