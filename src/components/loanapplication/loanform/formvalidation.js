import * as Yup from "yup";
// validation Yup.Schema
const validationSchema = Yup.object({
  loanamount: Yup.number()
    .min(10000, "Please enter amount from 10000 upto 2000000 ")
    .max(2000000, "Please enter amount from 10000 upto 2000000 ")
    .required("Required"),
  numberofmonth: Yup.number()
    .min(1, "Please enter a number from 1 to 24")
    .max(24, "Please enter a number from 1 to 24")
    .required("Required"),
  loanpurpose: Yup.array()
    .min(1, "Please select at least one purpose")
    .required("Required"),
  bvnnumber: Yup.number().required("Required"),
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  phonenumber: Yup.number().required("Required"),
  dob: Yup.date().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  maritalstatus: Yup.string().required("Required"),
  noofdependents: Yup.number().required("Required"),
  eductionlevel: Yup.string().required("Required"),
  howdidyouhearaboutus: Yup.string().required("Required"),
  stateofresidence: Yup.string().required("Required"),
  houseaddress: Yup.string().required("Required"),
  lga: Yup.string().required("Required"),
  stateoforigin: Yup.string().required("Required"),
  ippis: Yup.string().required("Required"),
  servicenumber: Yup.string().required("Required"),
  staffidcard: Yup.mixed().required("Required"),

  nkinfirstname: Yup.string().required("Required"),
  nkinlastname: Yup.string().required("Required"),
  nkinphonenumber: Yup.number().required("Required"),
  nkinrelationship: Yup.string().required("Required"),
  nkinresidentialaddress: Yup.string().required("Required"),
});
// end of validationSchema

export default validationSchema;