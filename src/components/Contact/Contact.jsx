import React, { useEffect, useRef ,useState} from "react";
import { Container } from "react-bootstrap";
import "./Contact.css";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { send } from 'emailjs-com';


function Contact() {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      ' service_i97vy3t',
      'template_erfbvwd',
      toSend,
      'AQGwkaFYOVdk-O7B-DXys'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  const notify = () => toast.success("Message Sent Sucessfully");

  return (
    <div className="contact">
      <div className="contact component__space " id="Contact">
        <div className="container">
          <Container>
            <div className="row">
              <div className="col-md-6 ">
                <div className="contact__box">
                  <div className="contact__meta">
                    <h1 className="hire__text">Hire Me.</h1>
                    <p className="hire__text white">
                      I am Available for freelance work.connect with via phone :{" "}
                    </p>
                  </div>
                  <form onSubmit={onSubmit}>
                    <div className="input__box">
                      <div data-aos="fade-right">
                        <input
                          type="text"
                          name='from_name'
                          value={toSend.from_name}
                          onChange={handleChange}
                          className="contact name"
                          placeholder="Your
                      Name *"
                        />
                      </div>
                      <div data-aos="fade-left">
                        <input
                          type="text"
                          name='reply_to'
                          onChange={handleChange}
                          className="contact email"
                          placeholder="Your email *"
                        />
                      </div>

                      <div data-aos="fade-right">
                        <textarea
                          name="message"
                          value={toSend.message}
                          onChange={handleChange}
                          id="message"
                          placeholder=" write your message"
                        />
                      </div>
                      <div className="text-center mt-3">
                        <Button onClick={notify} variant="outline-success">
                          Submit
                        </Button>{" "}
                        <ToastContainer />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6 ">
                <div data-aos="zoom-in-left">
                  <h1 className="get">Get in Touch</h1>
                  <p>Email: Pradeepnarale35@gmail.com</p>
                  <p>Phone: 8999454885</p>
                  <p>
                    Now days I am looking for an oppurtunity if you love my work
                    and planning to colaborate with me or hire me feel free to
                    mail me my inbox is always open. whether you have any query
                    or just wanted to say hii to me i’ll try my best to get back
                    to you
                  </p>
                </div>
              </div>
            </div>
          </Container>
          <Container>
            <div className="mt-5 text-center">
              <h3>Follow Me On</h3>
              <a href="https://www.instagram.com/pradeep_narale/">
                {" "}
                <BsInstagram className="icc" color="white" size={30} />
              </a>

              <a href="https://github.com/PradeepNarale">
                {" "}
                <BsGithub className="icc" color="white" size={30} />
              </a>

              <a href="">
                {" "}
                <FiMail className="icc" color="white" size={30} />
              </a>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Contact;
