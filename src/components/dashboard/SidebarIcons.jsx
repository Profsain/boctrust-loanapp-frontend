import "./Dashboard.css";

const SidebarIcons = () => {
  return (
    <div className="FixSideNav">
      <div className="NavIcons">
        <div className="BLogo SBLogo">
          <img src="src/assets/images/dlogo.png" alt="boctrust-logo" />
        </div>

        <div className="IconBox">
          <img src="src/assets/images/ddashboard.png" alt="dashboard" />
        </div>

        <div className="IconBox">
          <img src="src/assets/images/dmyloan.png" alt="loan" />
        </div>

        <div className="IconBox">
          <img src="src/assets/images/dtransfer.png" alt="transfer" />
        </div>

        <div className="IconBox">
          <img src="src/assets/images/dwithdraw.png" alt="withdrawer" />
        </div>

        <div className="IconBox">
          <img src="src/assets/images/daccount.png" alt="account" />
        </div>

        <div className="IconBox">
          <img src="src/assets/images/dprofile.png" alt="profile" />
        </div>

        <div className="IconBox">
          <img src="src/assets/images/dreport.png" alt="report" />
        </div>
      </div>
    </div>
  );
};

export default SidebarIcons;
