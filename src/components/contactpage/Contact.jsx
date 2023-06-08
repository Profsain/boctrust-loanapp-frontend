import { useState, useEffect } from "react";
// animation library
import AOS from "aos";
import "aos/dist/aos.css";
import Headline from "../shared/Headline";
import Header from "../shared/Header";
import { Form, Button, Row, Col } from "react-bootstrap";

const Contact = () => {
  const styles = {
    map: {
      position: "relative",
      width: "100%",
      marginTop: "80px",
      padding: "38px",
      backgroundColor: "#ecaa00",
      overflow: "hidden",
    },
    form: {
      padding: "38px",
      backgroundColor: "#f5f5f5",
      borderRadius: "16px",
    },
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  // contact form submission
  const [form, setForm] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  console.log('Form Data', form)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const clearField = () => {
    setForm({
            fullname: "",
            phone: "",
            email: "",
            subject: "",
            message: "",
    });
  };

// connect for submission to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://boctrustmfb.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => { 
        if (data.status === "success") {
          alert("Message sent successfully");
          clearField();
        } else {
          alert("Message not sent");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

    

  return (
    <>
      <Header imgurl="public/images/contactus.png" />
      <div className="container-fluid">
        <div className="container">
          <Headline
            spacer="38px 0 18px 0"
            text="Contact Us For Your Financial Needs"
          />

          <div className="row" style={styles.form}>
            <div className="col-md-6 col-sm-12" style={{backgroundColor: "#fff"}} data-aos="fade-up">
              <Headline
                spacer="62px 0 0 0"
                align="left"
                text="We're here to help!"
              />
              <hr style={{ marginBottom: "28px" }} />
              <Headline align="left" text="Call Us" />
              <h4> 08177773196, 08076710000</h4>
              <h5> 9am - 5pm, Monday - Friday</h5>

              <Headline align="left" text="Email Us" />
              <h5>
                <a href="mailto:enquiries@boctrustmfb.com">
                  enquiries@boctrustmfb.com
                </a>
              </h5>

              <Headline align="left" text="Visit Us @" />
              <h5> 1st floor, 26 Moloney street, Onikan Lagos.</h5>
            </div>

            {/* contact form */}
            <div
              className="col-md-6 col-sm-12"
              style={styles.form}
              data-aos="fade-up"
            >
              <Headline align="left" text="Send us a message" />
              <hr style={{ marginBottom: "28px" }} />
              <Form method="POST" action="https://formspree.io/f/xqkovgdp">
                <Form.Group className="mb-3">
                  <Row>
                    <Col>
                      <Form.Control
                        onChange={handleChange}
                        name="fullname"
                        type="text"
                        placeholder="Full Name"
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        onChange={handleChange}
                        name="phone"
                        type="tel"
                        placeholder="Phone Number"
                      />
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    onChange={handleChange}
                    name="email"
                    type="email"
                    placeholder="Email Address"
                  />
                  <Form.Text className="text-muted">
                    We&apos;ll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    onChange={handleChange}
                    name="subject"
                    type="text"
                    placeholder="Subject"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Comment or Message</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    name="message"
                    as="textarea"
                    rows={6}
                    placeholder="Type here"
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      {/* bottom section */}
      <div style={styles.map} data-aos="fade-up">
        <iframe
          width="100%"
          height="600"
          src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=1st%20floor%2C%2026%20Moloney%20street%2C%20Onikan%20Lagos.+(Boctrust%20Microfinance%20Bank)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
