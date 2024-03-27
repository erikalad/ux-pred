/** @format */

import React from "react";
import { Button, Collapse, Progress, Select, Statistic, Tooltip } from "antd";
import "./index.css";
import {AiOutlineClear} from 'react-icons/ai'

export default function Filtros() {
  return (
    <div className="contenedor-filtros">
      <div className="columna-filtros-1">
      <Collapse
      className='colapse-filtros'
        size="small"
        items={[
          {
            key: "1",
            label: "FILTROS PREDICTIVOS Y CLIMA SOCIAL",
            children: (
              <div className="filtros-selectores">
              <div className="bloque-filtros">
                  <div><div className="titulo-boton">FILTROS POLÍTICOS</div> <Tooltip title='Eliminar filtros'><Button className="botones-app" shape="circle" icon={<AiOutlineClear/>} type="primary"/></Tooltip></div> 
                  <div className="contenedor-filtros-selectores"> 
                  <div className="selector-filtro-titulo">
                    <div>Coalición</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>

                  <div className="selector-filtro-titulo">
                    <div>Probabilidad de voto</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>

                  <div className="selector-filtro-titulo">
                    <div>Voto duro / Voto blanco</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>

                  <div className="selector-filtro-titulo">
                    <div>Politizados / Despolitizados</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>

                  <div className="selector-filtro-titulo">
                    <div>Posición ante el gobierno nacional</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>

                  <div className="selector-filtro-titulo">
                    <div>Posición ante el gobierno estatal</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>

                  <div className="selector-filtro-titulo">
                    <div>Posición ante el gobierno local</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>

                  <div className="selector-filtro-titulo">
                    <div>Preocupaciones general</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>

                  <div className="selector-filtro-titulo">
                    <div>Preocupaciones locales</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>

                  </div>
                </div>

                <div className="bloque-filtros">
                <div>SOCIODEMOGRÁFICOS</div>
                  <div className="contenedor-filtros-selectores"> 
                 
                  <div className="selector-filtro-titulo">
                    <div>Nivel socioeconómico</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Género</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Rango etario</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  
                  </div>
                </div>

                <div className="bloque-filtros">
                <div>CLIMA SOCIAL</div>
                  <div className="contenedor-filtros-selectores"> 
                 
                  <div className="selector-filtro-titulo">
                    <div>Emociones</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Atributos políticos</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Estabilidad</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Orden</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Previsibilidad</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Transparencia</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Seguridad</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Continuidad</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  
                  </div>
                </div>

                
                <div className="bloque-filtros">
                <div>TERRITORIALES</div>
                  <div className="contenedor-filtros-selectores"> 
                 
                  <div className="selector-filtro-titulo">
                    <div>Sección</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Manzana</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>       
                  
                  </div>
                </div>
              </div>
            ),
          },
        ]}
      />
      <Collapse
       className='colapse-filtros'
        size="small"
        items={[
          {
            key: "2",
            label: "FILTROS POBLACIONALES",
            children: (
              <div className="filtros-selectores">
              <div className="bloque-filtros">
              <div><div className="titulo-boton">CATEGORÍAS</div> <Tooltip title='Eliminar filtros'><Button shape="circle" className="botones-app" icon={<AiOutlineClear/>} type="primary"/></Tooltip></div> 
                  <div className="contenedor-filtros-selectores"> 
                  <div className="selector-filtro-titulo">
                    <div>Población Indígena</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>

                  <div className="selector-filtro-titulo">
                    <div>Población Afromexicana</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>

                  <div className="selector-filtro-titulo">
                    <div>Población con Discapacidad</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>

                  <div className="selector-filtro-titulo">
                    <div>Religión católica</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>

                  <div className="selector-filtro-titulo">
                    <div>Protestantes y evangélicos</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>

                  <div className="selector-filtro-titulo">
                    <div>Otras religiones</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>

                  <div className="selector-filtro-titulo">
                    <div>Analfabeta de 8 a 14 años</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>

                  <div className="selector-filtro-titulo">
                    <div>Analfabeta de 15 o más años</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>

                  <div className="selector-filtro-titulo">
                    <div>Sin escolaridad</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>

                  <div className="selector-filtro-titulo">
                    <div>Primaria incompleta</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>

                  <div className="selector-filtro-titulo">
                    <div>Primaria completa</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>

                  <div className="selector-filtro-titulo">
                    <div>Secundaria incompleta</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Secundaria completa</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Educación posbásica</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Económicamente activa</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Económicamente no activa</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Ocupada</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Desocupada</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Con servicios de salud</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Sin servicios de salud</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Referencia mujer</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Referencia hombre</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                </div>
                </div>

             </div>
            ),
          },
        ]}
      />
      <Collapse
       className='colapse-filtros'
        size="small"
        items={[
          {
            key: "3",
            label: "FILTROS DE INFRAESTRUCTURA Y BIENES MATERIALES",
            children: (
              <div className="filtros-selectores">
              <div className="bloque-filtros">
              <div><div className="titulo-boton">INFRAESTRUCTURA</div> <Tooltip title='Eliminar filtros'><Button shape="circle" icon={<AiOutlineClear/>} type="primary" className="botones-app"/></Tooltip></div> 
                  <div className="contenedor-filtros-selectores"> 
                  <div className="selector-filtro-titulo">
                    <div>Viviendas precarias</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>

                  <div className="selector-filtro-titulo">
                    <div>Viviendas con servicios</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>

                  <div className="selector-filtro-titulo">
                    <div>Zonas pavimentadas</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>

                  <div className="selector-filtro-titulo">
                    <div>Rampa silla de ruedas</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>

                  <div className="selector-filtro-titulo">
                    <div>Con banqueta</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>

                  <div className="selector-filtro-titulo">
                    <div>Con guamición</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>

                  <div className="selector-filtro-titulo">
                    <div>Con ciclovía</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>

                  <div className="selector-filtro-titulo">
                    <div>Con alumbrado público</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>

                  <div className="selector-filtro-titulo">
                    <div>Estaciones de bicicletas</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>

                  <div className="selector-filtro-titulo">
                    <div>Alcantarilla</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>

                  <div className="selector-filtro-titulo">
                    <div>Transporte colectivo</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>

                  <div className="selector-filtro-titulo">
                    <div>Comercio ambulante</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                </div>
                </div>

                <div className="bloque-filtros">
                <div>BIENES MATERIALES</div>
                  <div className="contenedor-filtros-selectores"> 
                 
                  <div className="selector-filtro-titulo">
                    <div>Población sin movilidad propia</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Población sin bienes materiales</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Con refrigerador</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Con lavadora</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Con microondas</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Con bicicleta</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Con automovil</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Con motocicleta</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Con radio</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Con televisor</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Con computadoras</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Con celular</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Con teléfono fijo</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Con internet</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Con televisión paga</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Con servicio de películas</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  <div className="selector-filtro-titulo">
                    <div>Con videojuegos</div>
                    <Select
                      className="selector-filtros-predictivos"
                      value="Todas">
                      <Select.Option value="Aplica">Aplica</Select.Option>
                      <Select.Option value="No Aplica">No Aplica</Select.Option>
                    </Select>
                  </div>
                  </div>
                </div>
              </div>
            ),
          },
        ]}
      />
      </div>
      <div className="columna-filtros-2">
      <Statistic value={1112893} className="custom-statistic"/>
      <div >Dispositivos</div>
      <Progress percent={80} strokeColor="#fa6400" trailColor="#E0E0E0"/>
      </div>
    </div>
  );
}
