import Headline from "../../../shared/Headline";
import { Table } from "react-bootstrap";
import BocButton from "../../shared/BocButton";
import DashboardHeadline from "../../shared/DashboardHeadline";
import NextPreBtn from "../../shared/NextPreBtn";
import "./Kyc.css";

const ReviewSignature = () => {
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
      <div>
        <Headline text="View by:" />
        <div style={styles.btnBox} className="VBox">
          <BocButton margin="8px 18px" bgcolor="#ecaa00" bradius="25px">
            Recent Application
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
          <Table hover responsive="sm">
            <thead style={styles.head}>
              <tr>
                <th>Customer ID</th>
                <th>Full Name</th>
                <th>Govt ID Submitted</th>
                <th>Facial Capture Done</th>
                <th>Is there a match</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>C001</td>
                <td>Cynthia Bola</td>
                <td>Yes </td>
                <td>Yes </td>
                <td>Yes </td>
                <td style={styles.padding}>View</td>
              </tr>
              <tr>
                <td>C003</td>
                <td>Ekene Ikoku</td>
                <td>Yes </td>
                <td>Yes </td>
                <td>No </td>
                <td style={styles.padding}>View </td>
              </tr>
              <tr>
                <td>C0018</td>
                <td>Akin Tinibu</td>
                <td>Yes </td>
                <td>Yes </td>
                <td>Yes </td>
                <td style={styles.padding}>View </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <NextPreBtn />
      </div>

      {/* kyc detail section */}
      <div className="KSection">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div>
              <Headline fontSize="24px" text="Signature View" />
              <img
                src="images/signature1.png"
                alt="official signature"
                className="Signature"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSignature;
