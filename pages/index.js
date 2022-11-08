import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import React, { useState, useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Typewriter } from 'react-simple-typewriter';
import Carousel from 'react-bootstrap/Carousel';
import TextLoop from "react-text-loop";
import FadeIn from 'react-fade-in';

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
        <title>THINKING/BIG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="px-2 px-sm-4 px-lg-5">
        <Container fluid className="cntnr-brdr">
          <Row fluid>

            {/* HERO large tablet and above */}
            <div className="bg-stripes-2">
              <Row fluid className="py-5">
              <Col md={2} className="d-none d-md-block">
              </Col>
                <Col xs={12} md={8} className="px-0">
                  <div className="pb-5">
                    <h1 className="dark-grey light my-4 py-4 my-xl-5 pb-xl-5 ">
                    We&nbsp; 
                    <TextLoop
                    interval={2500}
                    className="multiply">
                      <span className="semi-bold bg-yellow-multiply pe-2">
                        design
                      </span>
                      <span className="semi-bold bg-yellow-multiply pe-2">
                        develop
                      </span>
                      <span className="semi-bold bg-yellow-multiply pe-2">
                        deliver
                      </span> 
                    </TextLoop>
                    <br />
                    <span className="nowrap">digital systems&nbsp; </span>
                    <br />
                    and strategies
                    </h1>
                  </div>
                </Col>
                <Col md={2} className="d-none d-md-block">
                </Col>
                <Col xl={2} className="d-none d-xl-block">
                </Col>
                <Col xs={12} xl={8} className="d-flex align-items-center justify-content-end px-0">
                <div className="w-100 " >
                  <object type="image/svg+xml" data="/tb-light-alt.svg" className="multiply">svg-animation</object>
                </div>
                </Col>
              </Row>
            </div>

            <Col xs={12}  className="vh-20 bg-stripes-2">
            </Col>

            {/* 123 part large screens */}
            <Col xs={12} className="d-none d-xxl-block brdr-tp z-0">
            <Carousel variant="dark" slide={false} interval={null} className="multiply z-0">
              <Carousel.Item className="">
                <Row className="">
                  <Col xs={2} className="">
                  </Col>
                  <Col xs={10} lg={8} className="brdr-lft px-0">
                  
                  <h4 className="regular py-3 my-2">       
                  <span className="red">1. From collaboration to insights</span> /
                  </h4>
                  <hr className="my-0" />
                  <h3 className="lead light dark-grey py-4 pe-xl-5">       
                  We <span className="bg-yellow-multiply px-1 semi-bold">design</span> intuitive enterprise systems for people
                  </h3>
                  </Col>
                  <Col xs={2} className="brdr-lft">
                  </Col>

                  <Col xs={2} className="">
                  </Col>
                  <Col xs={10} lg={8} className="brdr-lft">
                    <Row className="dark-grey ">
                    <hr className="px-0 mt-0 mb-0" />
                      <Col sm={4} className="brdr-rght px-0">
                      <div className="vh-35 d-flex align-items-center justify-content-center" >
                        <object type="image/svg+xml" data="/puzzle-pieces.svg" className="h-100 p-3">svg-animation</object>
                      </div>
                      <div className="vh-35">
                        <hr className="px-0 mt-0 mb-0" />
                        <h5 className=" regular py-3 my-0">Expectation matching</h5>
                        <hr className="px-0 mt-0" />
                        <p className="mb-5 light pe-3 pb-md-3">
                        To start, we meet with stakeholders to align expectations for the project. By creating a shared understanding of the road ahead, and by using proven and repeatable methodologies, our design and technical experts guide the journey from understanding your users to creating the solution.
                        </p>  
                      </div>
                      </Col>
                      <Col sm={4} className="px-0">
                      <div className="vh-35 d-flex align-items-center justify-content-center" >
                        <object type="image/svg+xml" data="/magnify.svg" className="h-100 p-3">svg-animation</object>
                      </div>
                      <div className="vh-35">
                      <hr className="px-0 mt-0 mb-0" />
                        <h5 className=" regular py-3 my-0">Research</h5>
                        <hr className="px-0 mt-0" />
                        <p className="mb-5 light pe-3 pb-md-3">
                        With shared expectations, our team works with your staff and customers to gain a deep understanding of your unique business challenge from all points of view. By analyzing issues with all involved &mdash; from users to customers to your own employees &mdash; we can affect change that has a lasting impact.
                        </p>
                      </div>
                      </Col>
                      <Col sm={4} className="brdr-lft px-0">
                      <div className="vh-35 d-flex align-items-center justify-content-center p-2" >
                        <object type="image/svg+xml" data="/proto.svg" className="h-100 p-3">svg-animation</object>
                      </div>
                      <div className="vh-35">
                        <hr className="px-0 mt-0 mb-0" />
                        <h5 className=" regular py-3 my-0">Design and prototyping</h5>
                        <hr className="px-0 mt-0" />
                        <p className="mb-5 light pe-3 pb-md-3">
                        Design is all about reimagining the user experience. By collaborating with those most closely involved with the feature, tool, product or service that we'll be transforming, the team generates lots of new ideas. We guide the process, designing, testing and iterating solutions with users instead of for them.
                        </p> 
                      </div>   
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={2} lg={2} className=" brdr-lft">
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <Col xs={2} className="">
                  </Col>
                  <Col xs={10} lg={8} className="brdr-lft px-0">
                  
                  <h4 className="regular py-3 my-2">       
                  <span className="red">2. From insights to code</span> /
                  </h4>
                  <hr className="my-0" />
                  <h3 className="lead light dark-grey py-4 pe-xl-5">       
                  We <span className="bg-yellow-multiply px-1 semi-bold">develop</span> innovative products validated by people
                  </h3>
                  </Col>
                  <Col xs={2} className="brdr-lft">
                  </Col>

                  <Col xs={2} className="">
                  </Col>
                  <Col xs={10} lg={8} className="brdr-lft">
                    <Row className="dark-grey d-flex ">
                    <hr className="px-0 mt-0 mb-0" />
                      <Col sm={4} className="brdr-rght px-0">
                      <div className="vh-35 d-flex align-items-center justify-content-center" >
                        <object type="image/svg+xml" data="/business-services.svg" className="h-100 p-3">svg-animation</object>
                      </div>
                      <div className="vh-35">
                        <hr className="px-0 mt-0 mb-0" />
                        <h5 className="regular py-3 my-0">Business services</h5>
                        <hr className="px-0 mt-0" />
                        <p className="mb-5 light pe-3 pb-md-3">
                        With Lean and Agile principles, our Project Managers and Business Analysts guide the transformation from idea to product. From the start, we write test scripts &mdash; using Gherkin's plain English syntax &mdash; to drive the development.
                        </p> 
                      </div>   
                      </Col>
                      <Col sm={4} className="px-0">
                      <div className="vh-35 d-flex align-items-center justify-content-center" >
                        <object type="image/svg+xml" data="/system-arch.svg" className="h-100 p-3">svg-animation</object>
                      </div>
                      <div className="vh-35">
                      <hr className="px-0 mt-0 mb-0" />
                        <h5 className="regular py-3 my-0">System architecture design</h5>
                        <hr className="px-0 mt-0" />
                        <p className="mb-5 light pe-3 pb-md-3">
                        By structuring applications using Microservice architecture, in other words, as collections of maintainable and testable services that are independently deployable, we build software that is scalable and future proof.
                        </p>
                      </div>
                      </Col>
                      <Col sm={4} className="brdr-lft px-0">
                      <div className="vh-35 d-flex align-items-center justify-content-center p-2" >
                        <object type="image/svg+xml" data="/software-engineering.svg" className="h-100 p-2">svg-animation</object>
                      </div>
                      <div className="vh-35">
                      <hr className="px-0 mt-0 mb-0" />
                        <h5 className="regular py-3 my-0">Software engineering</h5>
                        <hr className="px-0 mt-0" />
                        <p className="mb-5 light pe-3 pb-md-3">
                        Whether the solution calls for software, web development or a mobile application, our engineers will develop the most effective and innovative tools to best solve your problems. Behaviour-Driven Development encourages communication and aligns the business and technical sides of a project.
                        </p>
                      </div> 
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={2} lg={2} className=" brdr-lft d-none d-lg-block">
                  </Col>
                </Row>    
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <Col xs={2} className="">
                    </Col>
                    <Col xs={10} lg={8} className="brdr-lft px-0">
                    
                    <h4 className="regular py-3 my-2">       
                    <span className="red">3. From code to implementation</span> /
                    </h4>
                    <hr className="my-0" />
                    <h3 className="lead light dark-grey py-4 pe-xl-5">       
                    We <span className="bg-yellow-multiply px-1 semi-bold">deliver</span> and maintain modern, scalable software
                    </h3>
                    </Col>
                    <Col xs={2} className="brdr-lft">
                    </Col>

                    <Col xs={2} className="">
                    </Col>
                    <Col xs={10} lg={8} className="brdr-lft">
                      <Row className="dark-grey d-flex">
                      <hr className="px-0 mt-0 mb-0" />
                        <Col sm={4} className="brdr-rght px-0">
                        <div className="vh-35 d-flex align-items-center justify-content-center" >
                          <object type="image/svg+xml" data="/automated-testing.svg" className="h-100 p-3">svg-animation</object>
                        </div>
                        <div className="vh-35">
                          <hr className="px-0 mt-0 mb-0" />
                          <h5 className="regular py-3 my-0">Automated testing</h5>
                          <hr className="px-0 mt-0" />
                          <p className="mb-5 light pe-3 pb-md-3">
                          We work with our clients to develop thorough, well-documented specifications that enable us to create robust automated test suites that provide confidence and safety as we build the solutions you need. And with users involved right from the beginning, user acceptance testing is a breeze.
                          </p>  
                        </div>
                        </Col>
                        <Col sm={4} className="px-0">
                        <div className="vh-35 d-flex align-items-center justify-content-center" >
                          <object type="image/svg+xml" data="/deployment.svg" className="h-100 ">svg-animation</object>
                        </div>
                        <div className="vh-35">
                        <hr className="px-0 mt-0 mb-0" />
                          <h5 className="regular py-3 my-0">Deployment</h5>
                          <hr className="px-0 mt-0" />
                          <p className="mb-5 light pe-3 pb-md-3">
                          With a DevOps mindset, we prioritize delivery processes that encourage fast flow and adaptive iteration cycles, empowering development teams to quickly react to user feedback. This way we quickly deliver high quality software with new and innovative features, while maintaining uninterrupted performance.
                          </p>
                        </div>
                        </Col>
                        <Col sm={4} className="brdr-lft px-0">
                        <div className="vh-35 d-flex align-items-center justify-content-center" >
                          <object type="image/svg+xml" data="/maintenance-enhancement.svg" className="h-100 p-3">svg-animation</object>
                        </div>
                        <div className="vh-35">
                        <hr className="px-0 mt-0 mb-0" />
                          <h5 className="regular py-3 my-0">Maintenance and features</h5>
                          <hr className="px-0 mt-0" />
                          <p className="mb-5 light pe-3 pb-md-3">
                          After deployment, we are well positioned to monitor, maintain and optimize the system, as well as to enhance or fine-tune existing features or add new ones.
                          </p> 
                        </div>   
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={2} lg={2} className=" brdr-lft d-none d-lg-block">
                  </Col>
                </Row>  
              </Carousel.Item>
            </Carousel>
            </Col>

        {/* 123 part laptop and below */}
        <Col xs={12} className="d-xxl-none">
          <Row>
            <Col xs={12} className="px-0">
            <hr className="my-0 dark" />
            <h4 className="regular py-3 mb-0">       
            <span className="red">1. From collaboration to insights</span> /
            </h4>
            <hr className="my-0" />
            <h3 className="lead light dark-grey py-4 pe-md-5">       
            We <span className="bg-yellow-multiply semi-bold">design</span> intuitive enterprise systems for people
            </h3>
            </Col>
            <Col xs={12} className="">
              <Row className="dark-grey">
                <Col md={4} className="brdr-rght-lg px-0">
                <hr className="px-0 mt-0 mb-0" />
                <div className="vh-25 d-flex align-items-center justify-content-center" >
                  <object type="image/svg+xml" data="/puzzle-pieces.svg" className="h-100">svg-animation</object>
                </div>       
                  <hr className="px-0 mt-0 mb-0" />
                  <h5 className="regular py-3 my-0">Expectation matching</h5>
                  <hr className="px-0 mt-0" />
                  <p className="mb-5 light pe-3 pb-md-3">
                  To start, we meet with stakeholders to align expectations for the project. By creating a shared understanding of the road ahead, and by using proven and repeatable methodologies, our design and technical experts guide the journey from understanding your users to creating the solution.
                  </p>  
                </Col>
                <Col md={4} className="brdr-rght-lg px-0">
                <hr className="px-0 mt-0 mb-0" />
                <div className="vh-25 d-flex align-items-center justify-content-center" >
                  <object type="image/svg+xml" data="/magnify.svg" className="h-100">svg-animation</object>
                </div>  
                <hr className="px-0 mt-0 mb-0" />
                  <h5 className=" regular py-3 my-0">Research</h5>
                  <hr className="px-0 mt-0" />
                  <p className="mb-5 light pe-3 pb-md-3">
                  With shared expectations, our team works with your staff and customers to gain a deep understanding of your unique business challenge from all points of view. By analyzing issues with all involved &mdash; from users to customers to your own employees &mdash; we can affect change that has a lasting impact.
                  </p>
                </Col>
                <Col md={4} className="px-0">
                <hr className="px-0 mt-0 mb-0" />
                <div className="vh-25 d-flex align-items-center justify-content-center" >
                  <object type="image/svg+xml" data="/proto.svg" className="h-100">svg-animation</object>
                </div>  
                  <hr className="px-0 mt-0 mb-0" />
                  <h5 className=" regular py-3 my-0">Design and prototyping</h5>
                  <hr className="px-0 mt-0" />
                  <p className="mb-5 light pe-3 pb-md-3">
                  Design is all about reimagining the user experience. By collaborating with those most closely involved with the feature, tool, product or service that we'll be transforming, the team generates lots of new ideas. We guide the process, designing, testing and iterating solutions with users instead of for them.
                  </p>  
                </Col>
              </Row>
            </Col>            
            <Col xs={12}  className="vh-20 brdr-tp bg-stripes-2">
            </Col>
            <Col xs={12} className="px-0">
            <hr className="my-0 dark" />
            <h4 className="regular py-3 mb-0">       
            <span className="red">2. From insights to code</span> /
            </h4>
            <hr className="my-0" />
            <h3 className="lead light dark-grey py-4 pe-md-5">       
            We <span className="bg-yellow-multiply semi-bold">develop</span> innovative products validated by people
            </h3>
            </Col>
            <Col xs={12} className="">
              <Row className="dark-grey">
                <Col md={4} className="brdr-rght-lg px-0">
                <hr className="px-0 mt-0 mb-0" />
                <div className="vh-25 d-flex align-items-center justify-content-center" >
                  <object type="image/svg+xml" data="/business-services.svg" className="h-100">svg-animation</object>
                </div> 
                  <hr className="px-0 mt-0 mb-0" />
                  <h5 className="regular py-3 my-0">Business services</h5>
                  <hr className="px-0 mt-0" />
                  <p className="mb-5 light pe-3 pb-md-3">
                  With Lean and Agile principles, our Project Managers and Business Analysts guide the transformation from idea to product. From the start, we write test scripts &mdash; using Gherkin's plain English syntax &mdash; to drive the development.
                  </p>  
                </Col>
                <Col md={4} className="brdr-rght-lg px-0">
                <hr className="px-0 mt-0 mb-0" />
                <div className="vh-25 d-flex align-items-center justify-content-center" >
                  <object type="image/svg+xml" data="/system-arch.svg" className="h-100">svg-animation</object>
                </div> 
                <hr className="px-0 mt-0 mb-0" />
                  <h5 className="regular py-3 my-0">System architecture design</h5>
                  <hr className="px-0 mt-0" />
                  <p className="mb-5 light pe-3 pb-md-3">
                  By structuring applications using Microservice architecture, in other words, as collections of maintainable and testable services that are independently deployable, we build software that is scalable and future proof.
                  </p>
                </Col>
                <Col md={4} className="px-0">
                <hr className="px-0 mt-0 mb-0" />
                <div className="vh-25 d-flex align-items-center justify-content-center" >
                  <object type="image/svg+xml" data="/software-engineering.svg" className="h-100">svg-animation</object>
                </div> 
                <hr className="px-0 mt-0 mb-0" />
                  <h5 className="regular py-3 my-0">Software engineering</h5>
                  <hr className="px-0 mt-0" />
                  <p className="mb-5 light pe-3 pb-md-3">
                  Whether the solution calls for software, web development or a mobile application, our engineers will develop the most effective and innovative tools to best solve your problems. Behaviour-Driven Development encourages communication and aligns the business and technical sides of a project.
                  </p>  
                </Col>
              </Row>
            </Col>
            <Col xs={12}  className="vh-20 brdr-tp bg-stripes-2">
            </Col>
            <Col xs={12} className="px-0">
            <hr className="my-0 dark" />
            <h4 className="regular py-3 mb-0">       
            <span className="red">3. From code to implementation</span> /
            </h4>
            <hr className="my-0" />
            <h3 className="lead light dark-grey py-4 pe-md-5">       
            We <span className="bg-yellow-multiply semi-bold">deliver</span> and maintain modern, scalable software
            </h3>
            </Col>
            <Col xs={12} className="">
              <Row className="dark-grey">
                <Col md={4} className="brdr-rght-lg px-0">
                <hr className="px-0 mt-0 mb-0" />
                <div className="vh-25 d-flex align-items-center justify-content-center" >
                  <object type="image/svg+xml" data="/automated-testing.svg" className="h-100">svg-animation</object>
                </div> 
                  <hr className="px-0 mt-0 mb-0" />
                  <h5 className="regular py-3 my-0">Automated testing</h5>
                  <hr className="px-0 mt-0" />
                  <p className="mb-5 light pe-3 pb-md-3">
                  We work with our clients to develop thorough, well-documented specifications that enable us to create robust automated test suites that provide confidence and safety as we build the solutions you need. And with users involved right from the beginning, user acceptance testing is a breeze.
                  </p>  
                </Col>
                <Col md={4} className="brdr-rght-lg px-0">
                <hr className="px-0 mt-0 mb-0" />
                <div className="vh-25 d-flex align-items-center justify-content-center" >
                  <object type="image/svg+xml" data="/deployment.svg" className="h-100">svg-animation</object>
                </div> 
                <hr className="px-0 mt-0 mb-0" />
                  <h5 className="regular py-3 my-0">Deployment</h5>
                  <hr className="px-0 mt-0" />
                  <p className="mb-5 light pe-3 pb-md-3">
                  With a DevOps mindset, we prioritize delivery processes that encourage fast flow and adaptive iteration cycles, empowering development teams to quickly react to user feedback. This way we quickly deliver high quality software with new and innovative features, while maintaining uninterrupted performance.
                  </p>
                  </Col>
                <Col md={4} className="px-0">
                <hr className="px-0 mt-0 mb-0" />
                <div className="vh-25 d-flex align-items-center justify-content-center" >
                  <object type="image/svg+xml" data="/maintenance-enhancement.svg" className="h-100">svg-animation</object>
                </div> 
                <hr className="px-0 mt-0 mb-0" />
                  <h5 className="regular py-3 my-0">Maintenance and features</h5>
                  <hr className="px-0 mt-0" />
                  <p className="mb-5 light pe-3 pb-md-3">
                  After deployment, we are well positioned to monitor, maintain and optimize the system, as well as to enhance or fine-tune existing features or add new ones.
                  </p>  
                </Col>
              </Row>
            </Col>
            <Col xs={2} lg={2} className=" brdr-lft d-none d-lg-block">
            </Col>
          </Row>
        </Col>
        <Col xs={12}  className="vh-30 brdr-tp bg-stripes-2">
        </Col>

        <Col xl={2} className="d-none d-xxl-block brdr-tp brdr-rght">
        </Col>
        <Col xs={12} md={6} xxl={4} className="brdr-tp-dark px-0 bg-stripes-4">
              <h3 className="light dark-grey ps-0 pe-3 my-4 my-lg-5 pb-xl-3">
              Our <span className="medium">people</span>, <span className="medium">skills</span> and <span className="medium">technology</span> support the <span className="italic">most modern enterprise systems</span> in Canada.
              </h3>          
                <hr className=""/>
              <div className="w-100 d-md-none" >
                <object type="image/svg+xml" data="/modern-enterprise.svg" className="w-100 p-md-5 p-xl-0">svg-animation</object>
              </div>
              <hr className="d-md-none"/>

                <h3 className="d-md-none regular my-3">
                  Client list
                </h3>
              <hr className="d-md-none"/>
                <Row className="w-100 d-flex text-muted">
                  <Col xxl={6} className="">
                  <p className="  mb-3">
                    Veterans Affairs Canada
                  </p>
                  <p className="my-3">
                    Treasury Board of Canada Secretariat
                  </p>
                  <p className="my-3">
                    Department of National Defence
                  </p>
                  <p className=" my-3">
                    National Defence and Canadian Armed Forces Ombudsman
                  </p>
                  <p className=" my-3">
                    Office of the Veterans Ombudsman
                  </p>
                  <p className="my-3">
                    Canadian Digital Service
                  </p>
                  <p className="my-3">
                    Canadian Revenue Agency
                  </p>
                  <p className="my-3">
                  Employment and Social Development Canada
                  </p>
                  </Col>
                  <Col xxl={6} className="">
                  <p className="mb-3">
                  Defense Research Development Canada
                  </p>
                  <p className="my-3">
                  Office of the Correctional Investigator
                  </p>
                  <p className="my-3">
                  Government of Prince Edward Island
                  </p>
                  <p className="my-3">
                  Government of New Brunswick
                  </p>
                  <p className="my-3">
                  PEI Fisher's Association
                  </p>
                  <p className="my-3">
                  Farm Credit Canada
                  </p>
                  <p className="my-3">
                  Maritime Electric
                  </p>
                  <p className="my-3">
                  American Laywer Magazine (ALM Media)
                  </p>   
                  </Col>
                </Row>
              
            </Col>
            <Col md={6} xxl={4} className="brdr-lft brdr-tp-dark p-0 m-0 d-none d-md-block">
              <div className="w-100 h-100 d-flex align-items-center justify-content-center" >
                <object type="image/svg+xml" data="/modern-enterprise.svg" className="w-100">svg-animation</object>
              </div>
            </Col> 
            <Col xxl={2} className="d-none d-xxl-block brdr-tp brdr-lft">
            </Col>      

            <Col xs={12}  className="vh-20 brdr-tp bg-stripes-2 ">
        </Col>
        </Row>
        </Container>
      </main>
      <Footer />
    </>
  )
}
