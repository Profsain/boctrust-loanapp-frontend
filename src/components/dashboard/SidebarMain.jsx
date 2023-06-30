import "./Dashboard.css";

const SidebarMain = () => {
  return (
    <div className="NavIcons SideMain">
      <div className="BrandCon">
        <div className=" LgLogo">
          <img src="src/assets/images/dlogo.png" alt="boctrust-logo" />
        </div>
        <p>App User</p>
      </div>

      <div className="IconBox">
        <img src="src/assets/images/ddashboard.png" alt="dashboard" />
        <p>Dashboard</p>
      </div>

      <div className="IconBox">
        <img src="src/assets/images/dmyloan.png" alt="loan" />
        <p>My Loan</p>
      </div>

      <div className="IconBox">
        <img src="src/assets/images/dtransfer.png" alt="transfer" />
        <p>Transfer Money</p>
      </div>

      <div className="IconBox">
        <img src="src/assets/images/dwithdraw.png" alt="withdrawer" />
        <p>Withdraw Money</p>
      </div>

      <div className="IconBox">
        <img src="src/assets/images/daccount.png" alt="account" />
        <p>Account Transaction</p>
      </div>
      <div className="IconBox">
        <img src="src/assets/images/dprofile.png" alt="profile" />
        <p>Profile</p>
      </div>

      <div className="IconBox">
        <img src="src/assets/images/dreport.png" alt="report" />
        <p>Report</p>
      </div>
    </div>
  );
};

export default SidebarMain;
