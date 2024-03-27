import React from 'react'
import { Funnel } from '@ant-design/plots';

export default function AtributoPolitico() {
  const data = [
    {
      stage: 'Honestidad',
      number: 32.11,
    },
    {
      stage: 'Autoridad',
      number: 13.93,
    },
    {
      stage: 'Coherencia',
      number: 12.44,
    },
    {
      stage: 'Eficiencia',
      number: 11.56,
    },
    {
      stage: 'Responsabilidad',
      number: 10.51,
    },
    {
      stage: 'Experiencia',
      number: 5.47,
    },
    {
      stage: 'Cercanía',
      number: 5.36,
    },
    {
      stage: 'Popularidad',
      number: 3.64,
    },
    {
      stage: 'Sensibilidad',
      number: 3.31,
    },
    {
      stage: 'Dinamismo',
      number: 1.66,
    },
  ];
  const config = {
    data: data,
    xField: 'stage',
    yField: 'number',
    legend: false,
    conversionTag: false,
    dynamicHeight: true,
  };
  return <Funnel {...config} />;
}
