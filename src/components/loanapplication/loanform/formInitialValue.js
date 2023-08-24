const  initialValues = (loanamount, careertype, captureImg) => ({
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
});
            
export default initialValues;