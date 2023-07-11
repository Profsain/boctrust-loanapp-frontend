import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Dashboard.css";
import Login from "./login/Login";
import CustomerDashboard from "./CustomerDashboard";
import AdminDashboard from "./admindashboard/dashboardhome/AdminDashboard";

const Dashboard = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState("");
  const currentUser = useSelector((state) => state.user.currentUser);
  useEffect(() => {
    if (currentUser) {
      setIsLogin(true);
      setUser(currentUser.username);
    }
  }, [currentUser]);
  return (
    <div className="DashboardContainer">
      {isLogin === false ? (
        <Login setLogin={setIsLogin} />
      ) : user === "admin" ? (
        <AdminDashboard />
      ) : (
        <CustomerDashboard />
      )}
    </div>
  );
};

export default Dashboard;
