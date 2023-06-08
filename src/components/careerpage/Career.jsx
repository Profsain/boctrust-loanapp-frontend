import Header from "../shared/Header";
import Headline from "../shared/Headline";
import "./Career.css";

const Career = () => {
  return (
    <>
      <Header imgurl="public/images/career.png" />
      <div className="container-fluid">
        <div className="container TopContainer">
          <Headline spacer="48px 0" text="Welcome to BoctrustMFB Careers" />
        </div>
      </div>
    </>
  );
};

export default Career;
