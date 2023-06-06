import Headline from "../shared/Headline";
import Divider from "./Divider";
import "./Support.css";

const TermsPolicy = () => {
  const style = {
    color: "#fff",
    backgroundColor: "#ecaa00",
    padding: "4rem",
    };
    
  return (
    <div className="container-fluid" style={style}>
      <div className="container">
        <Headline text="Terms and Conditions" color="#fff" align="left" />
        <Divider />
        <ul>
          <li className="Tlink"> Boctrust Mfb Privacy Policy </li>
          <li className="Tlink"> Boctrust Mfb Remita Consent </li>
          <li className="Tlink"> Boctrust Mfb Term of Use </li>
          <li className="Tlink"> Boctrust Mfb end-user agreement </li>
        </ul>
      </div>
    </div>
  );
};

export default TermsPolicy;
