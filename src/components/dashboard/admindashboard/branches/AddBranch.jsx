import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DashboardHeadline from "../../shared/DashboardHeadline";
import "../../dashboardcomponents/transferdashboard/Transfer.css";
import BocButton from "../../shared/BocButton";

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  branchId: Yup.string().required("Branch ID is required"),
  name: Yup.string().required("Branch name is required"),
  contactEmail: Yup.string().required("Contact email is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  address: Yup.string().required("Address is required"),
});

const initialValues = {
  branchId: "",
  name: "",
  contactEmail: "",
  phoneNumber: "",
  address: "",
  note: "",
};

const AddBranch = ({ func }) => {
  const handleSubmit = (values) => {
    // Handle form submission logic here
    // set open add branch component to true
    func(false);
    console.log(values);
  };

  return (
    <div className="TransContainer">
      <DashboardHeadline>Apply for New Loan</DashboardHeadline>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="FieldRow">
            <div className="FieldGroup">
              <label htmlFor="branchId">Branch ID</label>
              <Field
                type="text"
                name="branchId"
                id="branchId"
                className="Input"
              />
              <ErrorMessage name="branchId" component="div" />
            </div>
            <div className="FieldGroup">
              <label htmlFor="name">Branch Name</label>
              <Field type="text" name="name" id="name" className="Input" />
              <ErrorMessage name="name" component="div" />
            </div>
          </div>

          <div className="FieldRow">
            <div className="FieldGroup">
              <label htmlFor="contactEmail">Contact Email</label>
              <Field
                type="text"
                name="contactEmail"
                id="contactEmail"
                className="Input"
              />
              <ErrorMessage name="contactEmail" component="div" />
            </div>

            <div className="FieldGroup">
              <label htmlFor="phoneNumber">Phone Number</label>
              <Field
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                className="Input"
              />
              <ErrorMessage name="phoneNumber" component="div" />
            </div>
          </div>
          <div className="FieldRow">
            <div className="FieldGroup">
              <label htmlFor="address">Address</label>
              <Field
                type="text"
                name="address"
                id="address"
                className="Input"
              />
              <ErrorMessage name="address" component="div" />
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
          {/* <div>
            <BocButton
              type="submit"
              width="220px"
              bgcolor="gray"
              bradius="18px"
              func={() => func(false)}
            >
              Back to Branches
            </BocButton>
          </div> */}
        </Form>
      </Formik>
    </div>
  );
};

AddBranch.propTypes = {
  func: PropTypes.func,
};

export default AddBranch;
