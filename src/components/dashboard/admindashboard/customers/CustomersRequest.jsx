import Table from "react-bootstrap/Table";
import "../../Dashboard.css";
import DashboardHeadline from "../../shared/DashboardHeadline";
import BocButton from "../../shared/BocButton"
const CustomersRequest = () => {
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
              <th>Account Officer</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  className="CustomerImg"
                  src="src/assets/images/c1.png"
                  alt=""
                />
              </td>
              <td>7460615677</td>
              <td>Kola</td>
              <td>Abiola</td>
              <td>Kolaabiola@gmail.com</td>
              <td>Faith Moses</td>
              <td>
                <div>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    margin="0 6px"
                    bgcolor="#ecaa00"
                  >
                    Details
                  </BocButton>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    margin="0 6px"
                    bgcolor="#7dd50e"
                  >
                    Approve
                  </BocButton>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    margin="0 6px"
                    bgcolor="#f64f4f"
                  >
                    Reject
                  </BocButton>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className="CustomerImg"
                  src="src/assets/images/c2.png"
                  alt=""
                />
              </td>
              <td>7460615644</td>
              <td>Uche</td>
              <td>Abuka</td>
              <td>ucheabu@gmail.com</td>
              <td>Ola Tobison</td>
              <td>
                <div>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    margin="0 6px"
                    bgcolor="#ecaa00"
                  >
                    Details
                  </BocButton>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    margin="0 6px"
                    bgcolor="#7dd50e"
                  >
                    Approve
                  </BocButton>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    margin="0 6px"
                    bgcolor="#f64f4f"
                  >
                    Reject
                  </BocButton>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className="CustomerImg"
                  src="src/assets/images/c3.png"
                  alt=""
                />
              </td>
              <td>7460615677</td>
              <td>Folashade</td>
              <td>Ojo</td>
              <td>folashadeoj@yahoo.com</td>
              <td>Uche Gabriel</td>
              <td>
                <div>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    margin="0 6px"
                    bgcolor="#ecaa00"
                  >
                    Details
                  </BocButton>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    margin="0 6px"
                    bgcolor="#7dd50e"
                  >
                    Approve
                  </BocButton>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    margin="0 6px"
                    bgcolor="#f64f4f"
                  >
                    Reject
                  </BocButton>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className="CustomerImg"
                  src="src/assets/images/c4.png"
                  alt=""
                />
              </td>
              <td>7460615677</td>
              <td>Monday</td>
              <td>Ife</td>
              <td>mondayife@gmail.com</td>
              <td>Mariam Abu</td>
              <td>
                <div>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    margin="0 6px"
                    bgcolor="#ecaa00"
                  >
                    Details
                  </BocButton>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    margin="0 6px"
                    bgcolor="#7dd50e"
                  >
                    Approve
                  </BocButton>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    margin="0 6px"
                    bgcolor="#f64f4f"
                  >
                    Reject
                  </BocButton>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className="CustomerImg"
                  src="src/assets/images/c5.png"
                  alt=""
                />
              </td>
              <td>7460615677</td>
              <td>Saheed</td>
              <td>Olakolo</td>
              <td>saheedola@gmail.com</td>
              <td>Peter Alao</td>
              <td>
                <div>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    margin="0 6px"
                    bgcolor="#ecaa00"
                  >
                    Details
                  </BocButton>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    margin="0 6px"
                    bgcolor="#7dd50e"
                  >
                    Approve
                  </BocButton>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    margin="0 6px"
                    bgcolor="#f64f4f"
                  >
                    Reject
                  </BocButton>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className="CustomerImg"
                  src="src/assets/images/c6.png"
                  alt=""
                />
              </td>
              <td>7460615677</td>
              <td>Zainab</td>
              <td>Ebube</td>
              <td>saheedola@gmail.com</td>
              <td>Joe Musa</td>
              <td>
                <div>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    margin="0 6px"
                    bgcolor="#ecaa00"
                  >
                    Details
                  </BocButton>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    margin="0 6px"
                    bgcolor="#7dd50e"
                  >
                    Approve
                  </BocButton>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    margin="0 6px"
                    bgcolor="#f64f4f"
                  >
                    Reject
                  </BocButton>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default CustomersRequest;
