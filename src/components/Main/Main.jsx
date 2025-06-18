import React from "react";

import Presentacion from "./components/presentacion/Presentacion.jsx";
import Proyectos from "./components/proyectos/Proyectos.jsx";
import Experiencia from "./components/experiencia/Experiencia.jsx";

export default function Main() {
  return (
    <main>
      <Presentacion></Presentacion>
      <Proyectos></Proyectos>
      <Experiencia></Experiencia>
    </main>
  );
}
