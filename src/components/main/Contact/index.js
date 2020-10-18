import React from 'react';
import './css/form.scss';
import { Button, Col, Row, Container } from 'react-bootstrap';

const Contact = () => {
    return (
      <div>
        <div className = "text-center break">
            <h3> 
              LET'S GET IN TOUCH
            </h3>
        </div>
        <div className = "text-center">
        
          <Container className = "bottom-break word">
            <Row>
              <Col md = {{ span: 10, offset: 1 }}>
          <p>
            <p3>
              I am always open to new opportunities for collaboration, and would love to have a chat with you! 
            </p3>
          </p>
          <Button onClick={(e) => 
            {e.preventDefault(); window.location.href='http://www.linkedin.com/in/yh-lee';
          }}> 
            Linkedln
        </Button>
        <div className = "padding-top">
          Email: yuhaolee97@gmail.com
        </div>
            
            </Col>
            </Row>
          </Container>
        </div>
      <div className = "footer text-center">
        <div className = "padding-top">
          <b>Conceptualised and designed by Yu Hao</b>
        </div>
      </div>
    </div>
    );
}

export default Contact;