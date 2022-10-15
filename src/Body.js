import React from "react";

export default function Body() {
  return (
    <div className="body">
      <div className="row">
        <div className="col-6">
          <h1>Discover amazing art around the world</h1>
          <p>
            Browse a curated selection of art around the world, including museum
            exhibitions, gallery openings, upcoming and many more
          </p>
          <button>Explore arts</button>
        </div>
        <div className="col-6 mx-auto d-block">
          <div className="body-blob mx-auto d-block">
            <img src="./src/body-image.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
