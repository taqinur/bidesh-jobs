import React from "react";
import { Container } from "react-bootstrap";
import { FaUserFriends, FaWrench, FaGlobeEurope } from "react-icons/fa";

const InfoSummary = () => {
  return (
    <Container>
      <div class=" d-flex flex-row">
        <div class="col-xs-4">
          <div class="info-wrap empl">
            <FaUserFriends />

            <div class="info">
              <p class="title">No. of vacancies</p>
              <p class="number">
                <a href="jobsearch.asp">597</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-xs-4">
          <div class="info-wrap post">
            <FaWrench />

            <div class="info">
              <p class="title">No. of jobs</p>
              <p class="number">
                <a href="jobsearch.asp">31</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-xs-4">
          <div class="info-wrap countries">
            <FaGlobeEurope />

            <div class="info">
              <p class="title">No. of countries</p>
              <p class="number">
                <a href="locationwisejobs.asp">14</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default InfoSummary;
