import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "../styles/Banner.css";

const Banner = ({ banner }) => {
  return (
    <Carousel fade>
      {banner.end.map((item, index) => (
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src={item.image}
            alt={`${index}stImage`}
          />
          <Carousel.Caption>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.source}</p>
            <u>Read more</u>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Banner;
