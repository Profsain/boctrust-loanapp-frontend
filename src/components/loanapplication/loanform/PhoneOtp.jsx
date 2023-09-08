import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useFormikContext } from "formik";
import ConfirmField from "./ConfirmField";
import Headline from "../../shared/Headline";
import "./Form.css";

const PhoneOtp = ({ handleSubmit, phoneNumber = "08099999999" }) => {
  const { values, setFieldValue } = useFormikContext();
  const [errorMsg, setErrorMsg] = useState("");
  const [editNumber, setEditNumber] = useState(false);
  const [resendOtp, setResendOtp] = useState(false);

  const handleInputChange = (fieldName, event) => {
    // Update the field value as the user types
    setFieldValue(fieldName, event.target.value);
  };

  return (
    <div className="SignUpContainer">
      <div className="container SignUpInner">
        <Headline
          color="#000"
          text={`A 6 digit OTP has been sent to your phone number ${phoneNumber}`}
        />
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <ConfirmField
              placeholderText="Enter OTP sent to your phone number"
              fieldName="otp"
              type="text"
              values={values}
              func={handleInputChange}
            />
          </div>
          <div className="ProceedBtn">
            {!resendOtp ? (
              <button type="button" className="BtnNoAction">
                Resend OTP
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="BtnAction BtnSecondary BtnCreate"
              >
                Confirm OTP
              </button>
            )}
          </div>
        </div>
      </div>
      <p className="Error">{errorMsg}</p>
    </div>
  );
};

PhoneOtp.propTypes = {
  handleSubmit: PropTypes.func,
  phoneNumber: PropTypes.string,
};

export default PhoneOtp;
