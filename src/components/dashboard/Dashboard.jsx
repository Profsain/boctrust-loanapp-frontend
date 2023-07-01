import { useState } from "react";
import SidebarIcons from "./SidebarIcons";
import "./Dashboard.css";
import SidebarMain from "./SidebarMain";
import TopNavber from "./topnavbar/TopNavber";
import DashboardHome from "./dashboardcomponents/DashboardHome";

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleMouseOver = () => {
    setShowSidebar(true);
    // const sidebarIcons = document.querySelector(".SideNavIcon");
    // sidebarIcons.style.display = "none";
  };

  const handleMouseOut = () => {
    setShowSidebar(false);
  };

  const handleMenuItemClick = (e) => {
    console.log(e.target.id)
    setShowSidebar(false);
  };

  return (
    <div className="DashboardContainer">
      <div className="row">
        <div className="col-2 SideNavContainer">
          {!showSidebar ? (
            <div className="SideNavIcon" onMouseOver={handleMouseOver}>
              <SidebarIcons />
            </div>
          ) : (
            <div className="SideNavMain" onMouseOut={handleMouseOut}>
              <SidebarMain onMenuItemClick={handleMenuItemClick} />
            </div>
          )}
        </div>
        <div className="col-10">
          <div className="TopNavber">
            <TopNavber />
            <DashboardHome />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


