import React from "react";
import "./ArtSection.css";
import first from "./first-art-image.png";

export default function ArtSection() {
  return (
    <div className="ArtSection container-fluid">
      <div className="row mt-5 mb-5">
        <div className="col-md-6 art-first-col">
          <h2 className="fw-bold">Art in the collection</h2>
          <p>
            Browse a curated selection of art around the world, including museum
            exhibitions, gallery openings, upcoming and many more
          </p>
        </div>
        <div className="col-md-6">
          <input
            class="input"
            type="search"
            placeholder="Search"
            autoFocus="on"
          ></input>
        </div>
      </div>
      <div className="row mb-5 art-div">
        <div className="col-md-4">
          <div className="art-blob">
            <img src={first} className="img-fluid" alt="artimage"></img>
            <h4>Plastic Hears Sculpture</h4>
            <p className="art-date">
              11- 12 November, 2021
              <br />
              Galeri Salihara, Indonesia
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="art-blob">
            <img src={first} className="img-fluid" alt="artimage"></img>
            <h4>Plastic Hears Sculpture</h4>
            <p className="art-date">
              11- 12 November, 2021
              <br />
              Galeri Salihara, Indonesia
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="art-blob">
            <img src={first} className="img-fluid" alt="artimage"></img>
            <h4>Plastic Hears Sculpture</h4>
            <p className="art-date">
              11- 12 November, 2021
              <br />
              Galeri Salihara, Indonesia
            </p>
          </div>
        </div>
      </div>
      <div className="row mb-5 art-second-row">
        <div className="col-md-4">
          <div className="art-blob">
            <img src={first} className="img-fluid" alt="artimage"></img>
            <h4>Plastic Hears Sculpture</h4>
            <p className="art-date">
              11- 12 November, 2021
              <br />
              Galeri Salihara, Indonesia
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="art-blob">
            <img src={first} className="img-fluid" alt="artimage"></img>
            <h4>Plastic Hears Sculpture</h4>
            <p className="art-date">
              11- 12 November, 2021
              <br />
              Galeri Salihara, Indonesia
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="art-blob">
            <img src={first} className="img-fluid" alt="artimage"></img>
            <h4>Plastic Hears Sculpture</h4>
            <p className="art-date">
              11- 12 November, 2021
              <br />
              Galeri Salihara, Indonesia
            </p>
          </div>
        </div>
      </div>

      <button className="art-button mb-5 mx-auto d-block">
        Explore more <i class="fa-regular fa-arrow-right"></i>
      </button>
    </div>
  );
}
