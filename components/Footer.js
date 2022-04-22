import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';

export default function Footer() {
  return (
    <>
      <footer className="bg-dark-grey px-sm-4 px-lg-5"> 
      <Container fluid className="cntnr-brdr-op">
          <Row>
            <Col sm={6} className="white vh-80 brdr-rght-op p-4 px-0 d-flex align-items-end justify-content-start">
              links
            </Col>
            <Col sm={6} className="white p-4 px-0 d-flex align-items-end justify-content-start">
              contact us
            </Col>
            <Col sm={12} className="brdr-tp-op brdr-bttm-op px-0 ">
              <a href="#" className="btn no-underline px-0">
                <div className="py-5">
                <p className="h1 white bold arrow-white-large">
                  Our company
                </p>
                </div>
              </a>
            </Col>
            <Col sm={12} className="white py-4 px-0 d-flex align-items-start justify-content-between">
              <p className="mono mb-0">
              © THINKING BIG 2022
              </p>
              <a href="#" className="mono white ">
              hello@thinkingbig.net
              </a>
            </Col>

          </Row>
        </Container>
      </footer>
    </>
  )
}
