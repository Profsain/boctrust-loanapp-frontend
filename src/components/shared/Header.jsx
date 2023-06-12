import PropTypes from "prop-types";

const Header = ({ imgurl }) => {
  const styles = {
    header: {
      width: "100%",
      height: "700px",
      backgroundImage: `url(${imgurl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      marginTop: "80px",
    },
  };

  return (
    <div className="container-fluid" style={styles.header}>
    </div>
  );
};

Header.propTypes = {
  imgurl: PropTypes.string
}

export default Header;
