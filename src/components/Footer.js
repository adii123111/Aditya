import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/nav-icon4.svg';
import finallogo from '../assets/img/finallogo.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img id="mymy" src={finallogo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon" id="myicon" >
              <a target="_blank" href="https://www.linkedin.com/in/aditya711/"><img src={navIcon1} alt="Icon" /></a>
              <a target="_blank" href="https://github.com/adii123111"><img src={navIcon2} alt="Icon" /></a>
              <a  target="_blank" href="https://www.instagram.com/aditya_vishwakarma711/"><img src={navIcon3} alt="Icon" /></a>
              <a target="_blank" href="mailto:adityvishwakarma2004@gmail.com"><img src={navIcon4} alt="Icon" /></a>
              
            </div>
            {/* <p>Copyright 2025. All Rights Reserved</p> */}
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
