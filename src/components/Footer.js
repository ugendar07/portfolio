import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/NavLogo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon5 from "../assets/img/nav-icon5.svg";
import navIcon6 from "../assets/img/nav-icon6.svg";
import navIcon7 from "../assets/img/nav-icon7.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <Row>
              <Col>
            <div className="social-icon">
              <h5>Social Media</h5>
              <p>
              <a href="https://www.linkedin.com/in/kethavath-ugender/" target="_blank"><img src={navIcon1} alt="" /></a>
              </p>
              
              <p>
              <a href="https://twitter.com/Ugendar07" target="_blank"><img src={navIcon4} alt="" /></a>
              </p>
            </div>
            </Col>
            
            <Col>
            <div className="social-icon">
              <h5>Community</h5>
              <p>
              <a href="https://github.com/ugendar07" target="_blank"><img src={navIcon2} alt="" /></a>
              </p>
              <p>
                <a href="https://www.youtube.com/channel/UC6pCBmB5nMeOsY6Wt2kvmOg" target="_blank"><img src={navIcon5} alt=""/></a>
              </p>
            </div>
            </Col>
            <Col>
              <div className="social-icon">
                <h5>About</h5>
                <p>
                  <a href="messageto:7981314071" target="_blank"><img src={navIcon7} alt=""/></a>
                </p>
                <p>
                  <a href="mailto:ugenderk@iisc.ac.in" target="_blank"><img src={navIcon6} alt=""/></a>
                </p>
              </div>
            </Col>
            </Row>
            <p>
              <span className="text-center text-sm-end">&copy; Chain dev 2024, All Rights Reserved</span>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
