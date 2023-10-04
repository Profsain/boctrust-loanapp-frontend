import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCustomer } from "../../../../redux/reducers/customerReducer";
import Headline from "../../../shared/Headline";
import { Table } from "react-bootstrap";
import BocButton from "../../shared/BocButton";
import DashboardHeadline from "../../shared/DashboardHeadline";
import PageLoader from "../../shared/PageLoader";
import NextPreBtn from "../../shared/NextPreBtn";
import CheckSalaryDetails from "./CheckSalaryDetails";
import "./Remita.css";
import "../customers/Customer.css";

const CheckSalaryHistory = () => {
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
    pending: {
      color: "#ecaa00",
    },
  };

  // fetch all customer
  const dispatch = useDispatch();
  const customers = useSelector(
    (state) => state.customerReducer.customers.customer
  );
  const status = useSelector((state) => state.customerReducer.status);
  const [customerObj, setCustomerObj] = useState({});
  const [openDetails, setOpenDetails] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchAllCustomer());
  }, [dispatch]);

  // handle salary check
  const handleCheck = async (id) => {
    // find customer by id and update the customerObj
    const customer = customers.find((customer) => customer._id === id);
    setCustomerObj(customer);
    setIsLoading(true);

    // get customer history from remita
    const response = await fetch(
      "http://localhost:3030/api/remita/get-salary-history",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          authorisationCode: customer.bvnnumber,
          firstName: customer.firstname,
          lastName: customer.lastname,
          accountNumber: customer.salaryaccountnumber,
          bankCode: customer.bankcode,
          bvn: customer.bvnnumber || "041",
          authorisationChannel: "WEB",
        }),
      //   body: JSON.stringify({
      //     authorisationCode: "{{authorization}}",
      //     firstName: "Teresa",
      //     lastName: "Stoker",
      //     accountNumber: "5012284010",
      //     bankCode: "22222222223",
      //     bvn: "023",
      //     authorisationChannel: "USSD",
      //   }),
      }
    );
    // const data = await response.json();
    console.log("response", response)
    await fetch("http://localhost:3030/api/email/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "profsainhm@gmail.com",
        subject: "Salary Check",
        html: `<h1>Salary Check</h1>
        <p>Dear ${customer.firstname} ${customer.lastname},</p>
        <p>Your salary check has been completed.</p>
        <p>Kindly login to your account to view the details.</p>
        <p>Thank you.</p>
        `,
      }),
    });
    
    setIsLoading(false);
    setOpenDetails(true);
  };

  return (
    <div>
      <div>
        <Headline text="View by:" />
        <div style={styles.btnBox} className="VBox">
          <BocButton margin="8px 18px" bgcolor="#ecaa00" bradius="25px">
            Applicant Today
          </BocButton>
          <BocButton margin="8px 18px" bgcolor="#ecaa00" bradius="25px">
            Date Range
          </BocButton>
          <BocButton margin="8px 18px" bgcolor="#ecaa00" bradius="25px">
            Specific User
          </BocButton>
        </div>
      </div>

      {/* data loader */}
      {status === "loading" && <PageLoader />}
      {/* table section */}
      <div className="RBox">
        <DashboardHeadline
          height="52px"
          mspacer="2rem 0 -2.55rem -1rem"
          bgcolor="#145098"
        ></DashboardHeadline>
        <div style={styles.table}>
          <Table borderless hover responsive="sm">
            <thead style={styles.head}>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Account Number</th>
                <th>BVN</th>
                <th>Do Check</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {customers?.map((customer) => {
                if (customer.kyc.isKycApproved) {
                  return (
                    <tr key={customer._id}>
                      <td>{customer.firstname}</td>
                      <td>{customer.lastname}</td>
                      <td>{customer.salaryaccountnumber}</td>
                      <td>{customer.bvnnumber}</td>
                      <td
                        style={styles.pending}
                        className="startBtn"
                        onClick={() => handleCheck(customer._id)}
                      >
                        Start
                      </td>
                      <td>
                        <div>
                          <BocButton
                            bradius="12px"
                            fontSize="14px"
                            width="90px"
                            margin="0 4px"
                            bgcolor="#f64f4f"
                          >
                            Pending
                          </BocButton>
                        </div>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </Table>
        </div>
        <NextPreBtn />
      </div>

      {/* details section */}
      {isLoading ? <PageLoader /> : null}
      {openDetails && <CheckSalaryDetails customerObj={customerObj} setOpenDetails={setOpenDetails} />}
    </div>
  );
};

export default CheckSalaryHistory;
