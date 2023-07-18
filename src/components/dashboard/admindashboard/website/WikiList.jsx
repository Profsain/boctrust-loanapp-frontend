import Table from "react-bootstrap/Table";
import "../../Dashboard.css";
import DashboardHeadline from "../../shared/DashboardHeadline";

const WikiList = () => {
  const styles = {
    table: {
      // margin: "0 2rem 0 3rem",
    },
    head: {
      color: "#fff",
      fontSize: "1.2rem",
    },
    };
    
  return (
    <div>
      <DashboardHeadline
        height="62px"
        mspacer="2rem 0 -2.8rem -1rem"
        bgcolor="#145098"
      ></DashboardHeadline>
      <div style={styles.table}>
        <Table hover responsive="sm">
          <thead style={styles.head}>
            <tr>
              <th>Question</th>
              <th>Answer</th>
              <th>Category</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Do you have other branch</td>
              <td>
                We currently have main branch in Lagos
              </td>
              <td>General</td>
              <td>20-03-2023</td>
              <td>
                <select name="action" id="action">
                  <option value="">Action</option>
                  <option value="">Edit</option>
                  <option value="">Delete</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Do you accept online payment</td>
              <td>
                We accept all forms of online payment
              </td>
              <td>Loan</td>
              <td>20-03-2023</td>
              <td>
                <select name="action" id="action">
                  <option value="">Action</option>
                  <option value="">Edit</option>
                  <option value="">Delete</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>What do you accept as loan collateral</td>
              <td>
                We accept all valid asset that worth your loan value
              </td>
              <td>Loan</td>
              <td>20-03-2023</td>
              <td>
                <select name="action" id="action">
                  <option value="">Action</option>
                  <option value="">Edit</option>
                  <option value="">Delete</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Do I need to reside in Lagos to get loan</td>
              <td>
                Boctrust loan is available to all Nigerian, living anywhere withing the country.
              </td>
              <td>General</td>
              <td>20-03-2023</td>
              <td>
                <select name="action" id="action">
                  <option value="">Action</option>
                  <option value="">Edit</option>
                  <option value="">Delete</option>
                </select>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default WikiList;
