import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import classes1 from "../../styles/contact.module.css";
import heroImg from "../../public/images/hero.jpg";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m Ahmed Anwar</h2>
              <h5 className="mb-4">Frontend Developer</h5>
              <p>
              Methodical, client-focused, software developer with experience 
              in WordPress web development and front end development. 
              Adept at managing all stages of the software development life-cycle 
              including requirements gathering, feasibility studies, deployment and maintenance.
              Enjoys collaborating with colleagues and building cultures of cross-functional working.
              </p>

              <div className={`${classes1.social__links} `}>
              
              <Link href="https://github.com/ahmedjanwar">
                <i className="ri-github-line mx-1 h-5 "></i>
              </Link>
              <Link href="https://www.linkedin.com/in/ahmedjanwar/">
                <i className="ri-linkedin-line mx-2"></i>
              </Link>
              <Link href="https://www.instagram.com/ahmedjemal_/">
                <i className="ri-instagram-line mx-2"></i>
              </Link>
              <Link href="https://www.facebook.com/ahmed.jemal.94009841">
                <i className="ri-facebook-line mx-2"></i>
              </Link>

            </div>

              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="mailto:ajemal840@gmail.com">Hire me</Link>
                </button>

                <button className="secondary__btn">
                  <Link href='/My_main_resume.pdf' target="_blank" download="My_main_resume.pdf">Download CV</Link>
                </button>
              </div>
            </div>

   

          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="300" height="400" />
            
              <div
                className={`${classes.hero__experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6>Experience</h6>
                  <h5 className="mb-0">2 Years</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
