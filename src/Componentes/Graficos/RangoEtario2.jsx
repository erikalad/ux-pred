import React from 'react'
import { Pie } from '@ant-design/plots';


export default function RangoEtario2() {
  const data = [
    {
      type: '18 a 26 - Generación Z',
      value: 18.87,
    },
    {
      type: '27 a 42 - Millennians',
      value: 33.59,
    },
    {
      type: '43 a 58 años - Generación X',
      value: 29.73,
    },
    {
      type: 'Más de 58 años - Baby boomers + Generación silenciosa',
      value: 17.81,
    },

  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [
      {
        type: 'pie-legend-active',
      },
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
}
