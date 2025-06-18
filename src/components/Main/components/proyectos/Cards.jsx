import React, { useEffect } from "react";
import {
  IndicadorIcono,
  HtmlIcono,
  BoostrapIcono,
  CssIcono,
  JavaScriptIcono,
  ArrowIcono,
} from "#icons";
import style from "./Cards.module.css";
import Link from "#link";
import { use } from "react";

// Mapea el nombre de la tecnología al componente de icono
const iconosTecnologia = {
  javascript: <JavaScriptIcono fill="orange" className={style.iconoCard} />,
  css: <CssIcono fill="rgb(187 63 255)" className={style.iconoCard} />,
  html: <HtmlIcono fill="#EE7901" className={style.iconoCard} />,
  bootstrap: <BoostrapIcono fill="#7611F6" className={style.iconoCard} />,
};

function Cards({ proyecto }) {
  console.log(proyecto.tecnologias);
  return (
    <Link className={style.card} href={proyecto.href}>
      <div className={style.goCorner} href="#">
        <ArrowIcono className={style.goArrow}></ArrowIcono>
      </div>
      <h2>{proyecto.title}</h2>
      <div className={style.cuerpoCard}>
        <img src={proyecto.img} alt="" className={style.imagenCard} />
        <div className={style.iconos}>
          {proyecto.tecnologias.map((tec, idx) =>
            iconosTecnologia[tec]
              ? React.cloneElement(iconosTecnologia[tec], { key: idx })
              : null
          )}
          <div className={style.iconoIndicadorContainer}>
            <IndicadorIcono className={style.iconoCardIndicator} />
          </div>
        </div>
        <div className={style.desplegable}>
          <p className={style.small}>{proyecto.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default Cards;
