import React from "react";
import image from "./body-image.png";
import vector from "./Vector-one.png";

export default function Body() {
  return (
    <div className="body container-fluid">
      <div className="row pt-5">
        <div className="col-md-6 first-col">
          <h1>
            Discover amazing <br /> art around the <br />
            <span>world</span>{" "}
          </h1>
          <p className="pt-4">
            Browse a curated selection of art around the world, <br /> including
            museum exhibitions, gallery openings, <br /> upcoming and many more
          </p>
          <div className="button-div pt-5">
            <div className="button-blob"></div>
            <button className="button">Explore arts</button>
          </div>
        </div>
        <div className="col-md-6 mx-auto d-block second-col">
          <div className="body-blob mx-auto d-block"></div>
          <img
            className="img-fluid body-image"
            src={image}
            alt={image}
            width={100}
          ></img>
          <div className="vector-div">
            <img
              className="vector-one"
              src={vector}
              alt={vector}
              width={208.76}
              height={95.87}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
