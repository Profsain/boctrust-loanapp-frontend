import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavigationBar from "./components/navigation/NavigationBar";
import Home from "./components/homepage/Home";
import About from "./components/aboutpage/About";
import OurBoardPage from "./components/aboutpage/OurBoardPage";
import Contact from "./components/contactpage/Contact";
import Blog from "./components/blogpage/Blog";
import Loan from "./components/loanapplication/Loan";
import OurProduct from "./components/ourproductpage/OurProduct";
import Support from "./components/supportpage/Support";


function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/board" element={<OurBoardPage />} />

        <Route path="/product" element={<OurProduct />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/support" element={<Support />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
