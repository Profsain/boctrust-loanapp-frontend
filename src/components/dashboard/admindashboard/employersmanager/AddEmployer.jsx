import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DashboardHeadline from "../../shared/DashboardHeadline";
import "../../dashboardcomponents/transferdashboard/Transfer.css";
import BocButton from "../../shared/BocButton";

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  employersName: Yup.string().required("Employers name is required"),
  employersAddress: Yup.string().required("Employer address is required"),
  dateAdded: Yup.string().required("Date is required"),
  mandateIssued: Yup.string().required("Mandate is required"),
});

const initialValues = {
  employersName: "",
  employersAddress: "",
  dateAdded: "",
  mandateIssued: "",
};

const AddEmployer = () => {
  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
  };

  return (
    <div>
      <div className="TransContainer">
        <DashboardHeadline>Add New Employer</DashboardHeadline>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="FieldRow">
              <div className="FieldGroup">
                <label htmlFor="employersName">Employers Name</label>
                <Field
                  type="text"
                  name="employersName"
                  id="employersName"
                  className="Input"
                />
                <ErrorMessage name="employersName" component="div" />
              </div>

              <div className="FieldGroup">
                <label htmlFor="employersAddress">Employers Address</label>
                <Field
                  type="text"
                  name="employersAddress"
                  id="employersAddress"
                  className="Input"
                />
                <ErrorMessage name="employersAddress" component="div" />
              </div>
            </div>
            <div className="FieldRow">
              <div className="FieldGroup">
                <label htmlFor="dateAdded">Date Added</label>
                <Field
                  type="date"
                  name="dateAdded"
                  id="dateAdded"
                  className="Input"
                />
                <ErrorMessage name="dateAdded" component="div" />
              </div>

              <div className="RadioCon">
                <label htmlFor="mandateIssued">Mandate Issued</label>
                <div className="Input">
                  <label className="MandateLabel">
                    <Field
                      type="radio"
                      name="mandateIssued"
                      value="Yes"
                      className="Gap"
                    />
                    Yes
                  </label>
                  <label className="MandateLabel">
                    <Field
                      type="radio"
                      name="mandateIssued"
                      value="No"
                      className="Gap"
                    />
                    No
                  </label>
                </div>

                <ErrorMessage name="mandateIssued" component="div" />
              </div>
            </div>

            <div className="BtnContainer">
              <BocButton
                fontSize="1.6rem"
                type="submit"
                bgcolor="#ecaa00"
                bradius="18px"
              >
                Add Employer
              </BocButton>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddEmployer;
