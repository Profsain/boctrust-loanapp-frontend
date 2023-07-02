import PropTypes from "prop-types";
import "./TopNavbar.css";

const TopNavber = ({ title }) => {
  return (
    <div className="Inline">
      <div>
        <h4 id="Title">{title}</h4>
      </div>
      <div className="Inline Profile">
        <img src="src/assets/images/notificationicon.png" alt="alert" />
        <div className="Inline UserCard">
          <p>Femi Akinwade</p>
          <img src="src/assets/images/smallavater.png" alt="user" />
        </div>
      </div>
    </div>
  );
};

TopNavber.propTypes = {
  title: PropTypes.string,
};

export default TopNavber;