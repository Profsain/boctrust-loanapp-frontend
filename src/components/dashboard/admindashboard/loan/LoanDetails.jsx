import PropTypes from "prop-types";
import { Modal, Button, Row } from "react-bootstrap";
import Headline from "../../../shared/Headline"
import RowCard from "../remita/RowCard";

const LoanDetails = ({ loanObj, show, handleClose, currentPage }) => {
  console.log("loanObj", loanObj);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <Headline text={loanObj.banking.accountDetails.Message.FullName} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RowCard
            title="Loan ID:"
            text={loanObj.banking.accountDetails.Message.Id}
          />
          <RowCard title="Valid BVN:" text={loanObj.bvnnumber} />
          <RowCard title="KYC:" text="Completed" />
          <RowCard
            title="Loan Product:"
            text={loanObj.loanProduct || "General Loan"}
          />
          <RowCard title="Loan Amount:" text={loanObj.loanamount} />
          <RowCard title="Total Repayment:" text={loanObj.loantotalrepayment} />
          <RowCard title="Repayment Month:" text={loanObj.numberofmonth} />
          <RowCard title="Loan Status:" text={loanObj.kyc.loanstatus} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {currentPage === "pending" && (
            <Button variant="primary">Approve</Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

LoanDetails.propTypes = {
  handleClose: PropTypes.func,
  show: PropTypes.bool,
  currentPage: PropTypes.string,
  loanObj: PropTypes.object,
};

export default LoanDetails;
