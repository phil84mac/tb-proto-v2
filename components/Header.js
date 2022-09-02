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
    <div className="px-2 px-sm-4 px-lg-5 w-100" id="home">
      <Container fluid className="py-3 bg-stripes-2 cntnr-brdr">
          <Row className="">
            <Col xs={12} className=" d-flex align-items-center justify-content-between header-pad">
        
              <div className="pntr d-flex align-items-center">
                <Link href="/">
                  <Image fluid src="/tb-logo-inverse.svg" className="header-logo multiply" alt="Thinking Big Logo"/>
                </Link>
                  <Link href="/" >
                    <a className="dark-grey medium mono ms-2 ps-1 uppercase no-underline d-none d-md-block">
                    Thinking/Big
                    </a>
                  </Link>
              </div>
                
              <div className="d-flex align-items-center">
                <a href="mailto:hello@thinkingbig.net"  className="mono no-underline medium dark-grey link py-2 nowrap me-3 small">
                  HELLO@THINKINGBIG.NET
                </a>
                <OverlayTrigger 
                  placement='auto'
                  overlay={
                    <Tooltip>
                      { tooltipText }
                    </Tooltip>
                  }
                >
                <Button className="bg-trans p-0 m-0" onClick={() => {
                        setTooltipText('Email copied!');
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

