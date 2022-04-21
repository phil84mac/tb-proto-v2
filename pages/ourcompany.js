import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


export default function Home() {
  return (
    <>
    <div>
    <Head>
      <title>TB PROTO</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />

    <main className="bg-dark-grey px-sm-4 px-lg-5">
      
        <Container fluid className="cntnr-brdr-op">
          <Row id="company" fluid className="">
            <Col xs={2} sm={3} className=" vh-20 z-0">
            <Link href="#company">
                <div className="mt-3 fixed pntr">
                  <Row className="d-flex align-items-center">
                  <Col lg={3} className="px-0">
                  <Image src="/TBlogo.svg" className="" alt="Thinking Big Logo"/>
                  </Col>
                  <Col lg={9} className="d-none d-lg-block pe-0">
                  <h6 className="mt-2 white medium">
                    THINKING BIG
                  </h6>
                  </Col>
                  </Row>
                </div>
              </Link>
            </Col>
            <Col xs={10} sm={9} className="brdr-lft-op d-flex align-items-start justify-content-end pe-0 pt-1 z-999">    
                <a href="/"  className="btn btn-primary bg-yellow arrow-start mt-4 p-0 ">
                  RETURN HOME
                </a>  
            </Col>
            <Col xs={2} sm={3} className="brdr-tp-op z-0">
            </Col>
            <Col xs={10} sm={9} className="px-0 brdr-lft-op brdr-tp-op z-999">
              <h1 className="white pe-3 heavy pb-5 mb-5">
              Join the <span className="">future</span> now 
              </h1>
              <p className="lead white brdr-tp-op py-3 pe-3">
              Technology evolves and the future does not wait. At <span className="bold">Thinking Big</span> we are committed to smart innovation that helps businesses thrive in an evolving technological landscape. Innovation transforms businesses. We guide that transformation.
              </p>
              
            </Col>      
            <Col xs={2} sm={3} className=" vh-100">
            </Col>
            <Col xs={10} sm={9} className="brdr-lft-op brdr-tp-op">
            <Row className=" z-999">
                <Col md={3} className="px-0 py-3 brdr-rght-op-alt brdr-bttm-op">
                <a href="#"  className="btn btn-primary large btn-dark-bg bg-trans arrow-down-white p-0 ">
                  SERVICES
                </a> 
                </Col>
                <Col md={3} className="px-0 py-3 brdr-rght-op-alt brdr-bttm-op">
                <a href="#"  className="btn btn-primary large btn-dark-bg bg-trans arrow-down-white p-0 ">
                  OUR TEAM
                </a> 
                </Col>
                <Col md={3} className="px-0 py-3 brdr-rght-op-alt brdr-bttm-op">
                <a href="#"  className="btn btn-primary large btn-dark-bg bg-trans arrow-down-white p-0 ">
                  CAREERS
                </a> 
                </Col>
                <Col md={3} className="px-0 py-3 brdr-bttm-op">
                <a href="#"  className="btn btn-primary large btn-dark-bg bg-trans arrow-down-white p-0 ">
                  ARTICLES
                </a> 
                </Col>
              </Row> 
            </Col>
            <Col xs={2} sm={3} className="vh-100">
            </Col>
            <Col xs={10} sm={9} className="brdr-lft-op"> 
            </Col>
          </Row>
        </Container>
            

      <Footer />
    </main>
    </div>
    </>
  )
}