import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import "./Dashboard.css";

const SidebarMain = ({ onMenuItemClick }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const user = currentUser.username;

  return (
    <div className="NavIcons SideMain">
      <div className="BrandCon">
        <div className=" LgLogo">
          <img src="src/assets/images/dlogo.png" alt="boctrust-logo" />
        </div>
        <p>App User</p>
      </div>
      <div id="dashboard" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="dashboard"
          onClick={onMenuItemClick}
          src="src/assets/images/ddashboard.png"
          alt="dashboard"
        />
        <p id="dashboard" onClick={onMenuItemClick}>
          Dashboard
        </p>
      </div>

      <div id="myloan" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="myloan"
          onClick={onMenuItemClick}
          src="src/assets/images/dmyloan.png"
          alt="loan"
        />
        <p id="myloan" onClick={onMenuItemClick}>
          My Loan
        </p>
      </div>
      {user === "customer2" ? (
        <div id="transfer" className="IconBox" onClick={onMenuItemClick}>
          <img
            id="transfer"
            onClick={onMenuItemClick}
            src="src/assets/images/dtransfer.png"
            alt="transfer"
          />
          <p id="transfer" onClick={onMenuItemClick}>
            Transfer Money
          </p>
        </div>
      ) : null}

      {/* <div id="withdraw" className="IconBox" onClick={onMenuItemClick}>
        <img id="withdraw"
          onClick={onMenuItemClick}
          src="src/assets/images/dwithdraw.png"
          alt="withdrawer"
        />
        <p id="withdraw" onClick={onMenuItemClick}>Withdraw Money</p>
      </div> */}

      <div id="transaction" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="transaction"
          onClick={onMenuItemClick}
          src="src/assets/images/daccount.png"
          alt="account"
        />
        <p id="transaction" onClick={onMenuItemClick}>
          Account Transaction
        </p>
      </div>

      <div id="profile" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="profile"
          onClick={onMenuItemClick}
          src="src/assets/images/dprofile.png"
          alt="profile"
        />
        <p id="profile" onClick={onMenuItemClick}>
          Profile
        </p>
      </div>

      <div id="report" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="report"
          onClick={onMenuItemClick}
          src="src/assets/images/dreport.png"
          alt="report"
        />
        <p id="report" onClick={onMenuItemClick}>
          Report
        </p>
      </div>
    </div>
  );
};

SidebarMain.propTypes = {
  onMenuItemClick: PropTypes.func,
};

export default SidebarMain;
