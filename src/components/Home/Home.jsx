import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { Navbar, Button, Container, Nav ,NavLink} from "react-bootstrap";
import resume from '../../Assests/PRADEEP_RESUME.pdf'



function Home() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className="Navi" href=""> Home </NavLink>
              <Nav.Link href="#pricing">About Me</Nav.Link>
              <Nav.Link href="#features">Projects</Nav.Link>
              <Nav.Link href="#features">Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div  className="hom text-center ">
        <Container>
        <div data-aos="fade-up-right">
          <p>HEY THERE !</p>
          </div>
          <div data-aos="fade-up-left">
          <h2>I AM PRADIP NARALE</h2>
          </div>
          <div data-aos="fade-up-right">
          <h1>FULL STACK WEB DEVELOPER</h1>
          <p>
            Hello,my name is Pradip Narale.I am a UI/UX Designer & Product
            Designer
          </p>
          
          <Button className="bttt" variant="outline-success" href="https://github.com/PradeepNarale">Check My Work</Button>{" "}
          <Button href={resume} className="btt" variant="outline-success">Download CV</Button>{" "}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Home;
