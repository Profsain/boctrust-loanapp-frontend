import PropTypes from "prop-types"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DashboardHeadline from "../../shared/DashboardHeadline";
import "../../dashboardcomponents/transferdashboard/Transfer.css";
import BocButton from "../../shared/BocButton";

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  body: Yup.string().required("Blog content is required"),
  category: Yup.string().required("Category is required"),
  tags: Yup.string().required("Tags is required"),
});

const initialValues = {
  title: "",
  body: "",
  category: "",
  tags: "",
};

const categories = [
  { value: "personal finance", label: "Personal Finance" },
  { value: "sme advisory", label: "SME Advisory" },
  { value: "other", label: "Other" },
  // Add more options as needed
];

const AddNewBlog = ({func}) => {
    const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
    };
    
    const handleCancel = () => {
        func(false);
    }

  return (
    <div>
      <div className="TransContainer">
        <DashboardHeadline>Add New Blog Post</DashboardHeadline>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="FieldRow">
              <div className="FieldGroup">
                <label htmlFor="title">Blog Title</label>
                <Field type="text" name="title" id="title" className="Input" />
                <ErrorMessage name="title" component="div" />
              </div>

              <div className="FieldGroup">
                <label htmlFor="tags">Tags</label>
                <Field
                  type="text"
                  name="tags"
                  placeholder="Separate tags with comma"
                  id="tags"
                  className="Input"
                />
                <ErrorMessage name="tags" component="div" />
              </div>
            </div>

            <div>
              <div className="FieldGroup">
                <label htmlFor="category">Category</label>
                <Field
                  as="select"
                  name="category"
                  id="category"
                  className="Select"
                >
                  <option value="" label="Select a category" />
                  {categories.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      label={option.label}
                    />
                  ))}
                </Field>
                <ErrorMessage name="category" component="div" />
              </div>
              <div className="FieldGroup">
                <label htmlFor="body">Content</label>
                <textarea name="body" id="body" className="Input Content" />
                <ErrorMessage name="body" component="div" />
              </div>
            </div>
            <div className="BtnContainer">
              <BocButton
                fontSize="1.6rem"
                type="submit"
                width="35%"
                bgcolor="#ecaa00"
                bradius="18px"
              >
                Add Blog
              </BocButton>
            </div>
            <div className="BtnContainer">
              <BocButton
                fontSize="1.6rem"
                type="button"
                width="35%"
                bgcolor="gray"
                bradius="18px"
                func={handleCancel}
              >
                Cancel
              </BocButton>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

AddNewBlog.propTypes = {
  func: PropTypes.func
}

export default AddNewBlog;
