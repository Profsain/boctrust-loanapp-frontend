import { Tabs, Tab } from "react-bootstrap";
import Header from "../shared/Header";
import Headline from "../shared/Headline";
import TopCard from "../shared/TopCard";
import "./Career.css";

const Career = () => {
  return (
    <>
      <Header imgurl="public/images/career.png" />
      <div className="container-fluid">
        <div className="container TopContainer">
          <Headline spacer="48px 0" text="Welcome to BoctrustMFB Careers" />
          <TopCard
            size="18px"
            padding="0 88px"
            lineHeight="38px"
            text="Our success is our people. We are very proud of the people who work for us. They are talented, committed and resourceful. We are apt to discover more people, equally good and with the same desire for quality and pride in what they do.With continuous training and development programs, exquisite professional courses from best hands within and outside the country, we are out to maintain our standard of excellence service delivery to both our external and internal customers."
          />

          {/* Career Tabs section */}
          <div>
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="Home">
                Tab content for Home
              </Tab>
              <Tab eventKey="profile" title="Profile">
                Tab content for Profile
              </Tab>
              <Tab eventKey="contact" title="Contact" disabled>
                Tab content for Contact
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
