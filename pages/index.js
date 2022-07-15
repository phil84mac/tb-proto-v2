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
            <Col xl={2} lg={2} className="brdr-tp brdr-lft d-none d-lg-block bg-red">
            </Col>
            <Col xs={10} lg={8} className="brdr-lft brdr-tp brdr-bttm px-0">
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
            
            <Col xs={12} lg={8} className="">
              <Row fluid className="">
              <hr className="my-0 dark" />

                <h2 className="regular dark-grey px-0 py-5 mb-5">
                Our <span className="red">people</span>, <span className="red">skills</span> and <span className="red">technology</span> power the most modern enterprise systems in Canada.
                </h2>
                <hr className="my-0 d-lg-none" />
                <Image fluid src="/iso.png" className="d-lg-none"/>
                <hr className="my-0" />
                <Col sm={6} className="brdr-rght ps-0 dark-grey pe-0">  
                  <p className="h4 medium mb-4">
                    Veterans Affairs Canada
                  </p>
                  <hr className="my-0" />
                  <p className="h4 medium mb-4">
                    Treasury Board of Canada Secretariat
                  </p>
                  <hr className="my-0" />
                  <p className="h4 medium mb-4">
                    Department of National Defence
                  </p>
                  <hr className="my-0" />
                  <p className="h4 medium mb-4">
                    National Defence and Canadian Armed Forces Ombudsman
                  </p>
                  <hr className="my-0" />
                  <p className="h4 medium mb-4">
                    Office of the Veterans Ombudsman
                  </p>
                  <hr className="my-0" />
                  <p className="h4 medium mb-4">
                    Canadian Digital Service
                  </p>
                  <hr className="my-0" />
                  <p className="h4 medium mb-4">
                    Canadian Revenue Agency
                  </p>
                  <hr className="my-0" />
                  <p className="h4 medium mb-4">
                  Employment and Social Development Canada
                  </p>
                  <hr className="my-0 d-lg-none" />
                </Col>
                <Col sm={6} className="ps-0 dark-grey pe-0">
                  <p className="h4 medium mb-4">
                  Defense Research Development Canada
                  </p>
                  <hr className="my-0" />
                  <p className="h4 medium mb-4">
                  Office of the Correctional Investigator
                  </p>
                  <hr className="my-0" />
                  <p className="h4 medium mb-4">
                  Government of Prince Edward Island
                  </p>
                  <hr className="my-0" />
                  <p className="h4 medium mb-4">
                  Government of New Brunswick
                  </p>
                  <hr className="my-0" />
                  <p className="h4 medium mb-4">
                  PEI Fisher's Association
                  </p>
                  <hr className="my-0" />
                  <p className="h4 medium mb-4">
                  Farm Credit Canada
                  </p>
                  <hr className="my-0" />
                  <p className="h4 medium mb-4">
                  Maritime Electric
                  </p>
                  <hr className="my-0" />
                  <p className="h4 medium mb-4">
                  American Laywer Magazine (ALM Media)
                  </p>        
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={4} className="brdr-tp brdr-lft p-0 d-flex align-items-center">
              <div className="">
               <Image fluid src="/iso.png" className="d-none d-lg-block"/>
              </div>
            </Col>
            <Col xs={2} lg={3} className="vh-20 brdr-tp">
            </Col>
            <Col xs={10} lg={9} className="brdr-lft brdr-tp">
            </Col>
            <Col xs={2} lg={3} className="brdr-tp">
            </Col>
            <Col xs={10} lg={9} className="brdr-lft px-0">
            <hr className="my-0 dark" />
            <h3 className="lead semi-bold dark-grey py-4">
            Using a people-first approach means <span className="heavy">building intuitive technology</span> that people actually use. Here's how it works:
            </h3>
            </Col>
            <Col xs={2} lg={3} className="brdr-tp">
            </Col>
            <Col xs={10} lg={9} className="brdr-lft brdr-tp">
              <Row className="dark-grey">
                <Col sm={6} className="brdr-rght brdr-bttm px-0">
                  <div className="card-visual d-flex justify-content-center align-items-center">
                    <Image fluid src="/align.svg" className="p-4 "/>
                  </div>
                  <hr className="px-0 mt-0" />
                  <p className="mono mt-3">A.</p>
                  <hr className="px-0" />
                  <h4 className="pe-3">
                  Align
                  </h4>
                  <p className="mb-5 pe-3 pb-md-3">
                  During Alignment, we meet with stakeholders to match expectations for the project. This means creating a shared understanding of the process ahead, the time commitments and resources. Using proven and repeatable methodologies, our Service Design experts will guide the journey from understanding the user to creating the solution.
                  </p>  
                </Col>
                <Col sm={6} className="px-0 brdr-bttm ">
                <div className="card-visual d-flex justify-content-center align-items-center">
                  <Image fluid src="/discover.svg" className="p-4 pe-3"/>
                </div>
                  <hr className="px-0 mt-0" />
                  <p className="mono mt-3">B.</p>
                  <hr className="px-0" />
                  <h4 className="pe-3">
                  Discover
                  </h4>
                  <p className="mb-5 pe-3 pb-md-3">
                  With shared expectations, our Service Designers then look to gain a deep understanding of your unique business problem from all points of view. By analyzing issues with all involved, from users to customers to your own employees, we can  effect change that has a lasting impact.
                  </p>  
                </Col>
                <Col sm={6} className="brdr-rght brdr-bttm px-0">
                <div className="card-visual d-flex justify-content-center align-items-center">
                 <Image fluid src="/design.svg" className="p-4"/>
                </div>
                  <hr className="px-0 mt-0" />
                  <p className="mono mt-3">C.</p>
                  <hr className="px-0" />
                  <h4 className="pe-3">
                  Design
                  </h4>
                  <p className="mb-5 pe-3 pb-md-3">
                  The Design phase is all about collaborating with those most closely involved with the feature, tool, product or service that we’ll be transforming. The team generates lots of new ideas and we guide the process, designing solutions with the users instead of for them. Design is all about reimagining the user experience.
                  </p>  
                </Col>
                <Col sm={6} className="px-0 brdr-bttm">
                <div className="card-visual d-flex justify-content-center align-items-center">
                <Image fluid src="/validate.svg" className="p-4"/>
                </div>
                  <hr className="px-0 mt-0" />
                  <p className="mono mt-3">D.</p>
                  <hr className="px-0" />
                  <h4 className="pe-3">
                  Validate
                  </h4>
                  <p className="mb-5 pe-3 pb-md-3">
                  With our best ideas we make prototypes so we can test, measure and incrementally refine the concepts. Trying them out in the real world, with real users, helps us know what’s working and what’s not so we can adjust and try again. Without user input, we won't know if our solution is heading in the right direction. Or how to make it better. The Validate phase ends with a solution that’s been proven to work.
                  </p>  
                </Col>
                <Col sm={6}  className="brdr-rght brdr-bttm px-0">
                <div className="card-visual d-flex justify-content-center align-items-center">
                <Image fluid src="/roadmap.svg" className="p-4"/>
                </div>
                  <hr className="px-0 mt-0" />
                  <p className="mono mt-3">E.</p>
                  <hr className="px-0" />
                  <h4 className="pe-3">
                  Roadmap
                  </h4>
                  <p className="mb-5 pe-3 pb-md-3">
                  With our best solution, and a prototype that works for everyone, we gather the team to work out a timeline and milestones, and determine personnel and responsibilities. We also define what success will look like during implementation. The Roadmap charts a path forward towards getting the idea out into the world which was the goal from the start. 
                  </p>  
                </Col>
                <Col sm={6} className="px-0 brdr-bttm">
                <div className="card-visual d-flex justify-content-center align-items-center">
                <Image fluid src="/next-steps.svg" className="p-4 svg-rotate"/>
                </div>
                  <hr className="px-0 mt-0" />
                  <p className="mono mt-3">F.</p>
                  <hr className="px-0" />
                  <h4 className="pe-3">
                  Next steps
                  </h4>
                  <p className="mb-5 pe-3 pb-md-3">
                  Finally, we close out the project, making sure the client understands and has access to all the artifacts from the work, from research to outcome, and a clear understanding of the solution. With everything packaged and communicated, stakeholders feel confident that they will implement a truly inclusive solution, one that works for the people who matter, those who use it. 
                  </p>
                </Col>


                <Col sm={12} className="brdr-bttm brdr-tp-dark py-2 px-0">
                <h6 className="large mt-2 text-center">
                  PROCESS
                </h6>
                </Col>

                
                  <Col xs={4} sm={2} className="brdr-bttm p-2 d-flex align-items-center flex-column">
                    <Image fluid src="/align.svg" className="hcd-icon mb-auto mt-3"/>
                    <p className=" dark-grey text-center mt-4 mb-2">
                      <span className="mono small">A.</span> <span className="heavy">Align</span>
                    </p>
                  </Col>
                  <Col xs={4} sm={2} className="brdr-lft brdr-bttm brdr-lft p-2 pe-1 d-flex align-items-center flex-column ">
                    <Image fluid src="/discover.svg" className="hcd-icon mb-auto mt-3"/>
                    <p className="dark-grey text-center mt-4 mb-2 me-1">
                    <span className="mono small">B.</span> <span className="heavy">Discover</span>
                    </p>
                  </Col>
                  <Col xs={4} sm={2} className="brdr-lft brdr-bttm p-2 d-flex align-items-center flex-column">
                    <Image fluid src="/design.svg" className="hcd-icon mb-auto mt-3"/>
                    <p className="dark-grey text-center mt-4 mb-2">
                    <span className="mono small">C.</span> <span className="heavy">Design</span>
                    </p>
                  </Col>
                  <Col xs={4} sm={2} className="brdr-lft brdr-bttm p-2 d-flex align-items-center flex-column">
                    <Image fluid src="/validate.svg" className="hcd-icon mb-auto mt-3"/>
                    <p className="dark-grey text-center mt-4 mb-2">
                    <span className="mono small">D.</span> <span className="heavy">Validate</span>
                    </p>
                  </Col>
                  <Col xs={4} sm={2} className="brdr-lft brdr-bttm p-2 d-flex align-items-center flex-column">
                    <Image fluid src="/roadmap.svg" className="hcd-icon mb-auto mt-3"/>
                    <p className="dark-grey text-center mt-4 mb-2">
                    <span className="mono small">E.</span> <span className="heavy">Roadmap</span>
                    </p>
                  </Col>
                  <Col xs={4} sm={2} className="brdr-bttm brdr-lft p-2 d-flex align-items-center flex-column">
                    <Image fluid src="/next-steps.svg" className="hcd-icon mb-auto mt-3"/>
                    <p className="dark-grey text-center mt-4 mb-2">
                    <span className="mono small">F.</span> <span className="heavy">Next steps</span>
                    </p>
                  </Col>

                <Col sm={12} className=" bg-red py-3">
                <p className="mono small bold text-uppercase text-center white medium mb-0">
                  Repeat steps B-D until solution is thoroughly validated by users
                </p>
                </Col>
              </Row>
            </Col>
            <Col xs={2} lg={3} className="vh-20 brdr-tp">
            </Col>
            <Col xs={10} lg={9} className="brdr-lft brdr-tp">
            </Col>

            <Col xs={2} lg={3} className="brdr-tp">
            </Col>
            <Col xs={10} lg={9} className="brdr-lft">
              <Row fluid className="dark-grey">
              <hr className="my-0 dark" />
                <Col sm={12} className="px-0 pb-5 mb-5">
                <h2 className="heavy mt-4 mb-xl-4 pb-xl-5 dark-grey">
                Let us help your organization rethink what's possible
                </h2>
                </Col>
                <hr className="my-0" />
                <Col sm={4} className="brdr-rght brdr-bttm px-0">  
                <p className="mono mt-3">A.</p>
                  <hr className="px-0" />
                  <h4 className="pe-3 mt-2">
                  Business moves quickly
                  </h4>
                  <p className="mb-5 mb-sm-3 pe-3 pb-md-5">
                  In today's fast-paced business environment, it's vital to be able to adapt quickly. Thinking Big will help you modernize and reimagine your operations with speed and agility, to tackle your industry's toughest challenges. 
                  </p>
                </Col>
                <Col sm={4} className="brdr-rght brdr-bttm px-0">
                <p className="mono mt-3">B.</p>
                  <hr className="px-0" />
                  <h4 className="pe-3 mt-2">
                  We have innovative people, services and technologies
                  </h4>
                  <p className="mb-5 mb-sm-3 pe-3 pb-md-5">
                  Whether you need mobile or software engineering, consulting, Cloud services, Artificial Intelligence or data gathering, we have the expertise to modernize your business.
                  </p>           
                </Col>
                <Col sm={4} className="px-0">
                <p className="mono mt-3">C.</p>
                  <hr className="px-0" />
                  <h4 className="pe-3 mt-2">
                  Be ready for whatever the future brings
                  </h4>
                  <p className="mb-5 mb-sm-3 pe-3 pb-md-5">
                  Organizations must adapt and innovate to meet the evolving needs of their customers while keeping up-to-date with the latest technology. Let us help you revitalize your business.
                  </p> 
                </Col>
              </Row>
            </Col>
            <Col xs={2} lg={3} className="brdr-tp">
            </Col>
            <Col xs={10} lg={9} className="brdr-lft brdr-tp px-0">
            <video className='w-full video-margin-fix' autoPlay loop muted>
                <source src="./tower.mp4" type='video/mp4' />
              </video>
            </Col>
            <Col xs={2} lg={3} className="vh-20 brdr-tp" >
            </Col>
            <Col xs={10} lg={9} className="brdr-lft brdr-tp">
                <a href="/ourcompany"  className="mono semi-bold dark-grey no-underline bg-yellow arrow mt-5 p-0 d-none">
                  OUR COMPANY
                </a>
            </Col>
          </Row>
        </Container>
            
      </main>

      <Footer />
    </>
  )
}
