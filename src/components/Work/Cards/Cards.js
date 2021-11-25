import React from "react";
import Card from "./Card/Card";
import "./Cards.scss";
import sonicImage from "./Images/sonic.png";
import portfolioImage from "./Images/portfolio.png";
import cafeImage from "./Images/cafe.jpeg";

// projects
// portfolio (Web, React)
// rebbit (Web, Express)
// maxgram (Web, React, Express)
// 3d architecture (3D)
// sonic ai (Python)
// PomoMagic (Web, React)
// URL Shortener
// Quote Generator
// c cgol (Systems, C)
// pcb project (Systems, C)
// TODO: compiler (Systems, Python)
// ZabarkaOS (Systems, C, Assembly)
// Artstation

// categories
// Web
// 3D
// Systems
// React
// Express
// Python
// C
// Assembly
// MongoDB

const Cards = () => {

  return (
    <div className="Cards">
      <div className="grid">
        <Card
          title="My Portfolio Website"
          tags={["Web", "React"]}
          image={portfolioImage}
          description="A high performance and responsive website made using React to create an enriching and animated user experience"
        ></Card>

        <Card
          title="Rebbit"
          tags={["Web", "Express", "MongoDB"]}
          description="Clone of a certain website made with server-side rendering"
        ></Card>
        <Card
          title="MaxGram"
          tags={["Web", "React", "Express", "MongoDB"]}
          description="Clone of a certain social media made using MERN stack"
        ></Card>

        <Card
          title="Architectural 3D Scenes"
          tags={["3D"]}
          description="A collection of 3D scenes I created for a client working on a short film."
          image={cafeImage}
        ></Card>

        <Card
          description="An artificial intellegence model that can beat the first few levels of Sega Sonic"
          title="Sonic AI"
          image={sonicImage}
          tags={["Python"]}
        >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/MaxZabarka/sonic-ai"
          >
            GitHub
          </a>
        </Card>

        <Card
          title="PomoMagic"
          tags={["Web", "React"]}
          description="A lightweight, interactive and customizable tomato timer website"
        ></Card>

        <Card
          title="URL Shortener"
          tags={["Web", "Express"]}
          description="A convienent URL shortener built using NodeJS, Express, and mySQL"
        >
          <a target="_blank" rel="noreferrer" href="/">
            Visit Website
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/MaxZabarka/url-shortener"
          >
            GitHub
          </a>
        </Card>

        <Card
          title="Quote Generator"
          tags={["Web"]}
          description="A stylish and lightweight meaningful quote generator built with vanilla JavaScript and CSS"
        >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://maxzabarka.github.io/random-quote-generator/"
          >
            Visit Website
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/MaxZabarka/random-quote-generator"
          >
            GitHub
          </a>
        </Card>
      </div>
    </div>
  );
};

export default Cards;
