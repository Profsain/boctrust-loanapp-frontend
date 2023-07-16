import Headline from "../../../shared/Headline";
import { Table } from "react-bootstrap";
import BocButton from "../../shared/BocButton";
import DashboardHeadline from "../../shared/DashboardHeadline";
import NextPreBtn from "../../shared/NextPreBtn";

const StopCollections = () => {
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
    padding: {
      color: "#ecaa00",
    },
  };
  return (
    <div>
      <div>
        <Headline text="View by:" />
        <div style={styles.btnBox}>
          <BocButton margin="0 18px" bgcolor="#ecaa00" bradius="25px">
            Collections Today
          </BocButton>
          <BocButton margin="0 18px" bgcolor="#ecaa00" bradius="25px">
            Date Range
          </BocButton>
          <BocButton margin="0 18px" bgcolor="#ecaa00" bradius="25px">
            Specific User
          </BocButton>
        </div>
      </div>

      {/* table section */}
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
                <th>Customer ID</th>
                <th>Loan Product</th>
                <th>Amount</th>
                <th>Mandate Reference</th>
                <th>Authorized Code</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>C001</td>
                <td>Car Loan</td>
                <td>N700,000</td>
                <td> 20009304590</td>
                <td style={styles.padding}>au943422er</td>
                <td>
                  <div>
                    <BocButton
                      bradius="12px"
                      fontSize="14px"
                      width="80px"
                      margin="0 4px"
                      bgcolor="#f64f4f"
                    >
                      Stop
                    </BocButton>
                  </div>
                </td>
              </tr>
              <tr>
                <td>C004</td>
                <td>SME Loan</td>
                <td>N1,000,000</td>
                <td> 20009304512</td>
                <td style={styles.padding}>au943444cr</td>
                <td>
                  <div>
                    <BocButton
                      bradius="12px"
                      fontSize="14px"
                      width="80px"
                      margin="0 4px"
                      bgcolor="#5cc51c"
                    >
                      Restart
                    </BocButton>
                  </div>
                </td>
              </tr>
              <tr>
                <td>C002</td>
                <td>Car Loan</td>
                <td>N900,000</td>
                <td> 20009304511</td>
                <td style={styles.padding}>au233429er</td>
                <td>
                  <div>
                    <BocButton
                      bradius="12px"
                      fontSize="14px"
                      width="80px"
                      margin="0 4px"
                      bgcolor="#f64f4f"
                    >
                      Stop
                    </BocButton>
                  </div>
                </td>
              </tr>
              <tr>
                <td>C003</td>
                <td>Travel Loan</td>
                <td>N70,000</td>
                <td> 3309304534</td>
                <td style={styles.padding}>ft943422rr</td>
                <td>
                  <div>
                    <BocButton
                      bradius="12px"
                      fontSize="14px"
                      width="80px"
                      margin="0 4px"
                      bgcolor="#5cc51c"
                    >
                      Restart
                    </BocButton>
                  </div>
                </td>
              </tr>
              <tr>
                <td>C005</td>
                <td>Salary Advance</td>
                <td>N200,000</td>
                <td> 20009307230</td>
                <td style={styles.padding}>au943477er</td>
                <td>
                  <div>
                    <BocButton
                      bradius="12px"
                      fontSize="14px"
                      width="80px"
                      margin="0 4px"
                      bgcolor="#f64f4f"
                    >
                      Stop
                    </BocButton>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <NextPreBtn />
      </div>
    </div>
  );
};

export default StopCollections;
