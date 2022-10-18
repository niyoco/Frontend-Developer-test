import React from "react";

import "./hero.css";
import image from "./hero-image.png";

export default function Hero() {
  return (
    <div className="hero container-fluid ">
      <nav class="navbar navbar-expand-lg bg-light fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-auto">
              <a class="nav-link active" aria-current="page" href="#">
                Events
              </a>
              <a class="nav-link" href="#">
                Museum
              </a>
              <a class="nav-link" href="#">
                Arts
              </a>
              <a class="nav-link" href="#">
                Gallaries
              </a>
              <a class="nav-link" href="#">
                Login
              </a>
              <a class="nav-link" href="#">
                Explore arts
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="row pt-5 mb-5  d-none d-md-flex hero-section">
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
