import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Element } from 'react-scroll';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { GiBodyBalance } from "react-icons/gi";
import { GiSprint } from "react-icons/gi";
import { GiBiceps } from "react-icons/gi";



function App() {
  return (
    <>

    {/* Home Component */
    <Element name='/'>
    <div className='home'>
      <Navbar expand="lg" className='header'>
      <Container>
          <Navbar.Brand className='brand'>get<span>fit</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
              <Link className='link' to="/" smooth={true} duration={100}>home</Link>
              <Link className='link' to="About" smooth={true} duration={100}>about</Link>
              <Link className='link' to="Trainers" smooth={true} duration={100}>trainers</Link>
              <Link className='link' to="Services" smooth={true} duration={100}>services</Link>
              <Link className='link' to="Testimonial" smooth={true} duration={100}>testimonial</Link>
              <Link className='link' to="Pricing" smooth={true} duration={100}>pricing</Link>
              <Link className='link' to="Blog" smooth={true} duration={100}>blog</Link>
              <Link className='link' to="Contact" smooth={true} duration={100}>contact</Link>
          </Nav>
          </Navbar.Collapse>
      </Container>
      </Navbar>

        <Container className='title-home'>
          <Col lg={6} >
            <p className='head-paragraph'>getFit gym</p>
            <p className='second-head-paragraph'>transform your <span>body</span></p>
            <h6>We are the best in the town in terms of service so far. Give us a try</h6>
            <div className='links'>
            <button to="Pricing" smooth={true} duration={100} className='btn-pricing'>get started</button>
            <button to="Services" smooth={true} duration={100} className='btn-services'>learn more</button>
            </div>
          </Col>
        </Container>
      </div>
      </Element>
    }

    {/* About Component */
      <Element name='About'>
          <Nav className='about'>
            <Container>
              <Row>
                <Col lg={5} sm={12}>
                <img src={require("./Images/bostart.jpg")} alt='img-poster'/>
                </Col>
                <Col lg={7} sm={12}>
                  <h4>about get<span>Fit</span></h4>
                  <h3>WelCome to our World</h3>
                  <p className='line1'></p>
                  <h6>Get<span>Fit</span> gym is a place where you can get the best trainers and the best. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</h6>
                  <Link to="Contact" smooth={true} duration={100} className='btn-contact'>contact us</Link>
                </Col>
              </Row>
            </Container>
          </Nav>
      </Element>
    }

    {/* Trainers Component */
      <Element name='Trainers'>
        <Nav className='trainers'>
          <Container>
            <h3>our trainers</h3>
            <p className='line'></p>
            <Row>
              <Col lg={3} md={6} sm={12}>
                <img src={require("./Images/traniner1.jpg")} alt='img for traininer1'/>
              </Col>
              <Col lg={3} md={6} sm={12}>
                <img src={require("./Images/trainer2.jpg")} alt='img for traininer2'/>
              </Col>
              <Col lg={3} md={6}  sm={12}>
                <img src={require("./Images/trainer3.jpg")} alt='img for traininer3'/>
              </Col>
              <Col lg={3} md={6} sm={12}>
                <img src={require("./Images/trainer4.jpg")} alt='img for traininer4'/>
              </Col>
            </Row>
          </Container>
        </Nav>
      </Element>
    }

    {/* Services Component */
      <Element name='Services'>
        <Nav className='services'>
          <Container>
          <h3>out services</h3>
          <p className='line'></p>
            <Row>
              <Col lg={4} sm={12}>
                <p className='paragraph-icon'><GiBiceps/></p>
                <h5>body building</h5>
                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi rerum excepturi, corporis aperiam dolores delectus!</h6>
                <button className='btn-services-read-more' >read more</button>
              </Col>
              <Col lg={4} sm={12}>
                <p className='paragraph-icon'><GiBodyBalance/></p>
                <h5>body building</h5>
                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi rerum excepturi, corporis aperiam dolores delectus!</h6>
                <button className='btn-services-read-more' >read more</button>
              </Col>
              <Col lg={4} sm={12}>
                <p className='paragraph-icon'><GiSprint/></p>
                <h5>body building</h5>
                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi rerum excepturi, corporis aperiam dolores delectus!</h6>
                <button className='btn-services-read-more' >read more</button>
              </Col>
            </Row>
          </Container>
          </Nav>
      </Element>
    }

    {/* Testimonial Component */
      <Element name='Testimonial'>
          <h2>Testimonial</h2>
      </Element>
    }

    {/* Pricing Component */
      <Element name='Pricing'>
          <h2>Pricing</h2>
      </Element>
    }

    {/* Blog Component */
      <Element name='Blog'>
          <h2>Blog</h2>
      </Element>
    }

    {/* Contact Component */
      <Element name='Contact'>
          <h2>Contact</h2>
      </Element>
    }
    </>
  );
}

export default App;
