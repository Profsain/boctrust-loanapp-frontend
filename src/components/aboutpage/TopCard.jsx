import PropTypes from "prop-types";
const TopCard = ({ title, text, width, spacer, height }) => {
  const style = {
    width: width,
    height: height,
    minHeight: "270px",
    background: "#FFFFFF",
    borderRadius: "18px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    padding: "12px 28px 28px 28px",
    margin: spacer,
    textAlign: "center",
  };
  return (
    <div style={style}>
      {title}
      <p>{text}</p>
    </div>
  );
};

TopCard.propTypes = {
  text: PropTypes.string,
  title: PropTypes.object,
  width: PropTypes.string,
  spacer: PropTypes.string,
  height: PropTypes.string,
};

export default TopCard;
