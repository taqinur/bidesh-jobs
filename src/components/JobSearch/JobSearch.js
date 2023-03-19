import React from "react";
import { Button, Form } from "react-bootstrap";
import { FaMapMarkerAlt, FaGlobeEurope, FaBriefcase } from "react-icons/fa";

const JobSearch = () => {
  return (
    <div className="ms-5">
      <Form>
        <h3 class="title">Find your dream job</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <FaBriefcase />
            Write your occupation
          </Form.Label>
          <Form.Control placeholder="Driver, Electrician etc" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            <FaGlobeEurope />
            Skilled Category
          </Form.Label>
          <Form.Select>
            <option selected>Skilled Category</option>
            <option>Skilled</option>
            <option>Semi Skilled</option>
            <option>Less Skilled</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            <FaMapMarkerAlt /> Country
          </Form.Label>
          <Form.Select>
            <option value="">Select Country</option>

            <option value="276">Saudi Arabia</option>

            <option value="207">Kuwait</option>

            <option value="252">Oman</option>

            <option value="304">Turkey</option>

            <option value="310">United Arab Emirates</option>

            <option value="202">Japan</option>

            <option value="222">Malaysia</option>

            <option value="311">United Kingdom</option>

            <option value="155">Denmark</option>

            <option value="203">Jordan</option>

            <option value="299">Thailand</option>

            <option value="131">Brunei</option>

            <option value="220">Madagascar</option>

            <option value="287">South Korea</option>
          </Form.Select>
        </Form.Group>
        <Button variant="warning" type="submit">
          Search
        </Button>
      </Form>
    </div>
  );
};

export default JobSearch;
