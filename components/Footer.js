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
      <footer className="bg-dark-grey px-sm-4 px-lg-5"> 
      <Container fluid className="cntnr-brdr-op vh-100">
          <Row>
            <Col sm={6}>
            </Col>
            <Col sm={6}>
            </Col>
            <Col sm={12}>
              <a>

              </a>
            </Col>
            <Col>
            </Col>

          </Row>
        </Container>
      </footer>
    </>
  )
}
