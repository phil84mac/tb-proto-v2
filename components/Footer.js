import React, { useState, useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function Footer() {
  return (
    <>
      <footer className=" px-sm-4 px-lg-5 "> 
      <Container fluid className="cntnr-brdr">

          <Row className="">
            <Col xs={12} className="dark-grey brdr-tp bg-stripes-2 d-flex align-items-end px-0 vh-70">              
              <div className="w-100">
              <hr className=" mt-0"/>
                <h6 className="text-muted mb-2 regular">
                  ADDRESS
                </h6>
                <ul className="px-0 mb-4 mt-3 no-underline">
                  <li>
                    <p className="dark-grey">
                      310-176 Great George St
                    </p>
                  </li>
                  <li >
                    <p className="dark-grey">
                      Charlottetown
                    </p>
                  </li>
                </ul>
                  
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
              </div>
              </Col>

            <Col xs={12} className="dark-grey py-4 px-0 brdr-tp bg-stripes-2 d-flex justify-content-between align-items-center">
                <p className="mono my-0 text-muted medium">
                © THINKING/BIG 2022
                </p>
                <Image fluid src="/tb-logo-inverse.svg" className="footer-logo"/>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}
