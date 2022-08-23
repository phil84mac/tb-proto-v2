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
        <div className="d-none d-md-block">
          <Row className="">
            <Col sm={6} className="dark-grey brdr-rght brdr-bttm d-flex align-items-end">
              
              <div className="w-100">
                <Row className="">
                  <Col sm={4} className="footer-min px-0 ">
                  </Col>
                  <Col sm={4} className="brdr-lft px-0 "></Col>
                  <Col sm={4} className="brdr-lft px-0 "></Col>

                  <Col sm={4} className="px-0">

                    <h6 className="text-muted regular pb-1">
                      SOCIAL MEDIA
                    </h6>
                    <ul className="px-0 mb-4 uppercase no-underline">
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
                        <a href="https://www.instagram.com/wearethinkingbig/" className="dark-grey mono medium link">
                        Instagram
                        </a>
                      </li>
                      <li className="mb-2">
                        <a href="https://www.facebook.com/thinkingbig.net/" className="dark-grey mono medium link">
                        Facebook
                        </a>
                      </li>
                      <li className="mb-2">
                      <a href="https://www.linkedin.com/company/3094117" className="dark-grey mono medium link">
                      LinkedIn
                      </a>
                      </li>
                     
                      
                      </ul>
                    </Col>
                  <Col className="brdr-lft " sm={4}>
                  
                    
                  </Col>
                  <Col sm={4} className="brdr-lft ">

                  </Col>
                </Row>
              </div>
            </Col>
            <Col sm={6} className="dark-grey brdr-bttm px-0 d-flex align-items-end pb-4 bg-stripes-4">
              <div id="contact" className="w-100 mb-2">
              <hr className="mt-0 d-none" />
                <h4 className="dark-grey h3 regular mb-4">
                  Contact us
                </h4>        
                <p className="lead">
                  310-172 Great George St
                </p> 
                <p className="lead mb-3">
                  Charlottetown PEI
                </p>   

                <a href="mailto:hello@thinkingbig.net" className="mono h4 red medium underline">
                  hello@thinkingbig.net
                </a>
              </div>
            </Col>
            <Col xs={2}  className="px-0 py-3 d-flex align-items-center nowrap">
                <Image fluid src="/tb-logo-inverse.svg" className="footer-logo pe-1 me-2"/>
                <p className="dark-grey mono regular mb-0 z-999">
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
            </Col>
          </Row>
        </div>
        <div className="d-block d-md-none">
        <Row className="">
            <Col xs={12} className="brdr-lft px-0 bg-stripes-2">

              <div className="w-100">
                <h2 className="dark-grey medium mb-3 mt-5">
                  Contact us
                </h2>
                <p className="lead">
                  310-172 Great George St
                </p> 
                <p className="lead mb-2">
                  Charlottetown PEI
                </p>   
                <a href="mailto:hello@thinkingbig.net" className="mono h5 red medium underline mb-4">
                  hello@thinkingbig.net
                </a>

                <hr className="mt-4"/>

                <h6 className="text-muted regular pb-1 mt-4">
                      SOCIAL MEDIA
                    </h6>
                    <ul className="px-0 mb-4 uppercase no-underline">
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
                        <a href="https://www.instagram.com/wearethinkingbig/" className="dark-grey mono medium link">
                        Instagram
                        </a>
                      </li>
                      <li className="mb-2">
                        <a href="https://www.facebook.com/thinkingbig.net/" className="dark-grey mono medium link">
                        Facebook
                        </a>
                      </li>
                      <li className="mb-2">
                      <a href="https://www.linkedin.com/company/3094117" className="dark-grey mono medium link">
                      LinkedIn
                      </a>
                      </li>         
                      </ul>
              
              </div>
            </Col>
            
            <Col  className="dark-grey brdr-tp py-4 px-0 text-start d-flex align-items-center nowrap bg-stripes-2">
              <Image fluid src="/tb-logo-inverse.svg" className="footer-logo pe-1 me-2"/>
                <p className="dark-grey mono regular mb-0 z-999">
                  © THINKING/BIG 2022
                  </p>
            </Col>
          </Row>

            </div>
        </Container>
      </footer>
    </>
  )
}
