import React from "react";
import CarouselTop from "../CarouselTop/CarouselTop";
import CountrysJob from "../CountrysJob/CountrysJob";
import JobSearch from "../JobSearch/JobSearch";

const Banner = () => {
  return (
    <div className="d-flex flex-row bg-primary">
      <div className="left-col">
        <JobSearch></JobSearch>
      </div>
      <div className="mid-col bg-white">
        <CarouselTop></CarouselTop>
      </div>
      <div className="right-col bg-primary">
        <CountrysJob></CountrysJob>
      </div>
    </div>
  );
};

export default Banner;
