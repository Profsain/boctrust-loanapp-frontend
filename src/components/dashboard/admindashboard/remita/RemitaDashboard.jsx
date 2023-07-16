import DashboardHeadline from "../../shared/DashboardHeadline";
import DetailsCard from "./DetailsCard";
import Headline from "../../../shared/Headline";
import BocButton from "../../shared/BocButton";

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
    }
  };
  return (
    <div style={styles.container}>
      <div>
        <Headline text="View by:" />
        <div style={styles.btnBox}>
          <BocButton margin="0 18px" bgcolor="#ecaa00" bradius="25px">
            Disbursement Today
          </BocButton>
          <BocButton margin="0 18px" bgcolor="#ecaa00" bradius="25px">
            Date Range
          </BocButton>
          <BocButton margin="0 18px" bgcolor="#ecaa00" bradius="25px">
            Specific User
          </BocButton>
        </div>
      </div>

      {/* details section */}
      <div style={styles.view}>
        <DashboardHeadline mspacer="2rem 0 5rem 0">
          View your Remita Loan Disbursement Notifications
        </DashboardHeadline>
        <div>
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
          <div style={styles.ref}>
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
