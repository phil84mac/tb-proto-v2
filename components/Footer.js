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

          <Row className="">
            <Col xs={12} className="dark-grey brdr-bttm d-flex align-items-end bg-stripes-2 vh-50 px-0">
              <div className="w-100 mb-4">
              <hr className="mt-0 d-none" />
              <h6 className="text-muted regular pb-1">
                CONTACT
              </h6>        
                <p className="medium">
                  310-172 Great George St
                </p> 
                <p className="medium">
                  Charlottetown PEI
                </p>   
                <a href="mailto:hello@thinkingbig.net" className="mono dark-grey uppercase medium link">
                  hello@thinkingbig.net
                </a>
              <h6 className="text-muted regular pb-1 mt-5">
                SOCIAL MEDIA
              </h6>
              <ul className="px-0 uppercase no-underline mb-3">
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
                <li className="">
                <a href="https://www.linkedin.com/company/3094117" className="dark-grey mono medium link">
                LinkedIn
                </a>
                </li>
               </ul>
              </div>
            </Col>

            <Col xs={12}  className="px-0 py-3 d-flex align-items-center nowrap bg-stripes-2">
                <Image fluid src="/tb-logo-inverse.svg" className="footer-logo pe-1 me-2"/>
                <p className="dark-grey mono medium mb-0 z-999">
                  © THINKING/BIG 2022
                  </p>
            </Col>
            
          </Row>
        </Container>
      </footer>
    </>
  )
}
