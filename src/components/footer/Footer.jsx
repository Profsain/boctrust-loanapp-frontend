// import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="FooterTop row">
        <div className="col-md-4 col-sm-12">
          <h6 className="FooterHeadline">Quick Links</h6>
          <p>Privacy Policy</p>
          <p>Terms and Condition</p>
          <h6 className="FooterHeadline">About</h6>
          <p>
            BOCTRUST MICROFINANCE BANK is a financial institution licensed by
            Central Bank of Nigeria to gives social and economic Support to the
            lower middle class, working class and the economically active poor.
          </p>
        </div>
        <div className="col-md-4 col-sm-12">
          <h6 className="FooterHeadline">Company Links</h6>
          <div className="row">
            <div className="col-md-6">
              {/* <ul>
                <li>
                  <Link to="/about">About App</Link>
                </li>
                <li>
                  <Link to="/team">Team</Link>
                </li>
                <li>
                  <Link to="/loans">Loans</Link>
                </li>
                <li>
                  <Link to="/newsevent">News & Events</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul> */}
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <h6 className="FooterHeadline">Contact Info</h6>
          <p>
            Address:
            <br /> 1st floor, 26 Moloney street, Onikan.
          </p>
          <p>
            Phone:
            <br />
            08177773196 <br />
            08076710000
          </p>
          <p>
            Email:
            <br /> enquiry@boctrustmfb.co
          </p>
        </div>
      </div>
      <div className="FooterBottom row">
        <p>
          Copyright BOCTRUST Microfinance Bank Limited All rights reserved 2023.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
