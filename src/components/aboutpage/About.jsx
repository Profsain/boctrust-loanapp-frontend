import { useEffect } from "react";
// animation library
import AOS from "aos";
import "aos/dist/aos.css";
// component
import Header from "../shared/Header";
import Headline from "../shared/Headline";
import CustomerProduct from "./CustomerProduct";
import OurValue from "./OurValue";
import TopCard from "./TopCard";
import TopCardSection from "./TopCardSection";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <Header imgurl="public/images/companyover.png" />
      <TopCardSection />
      <div className="container">
        <div>
          <div data-aos="fade-up">
            <TopCard
              spacer="0 18px 68px 18px"
              size="18px"
              lineHeight="38px"
              letterSpacing="0.02em"
              padding="28px 88px"
              title={<Headline text="Our Vision" />}
              text="To be the Number 1 Microfinance Bank in terms of customer service, profitability and returns on investment."
            />
          </div>
          <div data-aos="fade-up">
            <TopCard
              spacer="0 18px 68px 18px"
              size="18px"
              lineHeight="38px"
              letterSpacing="0.02em"
              padding="28px 88px"
              title={<Headline text="Our Goal" />}
              text="Our core objective is to provide avenue for saving, access to credit and financial advisory services to individuals and micro, small & medium enterprises with competitive advantages. We believe in Growing Together with our customer."
            />
          </div>
        </div>
      </div>
      <div data-aos="fade-up">
        <CustomerProduct />
      </div>
      <div data-aos="fade-up">
        <OurValue />
      </div>
    </>
  );
};

export default About;
