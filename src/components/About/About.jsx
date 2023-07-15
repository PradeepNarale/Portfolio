import React, { useEffect } from "react";
import "./About.css";
import { Container } from "react-bootstrap";
import pra from "../../Assests/bg.png";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);


  const imgSt = {
    margin: "0 20px 10px auto",
    size: "20px"
  }
  return (
    <div>
      <section className="about">
        <div className="container">
          <Container>
            <div className="row">
              <div data-aos="fade-up-right" className="col-md-6 about">
                <h2 className="text-center abouttext">About Me</h2>
                <p>
                  Hi! My name is Pradeep and I love to experiment with new stuff and design out-of-the-box designs. That's my passion. I have been in this field since 2019, starting with academic projects. The day I started designing and exploring new stuff, I fell in love with this area of development. Since then, I've been learning and experimenting every day. Currently, I am completing my bachelor's degree and have worked on personal projects as well as one project for a client. My main focus now is to build creative, accessible, practical, and quality projects to showcase my talent and skills.
                </p>
              </div>
              <div data-aos="zoom-out-left" className="col-md-6 about_img d-flex align-items-center justify-content-center">
                <div className="text-center bg-color">
                  <img src={pra} style={imgSt} alt="" />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </div>


  );
}

export default About;
