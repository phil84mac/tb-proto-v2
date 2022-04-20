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
import Offcanvas from 'react-bootstrap/Offcanvas'

export default function Home() {
  return (
    <div>
      <Head>
        <title>TB PROTO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <Container className="cntnr-brdr">
          <Row id="home" className="">
            <Col xs={2} lg={3} className="vh-20 z-0">
              <Link href="/#home">
                <div className="mt-3 fixed pntr">
                  <Row className="d-flex align-items-center">
                  <Col lg={3} className="px-0">
                  <Image src="/TBlogo.svg" className="" alt="Thinking Big Logo"/>
                  </Col>
                  <Col lg={9} className="d-none d-lg-block pe-0">
                  <h6 className="mt-2 dark-grey">
                    THINKING BIG
                  </h6>
                  </Col>
                  </Row>
                </div>
              </Link>
            </Col>
            <Col xs={10} lg={9} className="brdr-lft d-flex align-items-start justify-content-end pt-1 pe-0 z-999">
                <a href="/ourcompany"  className="btn btn-primary dark-grey bg-yellow arrow mt-4 p-0">
                  OUR COMPANY
                </a>
            </Col>
            
            <Col xs={2} lg={3} className="brdr-tp">
            </Col>
            <Col xs={10} lg={9} className="brdr-lft px-0">
            <hr className="my-0 dark" />
              <h1 className="dark-grey heavy mb-5 pb-4">
              <span className="">We modernize</span> enterprise systems for <span className="">business</span> and for <span className=" pe-2">people</span>
              </h1>
              <video className='w-full mt-5' autoPlay loop muted>
                <source src="./meeting.mp4" type='video/mp4' />
              </video>
            </Col>
            <Col xs={2} lg={3} className="vh-20">
            </Col>
            <Col xs={10} lg={9} className="brdr-lft pe-0">
            </Col>
            <Col xs={2} lg={3} className="brdr-tp">
            </Col>
            <Col xs={10} lg={9} className="brdr-lft px-0">
            <hr className="my-0 dark" />
              <Row className="d-flex align-items-center py-sm-5 me-0">
                <Col sm={6} className="">
                <h2 className="h3 medium dark-grey d-none d-sm-block">
                In a competitive business environment, successful companies put people first. At Thinking Big, <span className="bold">Human-centred Design</span> informs how we think and what we do, no matter what the solution.
                </h2>
                <h2 className="dark-grey medium d-block d-sm-none">
                In a competitive business environment, successful companies put people first. At Thinking Big, <span className="bold">Human-centred Design</span> informs how we think and what we do, no matter what the solution.
                </h2>
                </Col>
                <Col sm={6} className="pe-0 pe-sm-2 justify-content-center">
                <object type="image/svg+xml" data="/HCD.svg" className="px-0 px-lg-4"/>
                </Col>
              </Row>
            </Col>
            <Col xs={2} lg={3} className="">
            </Col>
            <Col xs={10} lg={9} className="brdr-lft brdr-tp">
              <Row className="dark-grey">
                <Col sm={4} className="px-0 brdr-rght ">  
                  <p className="mono mt-3">A.</p>
                  <hr className="px-0" />
                  <h4 className="pe-3">
                    Innovative technology
                  </h4>
                  <p className="mb-5 pe-3 pb-md-5">
                  We deliver innovative, modern and scalable software that will strengthen your organization and prime it for the future.
                  </p>
                </Col>
                <Col sm={4} className="px-0 brdr-rght ">
                <hr className="px-0 d-sm-none" />
                  <p className="mono mt-3">B.</p>
                  <hr className="px-0" />
                  <h4 className="pe-3">
                    Designed for humans
                  </h4>
                  <p className="mb-5 pe-3 pb-md-5">
                  With insights gained from a human-centred perspective, we design technology for everyone, from users to customers to your own employees.
                  </p>
                  
                </Col>
                <Col sm={4} className="px-0 ">
                <hr className="px-0 d-sm-none" />
                  <p className="mono mt-3">C.</p>
                  <hr className="px-0" />
                  <h4 className="pe-3">
                  Aligned with how you work
                  </h4>
                  <p className="mb-5 pe-3 pb-md-5">
                  By putting humans at the centre of the process, we create efficient solutions that match the work you do.
                  </p> 
                </Col>
              </Row>
            </Col>
            <Col xs={2} lg={3} className="vh-20">
            </Col>
            <Col xs={10} lg={9} className="brdr-lft brdr-tp pe-0">
            </Col>
            <Col xs={2} lg={3} className="brdr-tp">
            </Col>
            <Col xs={10} lg={9} className="brdr-lft px-0">
            <hr className="my-0 dark" />
            <h3 className="h1 medium mb-5">
            Using a people-first approach means <span className="semi-bold">building intuitive technology</span> that people actually use
            </h3>
            </Col>
            <Col xs={2} lg={3} className="brdr-tp">
            </Col>
            <Col xs={10} lg={9} className="brdr-lft brdr-tp">
              <Row className="">
                <Col sm={6} className="brdr-rght px-0">
                <div className="card-visual d-flex justify-content-center align-items-center">
                  <object type="image/svg+xml" data="/align.svg" className="p-5"/>
                </div>
                  <hr className="px-0 mt-0" />
                  <p className="mono mt-3">A.</p>
                  <hr className="px-0" />
                  <h4 className="pe-3">
                  Align
                  </h4>
                  <p className="mb-5 pe-3 pb-md-5">
                  We match expectations and gain a deep understanding of your unique business problem from all points of view. With these insights, our Service Designers guide transformation for everyone, from users to customers to your own employees. We analyze issues holistically and create solutions with you to effect change that has a lasting impact.
                  </p>  
                </Col>
                <Col sm={6} className="px-0">
                  <hr className="my-0 d-block d-sm-none" />
                <div className="card-visual d-flex justify-content-center align-items-center">
                  <object type="image/svg+xml" data="/discover.svg" className="p-5"/>
                </div>
                  <hr className="px-0 mt-0" />
                  <p className="mono mt-3">B.</p>
                  <hr className="px-0" />
                  <h4 className="pe-3">
                  Discover
                  </h4>
                  <p className="mb-5 pe-3 pb-md-5">
                  We match expectations and gain a deep understanding of your unique business problem from all points of view. With these insights, our Service Designers guide transformation for everyone, from users to customers to your own employees. We analyze issues holistically and create solutions with you to effect change that has a lasting impact.
                  </p>  
                </Col>
              </Row>
              <Row className="brdr-tp">
                <Col sm={6} className="brdr-rght px-0">
                <div className="card-visual d-flex justify-content-center align-items-center">
                  <object type="image/svg+xml" data="/design.svg" className="p-5"/>
                </div>
                  <hr className="px-0 mt-0" />
                  <p className="mono mt-3">C.</p>
                  <hr className="px-0" />
                  <h4 className="pe-3">
                  Design
                  </h4>
                  <p className="mb-5 pe-3 pb-md-5">
                  We match expectations and gain a deep understanding of your unique business problem from all points of view. With these insights, our Service Designers guide transformation for everyone, from users to customers to your own employees. We analyze issues holistically and create solutions with you to effect change that has a lasting impact.
                  </p>  
                </Col>
                <Col sm={6} className="px-0">
                  <hr className="my-0 d-block d-sm-none" />
                <div className="card-visual d-flex justify-content-center align-items-center">
                  <object type="image/svg+xml" data="/validate.svg" className="p-5"/>
                </div>
                  <hr className="px-0 mt-0" />
                  <p className="mono mt-3">D.</p>
                  <hr className="px-0" />
                  <h4 className="pe-3">
                  Validate
                  </h4>
                  <p className="mb-5 pe-3 pb-md-5">
                  We match expectations and gain a deep understanding of your unique business problem from all points of view. With these insights, our Service Designers guide transformation for everyone, from users to customers to your own employees. We analyze issues holistically and create solutions with you to effect change that has a lasting impact.
                  </p>  
                </Col>
              </Row>
              <Row className="brdr-tp">
                <Col sm={6} className="brdr-rght px-0">
                <div className="card-visual d-flex justify-content-center align-items-center">
                  <object type="image/svg+xml" data="/roadmap.svg" className="p-5"/>
                </div>
                  <hr className="px-0 mt-0" />
                  <p className="mono mt-3">E.</p>
                  <hr className="px-0" />
                  <h4 className="pe-3">
                  Roadmap
                  </h4>
                  <p className="mb-5 pe-3 pb-md-5">
                  We match expectations and gain a deep understanding of your unique business problem from all points of view. With these insights, our Service Designers guide transformation for everyone, from users to customers to your own employees. We analyze issues holistically and create solutions with you to effect change that has a lasting impact.
                  </p>  
                </Col>
                <Col sm={6} className="px-0">
                  <hr className="my-0 d-block d-sm-none" />
                <div className="card-visual d-flex justify-content-center align-items-center">
                  <object type="image/svg+xml" data="/next-steps.svg" className="p-5"/>
                </div>
                  <hr className="px-0 mt-0" />
                  <p className="mono mt-3">F.</p>
                  <hr className="px-0" />
                  <h4 className="pe-3">
                  Next steps
                  </h4>
                  <p className="mb-5 pe-3 pb-md-5">
                  We match expectations and gain a deep understanding of your unique business problem from all points of view. With these insights, our Service Designers guide transformation for everyone, from users to customers to your own employees. We analyze issues holistically and create solutions with you to effect change that has a lasting impact.
                  </p>  
                </Col>
              </Row>
            </Col>
            <Col xs={2} lg={3} className="vh-20">
            </Col>
            <Col xs={10} lg={9} className="brdr-lft brdr-tp pe-0">
            </Col>
            <Col xs={2} lg={3} className="brdr-tp brdr-rght">
            </Col>
          </Row>
        </Container>
            
      </main>

      <Footer />
    </div>
  )
}
