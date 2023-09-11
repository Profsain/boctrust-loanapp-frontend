import { useState } from "react";
import "../../dashboardcomponents/transferdashboard/Transfer.css";
import "./Credit.css";

export const PaySlipAnalysis = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isDeduction, setIsDeduction] = useState(false);
  const [isTakehome, setIsTakehome] = useState(false);
  const [isTakehomeAmount, setIsTakehomeAmount] = useState(false);
  const [isNetPay, setIsNetPay] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  const handleDeduction = () => {
    setIsDeduction(!isDeduction);
  };
  const handleTakehome = () => {
    setIsTakehome(!isTakehome);
  };
  const handleTakehomeAmount = () => {
    setIsTakehomeAmount(!isTakehomeAmount);
  };
  const handleNetPay = () => {
    setIsNetPay(!isNetPay);
  };
  return (
    <div className="TransContainer RBox">
      <div className=" d-flex justify-content-center p-5">
        <h4>Pay Slip Analysis</h4>
      </div>

      {/* step 1 */}
      <div className="row">
        {/* Pay slip check */}
        <div className="col-sm-12 col-md-6">
          <h6 className="creditTitle">Pay Slip Check</h6>
          <form>
            <div className="row mb-3">
              <label htmlFor="netPay" className="col-form-label col-4 mt-2">
                Enter Net Pay
              </label>
              <div className="col-8">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="dSearchDate"
                className="col-form-label col-4 mt-2"
              >
                Enter Gross Pay
              </label>
              <div className="col-8">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="dSearchDate"
                className="col-form-label col-4 mt-2"
              >
                Number of Lenders on Slip
              </label>
              <div className="col-8">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="dSearchDate"
                className="col-form-label col-4 mt-2"
              >
                Extra Lenders discovered
              </label>
              <div className="col-8">
                <input type="text" className="form-control" />
              </div>
            </div>

            {/* extra lender details */}
            <div id="extraLender">
              <hr />
              <h5>Add Extra Lender Details</h5>
              <div className="row mb-3">
                <label
                  htmlFor="dSearchDate"
                  className="col-form-label col-4 mt-2"
                >
                  Name of Lender
                </label>
                <div className="col-8">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="dSearchDate"
                  className="col-form-label col-4 mt-2"
                >
                  Monthly Deductions
                </label>
                <div className="col-8">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div id="extraDetails"></div>
              <div className="moreBox">
                <button type="button" className="btnAdd">
                  +
                </button>
                <p>Add More Lenders</p>
              </div>
            </div>
            {/* extra lender details end */}

            <div className="row mb-3">
              <label
                htmlFor="dSearchDate"
                className="col-form-label col-4 mt-2"
              >
                Monthly Loan Repayment
              </label>
              <div className="col-8">
                <input type="text" className="form-control" />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="dSearchDate"
                className="col-form-label col-4 mt-2"
              >
                Date of Birth
              </label>
              <div className="col-8">
                <input type="date" className="form-control" />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="dSearchDate"
                className="col-form-label col-4 mt-2"
              >
                Date of Appointment
              </label>
              <div className="col-8">
                <input type="date" className="form-control" />
              </div>
            </div>

            <div className="row reportRow mb-5">
              <div className="col-sm-8 col-md-8">
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckChecked"
                >
                  Is applicant a civilian police?
                </label>
              </div>

              <div className="form-check form-switch col-sm-4 col-md-4 mt-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  checked={isChecked}
                  onChange={handleChange}
                />
                <label className="form-check-label mx-3 checked">
                  {isChecked ? "Yes" : "No"}
                </label>
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="dSearchDate"
                className="col-form-label col-4 mt-2"
              >
                Upload Pay Slip
              </label>
              <div className="col-8">
                <input type="file" className="form-control" />
              </div>
            </div>
          </form>
        </div>

        {/* report confirmation */}
        <div className="col-sm-12 col-md-6 midBorder">
          <h6 className="creditTitle">Report Confirmation</h6>
          <form>
            <div className="row reportRow mb-5">
              <div className="col-sm-8 col-md-8">
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckChecked"
                >
                  Applicant Payslip does not contain more than 5 lenders
                </label>
              </div>

              <div className="form-check form-switch col-sm-4 col-md-4 mt-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  checked={isChecked}
                  onChange={handleChange}
                />
                <label className="form-check-label mx-3 checked">
                  {isChecked ? "Yes" : "No"}
                </label>
              </div>
            </div>

            <div className="row reportRow mb-5">
              <div className="col-sm-8 col-md-8">
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckChecked"
                >
                  Customer Deduction for monthly loan not more than 50% of Net
                  pay
                </label>
              </div>

              <div className="form-check form-switch col-sm-4 col-md-4 mt-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  checked={isDeduction}
                  onChange={handleDeduction}
                />
                <label className="form-check-label mx-3 checked">
                  {isDeduction ? "Yes" : "No"}
                </label>
              </div>
            </div>

            <div className="row reportRow mb-5">
              <div className="col-sm-8 col-md-8">
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckChecked"
                >
                  Customer Take home not less than 20% of Gross Pay
                </label>
              </div>

              <div className="form-check form-switch col-sm-4 col-md-4 mt-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  checked={isTakehome}
                  onChange={handleTakehome}
                />
                <label className="form-check-label mx-3 checked">
                  {isTakehome ? "Yes" : "No"}
                </label>
              </div>
            </div>
            <div className="row reportRow mb-5">
              <div className="col-sm-8 col-md-8">
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckChecked"
                >
                  Customer Take home not less than N30,000
                </label>
              </div>

              <div className="form-check form-switch col-sm-4 col-md-4 mt-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  checked={isTakehomeAmount}
                  onChange={handleTakehomeAmount}
                />
                <label className="form-check-label mx-3 checked">
                  {isTakehomeAmount ? "Yes" : "No"}
                </label>
              </div>
            </div>

            <div className="row reportRow mb-5">
              <div className="col-sm-8 col-md-8">
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckChecked"
                >
                  Customer Net Pay is N30,000 or Below
                </label>
              </div>

              <div className="form-check form-switch col-sm-4 col-md-4 mt-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  checked={isNetPay}
                  onChange={handleNetPay}
                />
                <label className="form-check-label mx-3 checked">
                  {isNetPay ? "Yes" : "No"}
                </label>
              </div>
            </div>

            <div className="row mx-5 align-items-center">
              <button type="submit" className="btn btn-warning mt-3">
                Update Report
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
