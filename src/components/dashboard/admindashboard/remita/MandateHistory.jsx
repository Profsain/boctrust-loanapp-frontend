import Headline from "../../../shared/Headline";
import { Table } from "react-bootstrap";
import BocButton from "../../shared/BocButton";
import DashboardHeadline from "../../shared/DashboardHeadline";
import NextPreBtn from "../../shared/NextPreBtn";
import DetailsCard from "./DetailsCard";

const MandateHistory = () => {
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
      fontSize: "0.9rem",
    },
  };
  return (
    <div>
      <div>
        <Headline text="View by:" />
        <div style={styles.btnBox} className="VBox">
          <BocButton margin="8px 18px" bgcolor="#ecaa00" bradius="25px">
            Today&apos;s Mandate
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
          height="62px"
          mspacer="2rem 0 -3.3rem -1rem"
          bgcolor="#145098"
        ></DashboardHeadline>
        <div style={styles.table}>
          <Table borderless hover responsive="sm">
            <thead style={styles.head}>
              <tr>
                <th>Salary Account Number</th>
                <th>Customer Name</th>
                <th>Employer Name</th>
                <th>Total Disbursed</th>
                <th>Outstanding Balance</th>
                <th>Date of Disbursement</th>
                <th>Collection Start Date</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2346161553</td>
                <td>Cynthia Bola</td>
                <td>NPF</td>
                <td>75,000</td>
                <td>80,500</td>
                <td>03-03-2023</td>
                <td>03-04-2023</td>
                <td style={styles.padding}>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    width="90px"
                    margin="0 4px"
                    bgcolor="#7dd50e"
                  >
                    View
                  </BocButton>
                </td>
              </tr>
              <tr>
                <td>2346161543</td>
                <td>John Doe</td>
                <td>Nigeria Custom</td>
                <td>750,000</td>
                <td>900,000</td>
                <td>01-04-2023</td>
                <td>01-05-2023</td>
                <td style={styles.padding}>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    width="90px"
                    margin="0 4px"
                    bgcolor="#7dd50e"
                  >
                    View
                  </BocButton>
                </td>
              </tr>
              <tr>
                <td>2346161599</td>
                <td>Musa Misola</td>
                <td>Immigration</td>
                <td>500,000</td>
                <td>600,000</td>
                <td>01-03-2023</td>
                <td>01-04-2023</td>
                <td style={styles.padding}>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    width="90px"
                    margin="0 4px"
                    bgcolor="#7dd50e"
                  >
                    View
                  </BocButton>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <NextPreBtn />
      </div>

      {/* details section */}
      <div style={styles.view}>
        <DashboardHeadline mspacer="2rem 0 5rem 0">
          View Customer Mandate History
        </DashboardHeadline>
        <div className="RBox">
          <DetailsCard title="Customer ID" text="10032" />
          <DetailsCard title="Authorized Code" text="NPF123" />
          <DetailsCard title="Customer Name" text="Akinwande Bola" />
          <DetailsCard title="Salary Account" text="7468868564" />
          <DetailsCard title="Employer Name" text="NPF" />
          <DetailsCard title="" text="N75,000" />
          <DetailsCard title="Outstanding Loan Balance" text="N80,000" />
          <DetailsCard
            title="Date of Disbursement"
            text="23-02-2023 .  16:49"
          />
          <DetailsCard title="Date of Collection" text="23-03-2023 .  17:25" />
          <DetailsCard title="Collection Start Date" text="23-04-2023" />
          <DetailsCard title="Total Collection amount" text="N45,000" />
          <DetailsCard title="Number of Repayements" text="2" />
          <DetailsCard title="Mandate Reference" text="NPF-123" />
        </div>
      </div>
    </div>
  );
};

export default MandateHistory;
