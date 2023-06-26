import "./Bookmark.css";
import Header from "../Header/Header";
import Search from "../SearchBar/SearchBar";
import { useState, useEffect } from "react";
import data from "../../../data.json";

function Book(props) {
  const [filterList, setFilterList] = useState([]);
  const [forSeries, setForSeries] = useState([]);
  const handleClick = (index) => {
    const bookmarked = filterList.map((obj, objIndex) => {
      if (objIndex === index) {
        return { ...obj, isBookmarked: !obj.isBookmarked };
      }
      return obj;
    });
    setFilterList(bookmarked);
  };
  useEffect(() => {
    const filterData = data.filter(
      (item) => item.isBookmarked === true && item.category === "Movie"
    );
    setFilterList(filterData);
    const forSeries = data.filter(
      (item) => item.isBookmarked === true && item.category === "TV Series"
    );
    setForSeries(forSeries);
  }, []);
  return (
    <div className="header-right">
      <Header />
      <div className="rightSide">
        <Search search={props.search} setSearch={props.setSearch} />
        <div className="recom">
          <h1 className="recommend-title">Bookmarked Movies</h1>
          <div className="all-movie-list">
            {filterList
              .filter((movie) => {
                return props.search === ""
                  ? movie
                  : movie.title.toLowerCase().startsWith(props.search);
              })
              .map((movie, index) => (
                <div key={index} className="all-movie">
                  <img
                    src={movie.thumbnail.regular.small}
                    alt="movie icon"
                    className="movie-icon"
                  />
                  <div
                    className="trend-book"
                    onClick={() => handleClick(index)}
                  >
                    {movie.isBookmarked ? (
                      <img
                        src="./assets/icon-bookmark-full.svg"
                        alt="trend bookmark"
                        className="trend-book-img"
                      />
                    ) : (
                      <img
                        src="./assets/icon-bookmark-empty.svg"
                        alt="trend bookmark"
                        className="trend-book-img"
                      />
                    )}
                  </div>
                  <div className="describ">
                    <p className="release">{movie.year}</p>
                    <img
                      src="./assets/Oval.svg"
                      alt="oval dot"
                      className="oval"
                    />
                    {movie.category === "Movie"
                      ? (
                          <img
                            src="./assets/movie.svg"
                            alt="movie icon"
                            className="movie-title-icon"
                          />
                        ) && <p className="class">Movie</p>
                      : (
                          <img
                            src="./assets/tvseries.svg"
                            alt="tv-series icon"
                            className="series-title-icon"
                          />
                        ) && <p className="class">Tv Series</p>}
                    <img
                      src="./assets/Oval.svg"
                      alt="oval dot"
                      className="oval"
                    />
                    {movie.rating}
                  </div>
                  <h2 className="movie-list-title">{movie.title}</h2>
                </div>
              ))}
          </div>
          <h1 className="recommend-title">Bookmarked TV Series</h1>
          <div className="all-movie-list">
            {forSeries
              .filter((movie) => {
                return props.search === ""
                  ? movie
                  : movie.title.toLowerCase().startsWith(props.search);
              })
              .map((movie, index) => (
                <div key={index} className="all-movie">
                  <img
                    src={movie.thumbnail.regular.small}
                    alt="movie icon"
                    className="movie-icon"
                  />
                  <div
                    className="trend-book"
                    onClick={() => handleClick(index)}
                  >
                    {movie.isBookmarked ? (
                      <img
                        src="./assets/icon-bookmark-full.svg"
                        alt="trend bookmark"
                        className="trend-book-img"
                      />
                    ) : (
                      <img
                        src="./assets/icon-bookmark-empty.svg"
                        alt="trend bookmark"
                        className="trend-book-img"
                      />
                    )}
                  </div>
                  <div className="describ">
                    <p className="release">{movie.year}</p>
                    <img
                      src="./assets/Oval.svg"
                      alt="oval dot"
                      className="oval"
                    />
                    {movie.category === "Movie"
                      ? (
                          <img
                            src="./assets/movie.svg"
                            alt="movie icon"
                            className="movie-title-icon"
                          />
                        ) && <p className="class">Movie</p>
                      : (
                          <img
                            src="./assets/tvseries.svg"
                            alt="tv-series icon"
                            className="series-title-icon"
                          />
                        ) && <p className="class">Tv Series</p>}
                    <img
                      src="./assets/Oval.svg"
                      alt="oval dot"
                      className="oval"
                    />
                    {movie.rating}
                  </div>
                  <h2 className="movie-list-title">{movie.title}</h2>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
