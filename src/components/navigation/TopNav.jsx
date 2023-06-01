import "./Navigation.css";

import { Link } from "react-router-dom";
const TopNav = () => {
    return (
      <div className="Topnav">
        <div className="curveLeft">
          <Link to="/">
            <img
              src="../images/boctrustlogo.png"
              alt="Boctrust Microfinance Bank Logo"
              width="150px"
            />
          </Link>
        </div>
        <h1>Welcome to BOCTRUST Microfinance Bank Limited</h1>
        <button>Call us today! 08076710000</button>
      </div>
    );
}

export default TopNav;
