import { Stack } from "@mui/material";
import "./Overview.css";

const OurVisionMission = () => {
  return (
    <div>
      <Stack direction="row" spacing={4}>
        <div className="VisionLeft">
          <h3>Our Company Vision</h3>
          <p>
            To be the Number 1 Microfinance Bank in terms of customer service,
            profitability and returns on investment.
          </p>

          <h3>Our Company Mission</h3>
          <p>
            We are committed to offering the highest level of professionalism
            and service with integrity to our partners and customers while
            ensuring profitable returns to our shareholders.
          </p>

          <h3>Our Company Goal</h3>
          <p>
            Our core objective is to provide avenue for saving, access to credit
            and financial advisory services to individuals and micro, small &
            medium enterprises with competitive advantages. We believe in
            Growing Together with our customer.
          </p>
        </div>
        <div className="VisionRight">
          <img
            className="TopImg"
            src="src/assets/boctrust-staff1.avif"
            alt="bocstrust-microfinance-staff"
          />
          <div>
            <img className="CardImg" src="src/assets/boctrust1.jpg" alt="boctrust-img" />
            <img className="CardImg" src="src/assets/boctrustmeet.avif" alt="boctrust-img" />
            <img className="CardImg" src="src/assets/boctrustcustomer.avif" alt="boctrust-img" />
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default OurVisionMission;
