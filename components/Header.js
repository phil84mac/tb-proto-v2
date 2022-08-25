import React, { useState, useEffect, MouseEvent, Component, useRef} from 'react';
import Container from 'react-bootstrap/Container';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Header() {

  const [tooltipText, setTooltipText] = useState('Copy Email');

  return (
    <>
    <div className="px-sm-4 px-lg-5 fixed w-100" id="home">
      <Container fluid className="cntnr-brdr py-3">
          <Row className="">
            <Col xs={12} className="z-999 d-flex align-items-center justify-content-between px-0">
        
              <div className="pntr d-flex align-items-center">
                <Link href="/">
                  <Image fluid src="/tb-logo-inverse.svg" className="header-logo multiply" alt="Thinking Big Logo"/>
                </Link>
                  <a href="/" className="dark-grey medium mono ms-2 ps-1 uppercase no-underline d-none d-md-block">
                    Thinking/Big
                  </a>
              </div>
                
              <div className="d-flex align-items-center">
                <a href="#contact"  className="mono no-underline medium dark-grey link py-2 nowrap me-3 small">
                  HELLO@THINKINGBIG.NET
                </a>
                <OverlayTrigger 
                  placement='bottom-end'
                  overlay={
                    <Tooltip>
                      { tooltipText }
                    </Tooltip>
                  }
                >
                <Button className="bg-trans p-0 m-0" onClick={() => {
                        setTooltipText('Copied!');
                        navigator.clipboard.writeText('hello@thinkingbig.net');
                      }}>
                    <Image fluid src="/circle-copy.svg" className="pntr copy-btn"/>
                </Button>
                </OverlayTrigger>
              </div>
            </Col>
          </Row>
      </Container>
    </div>
    </>
  )
}

