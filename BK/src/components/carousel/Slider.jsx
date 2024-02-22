import React from "react";
import { Carousel } from "react-bootstrap";
import Bookcard1 from "../bookcard/Bookcard1";
import book1 from "../assets/book7.jpg";
import book2 from "../assets/book2.avif";
import book3 from "../assets/book4.jpg";

const Slider = () => {
  return (
    <>
      <Carousel style={{ height: "70vh" , marginBottom: "40px" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="Images/s1.jpg"
            alt="First slide"
            style={{ height: "70vh", objectFit: "contains" }}
          />
          {/* <Carousel.Caption>
          <h3>First Slide</h3>
          <p>Some content for the first slide.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="Images/s2.jpg"
            alt="Second slide"
            style={{ height: "70vh", objectFit: "contains" }}
          />
          {/* <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>Some content for the second slide.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="Images/s3.jpeg"
            alt="Third slide"
            style={{ height: "70vh", objectFit: "contains" }}
          />
          {/* <Carousel.Caption>
          <h3>Third Slide</h3>
          <p>Some content for the third slide.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      <div></div>

      <div style={{ display: "flex", justifyContent: "center" , marginBottom: "20px"}}>
        <h1>
          “There is more treasure in books than in all the pirate's loot on
          Treasure Island.”
        </h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center" , marginBottom: "20px" }} >
        <h3>
          <i>― Walt Disney</i>
        </h3>
      </div>

      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          border: "4px solid black",
          padding: "10px",
        }}
      >
        <h1>Most popular books</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" , marginBottom: "50px" }}>
        <Bookcard1 />
      </div>

      <div></div>
    </>
  );
};

export default Slider;
