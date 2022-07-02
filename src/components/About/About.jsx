import React, { useEffect } from "react";
import "./About.css";
import { Container } from "react-bootstrap";
import pra from "../../Assests/pra.png";
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
    size:"20px"
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
                  Hi! My name is Prashant and i love to experiment new stuff and
                  design outof the box designs that’s my passion.I’am in this
                  field from 2019 but in starting days that was not passion it
                  all started because of my academical project and the day i
                  started designing and exploring new stuff I loved this area of
                  development and from that point i’ve started learning and
                  experimenting new stuff every day Comming back to present i am
                  completing my bachelors now and ive only worked on my personal
                  project and one project for my client.Now my main focus is to
                  build creative,accessible,practical and quality project to
                  showcase my talent and skills
                </p>
              </div>
              <div data-aos="zoom-out-left"  className="col-md-6">
             <img src={pra} style={imgSt} alt="" />
              </div>
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
}

export default About;
