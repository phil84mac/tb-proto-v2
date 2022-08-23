import React, { useState, useEffect, MouseEvent, Component} from 'react';
import { render } from 'react-dom';
import Container from 'react-bootstrap/Container';
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Link from 'next/link';

export default function Header() {


  return (
    <>
    <div className="px-sm-4 px-lg-5" id="home">
      <Container fluid className="cntnr-brdr">
          <Row className="h-top-nav ">
            <Col xs={2} className="z-999 d-flex align-items-center">
              <Link href="/">
                <div className="fixed pntr">
                  <Row className="align-items-center">
                  <Col md={3} className="px-0">
                  <Image fluid src="/tb-logo-inverse.svg" className="header-logo" alt="Thinking Big Logo"/>
                  </Col>
                  <Col md={9} className="d-none d-md-block pe-0">
                    <a href="/" className=" dark-grey medium mono uppercase no-underline">
                      Thinking/Big
                    </a>
                  </Col>
                  </Row>
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


            <Col xs={2} className="brdr-lft d-flex align-items-start py-4 justify-content-end px-0 z-999 fixed">
              <div className="fixed mt-2">
              <a href="mailto:hello@thinkingbig.net" className="mono dark-grey medium uppercase link">
                  hello@thinkingbig.net
                </a>
              </div>
            </Col>
          </Row>
      </Container>
    </div>
    </>
  )
}
