import React from "react";
import "./index.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ArtSection from "./ArtSection";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ArtSection defaultKeyword="mask" />
    </div>
  );
}
