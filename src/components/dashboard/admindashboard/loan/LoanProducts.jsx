import { useState } from "react";
import BocButton from "../../shared/BocButton";
import DashboardHeadline from "../../shared/DashboardHeadline";
import "../customers/Customer.css";
import NextPreBtn from "../../shared/NextPreBtn";
import LoanProductsList from "./LoanProductsList";
import AddNewLoanProduct from "./AddNewLoanProduct";

const CustomersDashboard = () => {
  const [openAddLoanProduct, setOpenAddLoanProduct] = useState(false);
  const [product, setProduct] = useState({});
  const handleAddLoanProduct = () => {
    setOpenAddLoanProduct(true);
  };
console.log("product update", product)
  return (
    <>
      {!openAddLoanProduct ? (
        <div className="MainBox">
          <div className="AddBtn">
            <BocButton
              bgcolor="#ecaa00"
              bradius="22px"
              func={handleAddLoanProduct}
            >
              <span>+</span> New Loan Product
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
          <div className="ListSec">
            {/* customers list  */}
            <LoanProductsList func={ setOpenAddLoanProduct} product={setProduct} />
            {/* next and previous button  */}
            <NextPreBtn />
          </div>
        </div>
      ) : (
        <AddNewLoanProduct func={setOpenAddLoanProduct}/>
      )}
    </>
  );
};

export default CustomersDashboard;
