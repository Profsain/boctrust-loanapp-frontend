import PropTypes from "prop-types";

const BlogCard = ({
  title = "Budget your way to success",
  blogImg = "https://www.finance-monthly.com/Finance-Monthly/wp-content/uploads/2020/12/Young-African-man-surveying-his-investments.jpg",
}) => {
  const shortTitle = title.substring(0, 40) + "...";
  //   styles
  const styles = {
    card: {
      width: "18rem",
      height: "20rem",
      margin: "1rem",
      padding: "1rem",
      borderRadius: "18px",
      border: "2px solid #1a237e",
      cursor: "pointer",
      transition: "all 0.3s ease-in-out",
      backgroundImage: `url(${blogImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    blogTitle: {
      position: "relative",
      bottom: "0",
      top: "13rem",
      backgroundColor: "#ecaa00",
      color: "#fff",
      padding: "0.5rem 1rem",
      borderRadius: "28px",
      textAlign: "center",
    },
  };
  return (
    <div style={styles.card}>
      <h4 style={styles.blogTitle}>{shortTitle}</h4>
    </div>
  );
};

BlogCard.propTypes = {
  blogImg: PropTypes.string,
  title: PropTypes.string,
};

export default BlogCard;
