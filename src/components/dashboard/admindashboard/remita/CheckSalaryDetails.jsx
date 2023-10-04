import PropTypes from "prop-types";
import RowCard from "./RowCard";
import Headline from "../../../shared/Headline";
import "./Remita.css";
import getDateOnly from "../../../../../utilities/getDate";


const CheckSalaryDetails = ({ customerObj, setOpenDetails }) => {
    const phone = customerObj.phonenumber.slice(1);
    // console.log("customerObj", customerObj)
  return (
    <>
      <div className="DetailsCon">
        <div className="RowSection">
          <RowCard title="Customer ID:" text={phone} />
          <RowCard
            title="Account Number:"
            text={customerObj.salaryaccountnumber}
          />
        </div>
        <div className="RowSection">
          <RowCard title="Bank Code:" text="10293" />
          <RowCard title="BVN:" text={customerObj.bvnnumber} />
          <RowCard title="Next Payment Date:" text={getDateOnly(customerObj.createdAt)} />
        </div>
        <hr />
        <div className="RowSection">
          <div id="PastSalary">
            <Headline
              align="left"
              fontSize="18px"
              text="Past Salary Payment Details"
            />
            <div>
              <select>
                <option value="">Select Number of Months</option>
                <option value="">6 months</option>
                <option value="">12 months</option>
              </select>
            </div>
            <RowCard title="Salary Payment Date" text="30-06-2923" />
            <RowCard title="Salary Amount" text="150,000" />
            <RowCard title="Account Number" text="1023452112" />
            <RowCard title="Bank Code" text="10234" />
          </div>
          <div id="LoanDetails">
            <Headline
              align="left"
              fontSize="18px"
              text="Loan History Details"
            />
            <RowCard title="Loan Provider" text="GTB" />
            <RowCard title="Loan Amount" text="100,000" />
            <RowCard title="Loan Disbursement Date" text="02-04-2023" />
            <RowCard title="Outstanding Amount" text="50,000" />
            <RowCard title="Repayment Amount" text="20,000" />
            <RowCard title="Repayment Frequency" text="Monthly" />
          </div>
        </div>
      </div>
    </>
  );
};

CheckSalaryDetails.propTypes = {
    customerObj: PropTypes.any,
    setOpenDetails: PropTypes.func,
};

export default CheckSalaryDetails;
