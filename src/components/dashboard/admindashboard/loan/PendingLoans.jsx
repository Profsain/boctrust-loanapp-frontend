import { Table } from "react-bootstrap";
import BocButton from "../../shared/BocButton";
import DashboardHeadline from "../../shared/DashboardHeadline";
import "../customers/Customer.css";
import NextPreBtn from "../../shared/NextPreBtn";

const PaddingLoans = () => {
  const styles = {
    table: {
      //   margin: "0 2rem 0 3rem",
      fontSize: "12px",
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
    <div className="MainBox">
      <div className="AddBtn">
        <BocButton bgcolor="#ecaa00" bradius="22px">
          <span>+</span> Add New
        </BocButton>
      </div>

      {/* top search bar */}
      <div className="Search">
        <DashboardHeadline padding="0" height="70px" bgcolor="#d9d9d9">
          <div className="SearchBar">
            <div className="FormGroup">
              <label htmlFor="show">Show</label>
              <input name="showCount" type="number" step={10} min={10} />
            </div>
            <div className="FormGroup SBox">
              <input name="search" placeholder="Search" />
              <img src="images/search.png" alt="search-icon" />
            </div>
          </div>
        </DashboardHeadline>
      </div>
      <div>
        {/* Loans list  */}
        <div className="ListSec">
          <DashboardHeadline
            height="52px"
            mspacer="2rem 0 -2.25rem -1rem"
            bgcolor="#145098"
          ></DashboardHeadline>
          <div style={styles.table}>
            <Table borderless hover responsive="sm">
              <thead style={styles.head}>
                <tr>
                  <th>Loan ID</th>
                  <th>Loan Product</th>
                  <th>Borrower</th>
                  <th>A/C Number</th>
                  <th>Release Date</th>
                  <th>Applied Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>004</td>
                  <td>Travel Loan</td>
                  <td>Folashade Ojo</td>
                  <td>7462329467</td>
                  <td>25-03-2023</td>
                  <td>N60,200</td>
                  <td style={styles.padding}>With Operation</td>
                  <td>
                    <div>
                      <BocButton
                        bradius="12px"
                        fontSize="12px"
                        width="80px"
                        margin="4px"
                        bgcolor="#ecaa00"
                      >
                        Details
                      </BocButton>
                      <BocButton
                        bradius="12px"
                        fontSize="12px"
                        width="80px"
                        margin="4px"
                        bgcolor="#7dd50e"
                      >
                        Approve
                      </BocButton>
                      <BocButton
                        bradius="12px"
                        fontSize="12px"
                        width="80px"
                        margin="4px"
                        bgcolor="#f64f4f"
                      >
                        Reject
                      </BocButton>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>005</td>
                  <td>Salary Advance</td>
                  <td>Saheed Musa</td>
                  <td>7462329444</td>
                  <td>25-06-2023</td>
                  <td>N150,000</td>
                  <td style={styles.padding}>With COO</td>
                  <td>
                    <div>
                      <BocButton
                        bradius="12px"
                        fontSize="12px"
                        width="80px"
                        margin="4px"
                        bgcolor="#ecaa00"
                      >
                        Details
                      </BocButton>
                      <BocButton
                        bradius="12px"
                        fontSize="12px"
                        width="80px"
                        margin="4px"
                        bgcolor="#7dd50e"
                      >
                        Approve
                      </BocButton>
                      <BocButton
                        bradius="12px"
                        fontSize="12px"
                        width="80px"
                        margin="4px"
                        bgcolor="#f64f4f"
                      >
                        Reject
                      </BocButton>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>006</td>
                  <td>Personal Loan</td>
                  <td>Chika Igwe</td>
                  <td>7462329444</td>
                  <td>25-07-2023</td>
                  <td>N105,200</td>
                  <td style={styles.padding}>With Credit</td>
                  <td>
                    <div>
                      <BocButton
                        bradius="12px"
                        fontSize="12px"
                        width="80px"
                        margin="4px"
                        bgcolor="#ecaa00"
                      >
                        Details
                      </BocButton>
                      <BocButton
                        bradius="12px"
                        fontSize="12px"
                        width="80px"
                        margin="4px"
                        bgcolor="#7dd50e"
                      >
                        Approve
                      </BocButton>
                      <BocButton
                        bradius="12px"
                        fontSize="12px"
                        width="80px"
                        margin="4px"
                        bgcolor="#f64f4f"
                      >
                        Reject
                      </BocButton>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>002</td>
                  <td>SME&apos;s Loan</td>
                  <td>Shola John</td>
                  <td>7462329447</td>
                  <td>25-07-2023</td>
                  <td>N2,000,000</td>
                  <td style={styles.padding}>With Operation</td>
                  <td>
                    <div>
                      <BocButton
                        bradius="12px"
                        fontSize="12px"
                        width="80px"
                        margin="4px"
                        bgcolor="#ecaa00"
                      >
                        Details
                      </BocButton>
                      <BocButton
                        bradius="12px"
                        fontSize="12px"
                        width="80px"
                        margin="4px"
                        bgcolor="#7dd50e"
                      >
                        Approve
                      </BocButton>
                      <BocButton
                        bradius="12px"
                        fontSize="12px"
                        width="80px"
                        margin="4px"
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
          <NextPreBtn />
        </div>
      </div>
    </div>
  );
};

export default PaddingLoans;
