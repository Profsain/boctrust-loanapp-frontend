

import PropTypes from "prop-types"
const BocButton = ({
  bgcolor = "#ecaa00",
  color = "#fff",
  btnclassName,
  children,
}) => {
  const style = {
    fontSize: "24px",
    fontWeight: "400",
    padding: "6px 38px",
    backgroundColor: { bgcolor },
    color: { color },
    border: "none",
    borderRadius: "26px",
  };
  return (
    <button style={style} className={btnclassName}>
      {children}
    </button>
  );
};

BocButton.propTypes = {
  bgcolor: PropTypes.string,
  btnclassName: PropTypes.any,
  children: PropTypes.any,
  color: PropTypes.string
}

export default BocButton;
