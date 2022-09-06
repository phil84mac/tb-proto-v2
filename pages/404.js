import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import React, { useState, useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {



  return (
    <>
      <Head>
        <title>THINKING/BIG - 404</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="px-2 px-sm-4 px-lg-5">
        <Container fluid className="cntnr-brdr">
          <Row fluid className="">
            <Col xs={12} className="px-0 bg-stripes-2 vh-95 d-flex align-items-center justify-content-center">

            <div className=" w-25 pb-5">    
                <h1 className="dark-grey medium text-center mono me-2">
                    404
                </h1>
                <p className="h4 light dark-grey text-center">
                    We are renovating...
                </p>
                <object type="image/svg+xml" data="/engineering.svg" className="multiply">svg-animation</object>
                <p className="text-center mb-5 multiply">
                    <a href="/" className="large dark-grey medium uppercase pntr bg-yellow px-">
                        Go to home page
                    </a>
                </p>        
            </div>
            
            </Col>
        </Row>
        </Container>
      </main>
      <Footer />
    </>
  )
}
