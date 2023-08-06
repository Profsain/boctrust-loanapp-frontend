import Table from "react-bootstrap/Table";
import "../../Dashboard.css";
import DashboardHeadline from "../../shared/DashboardHeadline";

const LoanProductsList = () => {
  const styles = {
    head: {
      color: "#fff",
      fontSize: "1.2rem",
    },
    booked: {
      color: "#145098",
    },
    completed: {
      color: "#5cc51c",
    },
    withcredit: {
      color: "#f64f4f",
    },
    withdisbursement: {
      color: "#ecaa00",
    },
  };
  return (
    <div>
      <DashboardHeadline
        height="52px"
        mspacer="2rem 0 -2.95rem -1rem"
        bgcolor="#145098"
      ></DashboardHeadline>
      <div style={styles.table}>
        <Table borderless hover responsive="sm">
          <thead style={styles.head}>
            <tr>
              <th>Name</th>
              <th>Interest Rate</th>
              <th>Interest Type</th>
              <th>Max Term</th>
              <th>Term Period</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Personal Loan</td>
              <td>12.00%</td>
              <td>Simple</td>
              <td>24</td>
              <td>Month</td>
              <td>
                <select name="action" id="action">
                  <option value="">Action</option>
                  <option value="">Action 1</option>
                  <option value="">Action 2</option>
                  <option value="">Action 3</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>SME Loan</td>
              <td>8.00%</td>
              <td>Compound</td>
              <td>18</td>
              <td>Month</td>
              <td>
                <select name="action" id="action">
                  <option value="">Action</option>
                  <option value="">Action 1</option>
                  <option value="">Action 2</option>
                  <option value="">Action 3</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Salary Advance</td>
              <td>6.00%</td>
              <td>Simple</td>
              <td>12</td>
              <td>Month</td>
              <td>
                <select name="action" id="action">
                  <option value="">Action</option>
                  <option value="">Action 1</option>
                  <option value="">Action 2</option>
                  <option value="">Action 3</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Travel Loan</td>
              <td>10.00%</td>
              <td>Accrued</td>
              <td>18</td>
              <td>Month</td>
              <td>
                <select name="action" id="action">
                  <option value="">Action</option>
                  <option value="">Action 1</option>
                  <option value="">Action 2</option>
                  <option value="">Action 3</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Car Loan</td>
              <td>6.00%</td>
              <td>Simple</td>
              <td>24</td>
              <td>Month</td>
              <td>
                <select name="action" id="action">
                  <option value="">Action</option>
                  <option value="">Action 1</option>
                  <option value="">Action 2</option>
                  <option value="">Action 3</option>
                </select>
              </td>
            </tr>
            
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default LoanProductsList;
