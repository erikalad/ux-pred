import React from 'react'
import { Facet } from '@ant-design/plots';

export default function RangoEtario() {

  const data = [
    {
      "age": "18 a 26 - Generación Z",
      "gender_percentage": 1.28577939,
      "total_percentage": 0.632840629,
      "actual_value":272162,
      "gender": "Masculino",
      "date": 1404172800
    },
    {
      "age": "27 a 42 - Millennians",
      "gender_percentage": 1.28921772,
      "total_percentage": 0.634532924,
      "actual_value": 484539,
      "gender": "Masculino",
      "date": 1404172800
    },
    {
      "age": "43 a 58 años - Generación X",
      "gender_percentage": 1.28873918,
      "total_percentage": 0.634297395,
      "actual_value": 428853,
      "gender": "Masculino",
      "date": 1404172800
    },
    {
      "age": "Más de 58 años - Baby boomers + Generación silenciosa",
      "gender_percentage": 1.30538031,
      "total_percentage": 0.642487899,
      "actual_value": 256870,
      "gender": "Masculino",
      "date": 1404172800
    },
    {
      "age": "18 a 26 - Generación Z",
      "gender_percentage": 0.833984223,
      "total_percentage": 0.423510151,
      "actual_value": 272162,
      "gender": "Femenino",
      "date": 1404172800
    },
    {
      "age": "27 a 42 - Millennians",
      "gender_percentage": 0.730813884,
      "total_percentage": 0.371118649,
      "actual_value": 484539,
      "gender": "Femenino",
      "date": 1404172800
    },
    {
      "age": "43 a 58 años - Generación X",
      "gender_percentage": 0.672665003,
      "total_percentage": 0.341589744,
      "actual_value": 428853,
      "gender": "Femenino",
      "date": 1404172800
    },
    {
      "age": "Más de 58 años - Baby boomers + Generación silenciosa",
      "gender_percentage": 0.637926365,
      "total_percentage": 0.323948923,
      "actual_value": 256870,
      "gender": "Femenino",
      "date": 1404172800
    }
  ]


  const config = {
    type: 'mirror',
    data,
    fields: ['gender'],
    transpose: true,
    padding: [32, 16, 28, 16],
    meta: {
      age: {
        sync: true,
        tickCount: 20,
      },
      total_percentage: {
        sync: true,

        formatter(v) {
          return v + '%';
        },
      },
      gender: {
        sync: true,
      },
    },
    axes: {},
    eachView: (view, f) => {
      return {
        padding: [0, 48, 0, 0],
        type: 'column',
        options: {
          data: f.data,
          xField: 'age',
          yField: 'actual_value',
          seriesField: 'gender',
          color: ['#1890ff', '#f04864'],
               },
      };
    },
  };

  return <Facet {...config} />;
}
