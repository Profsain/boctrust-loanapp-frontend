import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DashboardHeadline from "../../shared/DashboardHeadline";
import "../transferdashboard/Transfer.css";
import BocButton from "../../shared/BocButton";

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  debitAccount: Yup.string().required("Debit Account is required"),
  createAccount: Yup.string().required("Create Account is required"),
  amount: Yup.number()
    .typeError("Amount must be a number")
    .required("Amount is required"),
  note: Yup.string().required("Note is required"),
});

const debitAccountOptions = [
  { value: "account1", label: "Account 1" },
  { value: "account2", label: "Account 2" },
  // Add more options as needed
];

const initialValues = {
  debitAccount: "",
  createAccount: "",
  amount: "",
  note: "",
};

const AccountStatement = () => {
  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
  };

  return (
    <div className="TransContainer">
      <DashboardHeadline>Account Statement</DashboardHeadline>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="FieldRow">
            <div className="FieldGroup">
              <label htmlFor="createAccount">Create Account</label>
              <Field
                type="text"
                name="createAccount"
                id="createAccount"
                className="Input"
              />
              <ErrorMessage name="createAccount" component="div" />
            </div>
            <div className="FieldGroup">
              <label htmlFor="debitAccount">Debit Account</label>
              <Field
                as="select"
                name="debitAccount"
                id="debitAccount"
                className="Select"
              >
                <option value="" label="Select an account" />
                {debitAccountOptions.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    label={option.label}
                  />
                ))}
              </Field>
              <ErrorMessage name="debitAccount" component="div" />
            </div>
          </div>
          <div className="BtnContainer">
            <BocButton
              fontSize="1.6rem"
              type="submit"
              width="25%"
              bgcolor="#ecaa00"
              bradius="25px"
            >
              FILTER
            </BocButton>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AccountStatement;
