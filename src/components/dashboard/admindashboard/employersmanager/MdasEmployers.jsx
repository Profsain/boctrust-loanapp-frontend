import { Table } from "react-bootstrap";
import BocButton from "../../shared/BocButton";
import DashboardHeadline from "../../shared/DashboardHeadline";
import NextPreBtn from "../../shared/NextPreBtn";

const MdasEmployers = () => {
  const styles = {
    container: {
      margin: "0 4rem 0 1rem",
    },
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
    <div style={styles.container}>
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
                <th>Employer ID</th>
                <th>Employer Name</th>
                <th>Mandate Rule</th>
                <th>Onboarding Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>E001</td>
                <td>Nigerian Airforce</td>
                <td>365 Days Eligibility</td>
                <td>04-03-2023</td>
                <td>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    width="80px"
                    margin="0 4px"
                    bgcolor="#5cc51c"
                  >
                    Edit
                  </BocButton>
                </td>
              </tr>

              <tr>
                <td>E002</td>
                <td>Nigeria Fire Service</td>
                <td>180 Days Eligibility</td>
                <td>04-03-2023</td>
                <td>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    width="80px"
                    margin="0 4px"
                    bgcolor="#5cc51c"
                  >
                    Edit
                  </BocButton>
                </td>
              </tr>

              <tr>
                <td>E003</td>
                <td>FAAN</td>
                <td>90 Days Eligibility</td>
                <td>04-03-2023</td>
                <td>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    width="80px"
                    margin="0 4px"
                    bgcolor="#5cc51c"
                  >
                    Edit
                  </BocButton>
                </td>
              </tr>

              <tr>
                <td>E001</td>
                <td>Nigerian Airforce</td>
                <td>365 Days Eligibility (<span style={styles.completed}>Stacked</span>)</td>
                <td>04-03-2023</td>
                <td>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    width="80px"
                    margin="0 4px"
                    bgcolor="#5cc51c"
                  >
                    Edit
                  </BocButton>
                </td>
              </tr>
              <tr>
                <td>E004</td>
                <td>Nigeria Custom</td>
                <td>180 Days Eligibility</td>
                <td>04-03-2023</td>
                <td>
                  <BocButton
                    bradius="12px"
                    fontSize="14px"
                    width="80px"
                    margin="0 4px"
                    bgcolor="#5cc51c"
                  >
                    Edit
                  </BocButton>
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

export default MdasEmployers;
