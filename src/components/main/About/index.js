import React from 'react';
import './css/about.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import { Col, Row, Container, Image } from 'react-bootstrap';
import profile from './img/image.png'

 
// import all the styles


const About = () => {
    return (
        <div className = "about">
          <div className = "about text-center">
          <ScrollAnimation animateIn="fadeIn">
            <Container className = "bottom-break word about">
              <Row>
                <Col md = "5" className = "yellow-class image">
                  <Image src = {profile} height = {250} width = {180}></Image>
                </Col>
                <Col md = "6">
                <h3> 
                    ABOUT ME 
                  </h3>
              <p>
              <p3>
                I am passionate in Software Development, data analytics and machine learning. As a member of SMU Business Intelligence Analytics and WhiteHats, I push myself to learn the latest technologies. I am also an avid participant of hackathons as I love to build stuff. 
              </p3>
              </p>
              <p>
              <p3>
                  I strive to make an impact on whatever I do, touch the hearts of whoever I meet and make a difference with the knowledge I have.
              </p3>
              </p>
              <p>
                <p3>
                  In my free time, I enjoy listening to music, spending time with family and friends and cooking. 
                </p3>
              </p>
              </Col>
              </Row>
            </Container>
        </ScrollAnimation>
        </div>
      </div>
    )
}

export default About;