import { useState } from "react";
import "../../Dashboard.css";
import TopNavber from "../../topnavbar/TopNavber";
import SideNavIcons from "./SideNavIcons";
import SideNavMain from "./SideNavMain";

const AdminDashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [currentComponent, setCurrentComponent] = useState("dashboard");
  const [currentTitle, setCurrentTitle] = useState("Dashboard");

  const handleMouseOver = () => {
    setShowSidebar(true);
    // const sidebarIcons = document.querySelector(".SideNavIcon");
    // sidebarIcons.style.display = "none";
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
  //   const renderComponent = () => {
  //     switch (currentComponent) {
  //       case "dashboard":
  //         return <DashboardHome />;
  //       case "myloan":
  //         return <MyLoan />;
  //       case "transfer":
  //         return <TransferMoney />;
  //       case "withdraw":
  //         return <WithdrawMoney />;
  //       case "transaction":
  //         return <AccountTransaction />;
  //       case "profile":
  //         return <MyProfile />;
  //       case "report":
  //         return <Report />;
  //       default:
  //         return null;
  //     }
  //   };

  return (
    <div className="DashboardContainer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 SideNavContainer">
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
          <div className="col-10">
            <div className="TopNavber">
              <TopNavber title={currentTitle} user="Boctrust_Admin" />
              {/* {renderComponent()} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
