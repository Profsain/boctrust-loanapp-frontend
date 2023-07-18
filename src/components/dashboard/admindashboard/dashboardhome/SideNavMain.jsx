import { useState } from "react";
import PropTypes from "prop-types";
import "../../Dashboard.css";

const SideNavMain = ({ onMenuItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoanOpen, setIsLoanOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isRemitaOpen, setIsRemitaOpen] = useState(false);
  const [isEmployerOpen, setIsEmployerOpen] = useState(false);
  const [isWebManagerOpen, setIsWebManagerOpen] = useState(false);

  const openSubItem = () => setIsOpen(true);
  const closeSubItem = () => setIsOpen(false);

  const openSubLoan = () => setIsLoanOpen(true);
  const closeSubLoan = () => setIsLoanOpen(false);

  const openSubAccount = () => setIsAccountOpen(true);
  const closeSubAccount = () => setIsAccountOpen(false);

  const openSubRemita = () => setIsRemitaOpen(true);
  const closeSubRemita = () => setIsRemitaOpen(false);

  const openSubEmployer = () => setIsEmployerOpen(true);
  const closeSubEmployer = () => setIsEmployerOpen(false);

  const openSubWebManager = () => setIsWebManagerOpen(true);
  const closeSubWebManager = () => setIsWebManagerOpen(false);

  return (
    <div className="NavIcons SideMain FixSideNav">
      <div className="BrandCon">
        <div className=" LgLogo">
          <img src="images/dlogo.png" alt="boctrust-logo" />
        </div>
        <p>Admin User</p>
      </div>

      <div id="dashboard" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="dashboard"
          onClick={onMenuItemClick}
          src="images/ddashboard.png"
          alt="dashboard"
        />
        <p id="dashboard" onClick={onMenuItemClick}>
          Dashboard
        </p>
      </div>
      <div id="branches" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="branches"
          onClick={onMenuItemClick}
          src="images/dmda.png"
          alt="branches"
        />
        <p id="branches" onClick={onMenuItemClick}>
          Branches
        </p>
      </div>

      {/* Menu with sub item */}
      <div onMouseOver={openSubItem} onMouseLeave={closeSubItem}>
        <div id="customer" className="IconBox" onClick={onMenuItemClick}>
          <img
            id="customer"
            onClick={onMenuItemClick}
            src="images/dprofile.png"
            alt="customer"
          />
          <p id="customer" onClick={onMenuItemClick}>
            Customer
          </p>
        </div>
        {isOpen ? (
          <div className="SubItem">
            <ul>
              <li id="customer" onClick={onMenuItemClick}>
                All Customer
              </li>
              <li id="addcustomer" onClick={onMenuItemClick}>
                Add Customer
              </li>
              <li id="customerrequest" onClick={onMenuItemClick}>
                Customer Request
              </li>
            </ul>
          </div>
        ) : null}
      </div>

      <div onMouseOver={openSubLoan} onMouseLeave={closeSubLoan}>
        <div id="myloan" className="IconBox" onClick={onMenuItemClick}>
          <img
            id="myloan"
            onClick={onMenuItemClick}
            src="images/dmyloan.png"
            alt="loan"
          />
          <p id="myloan" onClick={onMenuItemClick}>
            My Loans
          </p>
        </div>
        {isLoanOpen ? (
          <div className="SubItem">
            <ul>
              <li id="myloan" onClick={onMenuItemClick}>
                All Loans
              </li>
              <li id="pendingloans" onClick={onMenuItemClick}>
                Pending Loan
              </li>
              <li id="activeloans" onClick={onMenuItemClick}>
                Active Loan
              </li>
              <li id="loancalculator" onClick={onMenuItemClick}>
                Loan Calculator
              </li>
              <li id="loanproducts" onClick={onMenuItemClick}>
                Loan Products
              </li>
            </ul>
          </div>
        ) : null}
      </div>

      <div id="repayment" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="repayment"
          onClick={onMenuItemClick}
          src="images/dtransfer.png"
          alt="repayment"
        />
        <p id="repayment" onClick={onMenuItemClick}>
          Repayments
        </p>
      </div>

      <div onMouseOver={openSubAccount} onMouseLeave={closeSubAccount}>
        <div id="accounts" className="IconBox" onClick={onMenuItemClick}>
          <img
            id="accounts"
            onClick={onMenuItemClick}
            src="images/daccount.png"
            alt="accounts"
          />
          <p id="accounts" onClick={onMenuItemClick}>
            Accounts
          </p>
        </div>
        {isAccountOpen ? (
          <div className="SubItem">
            <ul>
              <li id="accounts" onClick={onMenuItemClick}>
                All Accounts
              </li>
              <li id="accounttypes" onClick={onMenuItemClick}>
                Account Types
              </li>
            </ul>
          </div>
        ) : null}
      </div>

      <div id="withdraw" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="withdraw"
          onClick={onMenuItemClick}
          src="images/dwithdraw.png"
          alt="withdrawer"
        />
        <p id="withdraw" onClick={onMenuItemClick}>
          Withdrawer Requests
        </p>
      </div>

      <div id="transaction" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="transaction"
          onClick={onMenuItemClick}
          src="images/daccount.png"
          alt="transaction"
        />
        <p id="transaction" onClick={onMenuItemClick}>
          Transactions
        </p>
      </div>

      <div onMouseOver={openSubRemita} onMouseLeave={closeSubRemita}>
        <div id="remita" className="IconBox" onClick={onMenuItemClick}>
          <img
            id="remita"
            onClick={onMenuItemClick}
            src="images/dremita.png"
            alt="remita"
          />
          <p id="remita" onClick={onMenuItemClick}>
            Remita Collections
          </p>
        </div>
        {isRemitaOpen ? (
          <div className="SubItem">
            <ul>
              <li id="remita" onClick={onMenuItemClick}>
                Loan Disbursements
              </li>
              <li id="checksalaryhistory" onClick={onMenuItemClick}>
                Check Salary History
              </li>
              <li id="collectionnotifications" onClick={onMenuItemClick}>
                Collection Notification
              </li>
              <li id="mandatehistory" onClick={onMenuItemClick}>
                Mandate History
              </li>
              <li id="stopcollections" onClick={onMenuItemClick}>
                Stop Collections
              </li>
            </ul>
          </div>
        ) : null}
      </div>

      <div id="creditbureau" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="creditbureau"
          onClick={onMenuItemClick}
          src="images/dreport.png"
          alt="creditbureau"
        />
        <p id="creditbureau" onClick={onMenuItemClick}>
          Credit Check
        </p>
      </div>

      <div onMouseOver={openSubEmployer} onMouseLeave={closeSubEmployer}>
        <div id="mdas" className="IconBox" onClick={onMenuItemClick}>
          <img
            id="mdas"
            onClick={onMenuItemClick}
            src="images/dmda.png"
            alt="mdas"
          />
          <p id="mdas" onClick={onMenuItemClick}>
            Employer Manager
          </p>
        </div>
        {isEmployerOpen ? (
          <div className="SubItem">
            <ul>
              <li id="mdas" onClick={onMenuItemClick}>
                All Employers
              </li>
              <li id="addemployer" onClick={onMenuItemClick}>
                Add Employer
              </li>
              <li id="mandaterules" onClick={onMenuItemClick}>
                Mandate Rules
              </li>
            </ul>
          </div>
        ) : null}
      </div>

      <div id="kyc" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="kyc"
          onClick={onMenuItemClick}
          src="images/dkyc.png"
          alt="kyc"
        />
        <p id="kyc" onClick={onMenuItemClick}>
          KYC Review
        </p>
      </div>

      <div onMouseOver={openSubWebManager} onMouseLeave={closeSubWebManager}>
        <div id="webmanager" className="IconBox" onClick={onMenuItemClick}>
          <img
            id="webmanager"
            onClick={onMenuItemClick}
            src="images/dwebsite.png"
            alt="webmanager"
          />
          <p id="webmanager" onClick={onMenuItemClick}>
            Website Manager
          </p>
        </div>

        {isWebManagerOpen ? (
          <div className="SubItem">
            <ul>
              <li id="webmanager" onClick={onMenuItemClick}>
                Blogs
              </li>
              <li id="addemployer" onClick={onMenuItemClick}>
                Wiki/FAQ
              </li>
            </ul>
          </div>
        ) : null}
      </div>

      <div id="withdrawmethod" className="IconBox" onClick={onMenuItemClick}>
        <img
          id="withdrawmethod"
          onClick={onMenuItemClick}
          src="images/dwithdrawmethod.png"
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
          src="images/dusermanage.png"
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
          src="images/dreport.png"
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
