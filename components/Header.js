import React, { useState, useEffect, MouseEvent, Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Link from 'next/link';

export default function Header() {


  return (
    <>
    <div className="px-sm-4 px-lg-5" id="home">
      <Container fluid className="cntnr-brdr">
          <Row className="h-top-nav">
            <Col xs={2} className="z-999 d-flex align-items-center px-0">
              <Link href="/">
                <div className="fixed pntr align-items-center">
                  <Image fluid src="/tb-logo-inverse.svg" className="header-logo multiply" alt="Thinking Big Logo"/>
                    <a href="/" className="dark-grey medium mono ms-2 ps-1 uppercase no-underline">
                      Thinking/Big
                    </a>
                </div>
              </Link>
            </Col>
            <Col xs={2}  className=" brdr-lft">
            </Col>
            <Col xs={2}  className=" brdr-lft">
            </Col>
            <Col xs={2}  className=" brdr-lft">
            </Col>
            <Col xs={2}  className=" brdr-lft">
            </Col>
            <Col xs={2} className="brdr-lft d-flex align-items-center mb-1 justify-content-end px-0 z-999 uppercase fixed">
              <div className="fixed mt-2">
                <a href="#contact"  className="mono no-underline medium dark-grey link py-2 nowrap me-3">
                  HELLO@THINKINGBIG.NET
                </a>
                <Image fluid src="/circle-copy.svg" className="pntr"/>
              </div>
            </Col>
          </Row>
      </Container>
    </div>
    </>
  )
}
