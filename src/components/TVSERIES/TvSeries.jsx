import "./TvSeries.css";
import Header from "../Header/Header";
import Search from "../SearchBar/SearchBar";
import data from "../../../data.json";
import { useState, useEffect } from "react";
function TvSeries(props) {
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    const filterData = data.filter((item) => item.category == "TV Series");
    setFilterList(filterData);
  }, []);

  return (
    <>
      <Header />
      <Search search={props.search} setSearch={props.setSearch} />
      <div className="recom">
        <h1 className="recommend-title">Recommended for you</h1>
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
                <div className="trend-book" onClick={() => handleClick(index)}>
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
    </>
  );
}

export default TvSeries;
