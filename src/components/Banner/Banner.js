import React from "react";
import CarouselTop from "../CarouselTop/CarouselTop";
import CountrysJob from "../CountrysJob/CountrysJob";
import JobSearch from "../JobSearch/JobSearch";

const Banner = () => {
  return (
    <div className="d-flex flex-row">
      <div className="col-sm-6 col-md-3 col-md-pull-6 left-col">
        <JobSearch></JobSearch>
      </div>
      <div className="col-sm-12 col-md-6 col-md-push-3 mid-col">
        <CarouselTop></CarouselTop>
      </div>
      <div className="col-sm-6 col-md-3 right-col">
        <CountrysJob></CountrysJob>
      </div>
    </div>
  );
};

export default Banner;
