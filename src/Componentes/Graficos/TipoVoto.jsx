import React from 'react'
import { Bar } from '@ant-design/plots';

export default function TipoVoto() {
  const data = [
    {
      voto: 'Voto Blando',
      year: '100 %',
      value: 55.74,
    },
    {
      voto: 'Voto Duro',
      year: '100 %',
      value: 44.26,
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
  return <Bar {...config} style={{height:150, marginBottom:'5rem'}}/>;
}
