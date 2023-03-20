import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselTop = () => {
  return (
    <div style={{ width: "485px" }} className="m-auto">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://bdesh.bdjobs.com/images/slide-00.jpg"
            alt="Sixth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://bdesh.bdjobs.com/images/slide-01.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://bdesh.bdjobs.com/images/slide-02.jpg"
            alt="Fouth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://bdesh.bdjobs.com/images/slide-04.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://bdesh.bdjobs.com/images/slide-03.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselTop;
