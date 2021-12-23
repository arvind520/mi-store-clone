import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Slider = ({ start }) => {
  return (
    <>
      <Carousel fade>
        {start.map((ele, index) => {
          return (
            <Carousel.Item>
              <img className="d-block w-100" src={ele} alt="First slide" />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default Slider;
