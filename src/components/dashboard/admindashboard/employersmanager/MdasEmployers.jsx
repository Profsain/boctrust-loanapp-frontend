import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployers } from "../../../../redux/reducers/employersManagerReducer";
import { Table } from "react-bootstrap";
import BocButton from "../../shared/BocButton";
import DashboardHeadline from "../../shared/DashboardHeadline";
import NextPreBtn from "../../shared/NextPreBtn";
import PageLoader from "../../shared/PageLoader";
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEmployers());
  }, [dispatch]);

  const employers = useSelector((state) => state.employersManagerReducer.employers.employers);
  const status = useSelector((state) => state.employersManagerReducer.status);
  console.log(status, employers);

  return (
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
              ))}
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
            </tbody>
          </Table>
        </div>
        <NextPreBtn />
      </div>
    </div>
  );
};

export default MdasEmployers;
