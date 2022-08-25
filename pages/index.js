import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import React, { useState, useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
        <title>THINKING/BIG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="px-sm-4 px-lg-5">
        <Container fluid className="cntnr-brdr">
          <Row fluid className="">

            {/* HERO large tablet and above */}
            <div  className="d-none d-md-block">
              <Row fluid className="">
                <Col xs={2}>
                </Col>
                <Col xs={10} xl={8} className="brdr-lft-mob px-0 bg-stripes pt-5 pb-4">
                <div className="py-5 pe-5 mb-4 mt-3">
                  <h1 className="dark-grey light my-5 pb-4 pb-xl-5 pt-5 pe-3 pe-xl-5">
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
                    enterprise digital systems for your entire organization
                  </h1>  
                </div>
                </Col>
                <Col xs={2} md={2} className="brdr-lft d-none d-xl-block">
                </Col>
              </Row>
            </div>

            {/* HERO MOBILE*/}
            <div  className="d-md-none px-0">
            <Col xs={12} className="px-0 bg-stripes-2 py-4">
            <div className="py-5">
              <h1 className="dark-grey light my-5 pt-5 ">
                <span className="semi-bold bg-yellow-multiply"> 
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
                enterprise digital systems for your entire organization
              </h1>  
            </div>
            </Col>
            </div>
            <Col xs={12} lg={12} className="brdr-tp bg-stripes-2 m-0 p-0 d-flex align-items-center justify-content-center">
              <div className="w-100" >
              <object type="image/svg+xml" data="/tb-light-2.svg" className="hero-specs">svg-animation</object>
              </div>
            </Col>
            <Col xs={12}  className="vh-20 brdr-tp bg-stripes-2">
            </Col>            
            <Col xs={12} lg={6} xl={8} className="brdr-tp-dark px-0 bg-stripes-3">
                <h2 className="light dark-grey ps-0 pe-3 mt-5 mb-5 mb-xl-5 pb-xl-5">
                Our <span className="medium">people</span>, <span className="medium">skills</span> and <span className="medium">technology</span> support the <span className="italic">most modern enterprise systems</span> in Canada.
                </h2>          
                <hr className=""/>
              <div className="w-100 d-lg-none" >
                <object type="image/svg+xml" data="/modern-enterprise.svg" className="w-100 p-md-5 p-xl-0">svg-animation</object>
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
            <Col xs={12}  className="vh-20 brdr-tp bg-stripes-2">
            </Col>

            {/* 123 part large screens */}
            <Col xs={12} className="d-none d-xxl-block brdr-tp">
            <Carousel variant="dark" slide={false} interval={null} className="vh-75">
              <Carousel.Item className="">
                <Row className="">
                  <Col xs={2} className="vh-40">
                  </Col>
                  <Col xs={10} lg={8} className="brdr-lft px-0">
                  <hr className="my-0 dark" />
                  <h4 className="regular py-4 my-2">       
                  <span className="red">1. From collaboration to insights</span> /
                  </h4>
                  <hr className="my-0" />
                  <h3 className="lead light dark-grey py-4 pe-xl-5">       
                  <span className="bg-yellow-multiply semi-bold">We design</span> intuitive enterprise systems for people
                  </h3>
                  </Col>
                  <Col xs={2} className="brdr-lft">
                  </Col>

                  <Col xs={2} className="">
                  </Col>
                  <Col xs={10} lg={8} className="brdr-lft">
                    <Row className="dark-grey vh-30 d-flex align-items-end">
                      <Col sm={4} className="brdr-rght px-0 vh-35">
                        <hr className="px-0 mt-0 mb-0" />
                        <h5 className=" regular py-3 my-0">Expectation matching</h5>
                        <hr className="px-0 mt-0" />
                        <p className="mb-5 pe-3 pb-md-3">
                        To start, we meet with stakeholders to align expectations for the project. By creating a shared understanding of the road ahead, and by using proven and repeatable methodologies, our design and technical experts guide the journey from understanding the user to creating the solution.
                        </p>  
                      </Col>
                      <Col sm={4} className="px-0 vh-35">
                      <hr className="px-0 mt-0 mb-0" />
                        <h5 className=" regular py-3 my-0">Research</h5>
                        <hr className="px-0 mt-0" />
                        <p className="mb-5 pe-3 pb-md-3">
                        With shared expectations, our team works with your staff and customers to gain a deep understanding of your unique business problem from all points of view. By analyzing issues with all involved, from users to customers to your own employees, we can effect change that has a lasting impact.                  </p>  
                      </Col>
                      <Col sm={4} className="brdr-lft px-0 vh-35">
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
              <Carousel.Item>
                <Row>
                  <Col xs={2} className="vh-40">
                  </Col>
                  <Col xs={10} lg={8} className="brdr-lft px-0">
                  <hr className="my-0 dark" />
                  <h4 className="regular py-4 my-2">       
                  <span className="red">2. From insights to code</span> /
                  </h4>
                  <hr className="my-0" />
                  <h3 className="lead light dark-grey py-4 pe-xl-5">       
                  <span className="bg-yellow-multiply semi-bold">We develop</span> innovative products validated by people
                  </h3>
                  </Col>
                  <Col xs={2} className="brdr-lft">
                  </Col>

                  <Col xs={2} className="">
                  </Col>
                  <Col xs={10} lg={8} className="brdr-lft">
                    <Row className="dark-grey d-flex align-items-end vh-35">
                      <Col sm={4} className="brdr-rght px-0 vh-35">
                        <hr className="px-0 mt-0 mb-0" />
                        <h5 className="regular py-3 my-0">Business services</h5>
                        <hr className="px-0 mt-0" />
                        <p className="mb-5 pe-3 pb-md-3">
                        With Lean and Agile principles, our Project Managers and Business Analysists guide the transformation from idea to product. From the start we write test scripts, using Gherkin's plain English syntax, to drive the development.
                        </p>  
                      </Col>
                      <Col sm={4} className="px-0 vh-35">
                      <hr className="px-0 mt-0 mb-0" />
                        <h5 className="regular py-3 my-0">System architecture design</h5>
                        <hr className="px-0 mt-0" />
                        <p className="mb-5 pe-3 pb-md-3">
                        By structuring applications using Microservice architecture, in other words, as collections of maintainable and testable services that are independently deployable, we build software that is scalable and future-proof.
                        </p>
                      </Col>
                      <Col sm={4} className="brdr-lft px-0 vh-35">
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
              <Carousel.Item>
                <Row>
                  <Col xs={2} className="vh-40">
                    </Col>
                    <Col xs={10} lg={8} className="brdr-lft px-0">
                    <hr className="my-0 dark" />
                    <h4 className="regular py-4 my-2">       
                    <span className="red">3. From code to implementation</span> /
                    </h4>
                    <hr className="my-0" />
                    <h3 className="lead light dark-grey py-4 pe-xl-5">       
                    <span className="bg-yellow-multiply semi-bold">We deliver</span> and maintain modern, scalable software
                    </h3>
                    </Col>
                    <Col xs={2} className="brdr-lft">
                    </Col>

                    <Col xs={2} className="">
                    </Col>
                    <Col xs={10} lg={8} className="brdr-lft">
                      <Row className="dark-grey d-flex align-items-end vh-35">
                        <Col sm={4} className="brdr-rght px-0 vh-35">
                          <hr className="px-0 mt-0 mb-0" />
                          <h5 className="regular py-3 my-0">Automated testing</h5>
                          <hr className="px-0 mt-0" />
                          <p className="mb-5 pe-3 pb-md-3">
                          Because we write our automated test scripts before development even begins we streamline development and address any potential issues early in the process. And with users involved right from the beginning, user acceptance testing is a breeze.
                          </p>  
                        </Col>
                        <Col sm={4} className="px-0 vh-35">
                        <hr className="px-0 mt-0 mb-0" />
                          <h5 className="regular py-3 my-0">Deployment</h5>
                          <hr className="px-0 mt-0" />
                          <p className="mb-5 pe-3 pb-md-3">
                          Using a DevOps lifecycle, we integrate the efforts of our development and operations teams. This way we quickly deliver high quality software, with new and innovative features, while maintaining uninterrupted performance.
                          </p>
                          </Col>
                        <Col sm={4} className="brdr-lft px-0 vh-35">
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

        {/* 123 part laptop and below */}
        <Col xs={12} className="d-xxl-none">
          <Row>
            <Col xs={12} className="px-0 vh-35">
            <hr className="my-0 dark" />
            <h4 className="regular py-3 mb-0">       
            <span className="red">1. From collaboration to insights</span> /
            </h4>
            <hr className="my-0" />
            <h3 className="lead light dark-grey py-4 pe-md-5">       
            <span className="bg-yellow-multiply semi-bold">We design</span> intuitive enterprise systems for people
            </h3>
            </Col>
            <Col xs={12} className="">
              <Row className="dark-grey">
                <Col md={4} className="brdr-rght-lg px-0">
                  <hr className="px-0 mt-0 mb-0" />
                  <h5 className="regular py-3 my-0">Expectation matching</h5>
                  <hr className="px-0 mt-0" />
                  <p className="mb-5 pe-3 pb-md-3">
                  To start, we meet with stakeholders to align expectations for the project. By creating a shared understanding of the road ahead, and by using proven and repeatable methodologies, our design and technical experts guide the journey from understanding the user to creating the solution.
                  </p>  
                </Col>
                <Col md={4} className="brdr-rght-lg px-0">
                <hr className="px-0 mt-0 mb-0" />
                  <h5 className=" regular py-3 my-0">Research</h5>
                  <hr className="px-0 mt-0" />
                  <p className="mb-5 pe-3 pb-md-3">
                  With shared expectations, our team works with your staff and customers to gain a deep understanding of your unique business problem from all points of view. By analyzing issues with all involved, from users to customers to your own employees, we can effect change that has a lasting impact.
                  </p>
                </Col>
                <Col md={4} className="px-0">
                  <hr className="px-0 mt-0 mb-0" />
                  <h5 className=" regular py-3 my-0">Design and prototyping</h5>
                  <hr className="px-0 mt-0" />
                  <p className="mb-5 pe-3 pb-md-3">
                  Design is all about reimagining the user experience. By collaborating with those most closely involved with the feature, tool, product or service that we'll be transforming, the team generates lots of new ideas. We guide the process, designing, testing and iterating solutions with the users instead of for them.
                  </p>  
                </Col>
              </Row>
            </Col>            
            <Col xs={12}  className="vh-20 brdr-tp bg-stripes-2">
            </Col>
            <Col xs={12} className="px-0 vh-35">
            <hr className="my-0 dark" />
            <h4 className="regular py-3 mb-0">       
            <span className="red">2. From insights to code</span> /
            </h4>
            <hr className="my-0" />
            <h3 className="lead light dark-grey py-4 pe-md-5">       
            <span className="bg-yellow-multiply semi-bold">We develop</span> innovative products validated by people
            </h3>
            </Col>
            <Col xs={12} className="">
              <Row className="dark-grey">
                <Col md={4} className="brdr-rght-lg px-0">
                  <hr className="px-0 mt-0 mb-0" />
                  <h5 className="regular py-3 my-0">Business services</h5>
                  <hr className="px-0 mt-0" />
                  <p className="mb-5 pe-3 pb-md-3">
                  With Lean and Agile principles, our Project Managers and Business Analysists guide the transformation from idea to product. From the start we write test scripts, using Gherkin's plain English syntax, to drive the development.
                  </p>  
                </Col>
                <Col md={4} className="brdr-rght-lg px-0">
                <hr className="px-0 mt-0 mb-0" />
                  <h5 className="regular py-3 my-0">System architecture design</h5>
                  <hr className="px-0 mt-0" />
                  <p className="mb-5 pe-3 pb-md-3">
                  By structuring applications using Microservice architecture, in other words, as collections of maintainable and testable services that are independently deployable, we build software that is scalable and future-proof.
                  </p>
                </Col>
                <Col md={4} className="px-0">
                <hr className="px-0 mt-0 mb-0" />
                  <h5 className="regular py-3 my-0">Software engineering</h5>
                  <hr className="px-0 mt-0" />
                  <p className="mb-5 pe-3 pb-md-3">
                  Whether the solution calls for software, web development or a mobile application, our engineers will develop the most effective and innovative tools to best solve your problems. Behavior-Driven Development encourages communication and aligns the business and the technical sides of a project.
                  </p>  
                </Col>
              </Row>
            </Col>
            <Col xs={12}  className="vh-20 brdr-tp bg-stripes-2">
            </Col>
            <Col xs={12} className="px-0 vh-35">
            <hr className="my-0 dark" />
            <h4 className="regular py-3 mb-0">       
            <span className="red">3. From code to implementation</span> /
            </h4>
            <hr className="my-0" />
            <h3 className="lead light dark-grey py-4 pe-md-5">       
            <span className="bg-yellow-multiply semi-bold">We deliver</span> and maintain modern, scalable software
            </h3>
            </Col>
            <Col xs={12} className="">
              <Row className="dark-grey">
                <Col md={4} className="brdr-rght-lg px-0">
                  <hr className="px-0 mt-0 mb-0" />
                  <h5 className="regular py-3 my-0">Automated testing</h5>
                  <hr className="px-0 mt-0" />
                  <p className="mb-5 pe-3 pb-md-3">
                  Because we write our automated test scripts before development even begins we streamline development and address any potential issues early in the process. And with users involved right from the beginning, user acceptance testing is a breeze.
                  </p>  
                </Col>
                <Col md={4} className="brdr-rght-lg px-0">
                <hr className="px-0 mt-0 mb-0" />
                  <h5 className="regular py-3 my-0">Deployment</h5>
                  <hr className="px-0 mt-0" />
                  <p className="mb-5 pe-3 pb-md-3">
                  Using a DevOps lifecycle, we integrate the efforts of our development and operations teams. This way we quickly deliver high quality software, with new and innovative features, while maintaining uninterrupted performance.
                  </p>
                  </Col>
                <Col md={4} className="px-0">
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
        <Col xs={12}  className="vh-20 brdr-tp bg-stripes-2">
        </Col>
          <Col xs={12} className="vh-100 d-flex align-items-center brdr-tp-dark px-0 bg-stripes-2">

              <h2 className="h1 light dark-grey py-5 d-none d-lg-block pad-rght">
              It's our business to help your business rethink what's possible
              </h2>
              <h2 className="h1 light dark-grey py-5 d-lg-none">
              It's our business to help your business rethink what's possible
              </h2>

          </Col>
        </Row>
        </Container>
      </main>
      <Footer />
    </>
  )
}
