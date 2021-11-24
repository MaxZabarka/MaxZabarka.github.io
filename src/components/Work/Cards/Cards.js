import React from "react";
import Card from "./Card/Card";
import "./Cards.scss";
import sonicImage from "./Images/sonic.png";
import portfolioImage from "./Images/portfolio.png";
import cafeImage from "./Images/cafe.jpeg";

const Cards = () => {
  return (
    <div className="Cards">
      <div className="grid">
        <Card
          description="An artificial intellegence model that can sucessfully beat the first few levels of Sonic on the Sega Genesis "
          title="Sonic AI"
          darkness={0.0}
          image={sonicImage}
          technologies={["python"]}
        >
          <a target="_blank" rel="noreferrer" href="https://github.com/MaxZabarka/sonic-ai">GitHub</a>
        </Card>
        <Card
          title="My Portfolio Website"
          technologies={["Web", "React"]}
          darkness={0.6}
          image={portfolioImage}
          description="A high performance and responsive website made using React to create an enriching and animated user experience"
        >
          <a target="_blank" rel="noreferrer" href="/">Visit Website</a>
          <a target="_blank" rel="noreferrer" href="https://github.com/MaxZabarka/portfolio-3">GitHub</a>
        </Card>

        <Card
          title="Architectural 3D Scenes"
          technologies={["3D", "Blender"]}
          description="A collection of 3D scenes I created for a client working on a short film."
          darkness={0.0}
          image={cafeImage}
        >
          <a target="_blank" rel="noreferrer" href="/">Visit Website</a>
          <a target="_blank" rel="noreferrer" href="/">Explore</a>
        </Card>

        <Card
          title="Photography"
          technologies={["Photography"]}
          description="My photography portfolio"
        >
          <a target="_blank" rel="noreferrer" href="/">Explore</a>
        </Card>
        <Card
          title="PomoMagic"
          technologies={["Web", "React", "Bootstrap"]}
          description="A lightweight, interactive and customizable tomato timer website"
        >
          <a target="_blank" rel="noreferrer" href="https://maxzabarka.github.io/tomato-timer/">Visit Website</a>
          <a target="_blank" rel="noreferrer" href="https://github.com/MaxZabarka/tomato-timer">Github</a>
        </Card>

        <Card
          title="URL Shortener"
          technologies={["Web", "NodeJS"]}
          description="A convienent URL shortener built using NodeJS, Express, and mySQL"
        >
          <a target="_blank" rel="noreferrer" href="/">Visit Website</a>
          <a target="_blank" rel="noreferrer" href="https://github.com/MaxZabarka/url-shortener">GitHub</a>
        </Card>
        <Card
          title="Rebbit"
          technologies={["Web", "NodeJS"]}
          description="A fullstack social media clone made with MongoDB, Express, and Node"
        >
          <a target="_blank" rel="noreferrer" href="/">Visit Website</a>
          <a target="_blank" rel="noreferrer" href="/">GitHub</a>
        </Card>
        <Card
          title="Quote Generator"
          technologies={["Web", "NodeJS"]}
          description="A stylish and lightweight meaningful quote generator built in vanilla JavaScript and CSS"
        >
          <a target="_blank" rel="noreferrer" href="https://maxzabarka.github.io/random-quote-generator/">Visit Website</a>
          <a target="_blank" rel="noreferrer" href="https://github.com/MaxZabarka/random-quote-generator">GitHub</a>

        </Card>
      </div>
    </div>
  );
};

export default Cards;
