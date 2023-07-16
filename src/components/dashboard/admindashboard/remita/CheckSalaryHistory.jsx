import Headline from "../../../shared/Headline";
import { Table } from "react-bootstrap";
import BocButton from "../../shared/BocButton";
import DashboardHeadline from "../../shared/DashboardHeadline";
import NextPreBtn from "../../shared/NextPreBtn";
import "../customers/Customer.css";
import "./Remita.css";
import RowCard from "./RowCard";

const CheckSalaryHistory = () => {
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
        <div style={styles.btnBox}>
          <BocButton margin="0 18px" bgcolor="#ecaa00" bradius="25px">
            Applicant Today
          </BocButton>
          <BocButton margin="0 18px" bgcolor="#ecaa00" bradius="25px">
            Date Range
          </BocButton>
          <BocButton margin="0 18px" bgcolor="#ecaa00" bradius="25px">
            Specific User
          </BocButton>
        </div>
      </div>

      {/* table section */}
      <div>
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
                <th>Action</th>
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
                      Drop
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
                      Process
                    </BocButton>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <NextPreBtn />
      </div>

      {/* details section */}
      <div className="DetailsCon">
        <div className="RowSection">
          <RowCard title="Customer ID" text="10098" />
          <RowCard title="Account Number" text="1023456412" />
        </div>
        <div className="RowSection">
          <RowCard title="Bank Code" text="10293" />
          <RowCard title="BVN" text="4343254676" />
          <RowCard title="First Payment Date" text="29-07-2023" />
        </div>
        <DashboardHeadline></DashboardHeadline>
        <div className="RowSection">
          <div id="PastSalary">
            <Headline
              align="left"
              fontSize="18px"
              text="Past Salary Payment Details"
            />
            <div>
              <select>
                <option value="">Select Number of Months</option>
                <option value="">6 months</option>
                <option value="">12 months</option>
              </select>
            </div>
            <RowCard title="Salary Payment Date" text="30-06-2923" />
            <RowCard title="Salary Amount" text="150,000" />
            <RowCard title="Account Number" text="1023452112" />
            <RowCard title="Bank Code" text="10234" />
          </div>
          <div id="LoanDetails">
            <Headline
              align="left"
              fontSize="18px"
              text="Loan History Details"
            />
            <RowCard title="Loan Provider" text="GTB" />
            <RowCard title="Loan Amount" text="100,000" />
            <RowCard title="Loan Disbursement Date" text="02-04-2023" />
            <RowCard title="Outstanding Amount" text="50,000" />
            <RowCard title="Repayment Amount" text="20,000" />
            <RowCard title="Repayment Frequency" text="Monthly" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckSalaryHistory;
