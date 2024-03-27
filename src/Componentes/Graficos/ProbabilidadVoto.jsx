import React from 'react'
import { Pie } from '@ant-design/plots';

export default function ProbabilidadVoto() {
  const data = [
    {
      type: 'Morena',
      value: 833075,
    },
    {
      type: 'PAM',
      value: 85848,
    },
    {
      type: 'Partido Verde Ecologista',
      value: 18713,
    },
    {
      type: 'PRD',
      value: 31668,
    },
    {
      type: 'PRI',
      value: 87417,
    },
    {
      type: 'Indecisos',
      value: 385703,
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
