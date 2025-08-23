import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
       
      title: "Decentralized Randomness",
      description: "Developed on Ethereum Blockchain",
      imgUrl: projImg1,
    },
    {
      title: "Simplified Crypto Payments",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Bulletin Board",
      description: "Decentralized Board ",
      imgUrl: projImg3,
    },
    {
      title: "First Price Auction",
      description: "A Decentralized Auction Protocol",
      imgUrl: projImg11,
    },
    {
      title: "Decentralized Shamir Secrate Sharing",
      description: "Developed on Ethereum",
      imgUrl: projImg6,
    },
    {
      title: "Community Detection",
      description: "Developed for FB and BitCoin Data sets",
      imgUrl: projImg5,
    },
  ];

  const projects2 = [
    {
      title: "Optimizing Performance of Reducing Matrix Multiplication",
      description: "Compared using Perf Tool",
      imgUrl: projImg9,
    },
    {
      title: "Duckworth Lewis Method",
      description: "Deleloped for ODI cricket",
      imgUrl: projImg8,
    },
    {
      title: "Visual Neuroscience",
      description: "Odd-one-Out Detection Experiment",
      imgUrl: projImg7,
    },
  ];

  const projects3 = [
    {
      title: "COVID-19 Spread Prediction Model",
      description: "Developed Mathematical Model",
      imgUrl: projImg10,
    },
    {
      title: "Domain Adaptation",
      description: "Implementation of DANN",
      imgUrl: projImg4,
    },
    {
      title: "PCA & SVM",
      description: "Implementated on MNIST dataset",
      imgUrl: projImg12,
    },
    // {
    //   title: "Visual Neuroscience",
    //   description: "Design & Development",
    //   imgUrl: projImg7,
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p> I'm passionate about cryptography and its applications in the fascinating world of blockchain technology. My journey involves solving complex cryptographic puzzles, and exploring innovative solutions for securing digital assets.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Blockchain</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Optimization</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Mechine Learning</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                          {
                            projects3.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
