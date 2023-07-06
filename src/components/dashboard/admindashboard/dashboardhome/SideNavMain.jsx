import PropTypes from "prop-types";
import "../../Dashboard.css";

const SideNavMain = ({ onMenuItemClick }) => {
  return (
    <div className="NavIcons SideMain">
      <div className="BrandCon">
        <div className=" LgLogo">
          <img src="src/assets/images/dlogo.png" alt="boctrust-logo" />
        </div>
        <p>Admin User</p>
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

      <div id="customer" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="customer"
          onClick={onMenuItemClick}
          src="src/assets/images/dprofile.png"
          alt="customer"
        />
        <p id="customer" onClick={onMenuItemClick}>
          Customer
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

      <div id="repayment" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="repayment"
          onClick={onMenuItemClick}
          src="src/assets/images/dtransfer.png"
          alt="repayment"
        />
        <p id="repayment" onClick={onMenuItemClick}>
          Repayments
        </p>
      </div>

      <div id="accounts" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="accounts"
          onClick={onMenuItemClick}
          src="src/assets/images/daccount.png"
          alt="accounts"
        />
        <p id="accounts" onClick={onMenuItemClick}>
          Accounts
        </p>
      </div>

      <div id="withdraw" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="withdraw"
          onClick={onMenuItemClick}
          src="src/assets/images/dwithdraw.png"
          alt="withdrawer"
        />
        <p id="withdraw" onClick={onMenuItemClick}>
          Withdraw Money
        </p>
      </div>

      <div id="transaction" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="transaction"
          onClick={onMenuItemClick}
          src="src/assets/images/daccount.png"
          alt="transaction"
        />
        <p id="transaction" onClick={onMenuItemClick}>
          Transactions
        </p>
      </div>

      <div id="remita" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="remita"
          onClick={onMenuItemClick}
          src="src/assets/images/dremita.png"
          alt="remita"
        />
        <p id="remita" onClick={onMenuItemClick}>
          Remita Collections
        </p>
      </div>

      <div id="creditbureau" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="creditbureau"
          onClick={onMenuItemClick}
          src="src/assets/images/dreport.png"
          alt="creditbureau"
        />
        <p id="creditbureau" onClick={onMenuItemClick}>
          Credit Bureau Check
        </p>
      </div>

      <div id="mdas" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="mdas"
          onClick={onMenuItemClick}
          src="src/assets/images/dmda.png"
          alt="mdas"
        />
        <p id="mdas" onClick={onMenuItemClick}>
          MDAs/Employer
        </p>
      </div>

      <div id="kyc" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="kyc"
          onClick={onMenuItemClick}
          src="src/assets/images/dkyc.png"
          alt="kyc"
        />
        <p id="kyc" onClick={onMenuItemClick}>
          KYC Review
        </p>
      </div>

      <div id="webmanager" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="webmanager"
          onClick={onMenuItemClick}
          src="src/assets/images/dwebsite.png"
          alt="webmanager"
        />
        <p id="webmanager" onClick={onMenuItemClick}>
          Website Manage
        </p>
      </div>

      <div id="withdrawmethod" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="withdrawmethod"
          onClick={onMenuItemClick}
          src="src/assets/images/dwithdrawmethod.png"
          alt="withdrawmethod"
        />
        <p id="withdrawmethod" onClick={onMenuItemClick}>
          Withdraw Methods
        </p>
      </div>

      <div id="usermanager" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="usermanager"
          onClick={onMenuItemClick}
          src="src/assets/images/dusermanage.png"
          alt="usermanager"
        />
        <p id="usermanager" onClick={onMenuItemClick}>
          User Manager
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

SideNavMain.propTypes = {
  onMenuItemClick: PropTypes.func,
};

export default SideNavMain;