import { useState } from "react";
import "../../dashboardcomponents/transferdashboard/Transfer.css";
import "./Credit.css";
import { PaySlipAnalysis } from "./PaySlipAnalysis";
import DecisionSummary from "./DecisionSummary";
import PdfDocument from "../../../shared/PdfDocument";
// import BocButton from "../../shared/BocButton";

const creditBureauOptions = [
  { value: "first_central", label: "First Central" },
  { value: "crc_bureau", label: "CRC" },
  { value: "credit_register", label: "Credit Register" },
  // Add more options as needed
];

const reportOptions = [
  { value: "consumer", label: "Consumer Report" },
  { value: "finance", label: "Financial Report" },
  // Add more options as needed
];

const searchTypes = [
  { value: "defaulters", label: "Defaulters" },
  { value: "request", label: "Request" },
  { value: "issuance", label: "Issuance" },
  // Add more options as needed
];

const CreditCheckhtmlForm = () => {
  const [isCreditDbCheck, setIsCreditDbCheck] = useState(false);
  const [searchType, setSearchType] = useState("");
  const [searchBy, setSearchBy] = useState("");
  const [applicantName, setApplicantName] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [remarks, setRemarks] = useState("");
  const [reportObj, setReportObj] = useState({});
  const [reportTitle, setReportTitle] = useState("");
  const [dbSearchReport, setDbSearchReport] = useState("");
  const [isDbChecked, setIsDbChecked] = useState(false);
  const [isBureauChecked, setIsBureauChecked] = useState(false);

  const handleChange = () => {
    setIsCreditDbCheck(!isCreditDbCheck);
  };
  const handleDbChange = () => {
    setIsDbChecked(!isDbChecked);
  };
  const handleBureauChange = () => {
    setIsBureauChecked(!isBureauChecked);
  };

  // handle Credit DB check
  const handleDbCheck = (e) => {
    e.preventDefault();
    setReportTitle("Credit DB Check Report");

    const dbSearchReport = {
      searchType,
      searchBy,
      searchDate,
      remarks,
      isDbChecked,
    };
    // setDbSearchReport(dbSearchReport);
    // generate pdf and download
    const pdfReport = {
      reportTitle,
      applicantName,
      dbSearchReport,
    }
    setReportObj(pdfReport);
    console.log(dbSearchReport);
  };

  return (
    <>
      <div className="TransContainer RBox">
        <div className=" d-flex  p-5">
          <h4>BVN Validated</h4>
        </div>

        {/* step 1 */}
        <div className="row">
          {/* credit DB check */}
          <div className="col-sm-12 col-md-4">
            <h6 className="creditTitle">Do Credit DB Check</h6>
            <form onSubmit={handleDbCheck}>
              <div className="row mb-3">
                <label htmlFor="searchType" className="col-form-label">
                  Choose Search Type
                </label>
                <div>
                  <select
                    id="searchType"
                    className="form-select"
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                  >
                    <option selected>Choose...</option>
                    {searchTypes.map((searchType) => (
                      <option key={searchType.value} value={searchType.value}>
                        {searchType.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="searchInput" className="col-form-label">
                  IPPIS, BVN, or Phone No
                </label>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    value={searchBy}
                    onChange={(e) => setSearchBy(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="searchInput" className="col-form-label">
                  Applicant Full-name
                </label>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="dSearchDate" className="col-form-label">
                  Search Date
                </label>
                <div>
                  <input
                    type="date"
                    className="form-control"
                    value={searchDate}
                    onChange={(e) => setSearchDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="row my-3">
                <label htmlFor="netPay" className="col-form-label">
                  Remarks
                </label>
                <div>
                  <textarea
                    className="form-control"
                    id="netPay"
                    placeholder="Enter remarks here..."
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="row mx-5 align-items-center">
                <button type="submit" className="btn btn-warning mt-3">
                  Generate Manual Report
                </button>
              </div>
            </form>
          </div>

          {/* deduct check */}
          <div className="col-sm-12 col-md-4 midBorder">
            <h6 className="creditTitle">Do Deduct Check</h6>
            <form>
              <div className="row mb-3">
                <label htmlFor="dSearchInput" className="col-form-label">
                  IPPIS
                </label>
                <div>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="searchDate" className="col-form-label">
                  Search Date
                </label>
                <div>
                  <input type="date" className="form-control" />
                </div>
              </div>
              <div className="row my-3">
                <label htmlFor="netPay" className="col-form-label">
                  Remarks
                </label>
                <div>
                  <textarea className="form-control" id="netPay"></textarea>
                </div>
              </div>
              <div className="row mx-5 align-items-center">
                <button type="submit" className="btn btn-warning mt-3">
                  Generate Manual Report
                </button>
              </div>
            </form>
          </div>

          {/* credit bureau check */}
          <div className="col-sm-12 col-md-4">
            <h6 className="creditTitle">Do Credit Bureau Check</h6>
            <form>
              <div className="row mb-3">
                <label htmlFor="searchType" className="col-form-label">
                  Select Credit Bureau
                </label>
                <div>
                  <select id="searchType" className="form-select">
                    <option selected>Choose...</option>
                    {creditBureauOptions.map((creditBureauOption) => (
                      <option
                        key={creditBureauOption.value}
                        value={creditBureauOption.value}
                      >
                        {creditBureauOption.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="dSearchInput" className="col-form-label">
                  BVN
                </label>
                <div>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="searchType" className="col-form-label">
                  Select Report Type
                </label>
                <div>
                  <select id="searchType" className="form-select">
                    <option selected>Choose...</option>
                    <option value="credit">Credit Report</option>
                    <option value="kyc">KYC</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="reportType" className="col-form-label">
                  Reason of Report
                </label>
                <div>
                  <select id="reportType" className="form-select">
                    <option selected>Choose...</option>
                    {reportOptions.map((reportOption) => (
                      <option
                        key={reportOption.value}
                        value={reportOption.value}
                      >
                        {reportOption.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row mx-5 align-items-center">
                <button type="submit" className="btn btn-warning mt-3">
                  Generate Report
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="row m-5">
          {/* generated pdf report component */}
          {Object.keys(reportObj).length > 0 && (
            <PdfDocument report={reportObj} />
          )}
        </div>
        {/* attach report */}
        <div className="row m-5">
          <h4>Upload Reports</h4>
          <div className="row reportRow">
            <div className="col-sm-8 col-md-4">
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckChecked"
              >
                Is there a Credit DB Report?
              </label>
            </div>

            <div className="form-check form-switch col-sm-4 col-md-2 mt-4">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                checked={isCreditDbCheck}
                onChange={handleChange}
              />
              <label className="form-check-label mx-3 checked">
                {isCreditDbCheck ? "Yes" : "No"}
              </label>
            </div>
            <div className="col-sm-12 col-md-6 mt-2">
              <div className="input-group">
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile01"
                />
              </div>
            </div>
          </div>

          <div className="row reportRow">
            <div className="col-sm-8 col-md-4">
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckChecked"
              >
                Is there a Deduct Report?
              </label>
            </div>

            <div className="form-check form-switch col-sm-4 col-md-2 mt-4">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                checked={isDbChecked}
                onChange={handleDbChange}
              />
              <label className="form-check-label mx-3 checked">
                {isDbChecked ? "Yes" : "No"}
              </label>
            </div>
            <div className="col-sm-12 col-md-6 mt-2">
              <div className="input-group">
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile01"
                />
              </div>
            </div>
          </div>

          <div className="row reportRow">
            <div className="col-sm-8 col-md-4">
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckChecked"
              >
                Is there a Credit Bureau Report?
              </label>
            </div>

            <div className="form-check form-switch col-sm-4 col-md-2 mt-4">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                checked={isBureauChecked}
                onChange={handleBureauChange}
              />
              <label className="form-check-label mx-3 checked">
                {isBureauChecked ? "Yes" : "No"}
              </label>
            </div>
            <div className="col-sm-12 col-md-6 mt-2">
              <div className="input-group">
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile01"
                />
              </div>
            </div>
          </div>

          <div className="row mx-5 align-items-center">
            <div className="col-sm-12 col-md-3"></div>
            <button
              type="submit"
              className="btn btn-warning mt-3 col-sm-12 col-md-6"
            >
              Update Report
            </button>
            <div className="col-sm-12 col-md-3"></div>
          </div>
        </div>
      </div>

      {/* pay slip analysis component */}
      {/* <PaySlipAnalysis /> */}

      {/* decision summary */}
      {/* <DecisionSummary /> */}
    </>
  );
};

export default CreditCheckhtmlForm;
