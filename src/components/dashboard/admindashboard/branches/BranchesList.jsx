import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBranches } from "../../../../redux/reducers/branchReducer";
import Table from "react-bootstrap/Table";
import "../../Dashboard.css";
import PageLoader from "../../shared/PageLoader";
import EditBranch from "./EditBranch";
import ActionNotification from "../../shared/ActionNotification";

const BranchesList = () => {
  const styles = {
    head: {
      color: "#fff",
      fontSize: "1rem",
      backgroundColor: "#145098",
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

  // component state
  const [branchObj, setBranchObj] = useState([]);
  const [branchId, setBranchId] = useState("");
  const [actionType, setActionType] = useState("");
  const [show, setShow] = useState(false);
  const [action, setAction] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBranches());
  }, [dispatch]);

  const branches = useSelector(
    (state) => state.branchReducer.branches.branches
  );
  const status = useSelector((state) => state.branchReducer.status);

  // handle action selection
  const handleAction = (e) => {
    const action = e.target.value;
    const id = e.target.id;
    setActionType(action);
    setBranchId(id);

    // find branch by id
    const branch = branches.find((branch) => branch._id === id);
    setBranchObj(branch);

    // show modal
    if (action === "view" || action === "edit") {
      setShow(true);
    } else if (action === "delete") {
      // delete branch
      setAction(true);
    }
  };
  // handle delete action
  const handleDelete = async () => {
    await fetch(`http://localhost:3030/api/branch/branches/${branchId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch(fetchBranches());
    setAction(false);
  };

  return (
    <>
      {status === "loading" && <PageLoader />}

      <div>
        <div style={styles.table}>
          <Table borderless hover responsive="sm">
            <thead style={styles.head}>
              <tr>
                <th>Branch ID</th>
                <th>Name</th>
                <th>Contact Email</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {branches?.map((branch) => (
                <tr key={branch._id}>
                  <td>{branch.branchId}</td>
                  <td>{branch.branchName}</td>
                  <td>{branch.contactEmail}</td>
                  <td>{branch.phoneNumber}</td>
                  <td>{branch.address}</td>
                  <td>
                    <select
                      name="action"
                      className="action"
                      id={branch._id}
                      onChange={handleAction}
                    >
                      <option value="">Action</option>
                      <option value="view">View</option>
                      <option value="edit">Edit</option>
                      <option value="delete">Delete</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      {/* branch model */}
      <EditBranch
        show={show}
        actionType={actionType}
        branches={branchObj}
        onHide={() => setShow(false)}
        branchId={branchId}
      />
      {/* acton popup model */}
      <ActionNotification
        show={action}
        handleClose={() => setAction(false)}
        handleProceed={handleDelete}
      />
    </>
  );
};

export default BranchesList;
