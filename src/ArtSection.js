import React from "react";
import "./ArtSection.css";

export default function ArtSection() {
  return (
    <div className="ArtSection container-fluid">
      <div className="row mt-5 mb-5">
        <div className="col-md-6 art-first-col">
          <h2>Art in the collection</h2>
          <p>
            Browse a curated selection of art around the world, including <br />{" "}
            museum exhibitions, gallery openings, upcoming and many <br /> more
          </p>
        </div>
        <div className="col-md-6">
          <input
            class="input"
            type="search"
            placeholder="Search"
            autoFocus="on"
          >
            <i class="fa-light fa-magnifying-glass"></i>
          </input>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
            <div className="art-blob">
                <img className="img-fluid" alt="artimage">
                </img>

            </div>

        </div>

      </div>
    </div>
  );
}
