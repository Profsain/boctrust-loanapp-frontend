import {useState} from "react";
import BocButton from "../../shared/BocButton";
import DashboardHeadline from "../../shared/DashboardHeadline";
import "../customers/Customer.css"
import NextPreBtn from "../../shared/NextPreBtn";
import BranchesList from "./BranchesList";
import AddBranch from "./AddBranch";

const Branches = () => {
  const [openAddBranch, setOpenAddBranch] = useState(false);
  // open add branch component
  const openAddBranches = () => setOpenAddBranch(true);

  return (
    <>
      {!openAddBranch ? (
        <div className="MainBox">
          <div className="AddBtn">
            <BocButton bgcolor="#ecaa00" bradius="22px" func={openAddBranches}>
              <span>+</span> Add New Branch
            </BocButton>
          </div>

          {/* top search bar */}
          <div className="Search">
            <DashboardHeadline padding="0" bgcolor="#d9d9d9">
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
            {/* branches list  */}
            <div className="ListSec">

            <BranchesList />
            {/* next and previous button  */}
            <NextPreBtn />
            </div>
          </div>
        </div>
      ) : (
        <AddBranch func={setOpenAddBranch} />
      )}
    </>
  );
};

export default Branches;
