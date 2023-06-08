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
import Career from "./components/careerpage/Career";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound";

// terms and conditions
import LoanTerms from "./components/terms&condition/LoanTerms";
import PrivacyPolicy from "./components/terms&condition/PrivacyPolicy";
import TermsCondition from "./components/terms&condition/TermsCondition";


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
        <Route path="/career" element={<Career />} />

        {/* terms and conditions */}
        <Route path="/terms" element={<TermsCondition />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/loanterms" element={<LoanTerms />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
