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

            <div className="mb-5 pb-5 w-25">
            <h1 className="dark-grey medium text-center mono me-2">
                404
                </h1>  
                <object type="image/svg+xml" data="/engineering.svg" className="h-100 mb-0">svg-animation</object>

            </div>
            
            </Col>
        </Row>
        </Container>
      </main>
      <Footer />
    </>
  )
}
