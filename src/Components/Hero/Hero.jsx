import React from "react";
import dark_arrow from '../../assets/dark-arrow.png'
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero container" id="hero">
      <div className="hero-text">
        <h1>We ensure better education for a better career</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque maiores
          expedita quis et amet porro vero iusto hic delectus itaque. Eum
          voluptatibus nemo harum nulla. Maiores ipsa aut adipisci ea!
        </p>
        <button className="btn">Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  );
};

export default Hero;
