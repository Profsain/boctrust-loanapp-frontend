import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useFormikContext } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import ConfirmField from "./ConfirmField";
import Headline from "../../shared/Headline";
import "./Form.css";

const CreateAccount = ({ handleSubmit }) => {
  const { values, setFieldValue } = useFormikContext();
  const { password, confirmpassword } = values;
  const [isValid, setIsValid] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleInputChange = (fieldName, event) => {
    // Update the field value as the user types
    setFieldValue(fieldName, event.target.value);
  };

  const validPassword = () => {
    // check if password is at least 8 characters with at least 1 number
    // 1 uppercase letter, 1 lowercase letter, and 1 special character
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (passwordRegex.test(password)) {
      setIsValid(true);
      setPasswordError("");
    } else {
      setIsValid(false);
      setPasswordError(
        "Password must be at least 8 characters with at least 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character"
      );
    }
  };

  const handleValidation = () => {
    // Check if the passwords match
    if (password === confirmpassword) {
      setIsValid(true);
      setErrorMsg("");
    } else {
      setIsValid(false);
      setErrorMsg("Passwords do not match");
    }
  };
  
  const handleRecaptcha = (value) => {
    if (value) {
      setIsValid(true);
      setErrorMsg("");
    } else {
      setIsValid(false);
      setErrorMsg("Please complete the recaptcha");
    }
  };

  useEffect(() => {
    validPassword();
    handleValidation();
    // handleRecaptcha();
  }, [password, confirmpassword]);

  useEffect(() => {
    validPassword();
    // handleRecaptcha();
  }, [password]);

  return (
    <div className="SignUpContainer">
      <div className="container SignUpInner">
        <Headline color="#000" text="Create Login / User Details" />
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <ConfirmField
              placeholderText="Username"
              fieldName="username"
              type="text"
              values={values}
              func={handleInputChange}
            />
            <ConfirmField
              placeholderText="Password"
              fieldName="password"
              type="password"
              values={values}
              func={handleInputChange}
            />
            <ConfirmField
              placeholderText="Confirm Password"
              fieldName="confirmpassword"
              type="password"
              values={values}
              func={handleInputChange}
            />
          </div>
          <div className="col-sm-12 col-md-4 RecaptchaBox">
            <div className="RecaptchaBadge ">
              <ReCAPTCHA
                sitekey="6Lfm1MgmAAAAAJVycYHLFujgGixm-JkyY2gv-r9o"
                onChange={handleRecaptcha}
              />
            </div>

            <div className="ProceedBtn">
              {!isValid ? (
                <button type="button" className="BtnNoAction">
                  Create Account
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="BtnAction BtnSecondary BtnCreate"
                >
                  Create Account
                </button>
              )}
            </div>
          </div>
        </div>
        <p className="Error">{errorMsg}</p>
        <p className="Error">{passwordError}</p>
      </div>
    </div>
  );
};

CreateAccount.propTypes = {
  handleSubmit: PropTypes.func,
};

export default CreateAccount;
