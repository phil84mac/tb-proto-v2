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
      <Header />

      <main className="px-sm-4 px-lg-5">
        <Container fluid className="cntnr-brdr">
          <Row fluid className="">
            <Col xs={2} lg={3} className="brdr-tp">
            </Col>
            <Col xs={10} lg={9} className="brdr-lft px-0">
            <hr className="my-0 dark" />
              <h1 className="dark-grey heavy mb-5 pb-5 mt-3" >
              Business
              </h1>   
            </Col>
            <Col xs={2} lg={3} className="brdr-tp">
            </Col>
            <Col xs={10} lg={9} className="brdr-lft brdr-tp px-0">
              <video className='w-full video-margin-fix' autoPlay loop muted>
                <source src="./meeting.mp4" type='video/mp4' />
              </video>
            </Col>
            <Col xs={2} lg={3} className="brdr-tp vh-20">
            </Col>
            <Col xs={10} lg={9} className="brdr-lft">    
            </Col>
          </Row>
        </Container>       
      </main>

      <Footer />
    </>
  )
}
