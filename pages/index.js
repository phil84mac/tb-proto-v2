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
import { Typewriter } from 'react-simple-typewriter'


export default function Home() {


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
            <Col xs={2} lg={2} className="brdr-tp">
            </Col>
            <Col xs={10} lg={8} className=" brdr-lft px-0">
            <hr className="my-0 dark" />

            <div className="d-none d-sm-block py-5 pe-5">

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
            <Col xs={2} lg={2} className="brdr-lft brdr-tp-dark d-none d-lg-block bg-black">
            </Col>
            <Col xs={2} lg={2} className="brdr-tp bg-yellow">
            </Col>
            <Col xs={2} lg={2} className="brdr-tp brdr-lft bg-red">
            </Col>
            <Col xs={8} lg={8} className="brdr-lft brdr-tp brdr-bttm px-0">
              <video className='w-full video-margin-fix' autoPlay loop muted>
                <source src="./interior.mp4" type='video/mp4' />
              </video>
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
            
            
            <Col xs={10} lg={6} xl={4} className="brdr-tp brdr-lft p-0 d-flex align-items-center justify-content-center">
              <div className="">
               <Image fluid src="/iso.png" className="d-none d-lg-block"/>
              </div>
            </Col>
            <Col xs={2} className="brdr-tp brdr-lft d-lg-none">
            </Col>
            <Col xs={2} className="brdr-tp brdr-lft d-lg-none">
            </Col>
            <Col xs={10} lg={6} xl={8} className="brdr-lft">
              <Row fluid className="">
              <hr className="my-0 dark" />

                <h2 className="light dark-grey px-0 py-5 mb-0 bg-x-light-grey">
                Our <span className="medium">people</span>, <span className="medium">skills</span> and <span className="medium">technology</span> support the <span className="italic">most modern enterprise systems</span> in Canada.
                </h2>
                <hr className="my-0 d-lg-none" />
                <Image fluid src="/iso.png" className="d-lg-none brdr-lft"/>
                <hr className="my-0" />
                <Col sm={6} className="ps-0 dark-grey pe-0">  
                  <p className="h4 medium my-3">
                    Veterans Affairs Canada
                  </p>
                  <hr className="my-0" />
                  <p className="h4 medium my-3">
                    Treasury Board of Canada Secretariat
                  </p>
                  <hr className="my-0" />
                  <p className="h4 medium my-3">
                    Department of National Defence
                  </p>
                  <hr className="my-0" />
                  <p className="h4 medium my-3">
                    National Defence and Canadian Armed Forces Ombudsman
                  </p>
                  <hr className="my-0" />
                  <p className="h4 medium my-3">
                    Office of the Veterans Ombudsman
                  </p>
                  <hr className="my-0" />
                  <p className="h4 medium my-3">
                    Canadian Digital Service
                  </p>
                  <hr className="my-0" />
                  <p className="h4 medium my-3">
                    Canadian Revenue Agency
                  </p>
                  <hr className="my-0" />
                  <p className="h4 medium my-3">
                  Employment and Social Development Canada
                  </p>
                  <hr className="my-0 d-sm-none" />
                </Col>
                <Col sm={6} className="brdr-lft ps-0 dark-grey pe-0">
                  <p className="h4 medium my-3">
                  Defense Research Development Canada
                  </p>
                  <hr className="my-0" />
                  <p className="h4 medium my-3">
                  Office of the Correctional Investigator
                  </p>
                  <hr className="my-0" />
                  <p className="h4 medium my-3">
                  Government of Prince Edward Island
                  </p>
                  <hr className="my-0" />
                  <p className="h4 medium my-3">
                  Government of New Brunswick
                  </p>
                  <hr className="my-0" />
                  <p className="h4 medium my-3">
                  PEI Fisher's Association
                  </p>
                  <hr className="my-0" />
                  <p className="h4 medium my-3">
                  Farm Credit Canada
                  </p>
                  <hr className="my-0" />
                  <p className="h4 medium my-3">
                  Maritime Electric
                  </p>
                  <hr className="my-0" />
                  <p className="h4 medium my-3">
                  American Laywer Magazine (ALM Media)
                  </p>        
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

            <Col xs={2} className="brdr-tp">
            </Col>
            <Col xs={10} lg={8} className="brdr-lft px-0">
            <hr className="my-0 dark" />
            <h3 className="lead light dark-grey py-4">       
            <span className="red">1. From collaboration to insights</span> / <br /><span className="bg-yellow-multiply semi-bold">we design</span> intuitive enterprise systems for people
            </h3>
            </Col>
            <Col xs={2} className="brdr-lft brdr-tp">
            </Col>

            <Col xs={2} className="brdr-tp d-none d-lg-block">
            </Col>
            <Col xs={10} lg={8} className="brdr-lft brdr-tp">
              <Row className="dark-grey">
                <Col sm={4} className="brdr-rght px-0">
                  <div className="card-visual d-flex justify-content-center align-items-center">
                    <Image fluid src="" className="p-4 "/>
                  </div>
                  <hr className="px-0 mt-0" />
                  <p className="mono mt-3">A.</p>
                  <hr className="px-0" />
                  <h4 className="pe-3">
                  Expectation matching
                  </h4>
                  <p className="mb-5 pe-3 pb-md-3">
                  To start, we meet with stakeholders to align expectations for the project. By creating a shared understanding of the road ahead, and by using proven and repeatable methodologies, our design and technical experts guide the journey from understanding the user to creating the solution.
                  </p>  
                </Col>
                <Col sm={4} className="px-0">
                <div className="card-visual d-flex justify-content-center align-items-center">
                  <Image fluid src="" className="p-4 pe-3"/>
                </div>
                  <hr className="px-0 mt-0" />
                  <p className="mono mt-3">B.</p>
                  <hr className="px-0" />
                  <h4 className="pe-3">
                  Research
                  </h4>
                  <p className="mb-5 pe-3 pb-md-3">
                  With shared expectations, our team works with your staff and customers to gain a deep understanding of your unique business problem from all points of view. By analyzing issues with all involved, from users to customers to your own employees, we can effect change that has a lasting impact.                  </p>  
                </Col>
                <Col sm={4} className="brdr-lft px-0">
                <div className="card-visual d-flex justify-content-center align-items-center">
                 <Image fluid src="" className="p-4"/>
                </div>
                  <hr className="px-0 mt-0" />
                  <p className="mono mt-3">C.</p>
                  <hr className="px-0" />
                  <h4 className="pe-3">
                  Design and prototyping
                  </h4>
                  <p className="mb-5 pe-3 pb-md-3">
                  Design is all about reimagining the user experience. By collaborating with those most closely involved with the feature, tool, product or service that we'll be transforming, the team generates lots of new ideas. We guide the process, designing, testing and iterating solutions with the users instead of for them.
                  </p>  
                </Col>
              </Row>
            </Col>
            <Col xs={2} lg={2} className="brdr-tp brdr-lft d-none d-lg-block">
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

            <Col xs={2} className="brdr-tp">
            </Col>
            <Col xs={10} lg={8} className="brdr-lft px-0">
            <hr className="my-0 dark" />
            <h3 className="lead light dark-grey py-4">       
            <span className="red">2. From insights to code</span> / <br /><span className="bg-yellow-multiply semi-bold">we develop</span> innovative products
            </h3>
            </Col>
            <Col xs={2} className="brdr-lft brdr-tp">
            </Col>

            <Col xs={2} className="brdr-tp d-none d-lg-block">
            </Col>
            <Col xs={10} lg={8} className="brdr-lft brdr-tp">
              <Row className="dark-grey">
                <Col sm={4} className="brdr-rght px-0">
                  <div className="card-visual d-flex justify-content-center align-items-center">
                    <Image fluid src="" className="p-4 "/>
                  </div>
                  <hr className="px-0 mt-0" />
                  <p className="mono mt-3">A.</p>
                  <hr className="px-0" />
                  <h4 className="pe-3">
                  Business Services
                  </h4>
                  <p className="mb-5 pe-3 pb-md-3">
                  With Lean and Agile principles, our Project Managers and Business Analysists guide the transformation from idea to product. From the start we write test scripts, using Gherkin's plain English syntax, to drive the development.
                  </p>  
                </Col>
                <Col sm={4} className="px-0">
                <div className="card-visual d-flex justify-content-center align-items-center">
                  <Image fluid src="" className="p-4 pe-3"/>
                </div>
                  <hr className="px-0 mt-0" />
                  <p className="mono mt-3">B.</p>
                  <hr className="px-0" />
                  <h4 className="pe-3">
                  System architecture design
                  </h4>
                  <p className="mb-5 pe-3 pb-md-3">
                  By structuring applications using Microservice architecture, in other words, as collections of maintainable and testable services that are independently deployable, we build software that is scalable and future-proof.
                  </p>
                </Col>
                <Col sm={4} className="brdr-lft px-0">
                <div className="card-visual d-flex justify-content-center align-items-center">
                 <Image fluid src="" className="p-4"/>
                </div>
                  <hr className="px-0 mt-0" />
                  <p className="mono mt-3">C.</p>
                  <hr className="px-0" />
                  <h4 className="pe-3">
                  Software Engineering
                  </h4>
                  <p className="mb-5 pe-3 pb-md-3">
                  Whether the solution calls for software, web development or a mobile application, our engineers will develop the most effective and innovative tools to best solve your problems. Behavior-Driven Development encourages communication and aligns the business and the technical sides of a project.
                  </p>  
                </Col>
              </Row>
            </Col>
            <Col xs={2} lg={2} className="brdr-tp brdr-lft d-none d-lg-block">
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

            <Col xs={2} className="brdr-tp">
            </Col>
            <Col xs={10} lg={8} className="brdr-lft px-0">
            <hr className="my-0 dark" />
            <h3 className="lead light dark-grey py-4">       
            <span className="red">3. From code to implementation</span> / <br /><span className="bg-yellow-multiply semi-bold">we deliver</span> and maintain modern, scalable software
            </h3>
            </Col>
            <Col xs={2} className="brdr-lft brdr-tp">
            </Col>

            <Col xs={2} className="brdr-tp d-none d-lg-block">
            </Col>
            <Col xs={10} lg={8} className="brdr-lft brdr-tp">
              <Row className="dark-grey">
                <Col sm={4} className="brdr-rght px-0">
                  <div className="card-visual d-flex justify-content-center align-items-center">
                    <Image fluid src="" className="p-4 "/>
                  </div>
                  <hr className="px-0 mt-0" />
                  <p className="mono mt-3">A.</p>
                  <hr className="px-0" />
                  <h4 className="pe-3">
                  Automated testing
                  </h4>
                  <p className="mb-5 pe-3 pb-md-3">
                  Because we write our automated test scripts before development even begins we streamline development and address any potential issues early in the process. And with users involved right from the beginning, user acceptance testing is a breeze.
                  </p>  
                </Col>
                <Col sm={4} className="px-0">
                <div className="card-visual d-flex justify-content-center align-items-center">
                  <Image fluid src="" className="p-4 pe-3"/>
                </div>
                  <hr className="px-0 mt-0" />
                  <p className="mono mt-3">B.</p>
                  <hr className="px-0" />
                  <h4 className="pe-3">
                  Deployment
                  </h4>
                  <p className="mb-5 pe-3 pb-md-3">
                  Using a DevOps lifecycle, we integrate the efforts of our development and operations teams. This way we quickly deliver high quality software, with new and innovative features, while maintaining uninterrupted performance.
                  </p>
                  </Col>
                <Col sm={4} className="brdr-lft px-0">
                <div className="card-visual d-flex justify-content-center align-items-center">
                 <Image fluid src="" className="p-4"/>
                </div>
                  <hr className="px-0 mt-0" />
                  <p className="mono mt-3">C.</p>
                  <hr className="px-0" />
                  <h4 className="pe-3">
                  Maintenance and feature enhancement
                  </h4>
                  <p className="mb-5 pe-3 pb-md-3">
                  After deployment, we are well-positioned to monitor, maintain and optimize the system, as well as to enhance or fine-tune existing features or add new ones.
                  </p>  
                </Col>
              </Row>
            </Col>
            <Col xs={2} lg={2} className="brdr-tp brdr-lft d-none d-lg-block">
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

            <Col xs={12} lg={8} className=" brdr-tp-dark py-5">
                <h2 className="h1 light dark-grey my-5">
                It's our business to help your business rethink what's possible
                </h2>

            </Col>

            <Col lg={4} className="brdr-tp-dark brdr-lft d-none d-lg-block bg-black">
            </Col>
            <Col xs={12} className="brdr-lft brdr-tp px-0">
            <video className='w-full video-margin-fix' autoPlay loop muted>
                <source src="./tower.mp4" type='video/mp4' />
              </video>
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
 
          </Row>
        </Container>
            
      </main>

      <Footer />
    </>
  )
}
