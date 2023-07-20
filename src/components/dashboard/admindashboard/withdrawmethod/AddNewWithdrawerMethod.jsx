import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import BocButton from "../../shared/BocButton";
import DashboardHeadline from "../../shared/DashboardHeadline";
import "../customers/Customer.css";

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  logo: Yup.string().required("Required"),
});

const initialValues = {
  name: "",
  logo: "",
};

const AddNewWithdrawerMethod = ({ func }) => {
  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
  };

  const handleClose = () => {
    func(false);
  };

  return (
    <div className="TransContainer">
      <DashboardHeadline>Add New Withdrawer Method</DashboardHeadline>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="FieldRow">
            <div className="FieldGroup">
              <label htmlFor="name">Method Name</label>
              <Field type="text" name="name" id="name" className="Input" />
              <ErrorMessage name="name" component="div" />
            </div>

            <div className="FieldGroup">
              <label htmlFor="logo">Logo</label>
              <Field type="file" name="logo" id="MethodLogo" />
              <ErrorMessage name="logo" component="div" />
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

AddNewWithdrawerMethod.propTypes = {
  func: PropTypes.func,
};

export default AddNewWithdrawerMethod;
