import * as Yup from "yup";
// validation Yup.Schema
const validationSchema = Yup.object({
  loanamount: Yup.number()
    .min(10000, "Please enter amount from 10000 upto 2000000 ")
    .max(2000000, "Please enter amount from 10000 upto 2000000 ")
    .required("Required"),
  numberofmount: Yup.number()
    .min(1, "Please enter a number from 1 to 24")
    .max(24, "Please enter a number from 1 to 24")
    .required("Required"),
  loanpurpose: Yup.array()
    .min(1, "Please select at least one purpose")
    .required("Required"),
});
// end of validationSchema

export default validationSchema;