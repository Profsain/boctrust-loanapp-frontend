import Table from "react-bootstrap/Table";
import "../../Dashboard.css";
import DashboardHeadline from "../../shared/DashboardHeadline";

const UsersList = () => {
  const styles = {
    table: {
      margin: "0 0 0 1.8rem",
    },
    head: {
      color: "#fff",
      fontSize: "1.2rem",
    },
    img: {
      width: "50px",
      height: "40px",
    },
    completed: {
      color: "#5cc51c",
    },
  };

  return (
    <div className="ListSec">
      <DashboardHeadline
        height="52px"
        mspacer="2rem 0 -2.7rem 0.2rem"
        bgcolor="#145098"
      ></DashboardHeadline>
      <div style={styles.table}>
        <Table hover responsive="sm">
          <thead style={styles.head}>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Username</th>
              <th>User Type</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="images/staffphoto.png"
                  alt="method-logo"
                  style={styles.img}
                />
              </td>
              <td>John Doe</td>
              <td>johndoe@gmail.com</td>
              <td>0908887674</td>
              <td>johnd1</td>
              <td>ADMIN</td>
              <td>MD</td>
              <td style={styles.completed}>Active</td>
              <td>
                <select name="action" id="action">
                  <option value="">Action</option>
                  <option value="">Edit</option>
                  <option value="">Delete</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="images/staffphoto.png"
                  alt="method-logo"
                  style={styles.img}
                />
              </td>
              <td>Peter Ikoko</td>
              <td>peter@gmail.com</td>
              <td>0818887908</td>
              <td>peteriko23</td>
              <td>USER</td>
              <td>Branch Manager</td>
              <td style={styles.completed}>Active</td>
              <td>
                <select name="action" id="action">
                  <option value="">Action</option>
                  <option value="">Edit</option>
                  <option value="">Delete</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="images/staffphoto.png"
                  alt="method-logo"
                  style={styles.img}
                />
              </td>
              <td>Glory Adigun</td>
              <td>gloryadigun@yahoo.com</td>
              <td>0708887687</td>
              <td>glory78</td>
              <td>USER</td>
              <td>Loan Officer</td>
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

export default UsersList;
