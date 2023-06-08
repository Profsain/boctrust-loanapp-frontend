import { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Header from "../shared/Header";
import Headline from "../shared/Headline";
import TopCard from "../shared/TopCard";
import "./Career.css";

const Career = () => {
  const [key, setKey] = useState("joinus");
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
          <div className="TabContainer">
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
              fill
            >
              <Tab eventKey="joinus" title="Why Join Us">
                Tab content for why join us
              </Tab>
              <Tab eventKey="onboard" title="New Staff Orientation">
                Tab content for New Staff Orientation
              </Tab>
              <Tab eventKey="vacancy" title="Vacancy">
                Tab content for Vacancy
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
