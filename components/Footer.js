import React, { useState, useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Link from 'next/link';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function Footer() {

  const [showTerms, setShowTerms] = useState(false);
  const handleCloseTerms = () => setShowTerms(false);
  const handleShowTerms = () => setShowTerms(true);
  
  const [showPrivacy, setShowPrivacy] = useState(false);
  const handleClosePrivacy = () => setShowPrivacy(false);
  const handleShowPrivacy = () => setShowPrivacy(true);

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
                      Charlottetown, PE, Canada
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
                    <a onClick={handleShowTerms} className="dark-grey mono medium">
                    Terms of use
                    </a>
                  </li>
                  <li className="mb-2">
                    <a onClick={handleShowPrivacy} className="dark-grey mono medium">
                    Privacy policy
                    </a>
                  </li>
                </ul>
              </div>
              </Col>

              <Modal
              show={showTerms}
              onHide={handleCloseTerms}
              size="xl"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              animation={false}
              > 
                <Modal.Header closeButton>
                  <Modal.Title className="h3 regular">
                    Terms of Use
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Terms

                </Modal.Body>
                <Modal.Footer>
                  <Button className="dark-grey no-underline bg-trans uppercase bg-yellow" onClick={handleCloseTerms}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>

              <Modal
              show={showPrivacy}
              onHide={handleClosePrivacy}
              size="xl"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              animation={false}>
                <Modal.Header closeButton>
                <Modal.Title className="h3 regular">
                    Privacy
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Privacy


                </Modal.Body>
                <Modal.Footer>
                  <Button className="dark-grey no-underline bg-trans uppercase" onClick={handleCloseTerms}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>

            <Col xs={12} className="dark-grey py-4 px-0 brdr-tp bg-stripes-2 d-flex justify-content-between align-items-center">
                <p className="mono my-0 text-muted medium">
                © THINKING/BIG 2022
                </p>
                <Link href="/">
                  <Image fluid src="/tb-logo-inverse.svg" className="footer-logo pntr"/>
                </Link>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}
