import { useState } from "react";
import SidebarIcons from "./SidebarIcons";
import "./Dashboard.css";
import SidebarMain from "./SidebarMain";

const Dashboard = () => {
  // hide and show sidebar on hover
  const showSidebar = () => {
    const sidebarMain = document.querySelector(".SideNavMain");
    sidebarMain.style.display = "block";
    const sidebarIcon = document.querySelector(".SideNavIcon");
    sidebarIcon.style.display = "none";
  };

  const hideSidebar = () => {
    const sidebarMain = document.querySelector(".SideNavMain");
    sidebarMain.style.display = "none";
    const sidebarIcon = document.querySelector(".SideNavIcon");
    sidebarIcon.style.display = "block";
  };

  const sidebar = document.querySelector(".SideNavIcon");
  sidebar.addEventListener("mouseover", showSidebar);
  
  const sidebarMain = document.querySelector(".SideNavMain");
  sidebarMain.addEventListener("mouseout", hideSidebar);

  return (
    <div className="DashboardContainer">
      <div className="row">
        <div className="col-3">
          {/* {!show ? (
            <div className="SideNavIcon">
              {" "}
              <SidebarIcons />
            </div>
          ) : (
            <div className="SideNavMain">
              <SidebarMain />
            </div>
          )} */}

          <div className="row">
            <div className="col-3 SideNavIcon">
              <SidebarIcons />
            </div>
            <div className="col-9 SideNavMain ">
              <SidebarMain />
            </div>
          </div>
        </div>
        <div className="col-9"></div>
      </div>
    </div>
  );
};

export default Dashboard;
