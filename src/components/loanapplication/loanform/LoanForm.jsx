import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
// formik and yup for form data management
import { Formik, Form, Field } from "formik";
import validationSchema from "./formvalidation";
// state and lga
import NaijaStates from "naija-state-local-government";
import calculatorfunc from "../../shared/calculatorfunc";
import Headline from "../../shared/Headline";
import TextInput from "./formcomponents/TextInput";
import SelectField from "./formcomponents/SelectField";
import "./Form.css";
import PhotoCapture from "./photocapture/PhotoCapture";
import ConfirmData from "./ConfirmData";
import CreateAccount from "./CreateAccount";

// loan form component
const LoanForm = ({ data }) => {
  // data from loan home
  const { loanamount, careertype } = data;
  const [noofmonth, setNoofmonth] = useState(1);
  const [currentLoanAmount, setCurrentLoanAmount] = useState(
    parseInt(loanamount)
  );
  const [interestResult, setInterestResult] = useState(0);

  const [step, setStep] = useState(1);
  const [showForm, setShowForm] = useState(true);
  const [stepImg, setStepImg] = useState("images/step1.png");
  const [state, setState] = useState("");
  const [lga, setLga] = useState([]);
  const [captureImg, setCaptureImg] = useState("");

  // calculate interest rate
  useEffect(() => {
    // calculator loan amount
    const loanCal = calculatorfunc(
      parseInt(currentLoanAmount),
      noofmonth * 30,
      6
    );
    setInterestResult(loanCal);
  }, [currentLoanAmount, noofmonth]);

  // scroll to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step, showForm]);

  const loanTotal = parseInt(currentLoanAmount) + interestResult;
  const monthlyPay = (loanTotal / parseInt(noofmonth)).toFixed();

  // state and lgas
  const ngState = NaijaStates.states();
  const lgas = lga.lgas;
  // handle select state
  const handleSelectState = (e) => {
    setState(e.target.value);
    setLga(NaijaStates.lgas(e.target.value));
  };

  // BVN Varification
  const [isBvnVarified, setIsBvnVarified] = useState(false);

  // handle bvn varification
  const ref = useRef(null);
  const handleBvnVarification = () => {
    setIsBvnVarified(true);
  };

  console.log(ref.current);
  // handle form submit/move to next step
  const handleSubmit = (values, { setSubmitting }) => {
    // handle form submition to backend here
    // submit form
    setSubmitting(false);
  };

  // handle proceed to account creation
  const handleProceed = () => {
    const formContainer = document.querySelector(".FormContainer");
    formContainer.style.padding = "12px";
    setShowForm(false);
  };

  // handle next step, check validation schema and move to next step
  const handleNext = () => {
    if (step === 1) {
      setStep(2);
      setStepImg("images/step2.png");
    } else if (step === 2) {
      if (careertype.toLowerCase() === "government employee") {
        setStep(3);
        setStepImg("images/step3.png");
      } else {
        setStep(4);
        setStepImg("images/step4.png");
      }
    } else if (step === 3) {
      setStep(4);
      setStepImg("images/step4.png");
    } else if (step === 4) {
      setStep(5);
      setStepImg("images/step5.png");
    } else if (step === 5) {
      setStep(6);
      setStepImg("images/step5.png");
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
    } else if (step === 5) {
      setStep(4);
      setStepImg("images/step4.png");
    }
  };

  return (
    <div className="container-fluid FormContainer">
      <div>
        {/* formik form */}
        <div>
          <Formik
            initialValues={{
              loanamount: loanamount,
              careertype: careertype,
              numberofmonth: "",
              loanpurpose: [],
              other: false,
              otherpurpose: "",
              bvnnumber: "",
              title: "",
              firstname: "",
              lastname: "",
              email: "",
              phonenumber: "",
              dob: "",
              maritalstatus: "",
              noofdependent: "",
              educationlevel: "",
              howdidyouhearaboutus: "",
              houseaddress: "",
              stateofresidence: "",
              lga: "",
              stateoforigin: "",
              ippis: "",
              servicenumber: "",
              staffidcard: "",
              idcardnotinclude: false,
              nkinfirstname: "",
              nkinlastname: "",
              nkinphonenumber: "",
              nkinrelationship: "",
              nkinresidentialaddress: "",
              employername: "",
              employeraddress: "",
              employmentstartdate: "",
              netmonthlyincome: "",
              totalannualincome: "",
              officialemail: "",
              uploadpayslip: "",

              // financial information
              salaraybankname: "",
              salaryaccountnumber: "",
              sameasaboveaccount: false,
              disbursementbankname: "",
              disbursementaccountnumber: "",
              hasloan: "",
              currentmonthlyplanrepaymentamount: "",
              estimatedmonthlylivingexpense: "",
              buyoverloan: "",
              beneficiaryname: "",
              beneficiarybank: "",
              beneficiaryaccountnumber: "",
              liquidationbalance: "",
              deductions: "",
              guarantee: "",

              // agree & sign
              acceptterms: false,
              acceptpolicy: false,
              sharemyremita: false,
              agreefullname: "",
              agreedate: "",
              signature: "",
              photocapture: { captureImg },
              haveagent: "",
              agentname: "",
              username: "",
              password: "",
              confirmpassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            innerRef={ref}
          >
            {({ isSubmitting, values }) => (
              <>
                {showForm ? (
                  <div className="container">
                    <div className="row">
                      {/* left loan form section */}
                      <div className="col-sm-12 col-md-8 FormInputBox">
                        <Form>
                          {/* loan first step section */}
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
                                <img
                                  src="images/naira.png"
                                  alt=""
                                  className="NairaI"
                                />
                                <div>
                                  <label htmlFor="loanamount">
                                    How much you want to borrow
                                  </label>
                                  <Field
                                    type="text"
                                    name="loanamount"
                                    className="TextInput"
                                    value={currentLoanAmount}
                                    onChange={(e) =>
                                      setCurrentLoanAmount(e.target.value)
                                    }
                                  />
                                  {currentLoanAmount === "" ? (
                                    <p className="ErrorMsg">Required</p>
                                  ) : null}
                                  {parseInt(currentLoanAmount) < 10000 ||
                                  parseInt(currentLoanAmount) > 2000000 ? (
                                    <p className="ErrorMsg">
                                      Enter loan amount between 10000 to 2000000
                                      Naira only
                                    </p>
                                  ) : null}
                                </div>

                                {/* repayments months */}
                                <div>
                                  <label htmlFor="numberofmonth">
                                    Enter Number of Months
                                  </label>
                                  <input
                                    type="number"
                                    name="numberofmonth"
                                    className="TextInput"
                                    value={noofmonth || 1}
                                    min="1"
                                    max="22"
                                    onChange={(e) =>
                                      setNoofmonth(e.target.value)
                                    }
                                  />
                                  {noofmonth === "" ? (
                                    <p className="ErrorMsg">Required</p>
                                  ) : null}
                                  {noofmonth > 22 ? (
                                    <p className="ErrorMsg">
                                      Enter between 1 to 22 months only
                                    </p>
                                  ) : null}
                                </div>

                                {/* loan cal result */}
                                <div className="LoanCal">
                                  <Headline
                                    fontSize="22px"
                                    align="left"
                                    text="Loan:"
                                  />
                                  <h4>
                                    <span className="CalNaira">
                                      <img src="images/naira.png" alt="" />
                                    </span>
                                    {loanTotal || loanamount} <span> for </span>
                                    {noofmonth}
                                    {noofmonth > 1 ? (
                                      <span> months</span>
                                    ) : (
                                      <span> month</span>
                                    )}
                                  </h4>
                                  <Headline
                                    fontSize="22px"
                                    align="left"
                                    text="Monthly Repayment:"
                                  />
                                  <h4>
                                    <span className="CalNaira">
                                      <img src="images/naira.png" alt="" />
                                    </span>
                                    {monthlyPay}
                                  </h4>
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
                                      <Field type="checkbox" name="other" />
                                      Other
                                    </label>
                                  </div>
                                  {values.other && (
                                    <div>
                                      <TextInput
                                        label="Please specify"
                                        name="otherpurpose"
                                        type="text"
                                      />
                                    </div>
                                  )}
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

                          {/* customer details section */}
                          {step === 2 && (
                            <>
                              <div id="Step2">
                                <Headline
                                  spacer="12px 0"
                                  color="#000"
                                  text="Start your application process"
                                />
                                {!isBvnVarified ? (
                                  <div id="BvnVarification">
                                    <TextInput
                                      label="Please enter your BVN to proceed"
                                      name="bvnnumber"
                                      type="text"
                                    />
                                    <div className="ButtonContainer">
                                      <button
                                        className="BtnAction BtnPrimary"
                                        type="button"
                                        onClick={handleBvnVarification}
                                      >
                                        Verify your BVN
                                      </button>
                                    </div>
                                  </div>
                                ) : (
                                  <div>
                                    {/* customer details section */}
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
                                        <option value="divorced">
                                          Divorced
                                        </option>
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
                                        <option value="more than 7">
                                          More than 7
                                        </option>
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
                                        <option value="secondary">
                                          Secondary
                                        </option>
                                        <option value="tertiary">
                                          Tertiary
                                        </option>
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
                                        <option value="facebook">
                                          Facebook
                                        </option>
                                        <option value="instagram">
                                          Instagram
                                        </option>
                                        <option value="twitter">Twitter</option>
                                        <option value="linkedin">
                                          Linkedin
                                        </option>
                                        <option value="google">Google</option>
                                        <option value="friend">Friend</option>
                                        <option value="colleague">
                                          Colleague
                                        </option>
                                        <option value="agent">
                                          Buctrust Agent
                                        </option>
                                        <option value="other">Other</option>
                                      </SelectField>
                                    </div>

                                    {/* Input row sectioin */}
                                    <div className="InputRow">
                                      <SelectField
                                        label="State of Resident"
                                        name="stateofresidence"
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
                                      <SelectField
                                        label="LGA of Resident"
                                        name="lga"
                                      >
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

                                    {/* Staff ID card upload */}
                                    <div>
                                      {careertype.toLowerCase() ===
                                      "government employee" ? (
                                        <div>
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

                                          {/* Input row sectioin */}
                                          <div className="FileUploadBox ">
                                            <Headline
                                              color="#000"
                                              fontSize="22px"
                                              text="Upload Staff ID Card"
                                            />
                                            <div>
                                              <input
                                                type="file"
                                                name="valididcard"
                                                accept="image/png, .svg, .jpg, .jpeg, .pdf"
                                                className="UploadFile"
                                              />
                                            </div>
                                          </div>
                                          <div className="CheckboxGroup">
                                            <label className="CheckInput">
                                              <Field
                                                type="checkbox"
                                                name="idcardnotinclude"
                                              />
                                              My work ID card does not include
                                              my picture and signature
                                            </label>
                                          </div>
                                        </div>
                                      ) : (
                                        <div className="FileUploadBox ">
                                          <Headline
                                            color="#000"
                                            fontSize="22px"
                                            text="Upload Valid ID Card"
                                          />

                                          <input
                                            type="file"
                                            name="valididcard"
                                            accept="image/png, .svg, .jpg, .jpeg, .pdf"
                                            className="UploadFile"
                                          />
                                        </div>
                                      )}
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
                                        name="nkinrelationship"
                                      >
                                        <option value=""></option>
                                        <option value="father">Father</option>
                                        <option value="mother">Mother</option>
                                        <option value="brother">Brother</option>
                                        <option value="sister">Sister</option>
                                        <option value="husband">Husband</option>
                                        <option value="wife">Wife</option>
                                        <option value="son">Son</option>
                                        <option value="daughter">
                                          Daughter
                                        </option>
                                        <option value="uncle">Uncle</option>
                                        <option value="aunt">Aunt</option>
                                        <option value="nephew">Nephew</option>
                                        <option value="niece">Niece</option>
                                        <option value="cousin">Cousin</option>
                                        <option value="other">other</option>
                                      </SelectField>
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
                                        onClick={handleNext}
                                        disabled={isSubmitting}
                                        className="BtnAction BtnSecondary"
                                      >
                                        Next
                                      </button>
                                    </div>
                                  </div>
                                )}
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
                                {/* to be change to dropdown list and input field */}
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
                                  type="date"
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

                                {/* pay slip upload private employee*/}
                                {careertype.toLowerCase() ===
                                "private employee" ? (
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
                                ) : null}
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

                          {/* financial information */}
                          {step === 4 && (
                            <>
                              <div id="Step4">
                                <Headline
                                  spacer="12px 0"
                                  color="#000"
                                  text="Financial Information"
                                />
                                <div>
                                  <Headline
                                    align="left"
                                    fontSize="22px"
                                    spacer="35px 0 -16px 0"
                                    color="#000"
                                    text="Salary Account Details"
                                  />

                                  {/* Input row sectioin */}
                                  <div className="InputRow">
                                    <TextInput
                                      label="Bank Name"
                                      name="salarybankname"
                                      type="text"
                                    />
                                    <div className="Space"></div>
                                    <TextInput
                                      label="Account Number"
                                      name="salaryaccountnumber"
                                      type="text"
                                    />
                                  </div>
                                </div>

                                <div id="Disbursement">
                                  <Headline
                                    align="left"
                                    fontSize="22px"
                                    spacer="35px 0 -16px 0"
                                    color="#000"
                                    text="Disbursement Account Details"
                                  />
                                  <div className="CheckboxContainer">
                                    <label className="CheckboxGroup">
                                      <Field
                                        type="checkbox"
                                        name="sameasaboveaccount"
                                      />
                                      Same as above Account
                                    </label>
                                  </div>

                                  {!values.sameasaboveaccount && (
                                    <div className="InputRow">
                                      <TextInput
                                        label="Bank Name"
                                        name="disbursementbankname"
                                        type="text"
                                      />
                                      <div className="Space"></div>
                                      <TextInput
                                        label="Account Number"
                                        name="disbursementaccountnumber"
                                        type="text"
                                      />
                                    </div>
                                  )}
                                </div>

                                <div id="ExistingLoan">
                                  <Headline
                                    align="left"
                                    fontSize="20px"
                                    spacer="28px 0 12px 0"
                                    color="#000"
                                    text="Do you have any existing loan?"
                                  />
                                  <div className="RadioRow">
                                    <div className="RadioField">
                                      <label>
                                        <Field
                                          type="radio"
                                          name="hasloan"
                                          value="yes"
                                        />
                                      </label>
                                      Yes
                                    </div>
                                    <div className="RadioField">
                                      <label>
                                        <Field
                                          type="radio"
                                          name="hasloan"
                                          value="no"
                                        />
                                      </label>
                                      No
                                    </div>
                                  </div>
                                  {values.hasloan === "yes" && (
                                    <div className="InputRow">
                                      <div>
                                        <img
                                          src="images/naira.png"
                                          alt=""
                                          className="NairaI FinNaira"
                                        />
                                        <TextInput
                                          label="Current monthly plan repayment amount"
                                          name="currentmonthlyplanrepaymentamount"
                                          type="text"
                                        />
                                      </div>
                                      <div className="Space"></div>
                                      <div>
                                        <img
                                          src="images/naira.png"
                                          alt=""
                                          className="NairaI
                                          FinNaira FinNaira2"
                                        />
                                        <TextInput
                                          label="Estimated monthly living expense"
                                          name="estimatedmonthlylivingexpense"
                                          type="text"
                                        />
                                      </div>
                                    </div>
                                  )}
                                </div>

                                <div>
                                  <Headline
                                    align="left"
                                    fontSize="22px"
                                    spacer="28px 0 12px 0"
                                    color="#000"
                                    text="Is this a Buy Over Loan?"
                                  />
                                  <div className="RadioRow">
                                    <div className="RadioField">
                                      <label>
                                        <Field
                                          type="radio"
                                          name="buyoverloan"
                                          value="yes"
                                        />
                                      </label>
                                      Yes
                                    </div>
                                    <div className="RadioField">
                                      <label>
                                        <Field
                                          type="radio"
                                          name="buyoverloan"
                                          value="no"
                                        />
                                      </label>
                                      No
                                    </div>
                                  </div>
                                </div>

                                {values.buyoverloan === "yes" ? (
                                  <div id="BuyBackLoan">
                                    {/* Input row sectioin */}
                                    <div className="InputRow">
                                      <TextInput
                                        label="Beneficiary Name"
                                        name="beneficiaryname"
                                        type="text"
                                      />
                                      <div className="Space"></div>
                                      <TextInput
                                        label="Bank Name"
                                        name="beneficiarybank"
                                        type="text"
                                      />
                                    </div>
                                    <div className="InputRow">
                                      <TextInput
                                        label="Account Number"
                                        name="beneficiaryaccountnumber"
                                        type="text"
                                      />
                                      <div className="Space"></div>
                                      <TextInput
                                        label="Liquidation Balance"
                                        name="liquidationbalance"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                ) : null}

                                <div id="Repayment">
                                  <Headline
                                    fontSize="22px"
                                    color="#000"
                                    align="left"
                                    text="Method of Loan Repayment"
                                  />
                                  <div className="DeductionFrom">
                                    <Headline
                                      fontSize="16px"
                                      color="#000"
                                      align="left"
                                      text="1.0 Loan against income/earnings"
                                    />
                                    {careertype.toLowerCase() ===
                                    "government employee" ? (
                                      <div>
                                        <div>
                                          <label>
                                            <Field
                                              type="checkbox"
                                              name="deductions"
                                              value="remita"
                                            />
                                          </label>
                                          Deduction from salary via Remita
                                          (Government employee)
                                        </div>
                                        <div>
                                          <label>
                                            <Field
                                              type="checkbox"
                                              name="deductions"
                                              value="ippis"
                                            />
                                          </label>
                                          Deduction from source via IPPIS
                                          (Government employee)
                                        </div>
                                      </div>
                                    ) : (
                                      <div>
                                        <label>
                                          <Field
                                            type="checkbox"
                                            name="deductions"
                                            value="cheque"
                                          />
                                        </label>
                                        Post-dated cheque or standing order
                                        (private employee or business owner)
                                      </div>
                                    )}
                                  </div>

                                  <div className="DeductionFrom">
                                    <Headline
                                      fontSize="16px"
                                      color="#000"
                                      align="left"
                                      text="2.0 Guarantee"
                                    />
                                    <div>
                                      <label>
                                        <Field
                                          type="checkbox"
                                          name="guarantee"
                                          value="guranteeofemployer"
                                        />
                                      </label>
                                      Gurantee of Employer
                                    </div>
                                    <div>
                                      <label>
                                        <Field
                                          type="checkbox"
                                          name="gurantee"
                                          value="individualguarantee"
                                        />
                                      </label>
                                      Individual Gurantee
                                    </div>
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

                          {/* agree and sign */}
                          {step === 5 && (
                            <>
                              <div id="Step5">
                                <Headline
                                  spacer="12px 0"
                                  color="#000"
                                  text="Agree, Sign and Submit"
                                />
                                <div>
                                  <Headline
                                    align="left"
                                    fontSize="20px"
                                    spacer="12px 0"
                                    color="#000"
                                    text="Declaration & Agreement"
                                  />

                                  <div className="DeductionFrom">
                                    <div>
                                      <label>
                                        <Field
                                          type="checkbox"
                                          name="acceptterms"
                                        />
                                      </label>
                                      I have read and understand and accept the{" "}
                                      <a href="/terms" target="_blank">
                                        terms and condition
                                      </a>{" "}
                                      of this service.
                                    </div>
                                    <div>
                                      <label>
                                        <Field
                                          type="checkbox"
                                          name="acceptpolicy"
                                        />
                                      </label>
                                      I accept the{" "}
                                      <a href="/privacy">Privacy Policy</a>
                                    </div>
                                  </div>
                                  <div className="DeductionFrom">
                                    {/* {careertype.toLowerCase() ===
                                    "government employee" ? (
                                      <div>
                                        <label>
                                          <Field
                                            type="checkbox"
                                            name="sharemyremita"
                                          />
                                        </label>
                                        I agree to share my Remita data on this
                                        platform
                                      </div>
                                    ) : null} */}
                                  </div>

                                  {/* Input row sectioin */}
                                  <div className="InputRow">
                                    <TextInput
                                      label="Full Name"
                                      name="agreefullname"
                                      type="text"
                                    />
                                    <div className="Space"></div>
                                    <TextInput
                                      label="Date"
                                      name="agreedate"
                                      type="date"
                                    />
                                  </div>

                                  {/* have boctrust agent */}
                                  <div>
                                    <Headline
                                      align="left"
                                      fontSize="20px"
                                      spacer="12px 0"
                                      color="#000"
                                      text="Do you have a loan Officer?"
                                    />
                                    <div className="RadioRow">
                                      <div className="RadioField">
                                        <label>
                                          <Field
                                            type="radio"
                                            name="haveagent"
                                            value="yes"
                                          />
                                        </label>
                                        Yes
                                      </div>
                                      <div className="RadioField">
                                        <label>
                                          <Field
                                            type="radio"
                                            name="haveagent"
                                            value="no"
                                          />
                                        </label>
                                        No
                                      </div>
                                    </div>
                                    {values.haveagent === "yes" && (
                                      <TextInput
                                        label="Loan Officer's Name"
                                        name="agentname"
                                        type="text"
                                      />
                                    )}
                                  </div>
                                  <hr />
                                </div>

                                {/* signature upload */}
                                <div className="Signature">
                                  <div>
                                    <Headline
                                      spacer="14px 28px"
                                      fontSize="22px"
                                      text="Upload Signature (Sign on white paper)"
                                    />
                                  </div>
                                  <div>
                                    <Field
                                      type="file"
                                      name="signature"
                                      accept="image/png, .svg, .jpg, .jpeg, .pdf"
                                      className="UploadFile"
                                    />
                                  </div>
                                </div>

                                {/* selfi photoshot */}
                                <div className="SelfiCon">
                                  <Headline
                                    color="#000"
                                    text="Confirm your Identity"
                                  />
                                  <div id="CapturePhoto">
                                    <PhotoCapture func={setCaptureImg} />
                                  </div>
                                  <Headline
                                    fontSize="16px"
                                    text="Your identification document will help us to validate your identity."
                                  />
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
                                    Review
                                  </button>
                                </div>
                              </div>
                            </>
                          )}

                          {/* review and proceed */}
                          {step === 6 && (
                            <>
                              <div id="Step6">
                                <Headline
                                  spacer="28px 0 48px 0"
                                  color="#000"
                                  text="Review your Application Details to Proceed"
                                />

                                <div>
                                  <ConfirmData />
                                </div>

                                <div className="ButtonContainer">
                                  {/* proceed btn */}
                                  <button
                                    type="button"
                                    onClick={handleProceed}
                                    className="BtnAction BtnSecondary"
                                  >
                                    Proceed
                                  </button>
                                </div>
                              </div>
                            </>
                          )}
                        </Form>
                      </div>

                      {/* right loan step section */}
                      <div className="col-sm-12 col-md-4 Step">
                        <img src={stepImg} alt={step} />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="CreateAccount">
                    <CreateAccount />
                  </div>
                )}
              </>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

LoanForm.propTypes = {
  data: PropTypes.any,
};

export default LoanForm;
