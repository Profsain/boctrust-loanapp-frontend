import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DashboardHeadline from "../../shared/DashboardHeadline";
import "../../dashboardcomponents/transferdashboard/Transfer.css";
import BocButton from "../../shared/BocButton";

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  mandateTitle: Yup.string().required("Mandate title is required"),
  mandateDuration: Yup.string().required("Mandate duration is required"),
  dateCreated: Yup.string().required("Date created is required"),
  mandateUse: Yup.string().required("Mandate use is required"),
  secondaryRule: Yup.string().required("Secondary rule duration is required"),
  addEmployerStack: Yup.string().required("Add employer stack is required"),
});

const initialValues = {
  mandateTitle: "",
  mandateDuration: "",
  dateCreated: "",
  mandateUse: "",
  allowStacking: "",
  secondaryDuration: "",
  addEmployerStack: "",
};

const MandateRules = () => {
  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
  };

  const mandateTitles = [
    {
      value: "loanEligibilityAfter365Days",
      label: "Loan Eligibility after 365 days",
    },
    {
      value: "loanEligibilityAfter365DaysStacked",
      label: "Loan Eligibility after 365 days (stacked)",
    },
    {
      value: "loanEligibilityAfter180Days",
      label: "Loan Eligibility after 180 days",
    },
    {
      value: "loanEligibilityAfter90Days",
      label: "Loan Eligibility after 90 days",
    },
    {
      value: "loanEligibilityAfter30Days",
      label: "Loan Eligibility after 30 days",
    },

    // Add more options as needed
  ];

  const durationOptions = [
    { value: "365", label: "365 Days" },
    { value: "180", label: "180 Days" },
    { value: "90", label: "90 Days" },
    { value: "30", label: "30 Days" },
    // Add more options as needed
  ];

  const secondaryDuration = [
    { value: "365", label: "365 Days" },
    { value: "180", label: "180 Days" },
    { value: "90", label: "90 Days" },
    { value: "30", label: "30 Days" },
    // Add more options as needed
  ];

  return (
    <div>
      <div className="TransContainer">
        <DashboardHeadline>Create New Mandate Rule</DashboardHeadline>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="FieldRow">
              <div className="FieldGroup">
                <label htmlFor="mandateTitle">Mandate Title</label>
                <Field
                  as="select"
                  name="mandateTitle"
                  id="mandateTitle"
                  className="Select"
                >
                  <option value="" label="Select a title" />
                  {mandateTitles.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      label={option.label}
                    />
                  ))}
                </Field>
                <ErrorMessage name="mandateTitle" component="div" />
              </div>
              <div className="FieldGroup">
                <label htmlFor="mandateDuration">Duration</label>
                <Field
                  as="select"
                  name="mandateDuration"
                  id="mandateDuration"
                  className="Select"
                >
                  <option value="" label="Select duration" />
                  {durationOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      label={option.label}
                    />
                  ))}
                </Field>
                <ErrorMessage name="mandateDuration" component="div" />
              </div>
            </div>

            <div className="FieldRow">
              <div className="RadioCon">
                <label htmlFor="mandateUse">Mandate Use</label>
                <div className="Input">
                  <label className="MandateLabel">
                    <Field
                      type="radio"
                      name="mandateUse"
                      value="Employer"
                      className="Gap"
                    />
                    Employer
                  </label>
                  <label className="MandateLabel">
                    <Field
                      type="radio"
                      name="mandateUse"
                      value="Admin"
                      className="Gap"
                    />
                    Admin
                  </label>
                </div>

                <ErrorMessage name="mandateUse" component="div" />
              </div>
              <div className="RadioCon">
                <label htmlFor="allowStacking">
                  Allow Remita Rule Stacking
                </label>
                <div className="Input">
                  <label className="MandateLabel">
                    <Field
                      type="radio"
                      name="allowStacking"
                      value="Yes"
                      className="Gap"
                    />
                    Yes
                  </label>
                  <label className="MandateLabel">
                    <Field
                      type="radio"
                      name="allowStacking"
                      value="No"
                      className="Gap"
                    />
                    No
                  </label>
                </div>

                <ErrorMessage name="mandateIssued" component="div" />
              </div>
            </div>

            <div className="FieldRow">
              <div className="FieldGroup">
                <label htmlFor="dateCreated">Date Created</label>
                <Field
                  type="date"
                  name="dateCreated"
                  id="dateCreated"
                  className="Input"
                />
                <ErrorMessage name="dateCreated" component="div" />
              </div>

              <div className="FieldGroup">
                <label htmlFor="secondaryDuration">
                  Secondary Rule Duration
                </label>
                <Field
                  as="select"
                  name="secondaryDuration"
                  id="secondaryDuration"
                  className="Select"
                >
                  <option value="" label="Select duration" />
                  {secondaryDuration.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      label={option.label}
                    />
                  ))}
                </Field>
                <ErrorMessage name="secondaryDuration" component="div" />
              </div>
            </div>

            <div className="FieldRow">
              <div className="FieldGroup">
                <label htmlFor="addEmployerStack">
                  Add Employer for Rule Stacking
                </label>
                <Field
                  type="text"
                  name="addEmployerStack"
                  id="addEmployerStack"
                  className="Input"
                />
                <ErrorMessage name="addEmployerStack" component="div" />
              </div>
            </div>
            <div className="BtnContainer">
              <BocButton
                fontSize="1.6rem"
                type="submit"
                bgcolor="#ecaa00"
                bradius="18px"
              >
                Create Mandate
              </BocButton>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default MandateRules;
