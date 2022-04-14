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
        <Container className="brdr-lft brdr-rght">
          <Row id="home" className="">
            <Col xs={2} lg={3} className="brdr-rght vh-20 z-0">
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
            <Col xs={10} lg={9} className="d-flex align-items-start justify-content-end pt-1 pe-0 z-999">
                <a href="/ourcompany"  className="btn btn-primary dark-grey bg-yellow arrow mt-4 p-0">
                  OUR COMPANY
                </a>
            </Col>
            
            <Col xs={2} lg={3} className="brdr-tp brdr-rght">
            </Col>
            <Col xs={10} lg={9} className="px-0">
            <hr className="my-0 dark" />
              <h1 className="dark-grey heavy mb-5 pb-4">
              <span className="red">We modernize</span> enterprise systems for <span className="red">business</span> and <span className="red pe-2">for people</span>
              </h1>
              <video className='w-full mt-5' autoPlay loop muted>
                <source src="./people.mp4" type='video/mp4' />
              </video>
            </Col>
            <Col xs={2} lg={3} className="brdr-rght vh-20">
            </Col>
            <Col xs={10} lg={9} className=" pe-0">
            </Col>
            
            <Col xs={2} lg={3} className="brdr-tp brdr-rght">
            </Col>
            <Col xs={10} lg={9} className="px-0">
            <hr className="my-0 dark" />
              <Row className="d-flex align-items-center py-5 w-100">
                <Col className="">
                <h2 className="h3 dark-grey">
                In a competitive business environment, successful companies put people first. At Thinking Big, <span className="bg-yellow">Human-centred Design</span> informs how we think and what we do, no matter what the solution.
                </h2>
                </Col>
                <Col className="pe-0 pe-sm-2">
                <object type="image/svg+xml" data="/HCD.svg" className="px-0 px-lg-4"/>
                </Col>
              </Row>
            </Col>
            <Col xs={2} lg={3} className="brdr-rght">
            </Col>
            <Col xs={10} lg={9} className="brdr-tp">
              <Row className="dark-grey">
                <Col sm={4} className="px-0 brdr-rght pb-md-4">  
                  <p className="mono mt-3">A.</p>
                  <hr className="px-0" />
                  <h4 className="pe-3">
                    Innovative technology
                  </h4>
                  <p className="mb-5 pe-3 pb-md-5">
                  We deliver innovative, modern and scalable software that will strengthen your organization and prime it for the future.
                  </p>
                </Col>
                <Col sm={4} className="px-0 brdr-rght pb-md-4">
                <hr className="px-0 d-sm-none" />
                  <p className="mono mt-3">B.</p>
                  <hr className="px-0" />
                  <h4 className="pe-3">
                    Designed for humans
                  </h4>
                  <p className="mb-5 pe-3 pb-md-5">
                  With insights gained from a human-centered perspective, we design technology for everyone, from users to customers to your own employees.
                  </p>
                  
                </Col>
                <Col sm={4} className="px-0 pb-md-4">
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
            <Col xs={2} lg={3} className="brdr-tp brdr-rght">
            </Col>
            <Col xs={10} lg={9} className="px-0">
            <hr className="my-0 dark" />
            <h3 className="h1 medium">
            Using a people-first approach means <span className="red semi-bold">building intuitive technology</span> that people actually use
            </h3>
            </Col>
            <Col xs={2} lg={3} className="brdr-tp brdr-rght vh-20">
            </Col>
            <Col xs={10} lg={9} className="px-0">
            <hr className="my-0 " />
            </Col>
            
          </Row>
        </Container>
            
      </main>

      <Footer />
    </div>
  )
}
