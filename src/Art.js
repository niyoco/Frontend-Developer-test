import React from "react";
import first from "./first-art-image.png";

export default function Art() {
  return (
    <div className="row art-details">
      <div className="col-md-6">
        <img width={400} src={first} className="img-fluid" alt="img"></img>
      </div>
      <div>
        <h3></h3>
        <p></p>
      </div>
    </div>
  );
}
