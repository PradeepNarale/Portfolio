import React, { useEffect } from "react";
import "./Services.css";
import { Container } from "react-bootstrap";
import { FaHtml5 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoAngular } from "react-icons/io";
import { IoLogoNodejs } from "react-icons/io";
import { IconContext } from "react-icons";

import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Container>
        <div className="text-center serh1 ">
          <h1 className="skill">SKILLS</h1>
          <text>
            Here are a few technologies I've been working with recently
          </text>

          <Container>
            <div className="container">
              <div className="mt-5">
                <IconContext.Provider
                  value={{
                    className: "myReact-icons",
                    color: "#8EE4AF",
                    size: 80,
                  }}
                >
                  <div class="row">
                    <div class="col-sm">
                      {" "}
                      <div
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                        className="card "
                      >
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                          <FaHtml5 />
                        </a>
                        <span>HTML5</span>
                      </div>
                    </div>
                    <div class="col-sm">
                      {" "}
                      <div
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                        className="card"
                      >
                        <a href="https://getbootstrap.com/docs/5.2/getting-started/introduction/">
                          <FaBootstrap />
                        </a>
                        <span>Bootstrap</span>
                      </div>
                    </div>
                    <div class="col-sm">
                      {" "}
                      <div
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                        className="card"
                      >
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                          <SiCss3 />
                        </a>
                        <span>CSS3</span>
                      </div>
                    </div>
                  </div>
                </IconContext.Provider>
              </div>

              <div className="">
                <IconContext.Provider
                  value={{
                    className: "myReact-icons ",
                    color: " #8EE4AF",
                    size: 70,
                  }}
                >
                  <div class="row">
                    <div class="col-sm">
                      {" "}
                      <div
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                        className="card"
                      >
                        <a href="https://reactjs.org/docs/getting-started.html">
                          <FaReact />
                        </a>
                        <span>React</span>
                      </div>
                    </div>
                    <div class="col-sm">
                      {" "}
                      <div
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                        className="card"
                      >
                        <a href="https://docs.djangoproject.com/en/4.0/">
                       <IoLogoAngular/>
                        </a>
                        <span>Angular</span>
                      </div>
                    </div>
                    <div class="col-sm">
                      {" "}
                      <div
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                        className="card"
                      >
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                        <IoLogoNodejs/>
                        </a>
                        <span>NodeJs</span>
                      </div>
                    </div>
                  </div>
                </IconContext.Provider>
              </div>
            </div>
          </Container>
        </div>
      </Container>
    </div>
  );
}

export default Services;
