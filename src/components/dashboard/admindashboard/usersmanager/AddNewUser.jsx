import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import BocButton from "../../shared/BocButton";
import DashboardHeadline from "../../shared/DashboardHeadline";
import "../customers/Customer.css";

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  photo: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  userType: Yup.string().required("Required"),
  jobRole: Yup.string().required("Required"),
  appRole: Yup.string().required("Required"),
});

const initialValues = {
  name: "",
  photo: "",
  email: "",
  phone: "",
  username: "",
  password: "",
  userType: "",
  jobRole: "",
};

const AddNewUser = ({ func }) => {
  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
  };

  const handleClose = () => {
    func(false);
    };
    
    const userTypes = [
        { value: "admin", label: "Admin" },
        { value: "md", label: "MD" },
        { value: "coo", label: "COO" },
        { value: "creditAnalyst", label: "Credit Analyst" },
        { value: "operationStaff", label: "Operation Staff" },
        { value: "loanOfficer", label: "Loan Officer" },
    ]

  return (
    <div className="TransContainer">
      <DashboardHeadline>Add New User</DashboardHeadline>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="FieldRow">
            <div className="FieldGroup">
              <label htmlFor="name">Full Name</label>
              <Field type="text" name="name" id="name" className="Input" />
              <ErrorMessage name="name" component="div" />
            </div>

            <div className="FieldGroup">
              <label htmlFor="photo">Profile Photo</label>
              <Field type="file" name="photo" id="MethodLogo" />
              <ErrorMessage name="photo" component="div" />
            </div>
          </div>

          <div className="FieldRow">
            <div className="FieldGroup">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" id="email" className="Input" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div className="FieldGroup">
              <label htmlFor="phone">Photo</label>
              <Field type="tel" name="phone" id="phone" className="Input" />
              <ErrorMessage name="phone" component="div" />
            </div>
          </div>

          <div className="FieldRow">
            <div className="FieldGroup">
              <label htmlFor="username">Username</label>
              <Field
                type="text"
                name="username"
                id="username"
                className="Input"
              />
              <ErrorMessage name="username" component="div" />
            </div>
            <div className="FieldGroup">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                name="password"
                id="password"
                className="Input"
              />
              <ErrorMessage name="password" component="div" />
            </div>
          </div>

          <div className="FieldRow">
            <div className="FieldGroup">
              <label htmlFor="jobRole">Job Role</label>
              <Field
                type="text"
                name="jobRole"
                id="jobRole"
                className="Input"
              />
              <ErrorMessage name="jobRole" component="div" />
            </div>
            <div className="FieldGroup">
              <label htmlFor="userType">User Type</label>
              <Field
                as="select"
                name="userType"
                id="userType"
                className="Select"
              >
                <option value="" label="Select User Type" />
                {userTypes.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    label={option.label}
                  />
                ))}
              </Field>
              <ErrorMessage name="userType" component="div" />
            </div>
          </div>

          <div className="BtnRow">
            <div className="BtnContainer">
              <BocButton
                fontSize="1.6rem"
                type="button"
                bgcolor="gray"
                bradius="18px"
                func={handleClose}
              >
                Cancel
              </BocButton>
            </div>
            <div className="BtnContainer">
              <BocButton
                fontSize="1.6rem"
                type="submit"
                bgcolor="#ecaa00"
                bradius="18px"
              >
                Submit
              </BocButton>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

AddNewUser.propTypes = {
  func: PropTypes.func,
};

export default AddNewUser;
