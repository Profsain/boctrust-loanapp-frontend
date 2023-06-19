import { useState } from "react";
// formik and yup for form handling and validation
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import "../Loan.css";
import Header from "../../shared/Header";
import Headline from "../../shared/Headline";
import LoanStep from "./loanStep";
import BocTrustMsg from "./BocTrustMsg";
import Testimonial from "./Testimonial";
import EmailSection from "./EmailSection";
import LoanForm from "../loanform/LoanForm";

const LoanHome = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [startObject, setStartObject] = useState();

  // handle email apply button
  const handleApplyBtn = () => {
    setIsOpened(true)
    setStartObject({})
  }

  return (
    <>
      {isOpened ? (
        <LoanForm data={startObject} />
      ) : (
        <div className="LoanHome">
          <Header imgurl="images/boctrustformheader.jpg" />
          <div className="TopSection">
            <div className="TopText">
              <Headline
                align="left"
                color="#fff"
                fontSize="3rem"
                text="Quick & easy loans for anyone"
              />
              <p>
                Take care of your personal needs or grow your small business
                with our quick loans
              </p>
            </div>
            <div>
              <Formik
                initialValues={{ loanamount: "", careertype: "" }}
                validationSchema={Yup.object({
                  loanamount: Yup.string().required("Required"),
                  careertype: Yup.string().required("Required"),
                })}
                onSubmit={(values, { setSubmitting }) => {
                  // send value to next page
                  setStartObject(values);
                  setSubmitting(false);
                  setIsOpened(true);
                }}
              >
                {(formik) => (
                  <form onSubmit={formik.handleSubmit} className="HeroCard">
                    <Headline spacer="8px 0" text="How much do you need?" />
                    <img src="images/naira.png" alt="" className="NairaIcon" />
                    <input
                      className="Field"
                      id="loanamount"
                      type="text"
                      {...formik.getFieldProps("loanamount")}
                    />
                    {formik.touched.loanamount && formik.errors.loanamount ? (
                      <p className="ErrorMsg">{formik.errors.loanamount}</p>
                    ) : null}

                    <Headline text=" Business Owner or Employee?" />
                    <select
                      className="Field"
                      id="careertype"
                      {...formik.getFieldProps("careertype")}
                    >
                      <option value="default">Select one</option>
                      <option value="Business Owner">Business Owner</option>
                      <option value="Employee">Government Employee</option>
                    </select>
                    {formik.touched.careertype && formik.errors.careertype ? (
                      <p className="ErrorMsg">{formik.errors.careertype}</p>
                    ) : null}
                    <Button
                      className="ActionBtn"
                      variant="primary"
                      size="lg"
                      type="submit"
                    >
                      Apply Now
                    </Button>
                  </form>
                )}
              </Formik>
            </div>
          </div>

          {/* loan step section */}
          <LoanStep />

          {/* Boctrust about section */}
          <BocTrustMsg />

          {/* testimonial section */}
          <Testimonial />

          {/* Email list section */}
          <EmailSection handleBtn={handleApplyBtn}/>
        </div>
      )}
    </>
  );
};

export default LoanHome;
