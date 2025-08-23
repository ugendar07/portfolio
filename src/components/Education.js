import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { EducationCard } from "./EducationCard";
import IISc from "../assets/img/IISc.png";
import KU from "../assets/img/KU.png";
import inter from "../assets/img/inter.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
 
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Education = () => {

  const projects = [
    {
       
      title: "Post Graduation",
      description2: "MTech",
      description: "Computer Science & Automation",
      description1: "Indian Institute Of Science",
      imgUrl: IISc,
    },
    {
      title: "Graduation",
      description2: "BTech",
      description1: "Kakatiya University",
      description: "Computer Science & Engineering",
      imgUrl: KU,
    },
    {
      title: "Intermediate",
      description2: "+2",
      description1: "Sri Krihnaveni Jr College",
      description: "Math,Chemistry & Physics",
      imgUrl: inter,
    },
     
  ];

   
  return (
    <section className="project" id="education">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2> Education</h2> 
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">                
                      <Nav.Link eventKey="first">Education </Nav.Link>      
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <EducationCard
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
