import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import BocButton from "../../shared/BocButton";
import DashboardHeadline from "../../shared/DashboardHeadline";
import "../customers/Customer.css";
import NextPreBtn from "../../shared/NextPreBtn";
import "../../dashboardcomponents/transferdashboard/Transfer.css";
import WikiList from "./WikiList";

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  question: Yup.string().required("Question is required"),
  answer: Yup.string().required("Answer is required"),
  category: Yup.string().required("Category is required"),
});

const initialValues = {
  question: "",
  answer: "",
  category: "",
};

const AddWiki = () => {
  const [showAddNew, setShowAddNew] = useState(false);
  const handleAddNew = () => setShowAddNew(true);
  const handleClose = () => setShowAddNew(false);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    // Handle form submission logic here
    try {
      await fetch("http://localhost:3030/api/wikis", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      setSubmitting(false);
      resetForm(initialValues);
      setShowAddNew(false);
    } catch (error) {
      throw Error(error);
    }
  };

  return (
    <div className="MainBox">
      {!showAddNew ? (
        <div className="BlogSection">
          <div className="AddBtn">
            <BocButton func={handleAddNew} bgcolor="#ecaa00" bradius="22px">
              <span>+</span> Add New
            </BocButton>
          </div>
          {/* top search bar */}
          <div className="Search">
            <DashboardHeadline padding="0" height="70px" bgcolor="#d9d9d9">
              <div className="SearchBar">
                <div className="FormGroup">
                  <label htmlFor="show">Show</label>
                  <input name="showCount" type="number" step={10} min={10} />
                </div>
                <div className="FormGroup SBox">
                  <input name="search" placeholder="Search" />
                  <img src="images/search.png" alt="search-icon" />
                </div>
              </div>
            </DashboardHeadline>
          </div>
          <div>
            {/* wiki list  */}
            <WikiList />
            {/* next and previous button  */}
            <NextPreBtn />
          </div>
        </div>
      ) : (
        <div className="TransContainer">
          <DashboardHeadline>Add New</DashboardHeadline>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="FieldRow">
                <div className="FieldGroup">
                  <label htmlFor="question">Question</label>
                  <Field
                    type="text"
                    name="question"
                    id="question"
                    className="Input"
                  />
                  <ErrorMessage
                    name="question"
                    component="div"
                    className="Error"
                  />
                </div>

                <div className="FieldGroup">
                  <label htmlFor="answer">Answer</label>
                  <Field
                    type="text"
                    name="answer"
                    id="answer"
                    className="Input"
                  />
                  <ErrorMessage
                    name="answer"
                    component="div"
                    className="Error"
                  />
                </div>
              </div>
              <div className="FieldRow">
                <div className="FieldGroup">
                  <label htmlFor="category">Category</label>
                  <Field
                    type="text"
                    name="category"
                    id="category"
                    className="Input"
                  />
                  <ErrorMessage
                    name="category"
                    component="div"
                    className="Error"
                  />
                </div>
              </div>
              <div className="BtnContainer">
                <BocButton
                  fontSize="1.6rem"
                  type="submit"
                  width="220px"
                  margin="1rem 0"
                  bgcolor="#ecaa00"
                  bradius="18px"
                >
                  Submit
                </BocButton>
                <BocButton
                  fontSize="1.6rem"
                  type="button"
                  width="220px"
                  margin="1rem 0"
                  bgcolor="gray"
                  bradius="18px"
                  func={handleClose}
                >
                  Cancel
                </BocButton>
              </div>
            </Form>
          </Formik>
        </div>
      )}
    </div>
  );
};

export default AddWiki;
