import { Table } from "react-bootstrap";
import DashboardHeadline from "../../shared/DashboardHeadline";
import DetailsCard from "./DetailsCard";
import Headline from "../../../shared/Headline";
import BocButton from "../../shared/BocButton";
import NextPreBtn from "../../shared/NextPreBtn";

const RemitaDashboard = () => {
  const styles = {
    container: {
      margin: "0 4rem 0 0",
    },
    btnBox: {
      display: "flex",
      justifyContent: "center",
    },
    view: {
      backgroundColor: "#f5f5f7",
      padding: "0.3rem 0.9rem 4rem 0.9rem",
      marginTop: "3rem",
    },
    ref: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "1.9rem 4rem ",
    },
    inputBox: {
      color: "#145098"
    },
    spanIn: {
      paddingRight: "1.5rem"
    },
    head: {
      color: "#fff",
      fontSize: "14px",
    },
    approved: {
      color: "#5cc51c",
    },
    completed: {
      color: "#f64f4f",
    },
    pending: {
      color: "#ecaa00",
    },
  };
  return (
    <div className="DetailSection DCard" style={styles.container}>
      <div>
        <Headline text="View by:" />
        <div style={styles.btnBox} className="VBox">
          <BocButton margin="8px 18px" bgcolor="#ecaa00" bradius="25px">
            Disbursement Today
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
      <div className="RBox">
        <DashboardHeadline
          height="79px"
          mspacer="3.9rem -1rem -3.9rem -1rem"
          bgcolor="#145098"
        ></DashboardHeadline>
        <div style={styles.table}>
          <Table borderless hover responsive="sm">
            <thead style={styles.head}>
              <tr>
                <th>Customer Acct No</th>
                <th>Name</th>
                <th>Income from Employer</th>
                <th>Loan Amount</th>
                <th>Collection Amount</th>
                <th>Date of Disbursement</th>
                <th>Date of Collection </th>
                <th>Booked Loan</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>7456161553</td>
                <td>Cynthia Aremu</td>
                <td>N230,000</td>
                <td>N75,000</td>
                <td>N80,500</td>
                <td>03-03-2023</td>
                <td>30-03-2023</td>
                <td style={styles.approved}>Processed</td>
                <td style={styles.completed}>View</td>
              </tr>
              <tr>
                <td>7456161598</td>
                <td>Ebuka Akim</td>
                <td>N300,000</td>
                <td>N750,000</td>
                <td>N900,000</td>
                <td>01-02-2023</td>
                <td>30-03-2023</td>
                <td style={styles.pending}>Pending</td>
                <td style={styles.completed}>View</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <NextPreBtn />
      </div>

      {/* details section */}
      <div style={styles.view}>
        <DashboardHeadline mspacer="-2rem 0 5rem 0">
          <h4 className="RTitle">
            View your Remita Loan Disbursement Notifications
          </h4>
        </DashboardHeadline>
        <div className="RBox">
          <DetailsCard title="Customer Name" text="Akinwande" />
          <DetailsCard title="Customer Account Number" text="7468868564" />
          <DetailsCard title="Income from employer" text="N250,000" />
          <DetailsCard title="Loan Amount" text="N100,000" />
          <DetailsCard title="Collection Amount" text="N120,000" />
          <DetailsCard
            title="Date of Disbursement"
            text="23-02-2023 .  16:49"
          />
          <DetailsCard title="Date of Collection" text="23-03-2023 .  17:25" />
          <DetailsCard title="Total Collection amount" text="N122,500" />
          <DetailsCard title="Number of Repayements" text="2" />
          <div style={styles.ref} className="DCard">
            <p>Mandate Reference Generated</p>
            <div style={styles.inputBox}>
              <p>
                <span style={styles.spanIn}>
                  <input type="radio" name="generateRef" />
                </span>
                Yes
              </p>
            </div>
            <div style={styles.inputBox}>
              <p>
                <span style={styles.spanIn}>
                  <input type="radio" name="generateRef" />
                </span>
                No
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemitaDashboard;
