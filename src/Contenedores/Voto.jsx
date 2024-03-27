import React from 'react'
import TipoVoto from '../Componentes/Graficos/TipoVoto'
import IntPolitico from '../Componentes/Graficos/IntPolitico'
import PosicionAnteGob from '../Componentes/Graficos/PosicionAnteGob'
import ProbabilidadVoto from '../Componentes/Graficos/ProbabilidadVoto'
import AtributoPolitico from '../Componentes/Graficos/AtributoPolitico'
import './index.css'

export default function Voto() {
  return (
    
    <div>
          <div className="contenedor-sociodemograficos">
      <div className="graficos-sociodemograficos">
        <div>
          <div className="subtitulo">Tipo de voto</div>
          <TipoVoto/>
        </div>
        <div>
          <div className="subtitulo">Interés político</div>
          <IntPolitico/>
        </div>
        <div>
        <div className="subtitulo">Posición ante el gobierno</div>
         <PosicionAnteGob/>
        </div>
      </div>
      <div className="graficos-sociodemograficos">
        <div>
        <div className="subtitulo">Probabilidad de voto</div>
        <ProbabilidadVoto/>
        </div>
        <div>
        <div className="subtitulo">Atributos Políticos</div>
         <AtributoPolitico/>
        </div>
      </div>
    </div>
  
    </div>
  )
}
