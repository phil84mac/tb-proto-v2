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
              size="lg"
              animation={false}
              scrollable={true}
              className="py-4"
              > 
                <Modal.Header closeButton>
                  <Modal.Title className="h3 medium ps-3 py-3">
                    Terms of Use
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="ps-3 pe-lg-5 py-3">
                <p className="mb-4 large">
                  Your use of the <span className="semi-bold">Thinking Big Information Technology Inc.</span> (<span className="semi-bold">"Thinking Big"</span>) web site (the "Web Site") means you agree to the following Terms of Use. If you do not agree with these terms please leave this Web Site immediately and do not use the material available therein.
                  </p>
                  <h5 className="medium">
                  1. RESTRICTION ON USE
                  </h5>
                  <p className="mb-4">
                  The content and information displayed on this Web Site is the property of <span className="semi-bold">Thinking Big</span>. You may view and download the materials at this Web Site only for your personal, non-commercial use. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer or sell any information, software, products or services available on the Web Site. When using the content of the Web Site you may not in any way imply that you are affiliated with <span className="semi-bold">Thinking Big</span>. The downloading, reproduction, or retransmission of the content on the Web Site, other than for non-commercial individual use, is strictly prohibited.
                  </p>
                  <h5 className="medium">
                  2. LINKS TO THINKING BIG WEB SITE
                  </h5>
                  <p className="mb-2">
                  If you would like to link to the Thinking Big Web Site, you must comply with the following guidelines:
                  </p>
                  <ul className="mb-4 dots">
                    <li>
                    Your site must not present false information about <span className="semi-bold">Thinking Big</span> products or services.
                    </li>
                    <li>
                    Do not present the link to the Thinking Big Web Site in any way suggests that <span className="semi-bold">Thinking Big</span> has any relationship or affiliation with your site or endorses your site, products or services.
                    </li>
                  </ul>
                  <h5 className="medium">
                  3. LINKS FROM THINKING BIG WEB SITE
                  </h5>
                  <p className="mb-4">
                  <span className="semi-bold">Thinking Big</span> expressly disclaims any liability for the content of other web sites that may be accessed through links on this Web Site.
                  </p>
                  <h5 className="medium">
                  4. INTELLECTUAL PROPERTY RIGHTS
                  </h5>
                  <p className="mb-4">
                  This Web Site, all content on it, and all materials downloadable from this Web Site are owned by <span className="semi-bold">Thinking Big</span> and its licensors and are protected by copyright and other intellectual property laws and international treaties.
                  </p>
                  <h5 className="medium">
                  5. WARRANTIES AND LIMITATION OF LIABILITY; TERMINATION
                  </h5>
                  <p className="mb-4">
                  The <span className="semi-bold">Thinking Big</span> web site and all content within is provided on an "as is" and "as available" basis without any warranties of any kind, whether express or implied, including, but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event shall <span className="semi-bold">Thinking Big</span> be liable for any special, indirect or consequential damages or any damages whatsoever resulting from loss of use, data or profits, whether in an action of contract, negligence or other tortuous action, arising out of or in connection with the use or performance of information available on this Web Site. Your sole and exclusive remedy shall be for you to discontinue your use of the Web Site. Any material downloaded or otherwise obtained through this Web Site is done at your own risk and discretion and you will be solely responsible for any damage to your computer system or loss of data that results from the downloading or use of any such material. <span className="semi-bold">Thinking Big</span> shall not be liable for any damages or injury resulting from your access to, or inability to access, this Web Site, or from any virus, bugs, tampering, omission, interruption, deletion, defect, delay, computer line failure, or any other technical malfunction related to this Web Site.
                  </p>
                  <h5 className="medium">
                  6. PRIVACY AND INFORMATION
                  </h5>
                  <p className="mb-4">
                  We believe the privacy of all our users is important. Please review our privacy policy relating to the collection and use of your personal information.
                  </p>
                  <h5 className="medium">
                  7. NOTICES AND PROCEDURE FOR MAKING CLAIMS OF COPYRIGHT INFRINGEMENT
                  </h5>
                  <p className="mb-4">
                  Pursuant to Title 17, United States Code, Section 512(c)(2), notifications of claimed copyright infringement should be sent to Thinking Big Designated Agent, as follows: Name of Agent Designated to Receive Notification of Claimed Infringement: Full Address of Designated Agent to Which Notification Should be Sent: Telephone Number of Designated Agent: Facsimile Number of Designated Agent: Email Address of Designated Agent: To be effective, the Notification must include the following: A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed; Identification of the copyrighted work claimed to have been infringed, or if multiple copyrighted works at a single online site are covered by a single notification, a representative list of such works at that site; Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit the service provider to locate the material; Information reasonably sufficient to permit the service provider to contact the Complaining Party, such as an address, telephone number, and if available, an electronic mail address at which the complaining party may be contacted; A statement that the Complaining Party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; and A statement that the information in the notification is accurate, and under penalty of perjury, that the Complaining Party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.
                  </p>
                  <h5 className="medium">
                  8. GENERAL
                  </h5>
                  <p className="mb-2">
                  <span className="semi-bold">Thinking Big</span> reserves the right to change or amend these Terms of Use at any time without prior notice. Any rights not expressly granted herein are reserved.
                  </p>
                  <p className="">
                  These Terms of Use shall be governed by the laws of Canada. without giving effect to any principles or conflicts of law. If any provision of this agreement shall be unlawful, void or for any reason unenforceable, then that provision shall be deemed severable from this agreement and shall not affect the validity and enforceability of any remaining provisions. For questions regarding these Terms of Use please e-mail <span className="semi-bold">Thinking Big</span> at <a href="mailto:info@thinkingbig.net" className="link dark-grey underline">info@thinkingbig.net</a>
                  </p>

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
              size="lg"
              animation={false}
              scrollable={true}
              className="py-4"
              > 
                <Modal.Header closeButton>
                <Modal.Title className="h3 medium ps-3 py-3">
                    Privacy
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="ps-3 pe-lg-5 py-3">
                <p className="mb-4 large">
                <span className="semi-bold">Thinking Big</span> respects the privacy of all of its users and is committed to protecting such privacy in accordance with this Privacy Policy.
                This Privacy Policy explains <span className="semi-bold">Thinking Big</span>'s treatment of your personally identifiable information collected in connection with your activities on the <span className="semi-bold">Thinking Big</span> web site.
                </p>
                  <h5 className="medium">
                  1. COLLECTION OF YOUR PERSONAL INFORMATION
                  </h5>
                  <p className="mb-4">
                  We make no effort to identify public users of our site and no data is disclosed to any third party for any purpose. Data that we collect is used for internal research purposes only. Our logging is passive. Logged information is not disclosed outside of <span className="semi-bold">Thinking Big</span>.
                  </p>
                  <h5 className="medium">
                  2. THE USE OF COOKIES
                  </h5>
                  <p className="mb-4">
                  The Web Site may utilize "cookies", accept the use of cookies if you so desire so that we better serve you with tailored information and simplify your visit. Cookies are identifiers that a web site can send to your browser to keep on your computer to facilitate your next visit to the site. The use of cookies is an industry standard, and many web sites use them. Most browsers are initially set up to accept cookies. You can reset your browser to refuse all cookies or indicate when a cookie is being sent. However, note that some parts of the <span className="semi-bold">Thinking Big</span> service may not function properly if you refuse cookies.
                  </p>
                  <h5 className="medium">
                  3. LINKS TO OTHER SITES
                  </h5>
                  <p className="mb-4">
                  The Web Site may contain links to other web sites. <span className="semi-bold">Thinking Big</span> does not monitor or control the content of such web sites or whether such web sites collect or process your personal data. Accordingly, <span className="semi-bold">Thinking Big</span> assumes no responsibility or liability whatsoever for any kind of material available at such sites and recommends that you review the separate privacy policies of such sites.
                  </p>
                  <h5 className="medium">
                  4. CHANGES TO THIS POLICY
                  </h5>
                  <p className="mb-4">
                  <span className="semi-bold">Thinking Big</span> may occasionally update this Privacy Policy. Any changes will be posted to this site, so we encourage you to continuously review our Privacy Policy.
                  </p>
                  <h5 className="medium">
                  5. CONTACT INFORMATION
                  </h5>
                  <p className="">
                  For questions regarding this Privacy Policy please email <span className="semi-bold">Thinking Big</span> at <a href="mailto:hello@thinkingbig.net" className="link dark-grey underline">info@thinkingbig.net</a>
                  </p>

                </Modal.Body>
                <Modal.Footer>
                  <Button className="dark-grey no-underline bg-yellow uppercase" onClick={handleClosePrivacy}>
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
