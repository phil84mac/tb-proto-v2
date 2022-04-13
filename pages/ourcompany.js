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

    <main className="bg-dark-grey">
      
        <Container className="brdr-lft-op brdr-rght-op px-0">
          <Row id="home" fluid className="w-100">
            <Col xs={2} sm={3} className="brdr-rght-op vh-20 z-0">
            <Link href="/#home">
                <div className="mt-3 fixed pntr">
                  <Row className="d-flex align-items-center">
                  <Col lg={3} className="px-0">
                  <Image src="/TBlogo.svg" className="" alt="Thinking Big Logo"/>
                  </Col>
                  <Col lg={9} className="d-none d-lg-block pe-0">
                  <h6 className="mt-2 white">
                    THINKING BIG
                  </h6>
                  </Col>
                  </Row>
                </div>
              </Link>
            </Col>
            <Col xs={10} sm={9} className="d-flex align-items-start justify-content-end pe-0 pt-1 z-999">    
                <a href="/"  className="btn btn-primary bg-yellow arrow-start mt-4 p-0 ">
                  RETURN HOME
                </a>  
            </Col>
            <Col xs={2} sm={3} className="brdr-tp-op brdr-rght-op z-0">
            </Col>
            <Col xs={10} sm={9} className="px-0 brdr-tp-op z-999">
              <h1 className="pink pe-3 pb-5 mb-5">
              Join the <span className="white pe-1">future</span> now 
              </h1>
              <p className="lead white brdr-tp-op brdr-bttm-op py-5 pe-3">
               In a competitive business environment, successful companies put people first. At Thinking Big, <span className="bg-green dark-grey bold">Human-centred Design</span> informs how we think and what we do, no matter what the solution. *PLACEHOLDER*
              </p>
            </Col>
            <Col xs={2} sm={3} className="brdr-rght-op vh-100">
            </Col>
            <Col xs={10} sm={9} className="d-flex align-items-start justify-content-end pe-0"> 
            </Col>
          </Row>
        </Container>
            

      <Footer />
    </main>
    </div>
    </>
  )
}