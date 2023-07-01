import PropTypes from "prop-types"
import "./Dashboard.css";

const SidebarMain = ({onMenuItemClick}) => {
  return (
    <div className="NavIcons SideMain">
      <div className="BrandCon">
        <div className=" LgLogo">
          <img src="src/assets/images/dlogo.png" alt="boctrust-logo" />
        </div>
        <p>App User</p>
      </div>

      <div className="IconBox" onClick={onMenuItemClick}>
        <img src="src/assets/images/ddashboard.png" alt="dashboard" />
        <p id="dashboard">Dashboard</p>
      </div>

      <div className="IconBox" onClick={onMenuItemClick}>
        <img src="src/assets/images/dmyloan.png" alt="loan" />
        <p id="myloan">My Loan</p>
      </div>

      <div className="IconBox" onClick={onMenuItemClick}>
        <img src="src/assets/images/dtransfer.png" alt="transfer" />
        <p id="transfer">Transfer Money</p>
      </div>

      <div className="IconBox" onClick={onMenuItemClick}>
        <img src="src/assets/images/dwithdraw.png" alt="withdrawer" />
        <p id="withdraw">Withdraw Money</p>
      </div>

      <div className="IconBox" onClick={onMenuItemClick}>
        <img src="src/assets/images/daccount.png" alt="account" />
        <p id="transaction">Account Transaction</p>
      </div>
      <div className="IconBox" onClick={onMenuItemClick}>
        <img src="src/assets/images/dprofile.png" alt="profile" />
        <p id="profile">Profile</p>
      </div>

      <div className="IconBox" onClick={onMenuItemClick}>
        <img src="src/assets/images/dreport.png" alt="report" />
        <p id="report">Report</p>
      </div>
    </div>
  );
};

SidebarMain.propTypes = {
  onMenuItemClick: PropTypes.func
}

export default SidebarMain;
