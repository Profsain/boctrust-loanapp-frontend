import { useState, useEffect } from "react";
import "../../Dashboard.css";
import TopNavber from "../../topnavbar/TopNavber";
import SideNavIcons from "./SideNavIcons";
import SideNavMain from "./SideNavMain";
import AccountDashboard from "../account/AccountDashboard";
import CreditBureauDashboard from "../creditbureau/CreditBureauDashboard";
import CustomersDashboard from "../customers/CustomersDashboard";
import AddCustomer from "../customers/AddCustomer";
import CustomersRequest from "../customers/CustomersRequest"
import HomeDashboard from "./HomeDashboard";
import Branches from "../branches/Branches";
import MdasEmployers from "../employers/MdasEmployers";
import KycCheck from "../kyc/KycCheck";
import LoanDashboard from "../loan/LoanDashboard";
import LoanProducts from "../loan/LoanProducts";
import RemitaDashboard from "../remita/RemitaDashboard";
import RepaymentDashboard from "../repayment/RepaymentDashboard";
import ReportDashboard from "../report/ReportDashboard";
import TransactionDashboard from "../transaction/TransactionDashboard";
import UserManagerDashboard from "../usersmanager/UserManagerDashboard";
import WebsiteManagerDashboard from "../website/WebsiteManagerDashboard";
import WithdrawRequestDashboard from "../withdraw/WithdrawRequestDashboard";
import WithdrawMethodDashboard from "../withdrawmethod/WithdrawMethodDashboard";

const AdminDashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [currentComponent, setCurrentComponent] = useState("dashboard");
  const [currentTitle, setCurrentTitle] = useState("Dashboard");

  // scroll to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentComponent]);

  const handleMouseOver = () => {
    setShowSidebar(true);
  };

  const handleMouseOut = () => {
    setShowSidebar(false);
  };

  const handleMenuItemClick = (e) => {
    e.preventDefault();
    const id = e.target.id;
    setCurrentComponent(id);
    switch (id) {
      case "dashboard":
        setCurrentTitle("Dashboard");
        break;
      case "branches":
        setCurrentTitle("Branches");
        break;
      case "customer":
        setCurrentTitle("Customer List");
        break;
      case "addcustomer":
        setCurrentTitle("Add New Customer");
        break;
      case "customerrequest":
        setCurrentTitle("Customers Request");
        break;
      case "myloan":
        setCurrentTitle("Loan Dashboard");
        break;
      case "loanproducts":
        setCurrentTitle("Loan Products");
        break;
      case "transfer":
        setCurrentTitle("Transfer Money");
        break;
      case "repayment":
        setCurrentTitle("Repayments");
        break;
      case "accounts":
        setCurrentTitle("Accounts");
        break;
      case "withdraw":
        setCurrentTitle("Withdraw Requests");
        break;
      case "transaction":
        setCurrentTitle("Transaction History");
        break;
      case "remita":
        setCurrentTitle("Remita Dashboard");
        break;
      case "creditbureau":
        setCurrentTitle("Credit Bureau Check");
        break;
      case "mdas":
        setCurrentTitle("MDAs/Employers");
        break;
      case "kyc":
        setCurrentTitle("KYC Manager");
        break;
      case "webmanager":
        setCurrentTitle("Website Manager");
        break;
      case "withdrawmethod":
        setCurrentTitle("Withdraw Methods");
        break;
      case "usermanager":
        setCurrentTitle("User Manager");
        break;
      case "report":
        setCurrentTitle("Account Report");
        break;
      default:
        setCurrentTitle("Dashboard");
        break;
    }
    setShowSidebar(false);
  };

  // handle component rendering
  const renderComponent = () => {
    switch (currentComponent) {
      case "dashboard":
        return <HomeDashboard />;
      case "branches":
        return <Branches />;
      case "customer":
        return <CustomersDashboard />;
      case "addcustomer":
        return <AddCustomer />;
      case "customerrequest":
        return <CustomersRequest />;
      case "myloan":
        return <LoanDashboard />;
      case "loanproducts":
        return <LoanProducts />;
      case "repayment":
        return <RepaymentDashboard />;
      case "accounts":
        return <AccountDashboard />;
      case "withdraw":
        return <WithdrawRequestDashboard />;
      case "transaction":
        return <TransactionDashboard />;
      case "remita":
        return <RemitaDashboard />;
      case "creditbureau":
        return <CreditBureauDashboard />;
      case "mdas":
        return <MdasEmployers />;
      case "kyc":
        return <KycCheck />;
      case "webmanager":
        return <WebsiteManagerDashboard />;
      case "usermanager":
        return <UserManagerDashboard />;
      case "withdrawmethod":
        return <WithdrawMethodDashboard />;
      case "report":
        return <ReportDashboard />;
      default:
        return null;
    }
  };

  return (
    <div className="DashboardContainer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 SideNavContainer">
            {/* desktop navbar */}
            <SideNavMain onMenuItemClick={handleMenuItemClick} />
            {/* mobile navbar */}
            <div className="MobileNav">
              {!showSidebar ? (
                <div className="SideNavIcon" onMouseOver={handleMouseOver}>
                  <SideNavIcons />
                </div>
              ) : (
                <div className="SideNavMain" onMouseLeave={handleMouseOut}>
                  <SideNavMain onMenuItemClick={handleMenuItemClick} />
                </div>
              )}
            </div>
          </div>
          <div className="col-10">
            <div className="TopNavber">
              <TopNavber title={currentTitle} user="Boctrust_Admin" />
              {renderComponent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
