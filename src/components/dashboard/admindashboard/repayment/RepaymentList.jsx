import Table from "react-bootstrap/Table";
import "../../Dashboard.css";
import DashboardHeadline from "../../shared/DashboardHeadline";
import BocButton from "../../shared/BocButton";
import NextPreBtn from "../../shared/NextPreBtn";

const RepaymentList = () => {
  const styles = {
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
      <DashboardHeadline
        height="52px"
        mspacer="2rem 0 -2.55rem -1rem"
        bgcolor="#145098"
      ></DashboardHeadline>
      <div style={styles.table}>
        <Table borderless hover responsive="sm">
          <thead style={styles.head}>
            <tr>
              <th>Loan ID</th>
              <th>Payment Date</th>
              <th>Principle Amount</th>
              <th>Interest</th>
              <th>Late Penalties</th>
              <th>Total Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1001</td>
              <td>24-03-2023</td>
              <td>N12333.3</td>
              <td>123.0</td>
              <td>105.0</td>
              <td>N12594</td>
              <td>
                <div>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    margin="0 4px"
                    bgcolor="#ecaa00"
                  >
                    Loan Details
                  </BocButton>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    width="90px"
                    margin="0 4px"
                    bgcolor="#7dd50e"
                  >
                    View
                  </BocButton>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    width="80px"
                    margin="0 4px"
                    bgcolor="#f64f4f"
                  >
                    Delete
                  </BocButton>
                </div>
              </td>
            </tr>
            <tr>
              <td>1001</td>
              <td>24-03-2023</td>
              <td>N12333.3</td>
              <td>123.0</td>
              <td>105.0</td>
              <td>N12594</td>
              <td>
                <div>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    margin="0 4px"
                    bgcolor="#ecaa00"
                  >
                    Loan Details
                  </BocButton>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    width="90px"
                    margin="0 4px"
                    bgcolor="#7dd50e"
                  >
                    View
                  </BocButton>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    width="80px"
                    margin="0 4px"
                    bgcolor="#f64f4f"
                  >
                    Delete
                  </BocButton>
                </div>
              </td>
            </tr>
            <tr>
              <td>1001</td>
              <td>24-03-2023</td>
              <td>N12333.3</td>
              <td>123.0</td>
              <td>105.0</td>
              <td>N12594</td>
              <td>
                <div>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    margin="0 4px"
                    bgcolor="#ecaa00"
                  >
                    Loan Details
                  </BocButton>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    width="90px"
                    margin="0 4px"
                    bgcolor="#7dd50e"
                  >
                    View
                  </BocButton>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    width="80px"
                    margin="0 4px"
                    bgcolor="#f64f4f"
                  >
                    Delete
                  </BocButton>
                </div>
              </td>
            </tr>
            <tr>
              <td>1001</td>
              <td>24-03-2023</td>
              <td>N12333.3</td>
              <td>123.0</td>
              <td>105.0</td>
              <td>N12594</td>
              <td>
                <div>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    margin="0 4px"
                    bgcolor="#ecaa00"
                  >
                    Loan Details
                  </BocButton>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    width="90px"
                    margin="0 4px"
                    bgcolor="#7dd50e"
                  >
                    View
                  </BocButton>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    width="80px"
                    margin="0 4px"
                    bgcolor="#f64f4f"
                  >
                    Delete
                  </BocButton>
                </div>
              </td>
            </tr>
            <tr>
              <td>1001</td>
              <td>24-03-2023</td>
              <td>N12333.3</td>
              <td>123.0</td>
              <td>105.0</td>
              <td>N12594</td>
              <td>
                <div>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    margin="0 4px"
                    bgcolor="#ecaa00"
                  >
                    Loan Details
                  </BocButton>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    width="90px"
                    margin="0 4px"
                    bgcolor="#7dd50e"
                  >
                    View
                  </BocButton>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    width="80px"
                    margin="0 4px"
                    bgcolor="#f64f4f"
                  >
                    Delete
                  </BocButton>
                </div>
              </td>
            </tr>
            <tr>
              <td>1001</td>
              <td>24-03-2023</td>
              <td>N12333.3</td>
              <td>123.0</td>
              <td>105.0</td>
              <td>N12594</td>
              <td>
                <div>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    margin="0 4px"
                    bgcolor="#ecaa00"
                  >
                    Loan Details
                  </BocButton>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    width="90px"
                    margin="0 4px"
                    bgcolor="#7dd50e"
                  >
                    View
                  </BocButton>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    width="80px"
                    margin="0 4px"
                    bgcolor="#f64f4f"
                  >
                    Delete
                  </BocButton>
                </div>
              </td>
            </tr>
            <tr>
              <td>1001</td>
              <td>24-03-2023</td>
              <td>N12333.3</td>
              <td>123.0</td>
              <td>105.0</td>
              <td>N12594</td>
              <td>
                <div>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    margin="0 4px"
                    bgcolor="#ecaa00"
                  >
                    Loan Details
                  </BocButton>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    width="90px"
                    margin="0 4px"
                    bgcolor="#7dd50e"
                  >
                    View
                  </BocButton>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    width="80px"
                    margin="0 4px"
                    bgcolor="#f64f4f"
                  >
                    Delete
                  </BocButton>
                </div>
              </td>
            </tr>
            <tr>
              <td>1001</td>
              <td>18-03-2023</td>
              <td>N52333.3</td>
              <td>23.0</td>
              <td>105.0</td>
              <td>N52594</td>
              <td>
                <div>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    margin="0 4px"
                    bgcolor="#ecaa00"
                  >
                    Loan Details
                  </BocButton>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    width="90px"
                    margin="0 4px"
                    bgcolor="#7dd50e"
                  >
                    View
                  </BocButton>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    width="80px"
                    margin="0 4px"
                    bgcolor="#f64f4f"
                  >
                    Delete
                  </BocButton>
                </div>
              </td>
            </tr>
            
          </tbody>
        </Table>
      </div>
      <NextPreBtn />
    </div>
  );
};

export default RepaymentList;
