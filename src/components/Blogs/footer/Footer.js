// import React from "react";
// import { Box, Container, Row, Column, link, Heading } from "./FooterStyles";
// import { Link } from "react-router-dom";
// import "./ourfooter.css";

// const Footer = () => {
//   return (
//     <Box>
//       <Container>
//         <Row>
//           <Column>
//             <Heading>About Us</Heading>
//             <Link className="link" to="/">
//               <h6>HOME</h6>
//             </Link>
//             <Link className="link" to="/ourhome">
//               <h6>BLOGS</h6>
//             </Link>
//             <Link className="link" to="/about">
//               <h6>ABOUT</h6>
//             </Link>
//           </Column>
//           <Column>
//             <Heading>Services</Heading>
//             <Link className="link" to="/ask">
//               <h6>ASK</h6>
//             </Link>
//             <Link className="link" to="/docs">
//               <h6>DOCUMENTS</h6>
//             </Link>
//             <Link className="link" to="/hostel">
//               <h6>HOSTELS</h6>
//             </Link>
//           </Column>
//           <Column>
//             <Heading>Contact Us</Heading>
//             <Link className="link" to="/">
//               <h6>LAHORE</h6>
//             </Link>
//             <Link className="link" to="/">
//               <h6>KARACHI</h6>
//             </Link>
//             <Link className="link" to="/">
//               <h6>QUETTA</h6>
//             </Link>
//           </Column>
//           <Column>
//             <Heading>Social Media</Heading>
//             <Link className="link" to="/">
//               <h6>FACEBOOK</h6>
//             </Link>
//             <Link className="link" to="/">
//               INSTAGRAM
//             </Link>
//             <Link className="link" to="/">
//               <h6>WHATSAPP</h6>
//             </Link>
//             <Link className="link" to="/">
//               <h6>YOUTUBE</h6>
//             </Link>
//           </Column>
//         </Row>
//       </Container>
//     </Box>
//   );
// };
// export default Footer;
import React from "react";
import { Link } from "react-router-dom";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter
      style={{ backgroundColor: " rgb(196 226 255)" }}
      className="text-center text-lg-start text-muted"
    >
      <section
        className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
        style={{ backgroundColor: " rgb(196 226 255)" }}
      >
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us:</span>
        </div>
      </section>

      <section className="" style={{ backgroundColor: " rgb(196 226 255)" }}>
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                AskBUETK
              </h6>
              <p>Our aim is to help you in your university journey.</p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <Link className="link" to="/">
                  HOME
                </Link>
              </p>

              <p>
                <Link className="link" to="/ourhome">
                  BLOGS
                </Link>
              </p>
              <p>
                <Link className="link" to="/about">
                  ABOUT
                </Link>
              </p>
              <p>
                <Link className="link" to="/docs">
                  DOCUMENTS
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link className="link" to="/ask">
                  ASK
                </Link>
              </p>
              <p>
                <Link className="link" to="/hostel">
                  HOSTELS
                </Link>
              </p>
              <p>
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </p>
              <p>
                <Link className="link" to="/hostelcontact">
                  HOSTEL CONTACT
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Balochistan University of Engineering & Technology, Khuzdar
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                nasir@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: "white" }}>
        © 2023 Copyright:
        <a className="text-reset fw-bold">AskBUETK</a>
      </div>
    </MDBFooter>
  );
}
