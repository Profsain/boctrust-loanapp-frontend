import { useState } from "react";
import PropTypes from "prop-types";
// formik and yup for form data management
import { Formik, Form, Field } from "formik";
import validationSchema from "./formvalidation";
import Headline from "../../shared/Headline";
import TextInput from "./formcomponents/TextInput";
import "./Form.css";

// loan form component
const LoanForm = ({ data }) => {
  const [step, setStep] = useState(1);
  const [stepImg, setStepImg] = useState("images/step1.png");
  // handle form submit/move to next step
  const handleSubmit = (values, { setSubmitting }) => {
    // handle form submition to backend here
    console.log('Form data', values);
    if (step === 1) {
      setStep(2);
      setStepImg("images/step2.png");
    } else if (step === 2) {
      setStep(3);
      setStepImg("images/step3.png");
    } else if (step === 3) {
      setStep(4);
      setStepImg("images/step4.png");
    } else {
      // submit form
      setSubmitting(false);
    }
  };

  // handle previous step
  const handlePrevious = () => {
    if (step === 2) {
      setStep(1);
      setStepImg("images/step1.png");
    } else if (step === 3) {
      setStep(2);
      setStepImg("images/step2.png");
    } else if (step === 4) {
      setStep(3);
      setStepImg("images/step3.png");
    }
  };

  return (
    <div className="container-fluid FormContainer">
      <div className="container">
        <div className="row">
          {/* left loan form section */}
          <div className="col-sm-12 col-md-8 FormInputBox">
            {/* formik form */}
            <div>
              <Formik
                initialValues={{
                  loanamount: "",
                  careertype: "",
                  numberofmount: "",
                  loanpurpose: [],
                  bvnnumber: "",
                  title: "",
                  firstname: "",
                  lastname: "",
                  email: "",
                  phonenumber: "",
                  dob: "",
                  maritalstatus: "",
                  noofdependants: "",
                  educationlevel: "",
                  howdidyouhearaboutus: "",
                  houseaddress: "",
                  state: "",
                  lga: "",
                  stateoforigin: "",
                  ippis: "",
                  servicenumber: "",
                  staffidcard: "",
                  nextofkin: {
                    firstname: "",
                    lastname: "",
                    phonenumber: "",
                    relationship: "",
                    residentialaddress: "",
                  }
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    {step === 1 && (
                      <>
                        <div id="Step1">
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
                          {/* loan cal result */}
                          <div className="LoanCal">
                            <Headline
                              fontSize="22px"
                              align="left"
                              text="Loan:"
                            />
                            <h4>
                              N550,000 <span> for </span>11 <span>months</span>
                            </h4>
                            <Headline
                              fontSize="22px"
                              align="left"
                              text="Monthly Repayment:"
                            />
                            <h4>N50,000</h4>
                          </div>
                          <div className="Purpose">
                            <Headline
                              fontSize="24px"
                              spacer="28px 0 0 0"
                              align="left"
                              color="#000"
                              text="Purpose of Loan"
                            />

                            <div className="CheckboxContainer">
                              <label className="CheckboxGroup">
                                <Field
                                  type="checkbox"
                                  name="loanpurpose"
                                  value="school fees"
                                />
                                School Fees
                              </label>
                              <label className="CheckboxGroup">
                                <Field
                                  type="checkbox"
                                  name="loanpurpose"
                                  value="business support"
                                />
                                Business Support
                              </label>
                              <label className="CheckboxGroup">
                                <Field
                                  type="checkbox"
                                  name="loanpurpose"
                                  value="travel"
                                />
                                Travel
                              </label>
                            </div>
                            <div className="CheckboxContainer">
                              <label className="CheckboxGroup">
                                <Field
                                  type="checkbox"
                                  name="loanpurpose"
                                  value="car"
                                />
                                Car
                              </label>
                              <label className="CheckboxGroup">
                                <Field
                                  type="checkbox"
                                  name="loanpurpose"
                                  value="personal"
                                />
                                Personal
                              </label>
                              <label className="CheckboxGroup">
                                <Field
                                  type="checkbox"
                                  name="loanpurpose"
                                  value="other"
                                />
                                Other
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="ButtonContainer">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="BtnAction BtnSecondary"
                          >
                            Next
                          </button>
                        </div>
                      </>
                    )}

                    {step === 2 && (
                      <>
                        <div id="Step2">
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
                          {/* loan cal result */}
                          <div className="LoanCal">
                            <Headline
                              fontSize="22px"
                              align="left"
                              text="Loan:"
                            />
                            <h4>
                              N550,000 <span> for </span>11 <span>months</span>
                            </h4>
                            <Headline
                              fontSize="22px"
                              align="left"
                              text="Monthly Repayment:"
                            />
                            <h4>N50,000</h4>
                          </div>
                          <div className="Purpose">
                            <Headline
                              fontSize="24px"
                              spacer="28px 0 0 0"
                              align="left"
                              color="#000"
                              text="Purpose of Loan"
                            />

                            <div className="CheckboxContainer">
                              <label className="CheckboxGroup">
                                <Field
                                  type="checkbox"
                                  name="loanpurpose"
                                  value="school fees"
                                />
                                School Fees
                              </label>
                              <label className="CheckboxGroup">
                                <Field
                                  type="checkbox"
                                  name="loanpurpose"
                                  value="business support"
                                />
                                Business Support
                              </label>
                              <label className="CheckboxGroup">
                                <Field
                                  type="checkbox"
                                  name="loanpurpose"
                                  value="travel"
                                />
                                Travel
                              </label>
                            </div>
                            <div className="CheckboxContainer">
                              <label className="CheckboxGroup">
                                <Field
                                  type="checkbox"
                                  name="loanpurpose"
                                  value="car"
                                />
                                Car
                              </label>
                              <label className="CheckboxGroup">
                                <Field
                                  type="checkbox"
                                  name="loanpurpose"
                                  value="personal"
                                />
                                Personal
                              </label>
                              <label className="CheckboxGroup">
                                <Field
                                  type="checkbox"
                                  name="loanpurpose"
                                  value="other"
                                />
                                Other
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="ButtonContainer">
                          <button
                            type="button"
                            onClick={handlePrevious}
                            className="BtnAction BtnPrimary"
                          >
                            Previous
                          </button>
                          {/* next form page btn */}
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="BtnAction BtnSecondary"
                          >
                            Next
                          </button>
                        </div>
                      </>
                    )}

                    {step === 3 && (
                      <>
                        {/* Render fields for login details */}
                        {/* Add validation schema for login details */}
                        {/* Submit button to submit the form */}
                      </>
                    )}
                  </Form>
                )}
              </Formik>
            </div>
          </div>

          {/* right loan step section */}
          <div className="col-sm-12 col-md-4 Step">
            <img src={stepImg} alt={step} />
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
