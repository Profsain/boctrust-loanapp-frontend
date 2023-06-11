import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./Navigation.css";
import { Link } from "react-router-dom";

const TopNav = () => {

  // change navbar color on scroll
  window.addEventListener("scroll", function () {
    const nav = document.querySelector(".Nav");
    console.log(nav);
    nav.classList.toggle("Sticky", window.scrollY > 0);
  });

  return (
    <div className="TopNavContainer">
      <div className="StackDiv">
        <div className="Topnav">
          <div>
            <Link to="/">
              <img
                src="../images/boctrustlogo.png"
                alt="Boctrust Microfinance Bank Logo"
                width="150px"
              />
            </Link>
          </div>
          <h1 className="Welcome">
            Welcome to BOCTRUST Microfinance Bank Limited
          </h1>
          <button className="CallUs">Call us today! 08076710000</button>
        </div>

        <div className="BottomStyle">
          <Navbar variant="dark" expand="lg" className="Nav">
            <Container>
              {/* <Navbar.Brand href="/">Growing Together</Navbar.Brand> */}
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                  <Nav.Link href="/" className="mx-4">
                    Home
                  </Nav.Link>

                  <NavDropdown title="About" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/about">
                      Company Overview
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/board">Our Board</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/career">Career</NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>

                  <Nav.Link href="/product" className="mx-4">
                    Our Product
                  </Nav.Link>
                  <Nav.Link href="/loan" className="mx-4">
                    Apply for Loan
                  </Nav.Link>
                  <Nav.Link href="/support" className="mx-4">
                    Support
                  </Nav.Link>
                  <Nav.Link href="/blog" className="mx-4">
                    Blog
                  </Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
