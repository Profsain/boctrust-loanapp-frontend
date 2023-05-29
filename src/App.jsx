// import "./App.css";
import Button from "@mui/material/Button";
import NavigationBar from "./components/navigation/NavigationBar";

function App() {
  return (
    <>
      <NavigationBar />
      <div className="App">
        <img src="../images/boctrustlogo.png" alt="" />
        <h1>Welcome to Boctrust Microfinance Bank</h1>
        <Button variant="contained" color="primary">
          Hello Button
        </Button>
      </div>
    </>
  );
}

export default App;
