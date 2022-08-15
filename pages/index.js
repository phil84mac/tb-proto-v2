import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Typewriter } from 'react-simple-typewriter';
import Carousel from 'react-bootstrap/Carousel';


export default function Home() {

  function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  };

  return (
    <>
      <Head>
        <title>TB PROTO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="px-sm-4 px-lg-5">
        <Container fluid className="cntnr-brdr">
          <Row fluid className="">
            <Col xs={2} xl={2} className="brdr-tp">
            </Col>
            <Col xs={10} xl={8} className="brdr-lft px-0 bg-stripes">
            <hr className="my-0" />

            <div className="d-none d-sm-block py-5 pe-5">

              <h1 className="dark-grey light mb-5 pt-5 mt-3 pe-5" >
                <span className="semi-bold bg-yellow-multiply pe-2"> 
                  <Typewriter
                    loop
                    cursor
                    cursorStyle='_'
                    typeSpeed={110}
                    deleteSpeed={80}
                    delaySpeed={1500}
                    words={['We design', 'We develop', 'We deliver']}
                    onLoop={(loopCount) =>
                      console.log(`Just completed loop ${loopCount}`)
                    }
                  />
                </span><br/>
                digital enterprise systems for your entire organization
              </h1>
              
            </div>
            <div className="d-sm-none">

            <h1 className="dark-grey light mb-5 pt-5 mt-3 pe-5" >
                <span className="semi-bold bg-yellow pe-2"> 
                  <Typewriter
                    loop
                    cursor
                    cursorStyle='_'
                    typeSpeed={110}
                    deleteSpeed={80}
                    delaySpeed={1500}
                    words={['We design', 'We develop', 'We deliver']}
                    onLoop={(loopCount) =>
                      console.log(`Just completed loop ${loopCount}`)
                    }
                  />
                </span><br/>
                digital enterprise systems for your entire organization
              </h1>
              
            </div>
            </Col>

            <Col xs={2} xl={2} className="brdr-lft brdr-tp d-none d-xl-block">
            </Col>

            <Col xs={12} lg={12} className="brdr-tp bg-stripes-2 m-0 p-0 d-flex align-items-center justify-content-center">
              <div className="w-100" >
              <object type="image/svg+xml" data="/tb-light-2.svg" className="hero-specs">svg-animation</object>
              </div>
            </Col>

            {/*
            <Col xs={8} lg={8} className="brdr-lft brdr-tp brdr-bttm px-0">
              <video className='w-full video-margin-fix' autoPlay loop muted>
                <source src="./interior.mp4" type='video/mp4' />
              </video>
            </Col>
                  */}
          
            <Col xs={2}  className="vh-20 brdr-tp">
            </Col>
            <Col xs={2}  className="brdr-tp brdr-lft">
            </Col>
            <Col xs={2}  className="brdr-tp brdr-lft">
            </Col>
            <Col xs={2}  className="brdr-tp brdr-lft">
            </Col>
            <Col xs={2}  className="brdr-tp brdr-lft">
            </Col>
            <Col xs={2}  className="brdr-tp brdr-lft">
            </Col>
            
            <Col xs={2} className="brdr-tp brdr-rght d-lg-none">
            </Col>
            <Col xs={10} lg={6} xl={8} className="brdr-tp-dark px-0 bg-stripes-3">
                <h2 className="light dark-grey ps-0 pe-3 mt-5 mb-xl-5 pb-xl-5">
                Our <span className="medium">people</span>, <span className="medium">skills</span> and <span className="medium">technology</span> support the <span className="italic">most modern enterprise systems</span> in Canada.
                </h2>
                
                <hr className=""/>
              <div className="w-100 d-lg-none" >
                <object type="image/svg+xml" data="/modern-enterprise.svg" className="w-100">svg-animation</object>
              </div>
              <hr className="d-lg-none"/>
                <Row className="w-full">
                  <Col xl={6} className="">
                  <p className="medium mb-3">
                    Veterans Affairs Canada
                  </p>
                  <p className="medium my-3">
                    Treasury Board of Canada Secretariat
                  </p>
                  <p className="medium my-3">
                    Department of National Defence
                  </p>
                  <p className="medium my-3">
                    National Defence and Canadian Armed Forces Ombudsman
                  </p>
                  <p className="medium my-3">
                    Office of the Veterans Ombudsman
                  </p>
                  <p className="medium my-3">
                    Canadian Digital Service
                  </p>
                  <p className="medium my-3">
                    Canadian Revenue Agency
                  </p>
                  <p className="medium my-3">
                  Employment and Social Development Canada
                  </p>
                  </Col>
                  <Col xl={6}>
                  <p className="medium mb-3">
                  Defense Research Development Canada
                  </p>
                  <p className="medium my-3">
                  Office of the Correctional Investigator
                  </p>
                  <p className="medium my-3">
                  Government of Prince Edward Island
                  </p>
                  <p className="medium my-3">
                  Government of New Brunswick
                  </p>
                  <p className="medium my-3">
                  PEI Fisher's Association
                  </p>
                  <p className="medium my-3">
                  Farm Credit Canada
                  </p>
                  <p className="medium my-3">
                  Maritime Electric
                  </p>
                  <p className="medium my-3">
                  American Laywer Magazine (ALM Media)
                  </p>   
                  </Col>
                </Row>
            </Col>

            <Col lg={6} xl={4} className="brdr-lft brdr-tp-dark p-0 m-0 d-none d-lg-block">
              <div className="w-100" >
                <object type="image/svg+xml" data="/modern-enterprise.svg" className="w-100 mt-lg-5 mt-xl-0 pt-lg-5 pt-xl-0">svg-animation</object>
              </div>
            </Col>
            
            <Col xs={2}  className="vh-20 brdr-tp">
            </Col>
            <Col xs={2}  className="brdr-tp brdr-lft">
            </Col>
            <Col xs={2}  className="brdr-tp brdr-lft">
            </Col>
            <Col xs={2}  className="brdr-tp brdr-lft">
            </Col>
            <Col xs={2}  className="brdr-tp brdr-lft">
            </Col>
            <Col xs={2}  className="brdr-tp brdr-lft">
            </Col>

            <Col xs={12} className="d-none d-xl-block brdr-tp">
            <Carousel variant="dark" className="vh-100">
              <Carousel.Item interval={60000} className="">
                <Row className="">
                  <Col xs={2} className="vh-30">
                  </Col>
                  <Col xs={10} lg={8} className="brdr-lft px-0">
                  <hr className="my-0 dark" />
                  <h4 className="regular py-4 my-2">       
                  <span className="red">1. From collaboration to insights</span> /
                  </h4>
                  <hr className="my-0" />
                  <h3 className="lead light dark-grey py-4">       
                  <span className="bg-yellow-multiply semi-bold">We design</span> intuitive enterprise systems for people
                  </h3>
                  </Col>
                  <Col xs={2} className="brdr-lft">
                  </Col>

                  <Col xs={2} className="">
                  </Col>
                  <Col xs={10} lg={8} className="brdr-lft brdr-tp">
                    <Row className="dark-grey">
                      <Col sm={4} className="brdr-rght px-0 vh-70">
                        <div className="card-visual-1 d-flex justify-content-center align-items-center">
                            <object type="image/svg+xml" data="/box-fit.svg" className="h-100 p-3">svg-animation</object>
                        </div>
                        <hr className="px-0 mt-0 mb-0" />
                        <h5 className=" regular py-3 my-0">Expectation matching</h5>
                        <hr className="px-0 mt-0" />
                        <p className="mb-5 pe-3 pb-md-3">
                        To start, we meet with stakeholders to align expectations for the project. By creating a shared understanding of the road ahead, and by using proven and repeatable methodologies, our design and technical experts guide the journey from understanding the user to creating the solution.
                        </p>  
                      </Col>
                      <Col sm={4} className="px-0 vh-70">
                      <div className="card-visual-2 d-flex justify-content-center align-items-center">
                        <Image fluid src="" className="p-4 pe-3"/>
                      </div>
                      <hr className="px-0 mt-0 mb-0" />
                        <h5 className=" regular py-3 my-0">Research</h5>
                        <hr className="px-0 mt-0" />
                        <p className="mb-5 pe-3 pb-md-3">
                        With shared expectations, our team works with your staff and customers to gain a deep understanding of your unique business problem from all points of view. By analyzing issues with all involved, from users to customers to your own employees, we can effect change that has a lasting impact.                  </p>  
                      </Col>
                      <Col sm={4} className="brdr-lft px-0 vh-70">
                      <div className="card-visual-3 d-flex justify-content-center align-items-center">
                      <Image fluid src="" className="p-4"/>
                      </div>
                        <hr className="px-0 mt-0 mb-0" />
                        <h5 className=" regular py-3 my-0">Design and prototyping</h5>
                        <hr className="px-0 mt-0" />
                        <p className="mb-5 pe-3 pb-md-3">
                        Design is all about reimagining the user experience. By collaborating with those most closely involved with the feature, tool, product or service that we'll be transforming, the team generates lots of new ideas. We guide the process, designing, testing and iterating solutions with the users instead of for them.
                        </p>  
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={2} lg={2} className=" brdr-lft">
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item interval={30000}>
                <Row>
                  <Col xs={2} className="vh-30">
                  </Col>
                  <Col xs={10} lg={8} className="brdr-lft px-0">
                  <hr className="my-0 dark" />
                  <h4 className="regular py-4 my-2">       
                  <span className="red">2. From insights to code</span> /
                  </h4>
                  <hr className="my-0" />
                  <h3 className="lead light dark-grey py-4">       
                  <span className="bg-yellow-multiply semi-bold">We develop</span> innovative products validated by people
                  </h3>
                  </Col>
                  <Col xs={2} className="brdr-lft">
                  </Col>

                  <Col xs={2} className="">
                  </Col>
                  <Col xs={10} lg={8} className="brdr-lft brdr-tp">
                    <Row className="dark-grey">
                      <Col sm={4} className="brdr-rght px-0 vh-70">
                        <div className="card-visual-1 d-flex justify-content-center align-items-center">
                          <Image fluid src="" className="p-4 "/>
                        </div>
                        <hr className="px-0 mt-0 mb-0" />
                        <h5 className="regular py-3 my-0">Business services</h5>
                        <hr className="px-0 mt-0" />
                        <p className="mb-5 pe-3 pb-md-3">
                        With Lean and Agile principles, our Project Managers and Business Analysists guide the transformation from idea to product. From the start we write test scripts, using Gherkin's plain English syntax, to drive the development.
                        </p>  
                      </Col>
                      <Col sm={4} className="px-0 vh-70">
                      <div className="card-visual-2 d-flex justify-content-center align-items-center">
                        <Image fluid src="" className="p-4 pe-3"/>
                      </div>
                      <hr className="px-0 mt-0 mb-0" />
                        <h5 className="regular py-3 my-0">System architecture design</h5>
                        <hr className="px-0 mt-0" />
                        <p className="mb-5 pe-3 pb-md-3">
                        By structuring applications using Microservice architecture, in other words, as collections of maintainable and testable services that are independently deployable, we build software that is scalable and future-proof.
                        </p>
                      </Col>
                      <Col sm={4} className="brdr-lft px-0 vh-70">
                      <div className="card-visual-3 d-flex justify-content-center align-items-center">
                      <Image fluid src="" className="p-4"/>
                      </div>
                      <hr className="px-0 mt-0 mb-0" />
                        <h5 className="regular py-3 my-0">Software engineering</h5>
                        <hr className="px-0 mt-0" />
                        <p className="mb-5 pe-3 pb-md-3">
                        Whether the solution calls for software, web development or a mobile application, our engineers will develop the most effective and innovative tools to best solve your problems. Behavior-Driven Development encourages communication and aligns the business and the technical sides of a project.
                        </p>  
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={2} lg={2} className=" brdr-lft d-none d-lg-block">
                  </Col>
                </Row>    
              </Carousel.Item>
              <Carousel.Item interval={30000}>
                <Row>
                  <Col xs={2} className="vh-30">
                    </Col>
                    <Col xs={10} lg={8} className="brdr-lft px-0">
                    <hr className="my-0 dark" />
                    <h4 className="regular py-4 my-2">       
                    <span className="red">3. From code to implementation</span> /
                    </h4>
                    <hr className="my-0" />
                    <h3 className="lead light dark-grey py-4">       
                    <span className="bg-yellow-multiply semi-bold">We deliver</span> and maintain modern, scalable software
                    </h3>
                    </Col>
                    <Col xs={2} className="brdr-lft">
                    </Col>

                    <Col xs={2} className="">
                    </Col>
                    <Col xs={10} lg={8} className="brdr-lft brdr-tp">
                      <Row className="dark-grey ">
                        <Col sm={4} className="brdr-rght px-0 vh-70">
                          <div className="card-visual-1 d-flex justify-content-center align-items-center">
                            <Image fluid src="" className="p-4 "/>
                          </div>
                          <hr className="px-0 mt-0 mb-0" />
                          <h5 className="regular py-3 my-0">Automated testing</h5>
                          <hr className="px-0 mt-0" />
                          <p className="mb-5 pe-3 pb-md-3">
                          Because we write our automated test scripts before development even begins we streamline development and address any potential issues early in the process. And with users involved right from the beginning, user acceptance testing is a breeze.
                          </p>  
                        </Col>
                        <Col sm={4} className="px-0 vh-70">
                        <div className="card-visual-2 d-flex justify-content-center align-items-center">
                          <Image fluid src="" className="p-4 pe-3"/>
                        </div>
                        <hr className="px-0 mt-0 mb-0" />
                          <h5 className="regular py-3 my-0">Deployment</h5>
                          <hr className="px-0 mt-0" />
                          <p className="mb-5 pe-3 pb-md-3">
                          Using a DevOps lifecycle, we integrate the efforts of our development and operations teams. This way we quickly deliver high quality software, with new and innovative features, while maintaining uninterrupted performance.
                          </p>
                          </Col>
                        <Col sm={4} className="brdr-lft px-0 vh-70">
                        <div className="card-visual-3 d-flex justify-content-center align-items-center">
                        <Image fluid src="" className="p-4"/>
                        </div>
                        <hr className="px-0 mt-0 mb-0" />
                          <h5 className="regular py-3 my-0">Maintenance and features</h5>
                          <hr className="px-0 mt-0" />
                          <p className="mb-5 pe-3 pb-md-3">
                          After deployment, we are well-positioned to monitor, maintain and optimize the system, as well as to enhance or fine-tune existing features or add new ones.
                          </p>  
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={2} lg={2} className=" brdr-lft d-none d-lg-block">
                  </Col>
                </Row>  
              </Carousel.Item>
            </Carousel>
            </Col>

        <Col xs={12} className="d-xl-none">
          <Row>
            <Col xs={2} className="brdr-tp">
            </Col>
            <Col xs={10} lg={8} className="brdr-lft px-0">
            <hr className="my-0 dark" />
            <h4 className="regular py-3 mb-0">       
            <span className="red">1. From collaboration to insights</span> /
            </h4>
            <hr className="my-0" />
            <h3 className="lead light dark-grey py-4">       
            <span className="bg-yellow-multiply semi-bold">We design</span> intuitive enterprise systems for people
            </h3>
            </Col>
            <Col xs={2} className="brdr-lft brdr-tp">
            </Col>

            <Col xs={2} className=" d-none d-lg-block">
            </Col>
            <Col xs={10} lg={8} className="brdr-lft brdr-tp">
              <Row className="dark-grey">
                <Col sm={4} className="brdr-rght px-0">
                  <div className="card-visual-1 d-flex justify-content-center align-items-center">
                    <object type="image/svg+xml" data="/box-fit.svg" className="h-100 p-4">svg-animation</object>
                  </div>
                  <hr className="px-0 mt-0 mb-0" />
                  <h5 className=" regular py-3 my-0">Expectation matching</h5>
                  <hr className="px-0 mt-0" />
                  <p className="mb-5 pe-3 pb-md-3">
                  To start, we meet with stakeholders to align expectations for the project. By creating a shared understanding of the road ahead, and by using proven and repeatable methodologies, our design and technical experts guide the journey from understanding the user to creating the solution.
                  </p>  
                </Col>
                <Col sm={4} className="px-0">
                <div className="card-visual-2 d-flex justify-content-center align-items-center">
                  <Image fluid src="" className="p-4 pe-3"/>
                </div>
                <hr className="px-0 mt-0 mb-0" />
                  <h5 className=" regular py-3 my-0">Research</h5>
                  <hr className="px-0 mt-0" />
                  <p className="mb-5 pe-3 pb-md-3">
                  With shared expectations, our team works with your staff and customers to gain a deep understanding of your unique business problem from all points of view. By analyzing issues with all involved, from users to customers to your own employees, we can effect change that has a lasting impact.                  </p>  
                </Col>
                <Col sm={4} className="brdr-lft px-0">
                <div className="card-visual-3 d-flex justify-content-center align-items-center">
                 <Image fluid src="" className="p-4"/>
                </div>
                  <hr className="px-0 mt-0 mb-0" />
                  <h5 className=" regular py-3 my-0">Design and prototyping</h5>
                  <hr className="px-0 mt-0" />
                  <p className="mb-5 pe-3 pb-md-3">
                  Design is all about reimagining the user experience. By collaborating with those most closely involved with the feature, tool, product or service that we'll be transforming, the team generates lots of new ideas. We guide the process, designing, testing and iterating solutions with the users instead of for them.
                  </p>  
                </Col>
              </Row>
            </Col>
            <Col xs={2} lg={2} className=" brdr-lft d-none d-lg-block">
            </Col>
            

            <Col xs={2}  className="vh-20 brdr-tp">
            </Col>
            <Col xs={2}  className="brdr-tp brdr-lft">
            </Col>
            <Col xs={2}  className="brdr-tp brdr-lft">
            </Col>
            <Col xs={2}  className="brdr-tp brdr-lft">
            </Col>
            <Col xs={2}  className="brdr-tp brdr-lft">
            </Col>
            <Col xs={2}  className="brdr-tp brdr-lft">
            </Col>

            <Col xs={2} className="brdr-tp">
            </Col>
            <Col xs={10} lg={8} className="brdr-lft px-0">
            <hr className="my-0 dark" />
            <h4 className="regular py-3 mb-0">       
            <span className="red">2. From insights to code</span> /
            </h4>
            <hr className="my-0" />
            <h3 className="lead light dark-grey py-4">       
            <span className="bg-yellow-multiply semi-bold">We develop</span> innovative products
            </h3>
            </Col>
            <Col xs={2} className="brdr-lft brdr-tp">
            </Col>

            <Col xs={2} className=" d-none d-lg-block">
            </Col>
            <Col xs={10} lg={8} className="brdr-lft brdr-tp">
              <Row className="dark-grey">
                <Col sm={4} className="brdr-rght px-0">
                  <div className="card-visual-1 d-flex justify-content-center align-items-center">
                    <Image fluid src="" className="p-4 "/>
                  </div>
                  <hr className="px-0 mt-0 mb-0" />
                  <h5 className="regular py-3 my-0">Business services</h5>
                  <hr className="px-0 mt-0" />
                  <p className="mb-5 pe-3 pb-md-3">
                  With Lean and Agile principles, our Project Managers and Business Analysists guide the transformation from idea to product. From the start we write test scripts, using Gherkin's plain English syntax, to drive the development.
                  </p>  
                </Col>
                <Col sm={4} className="px-0">
                <div className="card-visual-2 d-flex justify-content-center align-items-center">
                  <Image fluid src="" className="p-4 pe-3"/>
                </div>
                <hr className="px-0 mt-0 mb-0" />
                  <h5 className="regular py-3 my-0">System architecture design</h5>
                  <hr className="px-0 mt-0" />
                  <p className="mb-5 pe-3 pb-md-3">
                  By structuring applications using Microservice architecture, in other words, as collections of maintainable and testable services that are independently deployable, we build software that is scalable and future-proof.
                  </p>
                </Col>
                <Col sm={4} className="brdr-lft px-0">
                <div className="card-visual-3 d-flex justify-content-center align-items-center">
                 <Image fluid src="" className="p-4"/>
                </div>
                <hr className="px-0 mt-0 mb-0" />
                  <h5 className="regular py-3 my-0">Software engineering</h5>
                  <hr className="px-0 mt-0" />
                  <p className="mb-5 pe-3 pb-md-3">
                  Whether the solution calls for software, web development or a mobile application, our engineers will develop the most effective and innovative tools to best solve your problems. Behavior-Driven Development encourages communication and aligns the business and the technical sides of a project.
                  </p>  
                </Col>
              </Row>
            </Col>
            <Col xs={2} lg={2} className=" brdr-lft d-none d-lg-block">
            </Col>

            <Col xs={2}  className="vh-20 brdr-tp">
            </Col>
            <Col xs={2}  className="brdr-tp brdr-lft">
            </Col>
            <Col xs={2}  className="brdr-tp brdr-lft">
            </Col>
            <Col xs={2}  className="brdr-tp brdr-lft">
            </Col>
            <Col xs={2}  className="brdr-tp brdr-lft">
            </Col>
            <Col xs={2}  className="brdr-tp brdr-lft">
            </Col>

            <Col xs={2} className="brdr-tp">
            </Col>
            <Col xs={10} lg={8} className="brdr-lft px-0">
            <hr className="my-0 dark" />
            <h4 className="regular py-3 mb-0">       
            <span className="red">3. From code to implementation</span> /
            </h4>
            <hr className="my-0" />
            <h3 className="lead light dark-grey py-4">       
            <span className="bg-yellow-multiply semi-bold">We deliver</span> and maintain modern, scalable software
            </h3>
            </Col>
            <Col xs={2} className="brdr-lft brdr-tp">
            </Col>

            <Col xs={2} className=" d-none d-lg-block">
            </Col>
            <Col xs={10} lg={8} className="brdr-lft brdr-tp">
              <Row className="dark-grey">
                <Col sm={4} className="brdr-rght px-0">
                  <div className="card-visual-1 d-flex justify-content-center align-items-center">
                    <Image fluid src="" className="p-4 "/>
                  </div>
                  <hr className="px-0 mt-0 mb-0" />
                  <h5 className="regular py-3 my-0">Automated testing</h5>
                  <hr className="px-0 mt-0" />
                  <p className="mb-5 pe-3 pb-md-3">
                  Because we write our automated test scripts before development even begins we streamline development and address any potential issues early in the process. And with users involved right from the beginning, user acceptance testing is a breeze.
                  </p>  
                </Col>
                <Col sm={4} className="px-0">
                <div className="card-visual-2 d-flex justify-content-center align-items-center">
                  <Image fluid src="" className="p-4 pe-3"/>
                </div>
                <hr className="px-0 mt-0 mb-0" />
                  <h5 className="regular py-3 my-0">Deployment</h5>
                  <hr className="px-0 mt-0" />
                  <p className="mb-5 pe-3 pb-md-3">
                  Using a DevOps lifecycle, we integrate the efforts of our development and operations teams. This way we quickly deliver high quality software, with new and innovative features, while maintaining uninterrupted performance.
                  </p>
                  </Col>
                <Col sm={4} className="brdr-lft px-0">
                <div className="card-visual-3 d-flex justify-content-center align-items-center">
                 <Image fluid src="" className="p-4"/>
                </div>
                <hr className="px-0 mt-0 mb-0" />
                  <h5 className="regular py-3 my-0">Maintenance and features</h5>
                  <hr className="px-0 mt-0" />
                  <p className="mb-5 pe-3 pb-md-3">
                  After deployment, we are well-positioned to monitor, maintain and optimize the system, as well as to enhance or fine-tune existing features or add new ones.
                  </p>  
                </Col>
              </Row>
            </Col>
            <Col xs={2} lg={2} className=" brdr-lft d-none d-lg-block">
            </Col>
          </Row>
        </Col>

            <Col xs={2}  className="vh-30 brdr-tp">
            </Col>
            <Col xs={2}  className="brdr-tp brdr-lft">
            </Col>
            <Col xs={2}  className="brdr-tp brdr-lft">
            </Col>
            <Col xs={2}  className="brdr-tp brdr-lft">
            </Col>
            <Col xs={2}  className="brdr-tp brdr-lft">
            </Col>
            <Col xs={2}  className="brdr-tp brdr-lft">
            </Col>

            <Col xs={12} lg={6} className="d-flex align-items-center brdr-rght brdr-tp-dark px-0">
                <h2 className="h1 light dark-grey my-5">
                It's our business to help your business rethink what's possible
                </h2>
            </Col>

            <Col lg={6} className="brdr-tp-dark px-0">
              <div className="w-100" >
                <object type="image/svg+xml" data="/bulb-morph.svg" className="w-100 mt-lg-5 mt-xl-0 pt-lg-5 pt-xl-0">svg-animation</object>
              </div>
            </Col>

            <Col xs={12} className="brdr-lft brdr-tp px-0 d-none">
              <video className="w-full video-margin-fix" autoPlay loop muted>
                <source src="./tower.mp4" type='video/mp4' />
              </video>
            </Col>       
 
          </Row>
        </Container>
            
      </main>

      <Footer />
    </>
  )
}
