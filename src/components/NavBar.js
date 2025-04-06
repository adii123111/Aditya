import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import finallogo from '../assets/img/finallogo.png';

import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={finallogo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span id="hamburger" className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/aditya711/"
                  target="_blank"
                >
                  <img src={navIcon1} alt="" />
                </a>
                <a href="https://github.com/adii123111" target="_blank">
                  <img src={navIcon2} alt="" />
                </a>
                <a
                  href="https://www.instagram.com/aditya_vishwakarma711/"
                  target="_blank"
                >
                  <img src={navIcon3} alt="" />
                </a>
                <a href="https://mail.google.com/mail/u/0/?fs=1&to=adityvishwakarma2004@gmail.com&tf=cm" target="_blank">
                  <img src={navIcon4} alt="" />
                </a>
              </div>

              <a
                href="https://drive.google.com/file/d/1scQh7ypT0ov1H9p702QZzz4Xn45xeiWj/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                download="Aditya_Vishwakarma_Resume.pdf"
                style={{ textDecoration: "none" }}
              >
                <button className="vvd">
                  <span>My Resume</span>
                </button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}






















