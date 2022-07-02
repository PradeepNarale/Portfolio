import React from "react";
import "./Project.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Project1 from "../../Assests/project1.jpg";
import Project2 from '../../Assests/project2.PNG';
import Project3 from "../../Assests/project3.png";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { FiGithub } from "react-icons/fi";
import { MdKeyboardTab } from "react-icons/md";


function Project() {
  return (
    <div>
      <Container>
        <div className="text-center">
          <h1 className="proj">PROJECTS</h1>
          <div className="row">
            <div data-aos="zoom-in" className="col-md-6 mt-5  ">
              <Card sx={{ maxWidth: 450 }}>
                <CardHeader
                  title="Sports Management System" 
                  subheader="-React     -Mongodb"
                />
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    width="Auto"
                    image={Project1}
                    alt="green iguana"
                  />
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                  <FiGithub size={15} />
                  <a href="https://github.com/PradeepNarale/sports-management-system">View Code
                  </a>
                  </Button>

                 
                  <div className="iconLeft">
                    <a href="">
                      <MdKeyboardTab color="black" size={25} />
                    </a>
                  </div>
                </CardActions>
              </Card>
            </div>
            <div data-aos="zoom-in"  className="col-md-6 mt-5">
              <Card sx={{ maxWidth: 450 }}>
                <CardHeader
               
                  title="Ecommerse Website"
                  
                  subheader="-Django(Python)    -MySql"
                />
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    width="Auto"
                    image={Project3}
                    alt="green iguana"
                  />
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    <FiGithub size={15} />
                    <a href="https://github.com/PradeepNarale/MyAwesomeCart">
                    View Code
                    </a>
                  </Button>
                  <div className="iconLeft">
                    <a href="">
                      <MdKeyboardTab color="black" size={25} />
                    </a>
                  </div>
                </CardActions>
              </Card>
            </div>
          </div>

          <div data-aos="zoom-in"  className="mt-5 cardce">
            <Card sx={{ maxWidth: 450 }}>
              <CardHeader title="Portfolio" subheader="-React " />
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  width="Auto"
                  image={Project2}
                  alt="green iguana"
                />
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <FiGithub size={15} />
                  View Code
                </Button>
                <div className="iconLeft">
                  <a href="">
                    <MdKeyboardTab color="black" size={25} />
                  </a>
                </div>
              </CardActions>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Project;
