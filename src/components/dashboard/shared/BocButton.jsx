import PropTypes from "prop-types";
const BocButton = ({width, bgcolor = "#f64f4f", bradius, cursor, children }) => {
  const style = {
    backgroundColor: bgcolor,
    color: "#fff",
    border: "none",
    borderRadius: bradius,
    padding: "0.3rem 1.3rem",
    fontSize: "1rem",
    fontWeight: "500",
    cursor: cursor,
    width: width,
  };

  return <button style={style}>{children}</button>;
};

BocButton.propTypes = {
  bgcolor: PropTypes.string,
  bradius: PropTypes.string,
  children: PropTypes.string,
  cursor: PropTypes.string,
  width: PropTypes.string,
}

export default BocButton;
