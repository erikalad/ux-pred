import React from 'react'
import { Bar } from '@ant-design/plots';
import './graficos.css'

export default function ClimaSocialIndicadores() {
  const data = [
    {
      voto: 'Inseguridad',
      year: '100 %',
      value: 908703,
    },
    {
      voto: 'Seguridad',
      year: '100 %',
      value: 405271,
    },
    {
      voto: 'No Sabe',
      year: '100 %',
      value: 128450,
    },
  
  ];
  const config = {
    data,
    xField: 'value',
    yField: 'year',
    seriesField: 'voto',
    isPercent: true,
    isStack: true,
    xAxis: false,
    label: {
      position: 'middle',
      content: (item) => {
        return item.voto; // Cambiado para mostrar el contenido de la propiedad voto
      },
      style: {
        fill: '#fff',
      },
    },

    yAxis: {
      label: {
        formatter: (text) => `${text}`, // Ajustar el formato de las etiquetas del eje y
      },
    },
  };
  const dataPrevis = [
    {
      voto: 'Incertidumbre',
      year: '100 %',
      value: 678596,
    },
    {
      voto: 'Previsibilidad',
      year: '100 %',
      value: 583731,
    },
    {
      voto: 'No Sabe',
      year: '100 %',
      value: 180097,
    },
  
  ];
  const configPrevis = {
    data:dataPrevis,
    xField: 'value',
    yField: 'year',
    seriesField: 'voto',
    isPercent: true,
    isStack: true,
    xAxis: false,
    label: {
      position: 'middle',
      content: (item) => {
        return item.voto; // Cambiado para mostrar el contenido de la propiedad voto
      },
      style: {
        fill: '#fff',
      },
    },

    yAxis: {
      label: {
        formatter: (text) => `${text}`, // Ajustar el formato de las etiquetas del eje y
      },
    },
  };



  const dataTrans = [
    {
      voto: 'Corrupción',
      year: '100 %',
      value: 843474,
    },
    {
      voto: 'Justicia',
      year: '100 %',
      value: 441233,
    },
    {
      voto: 'No Sabe',
      year: '100 %',
      value: 157517,
    },
  
  ];
  const configTrans = {
    data: dataTrans,
    xField: 'value',
    yField: 'year',
    seriesField: 'voto',
    isPercent: true,
    isStack: true,
    xAxis: false,
    label: {
      position: 'middle',
      content: (item) => {
        return item.voto; // Cambiado para mostrar el contenido de la propiedad voto
      },
      style: {
        fill: '#fff',
      },
    },

    yAxis: {
      label: {
        formatter: (text) => `${text}`, // Ajustar el formato de las etiquetas del eje y
      },
    },
  };



  const dataOrden = [
    {
      voto: 'Desorden',
      year: '100 %',
      value: 639373,
    },
    {
      voto: 'Orden',
      year: '100 %',
      value: 573742,
    },
    {
      voto: 'No Sabe',
      year: '100 %',
      value: 175309,
    },
  
  ];
  const configOrden = {
    data:dataOrden,
    xField: 'value',
    yField: 'year',
    seriesField: 'voto',
    isPercent: true,
    isStack: true,
    xAxis: false,
    label: {
      position: 'middle',
      content: (item) => {
        return item.voto; // Cambiado para mostrar el contenido de la propiedad voto
      },
      style: {
        fill: '#fff',
      },
    },

    yAxis: {
      label: {
        formatter: (text) => `${text}`, // Ajustar el formato de las etiquetas del eje y
      },
    },
  };



  const dataEstab = [
    {
      voto: 'Inestabilidad',
      year: '100 %',
      value: 661400,
    },
    {
      voto: 'Estabilidad',
      year: '100 %',
      value: 614452,
    },
    {
      voto: 'No Sabe',
      year: '100 %',
      value: 166572,
    },
  
  ];
  const configEstab = {
    data: dataEstab,
    xField: 'value',
    yField: 'year',
    seriesField: 'voto',
    isPercent: true,
    isStack: true,
    xAxis: false,
    label: {
      position: 'middle',
      content: (item) => {
        return item.voto; // Cambiado para mostrar el contenido de la propiedad voto
      },
      style: {
        fill: '#fff',
      },
    },

    yAxis: {
      label: {
        formatter: (text) => `${text}`, // Ajustar el formato de las etiquetas del eje y
      },
    },
  };


  const dataCont = [
    {
      voto: 'Continuidad',
      year: '100 %',
      value: 739778,
    },
    {
      voto: 'Cambio',
      year: '100 %',
      value: 553057,
    },
    {
      voto: 'No Sabe',
      year: '100 %',
      value: 149589,
    },
  
  ];
  const configCont = {
    data:dataCont,
    xField: 'value',
    yField: 'year',
    seriesField: 'voto',
    isPercent: true,
    isStack: true,
    xAxis: false,
    label: {
      position: 'middle',
      content: (item) => {
        return item.voto; // Cambiado para mostrar el contenido de la propiedad voto
      },
      style: {
        fill: '#fff',
      },
    },

    yAxis: {
      label: {
        formatter: (text) => `${text}`, // Ajustar el formato de las etiquetas del eje y
      },
    },
  };
  return (<div className='contenedor-climasocial'>
    <div className='bar-climasocial '>
    <div className="subtitulo-preocupaciones">Seguridad</div>
  <Bar {...config} style={{height:150, marginBottom:'2rem'}}/>
  <div className="subtitulo-preocupaciones">Previsibilidad</div>
  <Bar {...configPrevis} style={{height:150, marginBottom:'2rem'}}/>
  <div className="subtitulo-preocupaciones">Transparencia</div>
  <Bar {...configTrans} style={{height:150, marginBottom:'2rem'}}/>
  </div>
  <div className='bar-climasocial'>
  <div className="subtitulo-preocupaciones">Orden</div>
  <Bar {...configOrden} style={{height:150, marginBottom:'2rem'}}/>
  <div className="subtitulo-preocupaciones">Estabilidad</div>
  <Bar {...configEstab} style={{height:150, marginBottom:'2rem'}}/>
  <div className="subtitulo-preocupaciones">Continuidad</div>
  <Bar {...configCont} style={{height:150, marginBottom:'2rem'}}/>
  </div>
  </div>
  );
}
