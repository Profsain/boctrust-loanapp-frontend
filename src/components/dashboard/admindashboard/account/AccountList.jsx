import Table from "react-bootstrap/Table";
import "../../Dashboard.css";
import DashboardHeadline from "../../shared/DashboardHeadline";

const AccountList = () => {
  const styles = {
    table: {
      // margin: "0 2rem 0 3rem",
    },
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
              <th>Account Number</th>
              <th>Customer</th>
              <th>Account Type</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>7460615677</td>
              <td>Kola Abiola</td>
              <td>Current</td>
              <td style={styles.completed}>Active</td>
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
              <td>7460615649</td>
              <td>Musa Sule</td>
              <td>Current</td>
              <td style={styles.completed}>Active</td>
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
              <td>7460615665</td>
              <td>Joy Johnson</td>
              <td>Saving</td>
              <td style={styles.completed}>Active</td>
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
              <td>7460615690</td>
              <td>Uche Ogbona</td>
              <td>Saving</td>
              <td style={styles.completed}>Active</td>
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
              <td>7460615128</td>
              <td>Abu Magana</td>
              <td>Current</td>
              <td style={styles.completed}>Active</td>
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
              <td>7460615645</td>
              <td>Glory Ojo</td>
              <td>Saving</td>
              <td style={styles.completed}>Active</td>
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

export default AccountList;
