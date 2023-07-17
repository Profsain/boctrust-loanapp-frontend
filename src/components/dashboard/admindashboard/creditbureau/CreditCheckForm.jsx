import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DashboardHeadline from "../../shared/DashboardHeadline";
import "../../dashboardcomponents/transferdashboard/Transfer.css";
import BocButton from "../../shared/BocButton";

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  selectCreditBureau: Yup.string().required("Credit Bureau is required"),
  selectReportType: Yup.string().required("Report type is required"),
  reportReason: Yup.string().required("Report reason is required"),
  uniqueIdentifier: Yup.string().required("Unique identifier is required"),
});

const creditBureauOptions = [
  { value: "First Central", label: "First Central" },
  { value: "fgn bureau", label: "FGN Bureau" },
  // Add more options as needed
];
const reportOptions = [
  { value: "consumer", label: "Consumer Report" },
  { value: "finance", label: "Financial Report" },
  // Add more options as needed
];

const initialValues = {
  selectCreditBureau: "",
  selectReportType: "",
  reportReason: "",
  uniqueIdentifier: "",
};

const CreditCheckForm = () => {
  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
  };

  return (
    <div>
      <DashboardHeadline
        bgcolor="#145098"
        mspacer="1rem 4rem 0 1rem"
        padding="0.3rem 0 0 1rem"
        height="70px"
      >
        <div>
          <input placeholder="Search" type="text" className="CreditSearch" />
          <img
            src="images/search.png"
            alt="search-icon"
            className="SearchIcon"
          />
        </div>
      </DashboardHeadline>

      <div className="TransContainer">
        <DashboardHeadline>Perform a Credit Check</DashboardHeadline>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="FieldRow">
              <div className="FieldGroup">
                <label htmlFor="selectCreditBureau">Select Credit Bureau</label>
                <Field
                  as="select"
                  name="selectCreditBureau"
                  id="selectCreditBureau"
                  className="Select"
                >
                  <option value="" label="Select a product" />
                  {creditBureauOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      label={option.label}
                    />
                  ))}
                </Field>
                <ErrorMessage name="selectCreditBureau" component="div" />
              </div>
              <div className="FieldGroup">
                <label htmlFor="selectReportType">Select Report Type</label>
                <Field
                  as="select"
                  name="selectReportType"
                  id="selectReportType"
                  className="Select"
                >
                  <option value="" label="Select a product" />
                  {reportOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      label={option.label}
                    />
                  ))}
                </Field>
                <ErrorMessage name="selectReportType" component="div" />
              </div>
            </div>
            <div className="FieldRow">
              <div className="FieldGroup">
                <label htmlFor="reportReason">Reason of Report</label>
                <Field
                  type="text"
                  name="reportReason"
                  id="reportReason"
                  className="Input"
                />
                <ErrorMessage name="reportReason" component="div" />
              </div>

              <div className="FieldGroup">
                <label htmlFor="uniqueIdentifier">
                  Enter Unique Identifier
                </label>
                <Field
                  type="text"
                  name="uniqueIdentifier"
                  placeholder="BVN, Phone Number"
                  id="uniqueIdentifier"
                  className="Input"
                />
                <ErrorMessage name="uniqueIdentifier" component="div" />
              </div>
            </div>
            <div className="BtnContainer">
              <BocButton
                fontSize="1.6rem"
                type="submit"
                width="35%"
                bgcolor="#ecaa00"
                bradius="18px"
              >
                Generate Report
              </BocButton>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default CreditCheckForm;
