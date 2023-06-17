import PropTypes from "prop-types";
// formik and yup for form data management
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import BocButton from "./formcomponents/BocButton";
import Headline from "../../shared/Headline";
import TextInput from "./formcomponents/TextInput"
import "./Form.css";

const LoanForm = ({ data }) => {
  return (
    <div className="container-fluid FormContainer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8 FormInputBox">
            <Headline
              spacer="12px 0"
              color="#000"
              text="Select loan amount and duration"
            />
            <Headline
              spacer="0"
              fontSize="16px"
              text="This is required to process this application"
            />
            {/* formik form */}
            <div>
              <Formik
                initialValues={{
                  loanamount: "",
                  numberofmount: "",
                  loanpurpose: "",
                }}
                validationSchema={Yup.object({
                  loanamount: Yup.number()
                    .min(10000, "Please enter amount from 10000 upto 2000000 ")
                    .max(
                      2000000,
                      "Please enter amount from 10000 upto 2000000 "
                    )
                    .required("Required"),
                  numberofmount: Yup.number()
                    .min(1, "Please enter a number from 1 to 24")
                    .max(24, "Please enter a number from 1 to 24")
                    .required("Required"),
                  loanpurpose: Yup.string().oneOf([
                    "school fees",
                    "business support",
                    "car",
                    "personal",
                    "travel",
                    "other",
                  ]),
                })}
                onSubmit={(values, { setSubmitting }) => {
                  console.log(values);
                  setSubmitting(false);
                }}
              >
                <form>
                  <TextInput
                    label="How much  you want to borrow"
                    name="loanamount"
                    type="text"
                  />
                  <TextInput
                    label="Enter Number of Months"
                    name="numberofmount"
                    type="text"
                  />
                </form>
              </Formik>
            </div>
          </div>

          {/* right loan step section */}
          <div className="col-sm-12 col-md-4 Step">
            <img src="images/step1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

LoanForm.propTypes = {
  data: PropTypes.any,
};

export default LoanForm;
