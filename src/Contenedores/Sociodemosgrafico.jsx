/** @format */

import React from "react";
import Genero from "../Componentes/Graficos/Genero";
import NivelSocioeconomico from "../Componentes/Graficos/NivelSocioeconomico";
import RangoEtario from "../Componentes/Graficos/RangoEtario";
import RangoEtario2 from "../Componentes/Graficos/RangoEtario2";
import "./index.css";

export default function Sociodemosgrafico() {
  return (
    <div className="contenedor-sociodemograficos">
      <div className="graficos-sociodemograficos">
        <div>
          <div className="subtitulo">Género</div>
          <Genero />
        </div>
        <div>
        <div className="subtitulo">Cantidad Rango Etario</div>
          <RangoEtario />
        </div>
      </div>
      <div className="graficos-sociodemograficos">
        <div>
        <div className="subtitulo">Niveles socioeconómicos</div>
          <NivelSocioeconomico />
        </div>
        <div>
        <div className="subtitulo">Porcentaje Rango Etario</div>
          <RangoEtario2 />
        </div>
      </div>
    </div>
  );
}
