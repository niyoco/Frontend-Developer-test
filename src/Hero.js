import React from "react";
import "./hero.css";
import image from "./hero-image.png";
import vector from "./Vector-one.png";

export default function Hero() {
  return (
    <div className="hero container-fluid ">
      <div className="row pt-5 mb-5  d-none d-md-flex ">
        <div className="col-md-6 first-col">
          <h1 className="fw-bold">
            Discover amazing art around the
            <span> world</span>{" "}
          </h1>
          <p className="pt-4">
            Browse a curated selection of art around the world, <br /> including
            museum exhibitions, gallery openings, <br /> upcoming and many more
          </p>

          <button className="button mt-4">Explore arts</button>
        </div>
        <div className="col-md-6 mx-auto d-block second-col">
          <img
            className="img-fluid hero-image mx-auto d-block"
            src={image}
            alt={image}
            width={100}
          ></img>
          <div className="vector-div">
            <img
              className="img-fluid vector-one"
              src={vector}
              alt={vector}
              width={106.76}
              height={100.37}
            ></img>
          </div>
        </div>
      </div>
      <div className="mobile d-block d-md-none mx-auto">
        <h1 className="fw-bold mb-5 mt-3">
          Discover amazing art around the
          <span> world</span>{" "}
        </h1>
        <img
          className="img-fluid hero-image mx-auto d-block"
          src={image}
          alt={image}
          width={100}
        ></img>
        <p className="pt-5 text-center">
          Browse a curated selection of art around the world, including museum
          exhibitions, gallery openings, upcoming and many more
        </p>
        <button className="button mt-4 d-block mx-auto">Explore arts</button>
      </div>
    </div>
  );
}
