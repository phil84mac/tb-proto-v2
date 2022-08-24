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
      <footer className=" px-sm-4 px-lg-5 "> 
      <Container fluid className="cntnr-brdr brdr-tp">

        {/* TABLET + DESKTOP */}
        <div className="d-none d-lg-block">
          <Row className="">
            <Col sm={6} className="dark-grey brdr-bttm brdr-rght d-flex align-items-end">              
              <div className="w-100">
                <Row className="">
                  <Col sm={4} className="footer-min px-0 ">
                  </Col>
                  <Col sm={4} className="brdr-lft px-0 "></Col>
                  <Col sm={4} className="brdr-lft px-0 "></Col>
                  <Col sm={4} className="px-0">
                  <hr className=" mt-0"/>
                    <h6 className="text-muted regular pb-1">
                      PAGES
                    </h6>
                    <ul className="px-0 mb-4 uppercase no-underline medium">
                      <li className="mb-2">
                        <a href="#home" className="dark-grey mono medium arrow-up">
                        Home
                        </a>
                      </li>
                      <li className="mb-2">
                      <a href="#" className="dark-grey mono medium link">
                      Careers
                      </a>
                      </li>
                    </ul>
                    </Col>
                  <Col className="brdr-lft px-0 mb-4 pb-1" sm={4}>
                  <hr className=" mt-0"/>
                    <h6 className="text-muted regular pb-1">
                      SOCIAL MEDIA
                    </h6>
                    <ul className="px-0 mb-4 uppercase no-underline">
                      <li className="mb-2">
                        <a href="https://www.linkedin.com/company/3094117" className="dark-grey mono medium link">
                        LinkedIn
                        </a>
                      </li>
                      <li className="mb-2">
                      <a href="https://twitter.com/ThinkingBigInc" className="dark-grey mono medium link">
                      Twitter
                      </a>
                      </li>
                      <li className="mb-2">
                        <a href="https://medium.com/thinkingbig" className="dark-grey mono medium link">
                        Medium
                        </a>
                      </li>
                      <li className="mb-2">
                        <a href="https://www.facebook.com/thinkingbig.net/" className="dark-grey mono medium link">
                        Facebook
                        </a>
                      </li>
                      <li className="mb-2">
                        <a href="https://www.instagram.com/wearethinkingbig/" className="dark-grey mono medium link">
                        Instagram
                        </a>
                      </li>                      
                    </ul>
                  </Col>
                  <Col sm={4} className="brdr-lft px-0">
                    <hr className="mt-0" />
                    <h6 className="text-muted regular pb-1">
                      DOCUMENTS
                    </h6>
                    <ul className="px-0 mb-4 uppercase no-underline">
                      <li className="mb-2">
                        <a href="#" className="dark-grey mono medium">
                        Terms of use
                        </a>
                      </li>
                      <li className="mb-2">
                        <a href="#" className="dark-grey mono medium">
                        Privacy policy
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col sm={6} className="dark-grey brdr-bttm px-0 d-flex align-items-end ">
              <div id="contact" className="w-100">
              <hr className="mt-0 d-none" />
                <h4 className="dark-grey h3 regular mb-4">
                  Contact us
                </h4>              
                <form className="mb-4">
                <Row class="mb-4 d-flex">
                  <Col md={6} className="pe-1">
                  <label for="fname" class="form-label text-muted text-uppercase">First name</label>
                  <input class="form-control" id="fname" placeholder="First name" />
                  </Col>
                  <Col md={6} className="ps-1">
                  <label for="lname" class="form-label text-muted text-uppercase">Last name</label>
                  <input class="form-control" id="lname" placeholder="Last name" />
                  </Col>
                </Row>
                <div class="mb-3 pb-1">
                  <label for="email" class="form-label text-muted text-uppercase">Email address</label>
                  <input type="email" class="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div class="mb-3 pt-1">
                  <label for="message" class="form-label text-muted text-uppercase">Leave us a message</label>
                  <textarea class="form-control" id="message" rows="4" placeholder="How can we help you?"></textarea>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                <div className="form-check mb-0">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                    Sign up for our newsletter?
                  </label>
                </div>
                <button className="btn btn-primary medium bg-yellow dark-grey no-underline arrow p-0" type="submit">
                  SUBMIT
                </button>
                </div>   
                </form>
              </div>
            </Col>
            <Col xs={2}  className="px-0 py-3 d-flex align-items-center nowrap">
              <Image fluid src="/tb-logo-inverse.svg" className="footer-logo"/>
              <p className="dark-grey mono ms-3 medium mb-0 z-999">
                © THINKING/BIG 2022
              </p>
            </Col>
            <Col xs={2}  className=" brdr-lft">
            </Col>
            <Col xs={2}  className=" brdr-lft">
            </Col>
            <Col xs={2}  className=" brdr-lft">
            </Col>
            <Col xs={2}  className=" brdr-lft">
            </Col>
            <Col xs={2}  className=" brdr-lft py-4 px-0 d-flex align-items-center justify-content-end">
              <a href="mailto:hello@thinkingbig.net" className="mono link dark-grey uppercase medium nowrap">
              hello@thinkingbig.net
              </a>
            </Col>
          </Row>
        </div>

        {/* MOBILE */}
        <div className="d-lg-none">
        <Row className="px-0">

            <Col xs={12} className="px-0 bg-stripes-2">
              <div className="w-100">

                <h3 className="dark-grey mb-3 mt-5 medium">
                  Contact us
                </h3>
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
                <button className="btn btn-primary medium bg-yellow dark-grey no-underline arrow p-0" type="submit">
                  SUBMIT
                </button>
                </div>
                </form>
              
                <hr className=" mt-0"/>
                <h6 className="text-muted regular">
                  CONTACT INFO
                </h6>
                <ul className="px-0 mb-4 uppercase no-underline">
                  <li className="mb-2">
                  <a href="mailto:hello@thinkingbig.net" className="mono link dark-grey uppercase medium">
                    hello@thinkingbig.net
                    </a>
                  </li>
                </ul>
              <hr className="" />
                <h6 className="text-muted regular">
                  DOCUMENTS
                </h6>
                <ul className="px-0 mb-4 uppercase no-underline">
                  <li className="mb-2 ">
                    <a href="#" className="dark-grey mono medium">
                    Terms of use
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="dark-grey mono medium">
                    Privacy Policy
                    </a>
                  </li>
                </ul>
              <hr className=""/>
                <h6 className="text-muted regular">
                  SOCIAL MEDIA
                </h6>
                <ul className="px-0 mb-4 uppercase no-underline">
                <li className="mb-2">
                  <a href="https://www.linkedin.com/company/3094117" className="dark-grey mono medium link">
                  LinkedIn
                  </a>
                </li>
                <li className="mb-2">
                <a href="https://twitter.com/ThinkingBigInc" className="dark-grey mono medium link">
                Twitter
                </a>
                </li>
                <li className="mb-2">
                  <a href="https://medium.com/thinkingbig" className="dark-grey mono medium link">
                  Medium
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://www.facebook.com/thinkingbig.net/" className="dark-grey mono medium link">
                  Facebook
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://www.instagram.com/wearethinkingbig/" className="dark-grey mono medium link">
                  Instagram
                  </a>
                </li>
                </ul>            
              </div>
            </Col>
            <Col xs={12} className="dark-grey py-4 px-0 brdr-tp bg-stripes-2 d-flex justify-content-between align-items-center">

                
                <p className="mono my-0 dark-grey medium">
                © THINKING BIG 2022
                </p>
                <Image fluid src="/tb-logo-inverse.svg" className="footer-logo"/>

            </Col>
          </Row>
        </div>
        </Container>
      </footer>
    </>
  )
}
