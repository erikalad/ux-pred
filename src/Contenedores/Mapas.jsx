/** @format */

import React from "react";
import "./index.css";
import { Table } from 'antd';
import mapa1 from './../Imagenes/Mapa1.png'
import mapa2 from './../Imagenes/Mapa2.png'
import mapa3 from './../Imagenes/Mapa3.png'

export default function Mapas() {

    const columns = [
        {
          title: <span style={{ color: '#fa6400', fontSize: '18px' }}>Municipio</span>,
          dataIndex: 'Municipio',
        },
        {
          title: <span style={{ color: '#fa6400', fontSize: '18px' }}>Sección</span>,
          dataIndex: 'Sección',
          sorter: {
            compare: (a, b) => a.Sección - b.Sección,
            multiple: 3,
          },
        },
        {
          title:  <span style={{ color: '#fa6400', fontSize: '18px' }}>Manzana</span>,
          dataIndex: 'Manzana',
          sorter: {
            compare: (a, b) => a.Manzana - b.Manzana,
            multiple: 2,
          },
        },
        {
            title: <span style={{ color: '#fa6400', fontSize: '18px' }}>ID_Dispositivo</span>,
            dataIndex: 'ID_Dispositivo',
            sorter: {
              compare: (a, b) => a.ID_Dispositivo - b.ID_Dispositivo,
              multiple: 2,
            },
          },
          {
            title:  <span style={{ color: '#fa6400', fontSize: '18px' }}>Género</span>,
            dataIndex: 'Género',
          },
          {
            title:  <span style={{ color: '#fa6400', fontSize: '18px' }}>Rango Etario</span>,
            dataIndex: 'RangoEtario',
          },
          {
            title:  <span style={{ color: '#fa6400', fontSize: '18px' }}>Nivel socioeconómico</span>,
            dataIndex: 'NivelSocioeconómico',
          },
    
      ];
      const data = [
        {
          key: '1',
          Municipio: 'Iztapalapa',
          Sección: 2067,
          Manzana: 60,
          ID_Dispositivo: 70,
          Género: 'Femenino',
          RangoEtario: '27 a 42 años - Millennians',
          NivelSocioeconómico: 'C'
        },
        {
          key: '2',
          Municipio: 'Iztapalapa',
          Sección: 2067,
          Manzana: 66,
          ID_Dispositivo: 89,
          Género: 'Femenino',
          RangoEtario: '27 a 42 años - Millennians',
          NivelSocioeconómico: 'C'
        },
        {
          key: '3',
          Municipio: 'Iztapalapa',
          Sección: 2067,
          Manzana: 90,
          ID_Dispositivo: 70,
          Género: 'Femenino',
          RangoEtario: '27 a 42 años - Millennians',
          NivelSocioeconómico: 'C'
        },
        {
          key: '4',
          Municipio: 'Iztapalapa',
          Sección: 2067,
          Manzana: 99,
          ID_Dispositivo: 89,
          Género: 'Femenino',
          RangoEtario: '27 a 42 años - Millennians',
          NivelSocioeconómico: 'C'
        },
        {
            key: '5',
            Municipio: 'Iztapalapa',
            Sección: 2067,
            Manzana: 60,
            ID_Dispositivo: 70,
            Género: 'Femenino',
            RangoEtario: '27 a 42 años - Millennians',
            NivelSocioeconómico: 'C'
          },
          {
            key: '6',
            Municipio: 'Iztapalapa',
            Sección: 2067,
            Manzana: 66,
            ID_Dispositivo: 89,
            Género: 'Femenino',
            RangoEtario: '27 a 42 años - Millennians',
            NivelSocioeconómico: 'C'
          },
          {
            key: '7',
            Municipio: 'Iztapalapa',
            Sección: 2067,
            Manzana: 90,
            ID_Dispositivo: 70,
            Género: 'Femenino',
            RangoEtario: '27 a 42 años - Millennians',
            NivelSocioeconómico: 'C'
          },
          {
            key: '8',
            Municipio: 'Iztapalapa',
            Sección: 2067,
            Manzana: 99,
            ID_Dispositivo: 89,
            Género: 'Femenino',
            RangoEtario: '27 a 42 años - Millennians',
            NivelSocioeconómico: 'C'
          },
          {
            key: '9',
            Municipio: 'Iztapalapa',
            Sección: 2067,
            Manzana: 60,
            ID_Dispositivo: 70,
            Género: 'Femenino',
            RangoEtario: '27 a 42 años - Millennians',
            NivelSocioeconómico: 'C'
          },
          {
            key: '10',
            Municipio: 'Iztapalapa',
            Sección: 2067,
            Manzana: 66,
            ID_Dispositivo: 89,
            Género: 'Femenino',
            RangoEtario: '27 a 42 años - Millennians',
            NivelSocioeconómico: 'C'
          },
          {
            key: '11',
            Municipio: 'Iztapalapa',
            Sección: 2067,
            Manzana: 90,
            ID_Dispositivo: 70,
            Género: 'Femenino',
            RangoEtario: '27 a 42 años - Millennians',
            NivelSocioeconómico: 'C'
          },
          {
            key: '12',
            Municipio: 'Iztapalapa',
            Sección: 2067,
            Manzana: 99,
            ID_Dispositivo: 89,
            Género: 'Femenino',
            RangoEtario: '27 a 42 años - Millennians',
            NivelSocioeconómico: 'C'
          },
      ];


  return (
    <div className="contenedor-mapa">
      <div className="card grafico-100"><img src={mapa1}/></div>
      <div className="mapas1-2">
        <div className="titulo-mapa">
          <div>MAPA DE SECCIONES</div>
          <div className="card mapa2"><img src={mapa2}/></div>
        </div>
        <div className="titulo-mapa">
          <div>MAPA DE MANZANAS</div>
          <div className="card mapa1"><img src={mapa3}/></div>
        </div>
      </div>

      <Table columns={columns} dataSource={data} className="card grafico-100 tabla" pagination={false} scroll={{
      y: 410,
    }}/>
    </div>
  );
}
