/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DetailsCard from "./DetailsCard";
import "./Remita.css";

const LoanDetailModel = (props) => {
  // close model box
  const handleClose = () => {
    props.onHide();
  };

  // submit update to api endpoint
  const handleSubmit = async (e) => {
    e.preventDefault();

    handleClose();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Person name
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* details section */}
        <div className="row">
          <div className="col-sm12 col-md-6 left-col">
            <DetailsCard title="Customer Name" text="Akinwande" />

            <DetailsCard title="Customer Account Number" text="7468868564" />

            <DetailsCard title="Income from employer" text="N250,000" />

            <DetailsCard title="Loan Amount" text="N100,000" />

            <DetailsCard title="Collection Amount" text="N120,000" />
          </div>
          <div className="col-sm12 col-md-6">
            <DetailsCard
              title="Date of Disbursement"
              text="23-02-2023 .  16:49"
            />

            <DetailsCard
              title="Date of Collection"
              text="23-03-2023 .  17:25"
            />

            <DetailsCard title="Total Collection amount" text="N122,500" />

            <DetailsCard title="Number of Repayements" text="2" />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" type="button" onClick={handleSubmit}>
          Approve Loan
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoanDetailModel;
