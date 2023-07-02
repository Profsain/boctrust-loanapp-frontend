import { useState } from "react";
import SidebarIcons from "./SidebarIcons";
import "./Dashboard.css";
import SidebarMain from "./SidebarMain";
import TopNavber from "./topnavbar/TopNavber";
import DashboardHome from "./dashboardcomponents/DashboardHome";
import MyLoan from "./dashboardcomponents/MyLoan";
import TransferMoney from "./dashboardcomponents//transferdashboard/TransferMoney";
import WithdrawMoney from "./dashboardcomponents/WithdrawMoney";
import MyProfile from "./dashboardcomponents/MyProfile";
import Report from "./dashboardcomponents/Report";
import AccountTransaction from "./dashboardcomponents/AccountTransaction";

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [currentComponent, setCurrentComponent] = useState("dashboard");
  const [currentTitle, setCurrentTitle] = useState("Dashboard");

  console.log(currentComponent);

  const handleMouseOver = () => {
    setShowSidebar(true);
    // const sidebarIcons = document.querySelector(".SideNavIcon");
    // sidebarIcons.style.display = "none";
  };

  const handleMouseOut = () => {
    setShowSidebar(false);
  };

  const handleMenuItemClick = (e) => {
    const id = e.target.id;
    setCurrentComponent(id);
    switch (id) {
      case "dashboard":
        setCurrentTitle("Dashboard");
        break;
      case "myloan":
        setCurrentTitle("My Loan");
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
        setCurrentTitle("Report");
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

export default Dashboard;
