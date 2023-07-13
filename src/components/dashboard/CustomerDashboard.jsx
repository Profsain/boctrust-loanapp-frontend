import { useState } from "react";
import SidebarIcons from "./SidebarIcons";
import "./Dashboard.css";
import SidebarMain from "./SidebarMain";
import TopNavber from "./topnavbar/TopNavber";
import DashboardHome from "./dashboardcomponents/DashboardHome";
import MyLoan from "./dashboardcomponents/myloan/MyLoan";
import ApplyLoan from "./dashboardcomponents/myloan/ApplyLoan";
import LoanCalculator from "./dashboardcomponents/myloan/LoanCalculator";
import LoanPayment from "./dashboardcomponents/repayments/repayments";
import TransferMoney from "./dashboardcomponents/transferdashboard/TransferMoney";
import WithdrawMoney from "./dashboardcomponents/withdrawer/WithdrawMoney";
import MyProfile from "./dashboardcomponents/myprofile/MyProfile";
import Report from "./dashboardcomponents/report/Report";
import AccountTransaction from "./dashboardcomponents/account/AccountTransaction";

const CustomerDashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [currentComponent, setCurrentComponent] = useState("dashboard");
  const [currentTitle, setCurrentTitle] = useState("Dashboard");

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
      case "myloan":
        setCurrentTitle("My Loan");
        break;
      case "applyloan":
        setCurrentTitle("My Loan");
        break;
      case "loancalculator":
        setCurrentTitle("My Loan");
        break;
      case "loanrepayment":
        setCurrentTitle("Loan Repayment");
        break;
      case "transfer":
        setCurrentTitle("Transfer Money");
        break;
      case "withdraw":
        setCurrentTitle("Withdraw Money");
        break;
      case "transaction":
        setCurrentTitle("Account Transaction");
        break;
      case "profile":
        setCurrentTitle("My Profile");
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
        return <DashboardHome />;
      case "myloan":
        return <MyLoan />;
      case "applyloan":
        return <ApplyLoan />;
      case "loancalculator":
        return <LoanCalculator />;
      case "loanrepayment":
        return <LoanPayment />;
      case "transfer":
        return <TransferMoney />;
      case "withdraw":
        return <WithdrawMoney />;
      case "transaction":
        return <AccountTransaction />;
      case "profile":
        return <MyProfile />;
      case "report":
        return <Report />;
      default:
        return null;
    }
  };

  return (
    <div className="DashboardContainer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 SideNavContainer">
            {/* desktop navbar  */}
            <div className="DesktopNav">
              <SidebarMain onMenuItemClick={handleMenuItemClick} />
            </div>
            {/* mobile navbar  */}
            <div className="MobileNav">
              {!showSidebar ? (
                <div className="SideNavIcon" onMouseOver={handleMouseOver}>
                  <SidebarIcons />
                </div>
              ) : (
                <div className="SideNavMain" onMouseLeave={handleMouseOut}>
                  <SidebarMain onMenuItemClick={handleMenuItemClick} />
                </div>
              )}
            </div>
          </div>
          <div className="col-10">
            <div className="TopNavber">
              <TopNavber title={currentTitle} />
              {renderComponent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
