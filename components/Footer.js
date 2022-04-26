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
      <footer className="bg-dark-grey px-sm-4 px-lg-5 brdr-tp-op"> 
      <Container fluid className="cntnr-brdr-op">
        <div className="d-none d-sm-block">
          <Row className="">
            <Col sm={6} className="white brdr-bttm-op brdr-rght-op pt-5 px-0 d-flex align-items-end">
              <div className="w-100">
                <a href="/ourcompany" className="mono medium text-uppercase dark-grey no-underline bg-yellow arrow d-none">
                  Our company
                </a>
              <hr className="op"/>
                <h6 className="white semi-bold">
                  SOCIAL MEDIA
                </h6>

                <ul className="px-0 mb-4">
                  <li className="mb-2">
                    <a href="#" className="dark-grey no-underline bg-yellow mono">
                    Facebook
                    </a>
                  </li>
                  <li className="mb-2">
                  <a href="#" className="dark-grey no-underline bg-yellow mono">
                  LinkedIn
                  </a>
                  </li>
                  <li className="mb-2">
                  <a href="#" className="dark-grey no-underline bg-yellow mono">
                  Medium
                  </a>
                  </li>
                  <li className="mb-2">
                  <a href="#" className="dark-grey no-underline bg-yellow mono">
                  Twitter
                  </a>
                  </li>
                </ul>
              <hr className="op" />
                <h6 className="white semi-bold">
                  DOCUMENTS
                </h6>
                <ul className="px-0 mb-4">
                  <li className="mb-2 ">
                    <a href="#" className="dark-grey no-underline bg-yellow mono">
                    Terms of use
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="dark-grey no-underline bg-yellow mono">
                    Privacy
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col sm={6} className="white pt-5 brdr-bttm-op px-0 d-flex align-items-end">
              <div className="w-100">
                <h6 className="white semi-bold mb-3">
                  CONTACT US
                </h6>              
                <form className="mb-4">
                <Row class="mb-3 d-flex">
                  <Col md={6}>
                  <label for="fname" class="form-label text-muted text-uppercase">First name</label>
                  <input class="form-control" id="fname" placeholder="First name" />
                  </Col>
                  <Col md={6}>
                  <label for="lname" class="form-label text-muted text-uppercase">Last name</label>
                  <input class="form-control" id="lname" placeholder="Last name" />
                  </Col>
                </Row>
                <div class="mb-3">
                  <label for="email" class="form-label text-muted text-uppercase">Email address</label>
                  <input type="email" class="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label text-muted text-uppercase">Leave us a message</label>
                  <textarea class="form-control" id="message" rows="4" placeholder="How can we help you?"></textarea>
                </div>
                <div className="d-flex justify-content-end">
                <button className="btn btn-primary medium bg-yellow dark-grey no-underline p-0" type="submit">
                  Submit
                </button>
                </div>
                </form>
              </div>
            </Col>
            <Col sm={12} className="z-999 px-0 bg-red pt-2 pt-sm-0 d-none">
              <a href="#" className="no-underline px-0">
                <div className="py-sm-5">
                <p className="h1 dark-grey text-end bold arrow-dark-large d-none d-sm-block">
                  Our company
                </p>
                <p className="mono py-3 dark-grey arrow semi-bold text-center d-block d-sm-none">
                  OUR COMPANY
                </p>
                </div>
              </a>
            </Col>
            <Col sm={12} className="white py-4 px-0 d-none d-sm-block">
                <div className="d-flex align-items-center justify-content-between">   
                  <p className="mono mb-xs-3 mb-sm-0">
                  © THINKING BIG 2022
                  </p>
                  <a href="#" className="mono dark-grey no-underline bg-red">
                  hello@thinkingbig.net
                  </a>
                </div>  
            </Col>
          </Row>
        </div>
        <div className="d-block d-sm-none">
        <Row>
            <Col xs={2} lg={3} className="">
            </Col>
            <Col xs={10} lg={9} className="brdr-lft-op">
            <Row className="d-flex">
            <Col sm={6} className="white pt-3 pt-5 px-0 d-flex align-items-end">
              <div className="w-100">
              <hr className="op d-none d-sm-block"/>
                <h6 className="white semi-bold mb-3">
                  CONTACT US
                </h6>
              
                <form className="mb-4">
                <div class="mb-3">
                  <label for="fname" class="form-label text-muted text-uppercase">First name</label>
                  <input class="form-control" id="fname" placeholder="First name" />
                </div>
                <div class="mb-3">
                  <label for="lname" class="form-label text-muted text-uppercase">Last name</label>
                  <input class="form-control" id="lname" placeholder="Last name" />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label text-muted text-uppercase">Email address</label>
                  <input type="email" class="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label text-muted text-uppercase">Leave us a message</label>
                  <textarea class="form-control" id="message" rows="4" placeholder="How can we help you?"></textarea>
                </div>
                <div className="d-flex justify-content-end">
                <button className="btn btn-primary medium bg-yellow dark-grey no-underline p-0" type="submit">
                  Submit
                </button>
                </div>
                </form>
              </div>
            </Col>
            <Col sm={6} className="white brdr-bttm-op brdr-rght-op px-0 d-flex align-items-end">
              <div className="w-100">
                <a href="/ourcompany" className="mono medium text-uppercase dark-grey no-underline bg-yellow arrow d-none">
                  Our company
                </a>
              <hr className="op"/>
                <h6 className="white semi-bold">
                  SOCIAL MEDIA
                </h6>

                <ul className="px-0 mb-4">
                  <li className="mb-2">
                    <a href="#" className="dark-grey no-underline bg-yellow mono">
                    Facebook
                    </a>
                  </li>
                  <li className="mb-2">
                  <a href="#" className="dark-grey no-underline bg-yellow mono">
                  LinkedIn
                  </a>
                  </li>
                  <li className="mb-2">
                  <a href="#" className="dark-grey no-underline bg-yellow mono">
                  Medium
                  </a>
                  </li>
                  <li className="mb-2">
                  <a href="#" className="dark-grey no-underline bg-yellow mono">
                  Twitter
                  </a>
                  </li>
                </ul>
              <hr className="op" />
                <h6 className="white semi-bold">
                  DOCUMENTS
                </h6>
                <ul className="px-0 mb-4">
                  <li className="mb-2 ">
                    <a href="#" className="dark-grey no-underline bg-yellow mono">
                    Terms of use
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="dark-grey no-underline bg-yellow mono">
                    Privacy
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            
            <Col sm={12} className="z-999 px-0 bg-red pt-2 pt-sm-0 d-none">
              <a href="#" className="no-underline px-0">
                <div className="py-sm-5">
                <p className="h1 dark-grey text-end bold arrow-dark-large d-none d-sm-block">
                  Our company
                </p>
                <p className="mono py-3 dark-grey arrow semi-bold text-center d-block d-sm-none">
                  OUR COMPANY
                </p>
                </div>
              </a>
            </Col>
            <Col sm={12} className="white py-4 px-0 mb-3 d-block d-sm-none text-start">
                  <p className="mono mb-2">
                  © THINKING BIG 2022
                  </p>
                  <a href="#" className="mono dark-grey no-underline bg-red">
                  hello@thinkingbig.net
                  </a>
            </Col>
          </Row>
            </Col>
            </Row>
            </div>
        </Container>
      </footer>
    </>
  )
}
