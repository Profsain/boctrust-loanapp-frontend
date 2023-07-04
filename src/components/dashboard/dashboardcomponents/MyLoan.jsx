import Table from "react-bootstrap/Table";
import BocButton from "../shared/BocButton";
import "../Dashboard.css"
import DashboardHeadline from "../shared/DashboardHeadline";

const MyLoan = () => {
  const styles = {
    head: {
      color: "#fff",
      fontSize: "1rem",
    },
    body: {
      marginRight: "3rem",
    },
  };

  return (
    <div>
      {/* <DashboardHeadline mspacer="2rem 5rem 1rem -2rem" bgcolor="#145098">
        <div className="CustomTableHead">
          <h6>Loan ID</h6>
          <h6>Loan Product</h6>
          <h6>Applied Amount</h6>
          <h6>Total Payable</h6>
          <h6>Amount Paid</h6>
          <h6>Due Amount</h6>
          <h6>Release Date</h6>
          <h6>Status</h6>
        </div>
      </DashboardHeadline> */}
      <DashboardHeadline
        height="46px"
        mspacer="2rem 2rem -2.55rem -2rem"
        bgcolor="#145098"
      ></DashboardHeadline>
      <Table borderless hover responsive="sm" sty>
        <thead style={styles.head}>
          <tr>
            <th>Loan ID</th>
            <th>Loan Product</th>
            <th>Applied Amount</th>
            <th>Total Payable</th>
            <th>Amount Paid</th>
            <th>Due Amount</th>
            <th>Release Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody style={styles.body}>
          <tr>
            <td>1010</td>
            <td>Personal Loan</td>
            <td>N220000</td>
            <td>N280000</td>
            <td>N0.00</td>
            <td>N22300</td>
            <td>22-04-2023</td>
            <td>
              <BocButton width="100px" cursor="pointer" bgcolor="#ecaa00">
                Padding
              </BocButton>
            </td>
          </tr>
          <tr>
            <td>1010</td>
            <td>Personal Loan</td>
            <td>N220000</td>
            <td>N280000</td>
            <td>N0.00</td>
            <td>N22300</td>
            <td>22-04-2023</td>
            <td>
              <BocButton width="100px" cursor="pointer" bgcolor="#ecaa00">
                Padding
              </BocButton>
            </td>
          </tr>
          <tr>
            <td>1010</td>
            <td>Personal Loan</td>
            <td>N220000</td>
            <td>N280000</td>
            <td>N0.00</td>
            <td>N22300</td>
            <td>22-04-2023</td>
            <td>
              <BocButton width="100px" cursor="pointer" bgcolor="#7dd50e">
                Paid
              </BocButton>
            </td>
          </tr>
          <tr>
            <td>1010</td>
            <td>Personal Loan</td>
            <td>N220000</td>
            <td>N280000</td>
            <td>N0.00</td>
            <td>N22300</td>
            <td>22-04-2023</td>
            <td>
              <BocButton width="100px" cursor="pointer" bgcolor="#7dd50e">
                Paid
              </BocButton>
            </td>
          </tr>
          <tr>
            <td>1010</td>
            <td>Personal Loan</td>
            <td>N220000</td>
            <td>N280000</td>
            <td>N0.00</td>
            <td>N22300</td>
            <td>22-04-2023</td>
            <td>
              <BocButton width="100px" cursor="pointer" bgcolor="#7dd50e">
                Paid
              </BocButton>
            </td>
          </tr>
          <tr>
            <td>1010</td>
            <td>Personal Loan</td>
            <td>N220000</td>
            <td>N280000</td>
            <td>N0.00</td>
            <td>N22300</td>
            <td>22-04-2023</td>
            <td>
              <BocButton width="100px" cursor="pointer" bgcolor="#f64f4f">
                Canceled
              </BocButton>
            </td>
          </tr>
          <tr>
            <td>1010</td>
            <td>Personal Loan</td>
            <td>N220000</td>
            <td>N280000</td>
            <td>N0.00</td>
            <td>N22300</td>
            <td>22-04-2023</td>
            <td>
              <BocButton width="100px" cursor="pointer" bgcolor="#ecaa00">
                Padding
              </BocButton>
            </td>
          </tr>
          <tr>
            <td>1010</td>
            <td>Personal Loan</td>
            <td>N220000</td>
            <td>N280000</td>
            <td>N0.00</td>
            <td>N22300</td>
            <td>22-04-2023</td>
            <td>
              <BocButton width="100px" cursor="pointer" bgcolor="#7dd50e">
                Paid
              </BocButton>
            </td>
          </tr>
          <tr>
            <td>1010</td>
            <td>Personal Loan</td>
            <td>N220000</td>
            <td>N280000</td>
            <td>N0.00</td>
            <td>N22300</td>
            <td>22-04-2023</td>
            <td>
              <BocButton width="100px" cursor="pointer" bgcolor="#ecaa00">
                Padding
              </BocButton>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default MyLoan;
