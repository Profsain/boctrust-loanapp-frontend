import { Row, Col } from "react-bootstrap";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import Headline from "../../shared/Headline";
import TestimonialCard from "./TestimonialCard";
import "../Loan.css";

const Testimonial = () => {
  const styles = {
    container: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "48px 128px",
      backgroundColor: "#ecaa00",
    },
    nextPrev: {
      marginTop: "48px",
    },
    btn: {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      border: "none",
      backgroundColor: "#fff",
      fontSize: "2rem",
      marginRight: "28px",
      cursor: "pointer",
    },

  };
  return (
    <div className="container-fluid" style={styles.container}>
      <Headline
        fontSize="3rem"
        color="#fff"
        spacer="28px 0 48px 0"
        text="What our customers say about us"
      />

      <Row>
        <Col xs={12} md="4">
          <TestimonialCard />
        </Col>
        <Col xs={12} md="4">
          <TestimonialCard />
        </Col>
        <Col xs={12} md="4">
          <TestimonialCard />
        </Col>
      </Row>

      {/* next and prev button */}
      <div style={styles.nextPrev}>
        <button className="NextPrevBtn">
          <GrLinkPrevious />
        </button>
        <button className="NextPrevBtn">
          <GrLinkNext />
        </button>
      </div>
    </div>
  );
}

export default Testimonial