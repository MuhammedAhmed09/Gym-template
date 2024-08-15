import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Element } from 'react-scroll';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { GiBodyBalance } from "react-icons/gi";
import { GiSprint } from "react-icons/gi";
import { GiBiceps } from "react-icons/gi";
import { FaQuoteLeft } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';



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
        <Nav className='testimonial'>
          <Container>
            <h3>Customer Says</h3>
            <p className='line'></p>
            <Row>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className='swiper-slide'>
                  <p className='paragraph-icon-customer'><FaQuoteLeft/></p>
                  <p> I have got World class service from this particuler gym. I have tried three of them before but this one is the best. All trainers are very friendly and helpful. I will recommend this gym to everyone.</p>
                  <Row>
                  <Col md={8} xs={8}>
                    <h4>John Doe</h4>
                    <p className='paragraph-customer-work'>Architect</p>
                  </Col>
                  <Col md={4} xs={4}>
                    <img src={require("./Images/testi1.jpg")} alt='Imagee customer' />
                  </Col>
                  </Row>
                </div>
                </SwiperSlide>
              <SwiperSlide>
                <div className='swiper-slide'>
                  <p className='paragraph-icon-customer'><FaQuoteLeft/></p>
                  <p> I have got World class service from this particuler gym. I have tried three of them before but this one is the best. All trainers are very friendly and helpful. I will recommend this gym to everyone.</p>
                  <Row>
                  <Col md={8} xs={8}>
                    <h4>Lucy coe</h4>
                    <p className='paragraph-customer-work'>Singer</p>
                  </Col>
                  <Col md={4} xs={4}>
                    <img src={require("./Images/testi2.jpg")} alt='Imagee customer' />
                  </Col>
                  </Row>
                </div>
                </SwiperSlide>
              <SwiperSlide>
                <div className='swiper-slide'>
                  <p className='paragraph-icon-customer'><FaQuoteLeft/></p>
                  <p> I have got World class service from this particuler gym. I have tried three of them before but this one is the best. All trainers are very friendly and helpful. I will recommend this gym to everyone.</p>
                  <Row>
                  <Col md={8} xs={8}>
                    <h4>Daniel Kelly</h4>
                    <p className='paragraph-customer-work'>Model</p>
                  </Col>
                  <Col md={4} xs={4}>
                    <img src={require("./Images/testi3.jpg")} alt='Imagee customer' />
                  </Col>
                  </Row>
                </div>
                </SwiperSlide>
              <SwiperSlide>
                <div className='swiper-slide'>
                  <p className='paragraph-icon-customer'><FaQuoteLeft/></p>
                  <p> I have got World class service from this particuler gym. I have tried three of them before but this one is the best. All trainers are very friendly and helpful. I will recommend this gym to everyone.</p>
                  <Row>
                  <Col md={8} xs={8}>
                    <h4>Frnk James</h4>
                    <p className='paragraph-customer-work'>Student</p>
                  </Col>
                  <Col md={4} xs={4}>
                    <img src={require("./Images/testi4.jpg")} alt='Imagee customer' />
                  </Col>
                  </Row>
                </div>
                </SwiperSlide>
            </Swiper>
            </Row>
          </Container>
        </Nav>
      </Element>
    }

    {/* Pricing Component */
      <Element name='Pricing'>
        <Nav className='pricing'>
          <Container>
            <h3>Our Pricing</h3>
            <p className='line'></p>
            <Row>
              <Col lg={4} xs={12}>
              <div className='col-price'>
                <h5>PERSONAL</h5>
                <p className='line'></p>
                <p className='paragraph-price'>$ <span>49</span><sub>/mo</sub></p>
                <p className='paragraph-details'>4 Days a week</p>
                <hr></hr>
                <p className='paragraph-details'>No Dedicated Trainer</p>
                <hr></hr>
                <p className='paragraph-details'>No Diet Plan</p>
                <hr></hr>
                <p className='paragraph-details'>Morning Batch only</p>
                <hr></hr>
                <p className='paragraph-details'>No Yoga Classes</p>
                <button className='btn-buy'>enroll now</button>
              </div>
              </Col>
              <Col lg={4} xs={12}>
              <div className='col-price-2'>
                <h5>ENTERRRISE</h5>
                <p className='line-2'></p>
                <p className='paragraph-price'>$ <span>79</span><sub>/mo</sub></p>
                <p className='paragraph-details'>5 Days a week</p>
                <hr></hr>
                <p className='paragraph-details'>Dedicated Trainer</p>
                <hr></hr>
                <p className='paragraph-details'>Diet Plan included</p>
                <hr></hr>
                <p className='paragraph-details'>Morning & evening Batch</p>
                <hr></hr>
                <p className='paragraph-details'>No Yoga Classes</p>
                <button className='btn-buy-2'>enroll now</button>
              </div>
              </Col>
              <Col lg={4} xs={12} >
              <div className='col-price'>
                <h5>PROFFESIONAL</h5>
                <p className='line'></p>
                <p className='paragraph-price'>$ <span>99</span><sub>/mo</sub></p>
                <p className='paragraph-details'>6 Days a week</p>
                <hr></hr>
                <p className='paragraph-details'>Dedicated Trainer</p>
                <hr></hr>
                <p className='paragraph-details'>Diet Plan included</p>
                <hr></hr>
                <p className='paragraph-details'>Morning & evening Batch</p>
                <hr></hr>
                <p className='paragraph-details'>Yoga Classes</p>
                <button className='btn-buy'>enroll now</button>
              </div>
              </Col>
            </Row>

          </Container>
        </Nav>
      </Element>
    }

    {/* Blog Component */
      <Element name='Blog'>
        <Nav className='blog'> 
          <Container>
            <h3>our Blog</h3>
            <p className='line'></p>
            <Row>
              <Col lg={4} xs={12}>
              <div className='blog-box'>
                <img src={require('./Images/blog1.jpg')} alt='blog1' />
                <p className='paraghraph-title'>keep your body fit</p>
                <p className='line-blog'></p>
                <p className='paragraph-date'><span>GetFit Gym</span> - 1st Mar,2021</p>
                <p className='paragraph-details'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                <button className='btn-read-more'>continue reading</button>
              </div>
              </Col>
              <Col lg={4} xs={12}>
              <div className='blog-box'>
                <img src={require('./Images/blog2.jpg')} alt='blog1' />
                <p className='paraghraph-title'>Healthy Life Happy Life</p>
                <p className='line-blog'></p>
                <p className='paragraph-date'><span>GetFit Gym</span> - 17 Apr, 2021</p>
                <p className='paragraph-details'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                <button className='btn-read-more'>continue reading</button>
              </div>
              </Col>
              <Col lg={4} xs={12}>
              <div className='blog-box'>
                <img src={require('./Images/blog3.jpg')} alt='blog1' />
                <p className='paraghraph-title'>Top reasons to be healthy</p>
                <p className='line-blog'></p>
                <p className='paragraph-date'><span>GetFit Gym</span> - 28 May, 2021</p>
                <p className='paragraph-details'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                <button className='btn-read-more'>continue reading</button>
              </div>
              </Col>
            </Row>
          </Container>
        </Nav>
      </Element>
    }

    {/* Contact Component */
      <Element name='Contact'>
          <Nav className='contact'>
            <Container>
              <h3>Get in Touch</h3>
              <p className='line'></p>
              <Row>
                <Col lg={6} xs={12}>
                <div>
                  <div className='text-box-contact'>
                    <p>opening hours:</p>
                    <h6>Monday - Friday: 8:00 am - 6:00 pm</h6>
                  </div>
                  <div className='text-box-contact'>
                    <p>address:</p>
                    <h6>21, See Road, Abo Homoss, El-Beheara</h6>
                  </div>
                  <div className='text-box-contact'>
                    <p>phone:</p>
                    <h6>00000000000</h6>
                  </div>
                  <div className='text-box-contact'>
                    <p>fax:</p>
                    <h6>00000000000</h6>
                  </div>
                  <div className='text-box-contact'>
                    <p>email:</p>
                    <h6>info@getfitgym.com</h6>
                  </div>
                </div>
                </Col>
                <Col>
                <div className='form-contact'>
                  <Row>
                    <Col md={6} xs={12}>
                      <input className='has-danger has-error' type='text' required placeholder='Enter your full name*'/>
                    </Col>
                    <Col md={6} xs={12}>
                      <input type='text' required placeholder='Enter your email*'/>
                    </Col>
                  </Row>
                  <div>
                    <textarea placeholder='Your Reply*'/>
                  </div>
                  <button className='btn-send'>submit comment</button>
                </div>
                </Col>
              </Row>
            </Container>
          </Nav>
      </Element>
    }

    <Nav className='footer'>
      <Container>
        <Row>
          <Col lg={4} xs={12}>
            <h4>get<span>fit</span></h4>
            <p className='line-footer'></p>
            <p>Get Fit Gym is a fitness center that provides a variety of services to help you. Vitae nostrum omnis aspernatur itaque eius totam. </p>
            <h6>follow us</h6>
            <div className='social'>
              <button className='btn-social'><p><FaFacebookF/></p></button>
              <button className='btn-social'><p><FaTwitter/></p></button>
              <button className='btn-social'><p><FaLinkedinIn/></p></button>
              <button className='btn-social'><p><FaInstagram/></p></button>
            </div>
          </Col>
          <Col lg={4} xs={12}>
            <h4>quick links</h4>
            <p className='line-footer'></p>
            <p className='ul'>
              <p>branches</p>
              <p>career</p>
              <p>reviews</p>
              <p>features</p>
              <p>trainers</p>
            </p>
          </Col>
          <Col lg={4} xs={12}>
            <h4>recent post</h4>
            <p className='line-footer'></p>
            <p className='ul'>
              <p>Lorem ipsum dolor.</p>
              <p>Lorem ipsum dolor.</p>
              <p>Lorem ipsum dolor.</p>
              <p>Lorem ipsum dolor.</p>
              <p>Lorem ipsum dolor.</p>
            </p>
          </Col>
        </Row>
      </Container>
    </Nav>

    <Nav className='copy-right'>
      <Container>
        <p>Copyright  © 2021.  All Rights Reserved </p>
      </Container>
    </Nav>
    </>
  );
}

export default App;
