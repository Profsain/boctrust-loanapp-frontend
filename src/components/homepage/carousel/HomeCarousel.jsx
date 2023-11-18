import { FaCoins, FaChartLine, FaAtlas } from "react-icons/fa";

import FeaturesCard from "../../shared/FeaturesCard";
import "../Home.css";

const HomeCarousel = () => {
  // slide images
  const images = [
    "images/bocslide1.jpg",
    "images/bocslide2.jpg",
    "images/bocslide3.jpg",
  ];

  // carousel top card 
  const features = [
    {
      title: "Savings",
      description:
        "Our savings products encourages individuals, micro enterprises and cooperative societies to grow their savings and easy their transactions. Saving for personal/family project i.e. (vacation, festival and ceremony e.t.c)",
      icon: <FaCoins />,
    },
    {
      title: "Loans",
      icon: <FaAtlas />,
      description:
        "Our loan products help you cater to pressing needs. If you’re ready to upgrade your home decor or merely want to improve your lifestyle efficiency with a new laptop, look no further than the Boctrust Microfinance Bank retail asset Acquisition/Leases.",
    },

    {
      title: "Investment",
      description:
        "Our investment products help you secure the future by building up streams of investment towards a target while we match it up with attractive interest rates to achieve your desired goals. Emerald has the following:",
      icon: <FaChartLine />,
    },
  ];

  const carouselStyle = {
    top: "170px",
    left: "0",
    width: "100%",
    marginTop: "-80px",
  };

  return (
    <div>
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide CarouselContainer"
        data-bs-ride="carousel"
        style={carouselStyle}
      >
        <div className="carousel-inner">
          {images.map((image, index) => {
            return (
              <div
                key={index}
                className={
                  index === 0 ? "carousel-item active" : "carousel-item"
                }
                data-bs-interval="3000"
              >
                <img src={image} className="d-block w-100" alt="..." />
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container text-center ">
        <div className="row g-5 CardContainer">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-4 ">
              <FeaturesCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
