import React from "react";

const CountrysJob = () => {
  return (
    <div className="countrys-job-summary ps-3 py-3 text-white">
      <h4 className="title">Country wise vacancies</h4>
      <ul className="countrys-list">
        <li>
          <span href="jobsearch.asp?locationId=276">Saudi Arabia (237)</span>
        </li>

        <li>
          <span href="jobsearch.asp?locationId=207">Kuwait (100)</span>
        </li>

        <li>
          <span href="jobsearch.asp?locationId=252">Oman (100)</span>
        </li>

        <li>
          <span href="jobsearch.asp?locationId=304">Turkey (71)</span>
        </li>

        <li>
          <span href="jobsearch.asp?locationId=310">United Arab Emirates (47)</span>
        </li>

        <li>
          <span href="jobsearch.asp?locationId=202">Japan (26)</span>
        </li>

        <li>
          <span href="locationwisejobs.asp">All Countries</span>
        </li>
      </ul>
      <div>
        <button className="submit-biodata d-flex flex-row bg-warning px-2 py-1 rounded border-0">
          <img src="https://bdesh.bdjobs.com/images/submit_biodata.png" alt="Submit Biodata" />
          <span className="text-decoration-none ms-1 fw-semibold">Submit your <br />
          Biodata</span>
        </button>
      </div>

      <div>
        <button className="bg-white mt-1 px-2 py-1 rounded border-0">
          <img src="https://bdesh.bdjobs.com/images/bdesh_jatra.svg" alt="logo of bdeshjaatra" /> <br />
          <a className="text-decoration-none">অভিবাসন বিষয়ক তথ্য</a>
        </button>
      </div>
    </div>
  );
};

export default CountrysJob;
