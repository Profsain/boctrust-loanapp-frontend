import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployers } from "../../../../redux/reducers/employersManagerReducer";
import { Table } from "react-bootstrap";
import BocButton from "../../shared/BocButton";
import DashboardHeadline from "../../shared/DashboardHeadline";
import NextPreBtn from "../../shared/NextPreBtn";
import PageLoader from "../../shared/PageLoader";
import EditEmployer from "./EditEmployer";
import getDateOnly from "../../../../../utilities/getDate";


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

  // hooks 
  const [show, setShow] = useState(false);
  const [employersObj, setEmployersObj] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEmployers());
  }, [dispatch]);

  const employers = useSelector((state) => state.employersManagerReducer.employers.employers);
  const status = useSelector((state) => state.employersManagerReducer.status);

  // handle edit action
  const handleEdit = (e) => {
    setShow(true);
    // get id
    const id = e.target.id;
    // get employer object by id
    const employer = employers.find((employer) => employer._id === id);
    // set employer object
    setEmployersObj(employer);
  };

  return (
    <>
      <div style={styles.container} className="DCard">
        {status === "loading" && <PageLoader />}
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
                  <th>Max Loan Tenure</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employers?.map((employer) => (
                  <tr key={employer._id}>
                    <td>{employer.employersId}</td>
                    <td>{employer.employersName}</td>
                    <td>{employer.mandateRule.mandateTitle}</td>
                    <td>{getDateOnly(employer.dateAdded)}</td>
                    <td>{employer.statementRule.maximumTenure}</td>
                    <td>
                      <BocButton
                        id={employer._id}
                        bradius="12px"
                        fontSize="14px"
                        width="80px"
                        margin="0 4px"
                        bgcolor="#5cc51c"
                        func={(e) => handleEdit(e)}
                      >
                        Edit
                      </BocButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <NextPreBtn />
        </div>
      </div>
      {/* edit employer modal */}
      <EditEmployer
        show={show}
        onHide={() => setShow(false)}
        employers={employersObj}
      />
    </>
  );
};

export default MdasEmployers;
