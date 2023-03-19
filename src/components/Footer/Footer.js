import React from "react";
import { CDBBox } from "cdbreact";
import { Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <Container>
      <CDBBox
        display="flex"
        flex="column"
        className="mx-auto py-5"
        style={{ width: "90%" }}
      >
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              About Us
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: "pointer" }}>
              <span>About website</span>
              <span>Terms & Conditions</span>
              <span>Feedback</span>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Job Seekers
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: "pointer" }}>
              <span>Create Account</span>
              <span>Career Counseling</span>
              <span>FAQ</span>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Employers
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: "pointer" }}>
              <span>Create Account</span>
              <span>Products/Service</span>
              <span>Post a Job</span>
              <span>FAQ</span>
            </CDBBox>
          </CDBBox>

          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Tools & Social Media
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: "pointer" }}>
              <span>Download Mobile App</span>
              <img
                src="https://bdesh.bdjobs.com/images/google-play-badge.svg
"
                alt=""
                width={"135px"}
              />
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Contact Us
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: "pointer" }}>
              <span>Have any job query ?</span>
              <div className="d-flex flex-row">
                <img
                  src="https://bdesh.bdjobs.com/images/question-icon.png"
                  alt=""
                  height={"42px"}
                />
                <div className="d-flex flex-column">
                  <p className="fw-bold">Call <br />
                  <span className="text-danger fs-5">16479</span>
                  </p>
                </div>
              </div>
            </CDBBox>
          </CDBBox>
        </CDBBox>
      </CDBBox>
    </Container>
  );
};

export default Footer;
