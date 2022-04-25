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

      <main className="px-sm-4 px-lg-5">
        <Container fluid className="cntnr-brdr">
          <Row id="home" fluid className="">
            <Col xs={2} lg={3} className="vh-20 z-0">
              <Link href="#home">
                <div className="mt-3 fixed pntr">
                  <Row className="d-flex align-items-center">
                  <Col lg={3} className="px-0">
                  <Image src="/TBlogo.svg" className="" alt="Thinking Big Logo"/>
                  </Col>
                  <Col lg={9} className="d-none d-lg-block pe-0">
                  <h6 className="mt-2 dark-grey medium ">
                    THINKING BIG
                  </h6>
                  </Col>
                  </Row>
                </div>
              </Link>
            </Col>
            <Col xs={10} lg={9} className="brdr-lft d-flex align-items-start justify-content-end pt-1 pe-0 z-999">
                <a href="/ourcompany"  className="mono semi-bold dark-grey no-underline bg-yellow arrow mt-4 p-0">
                  OUR COMPANY
                </a>
            </Col>
            
            <Col xs={2} lg={3} className="brdr-tp">
            </Col>
            <Col xs={10} lg={9} className="brdr-lft px-0">
            <hr className="my-0 dark" />
              <h1 className="dark-grey heavy mb-5 pb-4">
              We modernize enterprise systems for business and for people
              </h1>
              <video className='w-full mt-5' autoPlay loop muted>
                <source src="./meeting.mp4" type='video/mp4' />
              </video>
            </Col>
            <Col xs={2} lg={3} className="vh-20">
            </Col>
            <Col xs={10} lg={9} className="brdr-lft">
            </Col>
            <Col xs={2} lg={3} className="brdr-tp">
            </Col>
            <Col xs={10} lg={9} className="brdr-lft">
              <Row fluid className="">
              <hr className="my-0 dark" />
                <Col sm={6} className="px-0 d-flex align-items-center brdr-rght">
                <h2 className="h3 semi-bold dark-grey d-none d-sm-block mb-0">
                In a competitive business environment, successful companies put people first. At Thinking Big, <span className="heavy">Human-centred Design</span> informs how we think and what we do, no matter what the solution.
                </h2>
                <h2 className="dark-grey semi-bold d-block d-sm-none">
                In a competitive business environment, successful companies put people first. At Thinking Big, <span className="heavy">Human-centred Design</span> informs how we think and what we do, no matter what the solution.
                </h2>
                </Col>
                <Col sm={6} className="d-flex align-items-center py-3">
                <object type="image/svg+xml" data="/HCD.svg" className=""/>
                </Col>
                <hr className="my-0" />
                <Col sm={4} className="brdr-rght px-0">  
                  <p className="mono mt-3">A.</p>
                  <hr className="px-0" />
                  <h4 className="pe-3">
                    Innovative technology
                  </h4>
                  <p className="mb-3 pe-3 pb-md-5">
                  We deliver innovative, modern and scalable software that will strengthen your organization and prime it for the future.
                  </p>
                </Col>
                <Col sm={4} className="brdr-rght px-0">
                <hr className="px-0 d-sm-none" />
                  <p className="mono mt-3">B.</p>
                  <hr className="px-0" />
                  <h4 className="pe-3">
                    Designed for humans
                  </h4>
                  <p className="mb-3 pe-3 ">
                  With insights gained from a human-centred perspective, we design technology for everyone, from users to customers to your own employees.
                  </p>           
                </Col>
                <Col sm={4} className="px-0">
                <hr className="px-0 d-sm-none" />
                  <p className="mono mt-3">C.</p>
                  <hr className="px-0" />
                  <h4 className="pe-3">
                  Aligned with how you work
                  </h4>
                  <p className="mb-3 pe-3 pb-md-5">
                  By putting humans at the centre of the process, we create efficient solutions that match the work you do.
                  </p> 
                </Col>
              </Row>
            </Col>
            <Col xs={2} lg={3} className="vh-20">
            </Col>
            <Col xs={10} lg={9} className="brdr-lft brdr-tp">
            </Col>
            <Col xs={2} lg={3} className="brdr-tp">
            </Col>
            <Col xs={10} lg={9} className="brdr-lft px-0">
            <hr className="my-0 dark" />
            <h3 className="h2 semi-bold">
            Using a people-first approach means <span className="heavy">building intuitive technology</span> that people actually use. Here's how it works:
            </h3>
            </Col>
            <Col xs={2} lg={3} className="brdr-tp">
            </Col>
            <Col xs={10} lg={9} className="brdr-lft brdr-tp">
              <Row className="">
                <Col sm={6} className="brdr-rght brdr-bttm px-0">
                  <div className="card-visual d-flex justify-content-center align-items-center">
                    <Image fluid src="/align.svg" className="p-4"/>
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
                <Col sm={6} className="px-0 brdr-bttm ">
                <div className="card-visual d-flex justify-content-center align-items-center">
                  <Image fluid src="/discover.svg" className="p-4"/>
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
                  <p className="mb-5 pe-3 pb-md-5">
                  We match expectations and gain a deep understanding of your unique business problem from all points of view. With these insights, our Service Designers guide transformation for everyone, from users to customers to your own employees. We analyze issues holistically and create solutions with you to effect change that has a lasting impact.
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
                  <p className="mb-5 pe-3 pb-md-5">
                  We match expectations and gain a deep understanding of your unique business problem from all points of view. With these insights, our Service Designers guide transformation for everyone, from users to customers to your own employees. We analyze issues holistically and create solutions with you to effect change that has a lasting impact.
                  </p>  
                </Col>
                <Col sm={6} className="brdr-rght brdr-bttm px-0">
                <div className="card-visual d-flex justify-content-center align-items-center">
                <Image fluid src="/roadmap.svg" className="p-4"/>
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
                <Col sm={6} className="px-0 brdr-bttm">
                <div className="card-visual d-flex justify-content-center align-items-center">
                <Image fluid src="/next-steps.svg" className="p-4"/>
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
            <Col sm={12} className="vh-20">
            </Col>
                <Col sm={12} className="px-0">
                <video className='w-full' autoPlay loop muted>
                <source src="./tower.mp4" type='video/mp4' />
              </video>
                </Col>
              </Row>
            </Col>
            <Col xs={2} lg={3} className="vh-20">
            </Col>
            <Col xs={10} lg={9} className="brdr-lft">
            </Col>
            <Col xs={2} lg={3} className="brdr-tp">
            </Col>
            <Col xs={10} lg={9} className="brdr-lft">
              <Row fluid className="">
              <hr className="my-0 dark" />
                <Col sm={12} className="px-0 pb-5 mb-5">
                <h2 className="h1 bold mt-0 mb-5 pb-5 dark-grey">
                Let us help your organization rethink what's possible
                </h2>
                </Col>
                <hr className="my-0" />
                <Col sm={4} className="brdr-rght px-0">  
                  <h4 className="pe-3 mt-2">
                  Business moves quickly
                  </h4>
                  <p className="mb-3 pe-3 pb-md-5">
                  In today's fast-paced business environment, it's vital to be able to adapt quickly. Thinking Big will help you modernize and reimagine your operations with speed and agility, to tackle your industry's toughest challenges. 
                  </p>
                </Col>
                <Col sm={4} className="brdr-rght px-0">
                <hr className="px-0 d-sm-none" />
                  <h4 className="pe-3 mt-2">
                  We have innovative people, services and technologies
                  </h4>
                  <p className="mb-3 pe-3 pb-md-5">
                  Whether you need mobile or software engineering, consulting, Cloud services, Artificial Intelligence or data gathering, we have the expertise to modernize your business.
                  </p>           
                </Col>
                <Col sm={4} className="px-0">
                <hr className="px-0 d-sm-none" />
                  <h4 className="pe-3 mt-2">
                  Be ready for whatever the future brings
                  </h4>
                  <p className="mb-3 pe-3 pb-md-5">
                  Organizations must adapt and innovate to meet the evolving needs of their customers while keeping up-to-date with the latest technology. Let us help you revitalize your business.
                  </p> 
                </Col>
              </Row>
            </Col>
            <Col xs={2} lg={3} className="vh-20">
            </Col>
            <Col xs={10} lg={9} className="brdr-lft brdr-tp">
            </Col>
          </Row>
        </Container>
            
      </main>

      <Footer />
    </div>
  )
}
