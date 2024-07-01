import React from "react";
import about_img from "../../assets/education.png";
import play from "../../assets/play-icon.png";
import "./About.css";

const About = ({setPlayState}) => {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play} alt="" className="play-icon" onClick={()=>{setPlayState(true)}} />
      </div>
      <div className="about-right">
        <h3>ABOUT INSTITUTE</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          nulla cum deleniti incidunt quo, vel iste autem doloribus id?
          Laboriosam debitis nulla quo aliquam blanditiis molestiae ea
          recusandae id nobis!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quasi!
          Quo quaerat repudiandae nemo. Quibusdam ea nemo nam saepe, obcaecati
          blanditiis aspernatur quidem numquam, aliquam amet eum ut provident
          fugiat?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          facere necessitatibus esse non corrupti, odit numquam cum accusantium
          quae fugit tenetur? Vero nemo facilis vitae debitis aliquam sit,
          reiciendis fuga!
        </p>
      </div>
    </div>
  );
};

export default About;
