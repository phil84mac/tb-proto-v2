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
    <div className="px-sm-4 px-lg-5 xl-pad" id="home">
      <Container fluid className="cntnr-brdr">
          <Row>
            <Col xs={2} className="z-999">
              <Link href="/">
                <div className="mt-3 fixed pntr">
                  <Row className="d-flex align-items-center ps-3 ps-md-0">
                  <Col xs={8} md={3} className="px-0">
                  <Image fluid src="/tb-logo-v2.svg" className="" alt="Thinking Big Logo"/>
                  </Col>
                  <Col md={9} className="d-none d-md-block pe-0">
                    <a href="/" className="mt-2 dark-grey medium mono uppercase no-underline">
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


            <Col xs={2} className="brdr-lft d-flex align-items-start py-4 justify-content-end px-0 z-999 uppercase fixed">
                <a href="/"  className="mono no-underline medium dark-grey link py-2 me-4 nowrap">
                  Careers
                </a>
                <a href="#contact"  className="mono no-underline medium dark-grey arrow-down py-2 nowrap">
                  Contact
                </a>
            </Col>
          </Row>
      </Container>
    </div>
    </>
  )
}
