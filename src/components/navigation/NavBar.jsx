import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import TopNav from "./TopNav";
import "./Navigation.css";

const NavBar = () => {
  return (
    <div className="NavContainer">
      <TopNav />

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
  );
};

export default NavBar;
