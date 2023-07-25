import { useState } from "react";
import BocButton from "../../shared/BocButton";
import DashboardHeadline from "../../shared/DashboardHeadline";
import "../customers/Customer.css";
import NextPreBtn from "../../shared/NextPreBtn";
import AddNewAccountType from "./AddNewAccountType";
import Table from "react-bootstrap/Table";

const AccountTypes = () => {
  const [openAddAccountType, setOpenAddAccountType] = useState(false);
  const handleAddAccountType = () => {
    setOpenAddAccountType(true);
  };
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
    <>
      {!openAddAccountType ? (
        <div className="MainBox">
          <div className="AddBtn">
            <BocButton bgcolor="#ecaa00" bradius="22px" func={handleAddAccountType}>
              <span>+</span> Add New Account
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
            {/* accounts list  */}
            <div className="ListSec">
              <DashboardHeadline
                height="52px"
                mspacer="2rem 0 -2.95rem -1rem"
                bgcolor="#145098"
              ></DashboardHeadline>
              <div style={styles.table}>
                <Table borderless hover responsive="sm">
                  <thead style={styles.head}>
                    <tr>
                      <th>Name</th>
                      <th>Interest Rate</th>
                      <th>Interest Method</th>
                      <th>Interest Period</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Savings Account - NGN</td>
                      <td>%</td>
                      <td>Daily Outstanding Balance</td>
                      <td>Every 3 month</td>
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
                      <td>Current Account - NGN</td>
                      <td>%</td>
                      <td>Daily Outstanding Balance</td>
                      <td>Every month</td>
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
                      <td>Fixed Deposit - NGN</td>
                      <td>%</td>
                      <td>Daily Outstanding Balance</td>
                      <td>Every month</td>
                      <td style={styles.withcredit}>Deactivated</td>
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
            {/* next and previous button  */}
            <NextPreBtn />
          </div>
        </div>
      ) : (
        <AddNewAccountType func={setOpenAddAccountType} />
      )}
    </>
  );
};

export default AccountTypes;
