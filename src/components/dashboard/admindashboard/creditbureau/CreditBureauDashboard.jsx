import CreditCheckForm from "./CreditCheckForm";
import Headline from "../../../shared/Headline";
import { Table } from "react-bootstrap";
import BocButton from "../../shared/BocButton";
import DashboardHeadline from "../../shared/DashboardHeadline";
import NextPreBtn from "../../shared/NextPreBtn";
import "../customers/Customer.css";
import "../remita/Remita.css";

const CreditBureauDashboard = () => {
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
     pending: {
       color: "#ecaa00",
     },
   };
  return (
    <div>
      <div>
        <Headline text="View by:" />
        <div style={styles.btnBox} className="VBox">
          <BocButton margin="8px 18px" bgcolor="#ecaa00" bradius="25px">
            Applicantion Today
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
          height="52px"
          mspacer="2rem 0 -2.55rem -1rem"
          bgcolor="#145098"
        ></DashboardHeadline>
        <div style={styles.table}>
          <Table borderless hover responsive="sm">
            <thead style={styles.head}>
              <tr>
                <th>Customer ID</th>
                <th>Name</th>
                <th>Employer Name</th>
                <th>Loan Requested</th>
                <th>Review Application</th>
                <th>Credit Check</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>C001</td>
                <td>Cynthia Kola</td>
                <td>NPF</td>
                <td>N50,000</td>
                <td>Full Details</td>
                <td>
                  <div>
                    <BocButton
                      bradius="12px"
                      fontSize="14px"
                      width="80px"
                      margin="0 4px"
                      bgcolor="#f64f4f"
                    >
                      Start
                    </BocButton>
                  </div>
                </td>
              </tr>
              <tr>
                <td>C007</td>
                <td>Ebuka Akim </td>
                <td>NCS</td>
                <td>N500,000</td>
                <td>Full Details</td>
                <td>
                  <div>
                    <BocButton
                      bradius="12px"
                      fontSize="14px"
                      width="80px"
                      margin="0 4px"
                      bgcolor="#f64f4f"
                    >
                      Start
                    </BocButton>
                  </div>
                </td>
              </tr>
              <tr>
                <td>C003</td>
                <td>Mariam Bola</td>
                <td>NPF</td>
                <td>N35,000</td>
                <td>Full Details</td>
                <td>
                  <div>
                    <BocButton
                      bradius="12px"
                      fontSize="14px"
                      width="80px"
                      margin="0 4px"
                      bgcolor="#f64f4f"
                    >
                      Start
                    </BocButton>
                  </div>
                </td>
              </tr>
             
            </tbody>
          </Table>
        </div>
        <NextPreBtn />
      </div>

      {/* credit check form  */}
      <CreditCheckForm />
    </div>
  );
};

export default CreditBureauDashboard;
