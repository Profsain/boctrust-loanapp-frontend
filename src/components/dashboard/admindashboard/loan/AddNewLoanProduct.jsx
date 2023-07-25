import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DashboardHeadline from "../../shared/DashboardHeadline";
import "../../dashboardcomponents/transferdashboard/Transfer.css";
import BocButton from "../../shared/BocButton";

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  productName: Yup.string().required("Product name is required"),
  interestRate: Yup.string().required("Interest rate is required"),
  interestType: Yup.string().required("Interest type is required"),
  maxTerm: Yup.string().required("Max term is required"),
  termPeriod: Yup.string().required("Term period is required"),
  note: Yup.string().required("Note is required"),
});

const initialValues = {
  productName: "",
  interestRate: "",
  interestType: "",
  maxTerm: "",
  termPeriod: "",
  note: "",
};

const AddNewLoanProduct = ({ func }) => {
  const handleSubmit = (values) => {
    // Handle form submission logic here
    // set open add branch component to true
    func(false);
    console.log(values);
  };

  return (
    <div className="TransContainer">
      <DashboardHeadline>New Loan Product</DashboardHeadline>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="FieldRow">
            <div className="FieldGroup">
              <label htmlFor="productName">Product Name</label>
              <Field
                type="text"
                name="productName"
                id="productName"
                className="Input"
              />
              <ErrorMessage name="productName" component="div" />
            </div>
            <div className="FieldGroup">
              <label htmlFor="interestRate">Interest Rate</label>
              <Field
                type="text"
                name="interestRate"
                id="interestRate"
                className="Input"
              />
              <ErrorMessage name="interestRate" component="div" />
            </div>
          </div>

          <div className="FieldRow">
            <div className="FieldGroup">
              <label htmlFor="interestType">Interest Type</label>
              <Field
                type="text"
                name="interestType"
                id="interestType"
                className="Input"
              />
              <ErrorMessage name="interestType" component="div" />
            </div>

            <div className="FieldGroup">
              <label htmlFor="maxTerm">Max Term</label>
              <Field
                type="text"
                name="maxTerm"
                id="maxTerm"
                className="Input"
              />
              <ErrorMessage name="maxTerm" component="div" />
            </div>
          </div>
          <div className="FieldRow">
            <div className="FieldGroup">
              <label htmlFor="termPeriod">Term Period</label>
              <Field
                type="text"
                name="termPeriod"
                id="termPeriod"
                className="Input"
              />
              <ErrorMessage name="termPeriod" component="div" />
            </div>
            <div className="FieldGroup">
              <label htmlFor="note">Note</label>
              <Field type="text" name="note" id="note" className="Input" />
              <ErrorMessage name="note" component="div" />
            </div>
          </div>

          <div className="BtnContainer">
            <BocButton
              type="submit"
              width="220px"
              bgcolor="#ecaa00"
              bradius="18px"
            >
              Submit Application
            </BocButton>
            <BocButton
              margin="1.5rem 0 0 0"
              type="submit"
              width="220px"
              bgcolor="gray"
              bradius="18px"
              func={() => func(false)}
            >
              Back to Branches
            </BocButton>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

AddNewLoanProduct.propTypes = {
  func: PropTypes.func,
};

export default AddNewLoanProduct;
