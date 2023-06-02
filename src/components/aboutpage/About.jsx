import Header from "../shared/Header";
import Headline from "../shared/Headline";
import CustomerProduct from "./CustomerProduct";
import TopCard from "./TopCard";
import TopCardSection from "./TopCardSection";


const About = () => {
    return (
      <>
        <Header imgurl="public/images/companyover.png" />
        <TopCardSection />
        <div className="container">
          <div>
            <TopCard
              spacer="0 18px 68px 18px"
              title={<Headline text="Our Vision" />}
              text="To be the Number 1 Microfinance Bank in terms of customer service, profitability and returns on investment."
            />

            <TopCard
              spacer="0 18px 68px 18px"
              title={<Headline text="Our Goal" />}
              text="Our core objective is to provide avenue for saving, access to credit and financial advisory services to individuals and micro, small & medium enterprises with competitive advantages. We believe in Growing Together with our customer."
            />
          </div>
        </div>
        <CustomerProduct />
      </>
    );
}

export default About;
