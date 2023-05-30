const HomeCarousel = () => {
  return (
    <div>
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide"
        // data-bs-touch="false"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img src="../images/1.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src="../images/2.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src="../images/3.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src="../images/4.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src="../images/5.png" className="d-block w-100" alt="..." />
          </div>
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
    </div>
  );
};

export default HomeCarousel;
