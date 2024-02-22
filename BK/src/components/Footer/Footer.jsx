import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import {
  faGem,
  faHome,
  faEnvelope,
  faPhone,
  faPrint,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-dark text-light py-4">
      
      
      <section>
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">
            <Col md={3} lg={6} xl={3} mx-auto mb-4 >
              <h6 className="text-uppercase fw-bold mb-4">
                <FontAwesomeIcon icon={faGem} className="me-3" />
                Company name
              </h6>
              <h6>BOOKWORM</h6>
              <p>
              Bookworm aims to set up virtual bookshop that also have library & renting facility. and iIt will allow users to purchase, rent and / or lend eBooks, Audiobooks and Videos.
              </p>
            </Col>

            <Col md={2} lg={2} xl={2} mx-auto mb-4>
              <h6 className="text-uppercase fw-bold mb-4">
                Products
              </h6>
              <p>
                <a href="#!" className="text-reset">Ebook</a>
              </p>
              <p>
                <a href="#!" className="text-reset">VideoBook</a>
              </p>
              <p>
                <a href="#!" className="text-reset">AudioBook</a>
              </p>
          
            </Col>

            <Col md={3} lg={2} xl={2} mx-auto mb-4>
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="#!" className="text-reset">Products</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Aboutus</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Contactus</a>
              </p>
              
            </Col>
           
            <Col md={4} lg={3} xl={3} mx-auto mb-md-0 mb-4>
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><FontAwesomeIcon icon={faHome} className="me-3" /> SM VITA , JUHU</p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                bookworm@gmail.com
              </p>
              <p><FontAwesomeIcon icon={faPhone} className="me-3" /> + 91 9463876676</p>
              
            </Col>
          </Row>
        </Container>
      </section>
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="/" className="me-4 text-reset">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="/" className="me-4 text-reset">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="/" className="me-4 text-reset">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="/" className="me-4 text-reset">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="/" className="me-4 text-reset">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="/" className="me-4 text-reset">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </section>
      <div className="text-center p-4">
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">bookworm.com</a>
      </div>
    </footer>
  );
};

export default Footer;
