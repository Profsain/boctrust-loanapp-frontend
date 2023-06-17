import PropTypes from "prop-types";


const LoanForm = ({ data }) => {
    const style = {
        marginTop: '100px'
    }
  return (
    <div style={style}>
          <h1>LoanForm page {data.loanamount} { data.careertype}</h1>
    </div>
  );
}

LoanForm.propTypes = {
  data: PropTypes.any
}

export default LoanForm;
