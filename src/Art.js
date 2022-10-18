import React from "react";
import first from "./first-art-image.png";

export default function Art(props) {
  return (
    <div className="art-blob">
      <img src={first} className="img-fluid" alt="artimage"></img>
      <h4>{props.data}</h4>
      <p className="art-date">{props.data.artist_display}</p>
    </div>
  );
}
