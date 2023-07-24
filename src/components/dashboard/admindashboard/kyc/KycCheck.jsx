import Headline from "../../../shared/Headline";
import { Table } from "react-bootstrap";
import BocButton from "../../shared/BocButton";
import DashboardHeadline from "../../shared/DashboardHeadline";
import NextPreBtn from "../../shared/NextPreBtn";
import "./Kyc.css";

const KycCheck = () => {
  const styles = {
    btnBox: {
      display: "flex",
      justifyContent: "center",
    },
    table: {
      //   margin: "0 2rem 0 3rem",
      fontSize: "14px",
    },
    head: {
      color: "#fff",
      fontSize: "1rem",
    },
    approved: {
      color: "#5cc51c",
    },
    completed: {
      color: "#f64f4f",
    },
    padding: {
      color: "#ecaa00",
    },
  };
  return (
    <div>
      <DashboardHeadline
        bgcolor="#145098"
        mspacer="1rem 4rem 0 1rem"
        padding="0.3rem 0 0 1rem"
        height="70px"
      >
        <div>
          <input placeholder="Search" type="text" className="CreditSearch" />
          <img
            src="images/search.png"
            alt="search-icon"
            className="SearchIcon"
          />
        </div>
      </DashboardHeadline>

      <div>
        <Headline text="View by:" />
        <div style={styles.btnBox} className="VBox">
          <BocButton margin="8px 18px" bgcolor="#ecaa00" bradius="25px">
            Applicant Today
          </BocButton>
          <BocButton margin="8px 18px" bgcolor="#ecaa00" bradius="25px">
            Date Range
          </BocButton>
          <BocButton margin="8px 18px" bgcolor="#ecaa00" bradius="25px">
            Specific User
          </BocButton>
        </div>
      </div>

      {/* table section */}
      <div className="Section RBox DCard">
        <DashboardHeadline
          height="52px"
          mspacer="2rem 0 -2.55rem -1rem"
          bgcolor="#145098"
        ></DashboardHeadline>
        <div style={styles.table}>
          <Table borderless hover responsive="sm">
            <thead style={styles.head}>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Account Number</th>
                <th>BVN</th>
                <th>Do Check</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bola</td>
                <td>Cynthia</td>
                <td>745787698</td>
                <td>4531232367</td>
                <td style={styles.padding}>View</td>
                <td>
                  <div>
                    <BocButton
                      bradius="12px"
                      fontSize="14px"
                      width="80px"
                      margin="0 4px"
                      bgcolor="#f64f4f"
                    >
                      Pending
                    </BocButton>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Ola</td>
                <td>John</td>
                <td>745787666</td>
                <td>4534432345</td>
                <td style={styles.padding}>View</td>
                <td>
                  <div>
                    <BocButton
                      bradius="12px"
                      fontSize="14px"
                      width="90px"
                      margin="0 4px"
                      bgcolor="#7dd50e"
                    >
                      Verified
                    </BocButton>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <NextPreBtn />
      </div>

      {/* kyc detail section */}
      <div className="KSection">
        <Headline text="Check Customer KYC Details" />
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <DashboardHeadline>Valid ID Card View</DashboardHeadline>
            <img
              src="images/officialid.png"
              alt="official-id"
              className="OfficialIdCard"
            />
            <div className="MatchCon">
              <Headline fontSize="16px" align="left" text="Admin Review" />
              <div className="Match">
                <p>Is there a Match?</p>
                <div className="Radio">
                  <input type="radio" id="yes" name="choice" value="yes" />
                  <label htmlFor="yes">Yes</label>

                  <input type="radio" id="no" name="choice" value="no" />
                  <label htmlFor="no">No</label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <DashboardHeadline>
              Application Facial Capture View
            </DashboardHeadline>

            <img
              src="images/demofacial.png"
              alt="face-capture"
              className="FaceCapture"
            />
            <div className="TimeStamp">
              <p>Time Stamp:</p>
              <div>
                <p>12/12/2020</p>
                <p className="Time">12:00pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KycCheck;
