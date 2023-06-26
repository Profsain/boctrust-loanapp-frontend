import { useFormikContext } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import ConfirmField from "./ConfirmField";
import Headline from "../../shared/Headline";
import "./Form.css";

const CreateAccount = () => {

  const { values, setFieldValue } = useFormikContext();
  const handleInputChange = (fieldName, event) => {
    // Update the field value as the user types
    setFieldValue(fieldName, event.target.value);
    console.log("values after change", values.fieldName);
  };

  const handleRecaptcha = (value) => {
    console.log("recaptcha value", value);
  };

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
              <button
                type="button"
                // onClick={handleNext}
                // disabled={isSubmitting}
                className="BtnAction BtnSecondary"
                style={{ fontSize: "22px", width: "100%" }}
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
