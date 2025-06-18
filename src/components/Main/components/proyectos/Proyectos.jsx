import React from "react";
import Cards from "./Cards.jsx";
import img from "#assets/captura-ajmedieval.png";
import img2 from "#assets/captura-juegoAzar.png";

const proyectos = [
  {
    href: "https://proyecto-ecommerce-vanila.netlify.app/",
    title: "Ecommerce Vanilla",
    img: img,
    description:
      "Proyecto de un ecommerce vanila con diseño responsivo y con permanencia de datos.",
    tecnologias: ["javascript", "css", "html", "bootstrap"],
  },
  {
    href: "https://dulcet-dragon-efe654.netlify.app/",
    title: "Juego elige el color Vanilla",
    img: img2,
    description:
      "Se trata de un juego en el cual tienes que eligir el color mas acertado .",
    tecnologias: ["javascript", "css", "html"],
  },
];
function Proyectos() {
  return (
    <div className="proyectos secciones-portfolio">
      <header>
        <h1>Proyectos</h1>
      </header>
      <div className="cards-container">
        {proyectos.map((proyecto, index) => (
          <Cards key={index} proyecto={proyecto}></Cards>
        ))}
      </div>
    </div>
  );
}

export default Proyectos;
