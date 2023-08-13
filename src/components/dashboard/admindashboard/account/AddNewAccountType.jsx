import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { fetchAccounts } from "../../../../redux/reducers/accountReducer";
import DashboardHeadline from "../../shared/DashboardHeadline";
import "../../dashboardcomponents/transferdashboard/Transfer.css";
import BocButton from "../../shared/BocButton";

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  accountName: Yup.string().required("Account name is required"),
    interestRate: Yup.string().required("Interest rate is required"),
    interestMethod: Yup.string().required("Interest method is required"),
    interestPeriod: Yup.string().required("Interest period is required"),
  
});

const initialValues = {
  accountName: "",
  interestRate: "",
  interestMethod: "",
  interestPeriod: "",
};

const AddNewAccountType = ({ func }) => {
  const handleSubmit = async (values, {resetForm}) => {
    // Handle form submission logic here
    await fetch("http://localhost:3030/api/account/accounts", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(values),
    });
    resetForm()
    // set open add branch component to true
    // func(false);
    dispatch(fetchAccounts());

  };

  // handle cancel
  const dispatch = useDispatch();
  const handleCancel = () => {
    func(false);
    dispatch(fetchAccounts());
  };

  return (
    <div className="TransContainer">
      <DashboardHeadline>Add New Account Type</DashboardHeadline>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="FieldRow">
            <div className="FieldGroup">
              <label htmlFor="accountName">Account Name</label>
              <Field
                type="text"
                name="accountName"
                id="accountName"
                className="Input"
              />
              <ErrorMessage name="accountName" component="div" />
            </div>
            <div className="FieldGroup">
              <label htmlFor="interestRate">Interest Rate</label>
              <Field
                type="number"
                name="interestRate"
                id="interestRate"
                className="Input"
              />
              <ErrorMessage name="interestRate" component="div" />
            </div>
          </div>

          <div className="FieldRow">
            <div className="FieldGroup">
              <label htmlFor="interestMethod">Interest Method</label>
              <Field
                type="text"
                name="interestMethod"
                id="interestMethod"
                className="Input"
              />
              <ErrorMessage name="interestMethod" component="div" />
            </div>

            <div className="FieldGroup">
              <label htmlFor="interestPeriod">Interest Period</label>
              <Field
                type="text"
                name="interestPeriod"
                id="interestPeriod"
                className="Input"
              />
              <ErrorMessage name="interestPeriod" component="div" />
            </div>
          </div>
         

          <div className="BtnContainer">
            <BocButton
              type="submit"
              width="220px"
              bgcolor="#ecaa00"
              bradius="18px"
            >
              Submit
            </BocButton>
            <BocButton
              margin="1.5rem 0 0 0"
              type="submit"
              width="220px"
              bgcolor="gray"
              bradius="18px"
              func={handleCancel}
            >
                Cancel
            </BocButton>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

AddNewAccountType.propTypes = {
  func: PropTypes.func,
};

export default AddNewAccountType;
