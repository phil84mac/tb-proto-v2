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
    <div className="px-sm-4 px-lg-5 xl-pad">
      <Container fluid className="cntnr-brdr">
          <Row>
            <Col xs={2} className="z-999">
              <Link href="/">
                <div className="mt-2 fixed pntr">
                  <Row className="d-flex align-items-center">
                  <Col xs={10} md={4} className="px-0">
                  <Image fluid src="/tb-logo-v2.svg" className="" alt="Thinking Big Logo"/>
                  </Col>
                  <Col md={8} className="d-none d-md-block pe-0">
                    <a href="/" className="mt-2 dark-grey medium mono uppercase no-underline">
                      Thinking Big
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

            <Col xs={2} className="brdr-lft d-flex align-items-start pt-4 justify-content-end px-0 z-999 pb-3">
              <ul className="mt-2 px-0 uppercase">

              <li className="d-inline me-3">
                <a href="/"  className="mono medium dark-grey no-underline bg-yellow p-0 ">
                  Home
                </a>
              </li> 

              <li className="d-inline me-3">
                <a href="/"  className="mono medium dark-grey no-underline p-0">
                  Careers
                </a>
              </li> 

              <li className="d-inline me-">
                <a href="/"  className="mono medium dark-grey no-underline p-0">
                  Contact
                </a>
              </li> 

              </ul>
            </Col>
          </Row>
      </Container>
    </div>
    </>
  )
}
