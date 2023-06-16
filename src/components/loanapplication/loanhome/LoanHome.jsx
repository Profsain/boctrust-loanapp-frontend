import Header from "../../shared/Header";
import Headline from "../../shared/Headline";
import LoanStep from "./loanStep";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNairaSign } from "@fortawesome/free-solid-svg-icons";
import "../Loan.css";
import BocTrustMsg from "./BocTrustMsg";
import Testimonial from "./Testimonial";
import EmailSection from "./EmailSection";

const LoanHome = () => {
  return (
    <div className="LoanHome">
      <Header imgurl="images/boctrustformheader.jpg" />
      <div className="TopSection">
        <div className="TopText">
          <Headline
            align="left"
            color="#fff"
            fontSize="3.5rem"
            text="Quick & easy loans for anyone"
          />
          <p>
            Take care of your personal needs or grow your small business with
            our quick loans
          </p>
        </div>
        <div className="HeroCard">
          <Headline text="How much do you need?" />
            <input className="Field" type="text"/>
            <FontAwesomeIcon icon={faNairaSign} className="NairaIcon"/>
          <Headline text=" Business Owner or Employee?" />
          <select className="Field">
            <option value="default" selected disabled>
              Selection one
            </option>
            <option value="Business Owner">Business Owner</option>
            <option value="Employee">Government Employee</option>
          </select>
          <Button className="ActionBtn" variant="primary" size="lg">
            Apply Now
          </Button>
        </div>
      </div>

      {/* loan step section */}
      <LoanStep />

      {/* Boctrust about section */}
      <BocTrustMsg />

      {/* testimonial section */}
      <Testimonial />

      {/* Email list section */}
      <EmailSection />
    </div>
  );
};

export default LoanHome;
