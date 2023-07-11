import { useState } from "react";
import "./Dashboard.css";
import Login from "./login/Login";
import CustomerDashboard from "./CustomerDashboard";
import AdminDashboard from "./admindashboard/dashboardhome/AdminDashboard";

const Dashboard = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState("");
  console.log("Current Login User:", user);

  return (
    <div className="DashboardContainer">
      {isLogin === false ? (
        <Login setLogin={setIsLogin} setCurrentUser={setUser} />
      ) : user === "admin" ? (
        <AdminDashboard />
        ) : (
        <CustomerDashboard />
      )}
    </div>
  );
};

export default Dashboard;
