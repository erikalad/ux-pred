import React from 'react'
import { Column, G2 } from '@ant-design/plots';


export default function PosicionAnteGob() {
 const data= [
    {
      "year": "Nacional",
      "type": "Neutral",
      "value": 49
    },
    {
      "year": "Nacional",
      "type": "Apoya",
      "value": 44.36
    },
    {
      "year": "Nacional",
      "type": "No Apoya",
      "value": 6.64
    },
    {
      "year": "Provincial",
      "type": "Apoya",
      "value": 33.11
    },
    {
      "year": "Provincial",
      "type": "No Apoya",
      "value": 7.81
    },
    {
      "year": "Provincial",
      "type": "Neutral",
      "value": 59.09
    },
    {
      "year": "Local",
      "type": "Apoya",
      "value": 36.16
    },
    {
      "year": "Local",
      "type": "No Apoya",
      "value": 8.63
    },
    {
      "year": "Local",
      "type": "Neutral",
      "value": 55.21
    },
    
  ]


  G2.registerInteraction('element-link', {
    start: [
      {
        trigger: 'interval:mouseenter',
        action: 'element-link-by-color:link',
      },
    ],
    end: [
      {
        trigger: 'interval:mouseleave',
        action: 'element-link-by-color:unlink',
      },
    ],
  });
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
    isPercent: true,
    isStack: true,
    meta: {
      value: {
        min: 0,
        max: 1,
      },
    },
    label: {
      position: 'middle',
      content: (item) => {
        return `${(item.value * 100).toFixed(2)}%`;
      },
      style: {
        fill: '#fff',
      },
    },
    tooltip: false,
    interactions: [
      {
        type: 'element-highlight-by-color',
      },
      {
        type: 'element-link',
      },
    ],
  };

  return <Column {...config} />;
}
