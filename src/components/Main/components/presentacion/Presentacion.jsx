import React from "react";
import logo from "#assets/logo.png";
import style from "./Presentacion.module.css";
import Button from "#button";
import Link from "#link";

import { GitHubIcono } from "#icons";

export default function Header() {
  return (
    <div className="secciones-portfolio">
      <section>
        <div className={style.presentacion}>
          <div>
            <h1 className={style.h1Cabecera}>Alex JONATHAN</h1>
            <h2 className={style.h2Cabecera}>Rios Pinto</h2>
          </div>
          <img className={style.logo} src={logo} alt="" />
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem neque
          aut animi facilis molestiae veritatis accusamus distinctio ad vitae
          quo quisquam laborum a autem sunt et quasi, adipisci, corrupti illo.
        </p>
      </section>
      <section className={style.medios}>
        <Link href="https://github.com/alexito1999">
          <GitHubIcono className={style.icono}></GitHubIcono>
        </Link>
        <div className={style.botonDescarga}>
          <Button content="Descargar curriculum!"></Button>
        </div>
      </section>
    </div>
  );
}
