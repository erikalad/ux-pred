import React from 'react'
import { Bar } from '@ant-design/plots';

export default function IntPolitico() {
  const data = [
    {
      voto: 'Politizados',
      year: '100 %',
      value: 45.41,
    },
    {
      voto: 'Despolitizados',
      year: '100 %',
      value: 54.59,
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
  return <Bar {...config} style={{height:150, marginBottom:'5rem'}} />;
}
