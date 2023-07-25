import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DashboardHeadline from "../../shared/DashboardHeadline";
import "../../dashboardcomponents/transferdashboard/Transfer.css";
import BocButton from "../../shared/BocButton";

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  ruleTitle: Yup.string().required("Rule title is required"),
  maximumTenure: Yup.string().required("Maximum tenure is required"),
  maximumAmount: Yup.string().required("Maximum amount is required"),
  statementRule: Yup.string().required("Statement rule is required"),
  addEmployers: Yup.string().required("Employer is required"),
});

const initialValues = {
  ruleTitle: "",
  maximumTenure: "",
  maximumAmount: "",
  statementRule: "",
  addEmployers: "",
};

const StatementRules = () => {
  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
  };

  const tenures = [
    { value: "3 months", label: "3 Months" },
    { value: "6 months", label: "6 Months" },
    { value: "12 months", label: "12 Months" },
    { value: "24 months", label: "24 Months" },
    { value: "36 months", label: "36 Months" },
    { value: "48 months", label: "48 Months" },
    { value: "no maximum", label: "No Maximum Tenure" },
    // Add more options as needed
  ];

  return (
    <div>
      <div className="TransContainer">
        <DashboardHeadline>Create New Statement Rule</DashboardHeadline>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="FieldRow">
              <div className="FieldGroup">
                <label htmlFor="ruleTitle">Rule Title</label>
                <Field
                  type="text"
                  name="ruleTitle"
                  id="ruleTitle"
                  className="Input"
                ></Field>
                <ErrorMessage name="ruleTitle" component="div" />
              </div>

              <div className="FieldGroup">
                <label htmlFor="maximumTenure">Maximum Tenure</label>
                <Field
                  as="select"
                  name="maximumTenure"
                  id="maximumTenure"
                  className="Select"
                >
                  <option value="" label="Select tenure" />
                  {tenures.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      label={option.label}
                    />
                  ))}
                </Field>
                <ErrorMessage name="maximumTenure" component="div" />
              </div>
            </div>

            <div className="FieldRow">
              <div className="RadioCon">
                <label htmlFor="statementRule">Rule</label>
                <div className="Input">
                  <label className="MandateLabel">
                    <Field
                      type="checkbox"
                      name="statementRule"
                      value="tenure"
                      className="Gap"
                    />
                    Tenure
                  </label>
                  <label className="MandateLabel">
                    <Field
                      type="checkbox"
                      name="statementRule"
                      value="amount"
                      className="Gap"
                    />
                    Amount
                  </label>
                </div>

                <ErrorMessage name="statementRule" component="div" />
              </div>

              <div className="FieldGroup">
                <label htmlFor="addEmployers">Add Employers</label>
                <Field
                  type="text"
                  name="addEmployers"
                  id="addEmployers"
                  placeholder="Enter comma separated employer names"
                  className="Input"
                ></Field>
                <ErrorMessage name="addEmployers" component="div" />
              </div>
            </div>

            <div className="BtnContainer">
              <BocButton
                fontSize="1.6rem"
                type="submit"
                bgcolor="#ecaa00"
                bradius="18px"
              >
                Create Rule
              </BocButton>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default StatementRules;
