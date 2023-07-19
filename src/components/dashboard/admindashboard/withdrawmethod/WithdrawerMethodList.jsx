import Table from "react-bootstrap/Table";
import "../../Dashboard.css";
import DashboardHeadline from "../../shared/DashboardHeadline";

const WithdrawerMethodList = () => {
    const styles = {
        table: {
            margin: "0 2rem 0 8rem",
        },
    head: {
      color: "#fff",
      fontSize: "1.2rem",
    },
      img: {
          width: "50px",
            height: "30px",
      },
    completed: {
      color: "#5cc51c",
    },

    };
    
  return (
    <div>
      <DashboardHeadline
        height="52px"
        mspacer="2rem 0 -2.7rem 0.2rem"
        bgcolor="#145098"
      ></DashboardHeadline>
      <div style={styles.table}>
        <Table hover responsive="sm">
          <thead style={styles.head}>
            <tr>
              <th>Logo</th>
              <th>Name</th>
              <th>Date Created</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src="images/banktransfer.png" alt="method-logo" style={styles.img}/></td>
              <td>
                Bank Transfer
              </td>
              <td>29-03-2023</td>
              <td style={styles.completed}>Active</td>
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

export default WithdrawerMethodList;
