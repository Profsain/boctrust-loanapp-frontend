import PropTypes from "prop-types";
const BocButton = ({fontSize="1rem", type, width, bgcolor = "#f64f4f", bradius, cursor, margin, func, children }) => {
  const style = {
    backgroundColor: bgcolor,
    color: "#fff",
    border: "none",
    borderRadius: bradius,
    padding: "0.3rem 1.3rem",
    fontSize: fontSize,
    fontWeight: "500",
    cursor: cursor,
    width: width,
    margin: margin,
  };

  return <button onClick={func} type={type} style={style}>{children}</button>;
};

BocButton.propTypes = {
  bgcolor: PropTypes.string,
  bradius: PropTypes.string,
  children: PropTypes.string,
  cursor: PropTypes.string,
  width: PropTypes.string,
  type: PropTypes.string,
  fontSize: PropTypes.string,
  margin: PropTypes.string,
  func: PropTypes.func,
}

export default BocButton;
