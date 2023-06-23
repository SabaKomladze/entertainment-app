import "./Trendings.css";
import data from "../../../data.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
function Trend(props) {
  const handleClick = (index) => {
    const bookmarked = props.filterList.map((obj, objIndex) => {
      if (objIndex === index) {
        return { ...obj, isBookmarked: !obj.isBookmarked };
      }
      return obj;
    });
    props.setFilterList(bookmarked);
  };
  const trendingData = props.filterList.filter((item) => item.isTrending);

  const sliderSettings = {
    dots: true,
    arrows: false,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    slidesToShow: 5,
    infinite: true,
    speed: 1000,
    gap: "20px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="trend">
      <h1 className="trend-title">Trending</h1>

      <div className="whole-trends">
        <StyledSlider {...sliderSettings} className="slider">
          {trendingData.map((dataObj, index) => (
            <div key={index} className="trend-div-movie">
              <h2 className="trend-movie-title">{dataObj.title}</h2>
              <img
                src={dataObj.thumbnail.trending.small}
                alt={dataObj.title}
                className="trend-img"
              />
              <div className="trend-book" onClick={() => handleClick(index)}>
                {dataObj.isBookmarked ? (
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
              <div className="describ trenddes">
                <p className="release">{dataObj.year}</p>
                <img src="./assets/Oval.svg" alt="oval dot" className="oval" />
                {dataObj.category === "Movie"
                  ? (
                      <img
                        src="./assets/dataObj.svg"
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
                <img src="./assets/Oval.svg" alt="oval dot" className="oval" />
                {dataObj.rating}
              </div>
            </div>
          ))}
        </StyledSlider>
      </div>
    </div>
  );
}

const StyledSlider = styled(Slider)`
  .slick-track {
    display: flex;
  }
`;

export default Trend;
