import { useState } from "react";
import PropTypes from "prop-types";
// formik and yup for form data management
import { Formik, Form, Field } from "formik";
import validationSchema from "./formvalidation";
// state and lga
import NaijaStates from "naija-state-local-government";
import Headline from "../../shared/Headline";
import TextInput from "./formcomponents/TextInput";
import SelectField from "./formcomponents/SelectField";
import "./Form.css";

// loan form component
const LoanForm = ({ data }) => {
  console.log('Data from loan home', data)
  const [step, setStep] = useState(1);
  const [stepImg, setStepImg] = useState("images/step1.png");
  const [state, setState] = useState([]);
  const [lga, setLga] = useState([]);

  // state and lgas
  const ngState = NaijaStates.states();
  const lgas = lga.lgas;

  // handle select state
  const handleSelectState = (e) => {
    setState(e.target.value);
    setLga(NaijaStates.lgas(e.target.value));
  };

  // handle form submit/move to next step
  const handleSubmit = (values, { setSubmitting }) => {
    // handle form submition to backend here
    console.log("Form data", values);
    // submit form
    setSubmitting(false);
  };

  // handle next step, check validation schema and move to next step
  const handleNext = () => {
    if (step === 1) {
      setStep(2);
      setStepImg("images/step2.png");
    } else if (step === 2) {
      setStep(3);
      setStepImg("images/step3.png");
    } else if (step === 3) {
      setStep(4);
      setStepImg("images/step4.png");
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
                  numberofmonth: "",
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
                  stateofresident: "",
                  lga: "",
                  stateoforigin: "",
                  ippis: "",
                  servicenumber: "",
                  staffidcard: "",
                  nkinfirstname: "",
                  nkinlastname: "",
                  nkinphonenumber: "",
                  nkinrelationship: "",
                  nkinresidentialaddress: "",
                  // nextofkin: {
                  //   nkinfirstname: "",
                  //   nkinlastname: "",
                  //   nkinphonenumber: "",
                  //   nkinrelationship: "",
                  //   nkinresidentialaddress: "",
                  // },

                  // employer details
                  employername: "",
                  employeraddress: "",
                  employmentstartdate: "",
                  netmonthlyincome: "",
                  totalannualincome: "",
                  officialemail: "",
                  uploadpayslip: "",
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
                            name="numberofmont"
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
                            // disabled={isSubmitting}
                            onClick={handleNext}
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
                            text="Start your application process"
                          />

                          <TextInput
                            label="Please enter your BVN to proceed"
                            name="bvnnumber"
                            type="text"
                          />

                          <Headline
                            spacer="12px 0"
                            color="#000"
                            text="Customer Details"
                          />
                          {/* dropdown list */}
                          <SelectField label="Title" name="title">
                            <option value=""></option>
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Miss">Miss</option>
                            <option value="Dr">Dr</option>
                          </SelectField>

                          {/* Input row sectioin */}
                          <div className="InputRow">
                            <TextInput
                              label="First Name"
                              name="firstname"
                              type="text"
                            />
                            <div className="Space"></div>
                            <TextInput
                              label="Last Name"
                              name="lastname"
                              type="text"
                            />
                          </div>

                          <TextInput
                            label="Phone Number"
                            name="phonenumber"
                            type="tel"
                          />

                          {/* Input row sectioin */}
                          <div className="InputRow">
                            <TextInput
                              label="Date of Birth"
                              name="dob"
                              type="date"
                            />
                            <div className="Space"></div>
                            <TextInput
                              label="Email"
                              name="email"
                              type="email"
                            />
                          </div>

                          {/* Input row sectioin */}
                          <div className="InputRow">
                            <SelectField
                              label="Marital Status"
                              name="maritalstatus"
                            >
                              <option value=""></option>
                              <option value="single">Single</option>
                              <option value="married">Married</option>
                              <option value="divorced">Divorced</option>
                              <option value="widowed">Widowed</option>
                            </SelectField>
                            <div className="Space"></div>
                            <SelectField
                              label="No of Dependents"
                              name="noofdependent"
                            >
                              <option value=""></option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="more than 7">More than 7</option>
                            </SelectField>
                          </div>

                          {/* Input row sectioin */}
                          <div className="InputRow">
                            <SelectField
                              label="Highest Level of Education"
                              name="educationlevel"
                            >
                              <option value=""></option>
                              <option value="primary">Primary</option>
                              <option value="secondary">Secondary</option>
                              <option value="tertiary">Tertiary</option>
                              <option value="post graduate">
                                Post Graduate
                              </option>
                            </SelectField>
                            <div className="Space"></div>
                            <SelectField
                              label="How did you hear about us"
                              name="howdidyouhearaboutus"
                            >
                              <option value=""></option>
                              <option value="facebook">Facebook</option>
                              <option value="instagram">Instagram</option>
                              <option value="twitter">Twitter</option>
                              <option value="linkedin">Linkedin</option>
                              <option value="google">Google</option>
                              <option value="friend">Friend</option>
                              <option value="colleague">Colleague</option>
                              <option value="agent">Buctrust Agent</option>
                              <option value="other">Other</option>
                            </SelectField>
                          </div>

                          {/* Input row sectioin */}
                          <div className="InputRow">
                            <SelectField
                              label="State of Resident"
                              name="stateofresident"

                              value={state}
                              onChange={handleSelectState}
                            >
                              <option value=""></option>
                              {ngState.map((state) => (
                                <option key={state} value={state}>
                                  {state}
                                </option>
                              ))}
                            </SelectField>
                            <div className="Space"></div>
                            <TextInput
                              label="House Address"
                              name="houseaddress"
                              type="text"
                            />
                          </div>

                          {/* Input row sectioin */}
                          <div className="InputRow">
                            <SelectField label="LGA of Resident" name="lga">
                              <option value=""></option>
                              {lgas?.map((lga) => (
                                <option key={lga} value={lga}>
                                  {lga}
                                </option>
                              ))}
                            </SelectField>
                            <div className="Space"></div>
                            <SelectField
                              label="State of Origin"
                              name="stateoforigin"
                            >
                              <option value=""></option>
                              {ngState.map((state) => (
                                <option key={state} value={state}>
                                  {state}
                                </option>
                              ))}
                            </SelectField>
                          </div>

                          {/* Input row sectioin */}
                          <div className="InputRow">
                            <TextInput
                              label="IPPIS Number"
                              name="ippis"
                              type="text"
                            />
                            <div className="Space"></div>
                            <TextInput
                              label="Service Number"
                              name="servicenumber"
                              type="text"
                            />
                          </div>

                          {/* Staff ID card upload */}
                          <div className="FileUploadBox ">
                            <Headline
                              color="#000"
                              fontSize="22px"
                              text="Staff ID Card"
                            />
                            <input
                              type="file"
                              name="staffidcard"
                              accept="image/png, .svg, .jpg, .jpeg, .pdf"
                              className="UploadFile"
                            />
                            <hr />
                          </div>
                          {/* Next off kin information */}
                          <div className="NextOfKin">
                            <Headline
                              fontSize="24px"
                              spacer="48px 0 0 0"
                              align="left"
                              color="#000"
                              text="Next of Kin Information"
                            />
                            {/* Input row sectioin */}
                            <div className="InputRow">
                              <TextInput
                                label="First Name"
                                name="nkinfirstname"
                                type="text"
                              />
                              <div className="Space"></div>
                              <TextInput
                                label="Last Name"
                                name="nkinlastname"
                                type="text"
                              />
                            </div>

                            {/* Input row sectioin */}
                            <div className="InputRow">
                              <TextInput
                                label="Phone Number"
                                name="nkinphonenumber"
                                type="tel"
                              />
                              <div className="Space"></div>
                              <TextInput
                                label="Residential Address"
                                name="nkinresidentialaddress"
                                type="text"
                              />
                            </div>
                            {/* select relationship */}
                            <SelectField
                              label="Select Relationship"
                              name="nkrelationship"
                            >
                              <option value=""></option>
                              <option value="father">Father</option>
                              <option value="mother">Mother</option>
                              <option value="brother">Brother</option>
                              <option value="sister">Sister</option>
                              <option value="husband">Husband</option>
                              <option value="wife">Wife</option>
                              <option value="son">Son</option>
                              <option value="daughter">Daughter</option>
                              <option value="uncle">Uncle</option>
                              <option value="aunt">Aunt</option>
                              <option value="nephew">Nephew</option>
                              <option value="niece">Niece</option>
                              <option value="cousin">Cousin</option>
                              <option value="other">other</option>
                            </SelectField>
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
                            type="button"
                            onClick={handleNext}
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
                        <div id="Step3">
                          <Headline
                            spacer="12px 0"
                            color="#000"
                            text="Employer Details"
                          />
                          <TextInput
                            label="Employer Name"
                            name="employername"
                            type="text"
                          />

                          <TextInput
                            label="Employer Address"
                            name="employeraddress"
                            type="text"
                          />

                          <TextInput
                            label="Employment Start Date"
                            name="employmentstartdate"
                            type="text"
                          />

                          <TextInput
                            label="Net Monthly Income"
                            name="netmonthlyincome"
                            type="text"
                          />

                          <TextInput
                            label="Total Annual Income"
                            name="totalannualincome"
                            type="text"
                          />

                          <TextInput
                            label="Official Email"
                            name="officialemail"
                            type="text"
                          />                         

                          {/* pay slip upload */}
                          <div className="FileUploadBox ">
                            <Headline
                              color="#000"
                              fontSize="22px"
                              text="Upload Pay Slip"
                            />
                            <input
                              type="file"
                              name="uploadpayslip"
                              accept="image/png, .svg, .jpg, .jpeg, .pdf"
                              className="UploadFile"
                            />
                           
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
                            type="button"
                            onClick={handleNext}
                            disabled={isSubmitting}
                            className="BtnAction BtnSecondary"
                          >
                            Next
                          </button>
                        </div>
                      </>
                    )}
                    {step === 4 && (
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
