import PropTypes from "prop-types";

const FeaturesCard = ({ title, description, icon }) => {
  const cardStyle = {
    width: "18rem",
    textAlign: "center",
    fontFamily: "sans-serif",
    border: "none",
    borderRadius: "15px",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
  };
  const iconBox = {
    width: "50px",
    height: "50px",
    borderRadius: "15%",
    backgroundColor: "#145088",
    color: "white",
    fontSize: "30px",
    margin: "0 auto",
    marginBottom: "10px",
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="card-body">
        <div style={iconBox}>{icon}</div>

        <h3>{title}</h3>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

FeaturesCard.propTypes = {
  description: PropTypes.any,
  icon: PropTypes.any,
  title: PropTypes.any,
};

export default FeaturesCard;
