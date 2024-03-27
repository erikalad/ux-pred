import React from 'react';
import { Pie, G2 } from '@ant-design/plots';
import './graficos.css'


export default function Genero() {
  const G = G2.getEngine('canvas');
  const data = [
    {
      genero: 'Masculino',
      porcentaje: 0.47,
      cantidad: 688270
    },
    {
      genero: 'Femenino',
      porcentaje: 0.52,
      cantidad: 754154
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'porcentaje',
    colorField: 'genero',
    radius: 0.66,
    color: ['#1890ff', '#f04864'],
    label: {
      content: (obj) => {
        const group = new G.Group({});
        group.addShape({
          type: 'image',
          attrs: {
            x: 0,
            y: 0,
            width: 40,
            height: 50,
            img:
              obj.genero === 'Masculino'
                ? 'https://gw.alipayobjects.com/zos/rmsportal/oeCxrAewtedMBYOETCln.png'
                : 'https://gw.alipayobjects.com/zos/rmsportal/mweUsJpBWucJRixSfWVP.png',
          },
        });
        group.addShape({
          type: 'text',
          attrs: {
            x: 20,
            y: 54,
            text: obj.genero,
            textAlign: 'center',
            textBaseline: 'top',
            fill: obj.genero === 'Masculino' ? '#1890ff' : '#f04864',
          },
        });
        return group;
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
}
