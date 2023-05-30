
import HomeCarousel from "./components/homepage/carousel/HomeCarousel";
import NavigationBar from "./components/navigation/NavigationBar";

function App() {
  return (
    <> 
      <div>
        <NavigationBar />
        <HomeCarousel />

      </div>
      {/* <NavigationBar /> */}
      <div className="App">
        <h1>Welcome to Boctrust Microfinance Bank</h1>
      </div>
    </>
  );
}

export default App;
