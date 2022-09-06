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
            <Col xs={12} className="bg-stripes-2 pt-4 pb-5 d-flex align-items-center justify-content-center">

            <div className="py-5 my-5">    
                <h1 className="error red multiply mono semi-bold text-center me-1">
                    404
                </h1>
                <p className="h4 light dark-grey text-center mt-4">
                    We are renovating...
                </p>
                <object type="image/svg+xml" data="/engineering.svg" className="multiply w-100">svg-animation</object>
                <p className="text-center multiply mb-5 pb-5">
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
