import React from "react";
import { Container } from "react-bootstrap";
import { FaUserFriends, FaWrench, FaGlobeEurope } from "react-icons/fa";

const InfoSummary = () => {
  return (
    <Container>
      <div className=" d-flex flex-row py-5">
        <div className="col-xs-4 mx-auto">
          <div className="d-flex flex-row">
            <FaUserFriends size={56} style={{color: "#FFF"}} className="my-auto rounded-circle bg-danger p-2" />

            <div className="ms-3">
              <h5>No. of vacancies</h5>
              <h5 className="text-danger fw-bold">597</h5>
            </div>
          </div>
        </div>
        <div className="col-xs-4 mx-auto">
          <div className="d-flex flex-row">
            <FaWrench size={56} style={{color: "#FFF"}} className="my-auto rounded-circle bg-success p-2 " />

            <div className="ms-3">
              <h5>No. of jobs</h5>
              <h5 className="text-success fw-bold">31</h5>
            </div>
          </div>
        </div>
        <div className="col-xs-4 mx-auto">
          <div className="d-flex flex-row">
            <FaGlobeEurope size={56} style={{color: "#FFF"}} className="my-auto rounded-circle bg-warning p-2" />

            <div className="ms-3">
              <h5>No. of countries</h5>
              <h5 className="text-warning fw-bold">14</h5>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default InfoSummary;
