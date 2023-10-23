import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCustomer } from "../../../../redux/reducers/customerReducer";
import { Table } from "react-bootstrap";
import BocButton from "../../shared/BocButton";
import DashboardHeadline from "../../shared/DashboardHeadline";
import "../customers/Customer.css";
import NextPreBtn from "../../shared/NextPreBtn";
import PageLoader from "../../shared/PageLoader";
import getDateOnly from "../../../../../utilities/getDate";
import capitalizeEachWord from "../../../../../utilities/capitalizeFirstLetter";

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

  const [currentAdmin, setCurrentAdmin] = useState("admin");
  // fetch all customer
  const dispatch = useDispatch();
  const customers = useSelector(
    (state) => state.customerReducer.customers.customer
  );
  const status = useSelector((state) => state.customerReducer.status);

  useEffect(() => {
    dispatch(fetchAllCustomer());
  }, [dispatch]);

  // filtere customer by isKycApproved
  const filteredCustomers = customers?.filter(
    (customer) => customer.kyc.isKycApproved === true
  );
  console.log("filteredCustomers", filteredCustomers);

  return (
    <div className="MainBox">
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
        {/* data loader */}
        {status === "loading" && <PageLoader />}
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
                {filteredCustomers?.map((customer) => {
                  return (
                    <tr key={customer.id}>
                      <td>{customer.banking.accountDetails.Message.Id}</td>
                      <td>{customer.loanProduct || "General Loan"}</td>
                      <td>
                        {customer.banking.accountDetails.Message.FullName}
                      </td>
                      <td>
                        {customer.banking.accountDetails.Message.AccountNumber}
                      </td>
                      <td>{getDateOnly(customer.createdAt)}</td>
                      <td>N{customer.loanamount}</td>
                      <td style={styles.padding}>
                        {capitalizeEachWord(customer.kyc.loanstatus)}
                      </td>
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
                  );
                })}
               
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
