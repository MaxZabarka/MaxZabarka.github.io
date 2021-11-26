import React from "react";
import Card from "./Card/Card";
import "./Cards.scss";
import sonicImage from "./Images/sonic.png";
import portfolioImage from "./Images/portfolio.png";
import cafeImage from "./Images/cafe.jpeg";
import FlipMove from "react-flip-move";

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

const CARD_DATA = [
  {
    title: "My Portfolio Website",
    tags: ["Web", "React"],
    image: portfolioImage,
    description:
      "A high performance and responsive website made using React to create an enriching and animated user experience",
  },
  {
    title: "Rebbit",
    tags: ["Web", "Express", "MongoDB"],
    description: "Clone of a certain website made with server-side rendering",
  },
  {
    title: "MaxGram",
    tags: ["Web", "React", "Express", "MongoDB"],
    description: "Clone of a certain social media made using MERN stack",
  },
  {
    title: "Architectural 3D Scenes",
    tags: ["3D"],
    description:
      "A collection of 3D scenes I created for a client working on a short film.",
    image: { cafeImage },
  },
  {
    title: "My 3D Portfolio",
    tags: ["3D"],
    description: "My 3D graphics portfolio",
    image: { cafeImage },
  },
  {
    description:
      "An artificial intellegence model that can beat the first few levels of Genisis Sonic",
    title: "Sonic AI",
    image: { sonicImage },
    tags: ["Python"],
  },
  {
    title: "PomoMagic",
    tags: ["Web", "React"],
    description:
      "A lightweight, interactive and customizable tomato timer website",
  },
  {
    title: "URL Shortener",
    tags: ["Web", "Express"],
    description:
      "A convienent URL shortener built using NodeJS, Express, and mySQL",
  },
  {
    title: "Quote Generator",
    tags: ["Web"],
    description:
      "A stylish and lightweight meaningful quote generator built with vanilla JavaScript and CSS",
  },
  {
    title: "Conways Game of Life",
    tags: ["C"],
    description: "Cellular automaton written in C with NCURSES",
  },
  {
    title: "PCB Business Cards",
    tags: ["C", "Systems"],
    description:
      "A printed circuit board with a microcontroller and LED display, doubling as a business card!",
  },
  {
    title: "C Compiler",
    tags: ["C", "Systems", "Assembly"],
    description: "My own implementation of C",
  },
  {
    title: "ZabarkaOS",
    tags: ["C", "Systems", "Assembly"],
    description: "A learning project 32-bit barebones operating system"
  }
];

const Cards = (props) => {
  return (
    <div className="Cards">
      <FlipMove className="grid">
        {CARD_DATA.map((card) => {
          let shouldRender = false;
          for (const tag of card.tags) {
            shouldRender = props.selectedTags.has(tag);
            if (props.selectedTags.has(tag) === true) {
              break;
            }
          }
          if (shouldRender) {
            return <Card key={card.title} {...card} />;
          } else {
            return null;
          }
        })}
      </FlipMove>
    </div>
  );
};

export default Cards;
