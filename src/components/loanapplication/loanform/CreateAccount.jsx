import { useState, useEffect } from "react";
import PropTypes from "prop-types"
import { useFormikContext } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import ConfirmField from "./ConfirmField";
import Headline from "../../shared/Headline";
import "./Form.css";

const CreateAccount = ({handleSubmit}) => {

  const { values, setFieldValue } = useFormikContext();
  const { password, confirmpassword } = values;
  const [isValid, setIsValid] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (fieldName, event) => {
    // Update the field value as the user types
    setFieldValue(fieldName, event.target.value);
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
    handleValidation();
    handleRecaptcha();
  }, [password, confirmpassword]);

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
                <button
                  type="button"
                  className="BtnNoAction"
                >
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
      </div>
    </div>
  );
};

CreateAccount.propTypes = {
  handleSubmit: PropTypes.func
}

export default CreateAccount;
