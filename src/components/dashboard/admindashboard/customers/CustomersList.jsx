import Table from "react-bootstrap/Table";
import "../../Dashboard.css";
import DashboardHeadline from "../../shared/DashboardHeadline";

const CustomersList = () => {
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
              <th>Photo</th>
              <th>A/C Number</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Branch</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img className="CustomerImg" src="images/c1.png" alt="" />
              </td>
              <td>7460615677</td>
              <td>Kola</td>
              <td>Abiola</td>
              <td>Kolaabiola@gmail.com</td>
              <td>Main Branch</td>
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
              <td>
                <img className="CustomerImg" src="images/c2.png" alt="" />
              </td>
              <td>7460615644</td>
              <td>Uche</td>
              <td>Abuka</td>
              <td>ucheabu@gmail.com</td>
              <td>Main Branch</td>
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
              <td>
                <img className="CustomerImg" src="images/c3.png" alt="" />
              </td>
              <td>7460615677</td>
              <td>Folashade</td>
              <td>Ojo</td>
              <td>folashadeoj@yahoo.com</td>
              <td>Main Branch</td>
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
              <td>
                <img className="CustomerImg" src="images/c4.png" alt="" />
              </td>
              <td>7460615677</td>
              <td>Monday</td>
              <td>Ife</td>
              <td>mondayife@gmail.com</td>
              <td>Main Branch</td>
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
              <td>
                <img className="CustomerImg" src="images/c5.png" alt="" />
              </td>
              <td>7460615677</td>
              <td>Saheed</td>
              <td>Olakolo</td>
              <td>saheedola@gmail.com</td>
              <td>Main Branch</td>
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
              <td>
                <img className="CustomerImg" src="images/c6.png" alt="" />
              </td>
              <td>7460615677</td>
              <td>Zainab</td>
              <td>Ebube</td>
              <td>saheedola@gmail.com</td>
              <td>Main Branch</td>
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

export default CustomersList;
