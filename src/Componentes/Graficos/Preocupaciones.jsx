import React from 'react'
import { Pie } from '@ant-design/plots';

export default function PreocupacionesGrales() {
  const data = [
    {
      type: 'Inseguridad',
      value: 27,
    },
    {
      type: 'Inflación',
      value: 25,
    },
    {
      type: 'Trabajo',
      value: 18,
    },
    {
      type: 'Corrupción',
      value: 15,
    },
    {
      type: 'Narcotráfico',
      value: 10,
    },
    {
      type: 'Vivienda',
      value: 5,
    },
    {
      type: 'Educación',
      value: 5,
    },
    {
      type: 'Justicia',
      value: 5,
    },
    {
      type: 'Situación sanitaria',
      value: 5,
    },
    {
      type: 'Ambiente',
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    innerRadius: 0.64,
    label: {
      type: 'inner',
      offset: '-50%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fill: '#fff',
        fontSize: 14,
        textAlign: 'center',
      },
    },
    statistic: null,
    annotations: [
      {
        // type: 'image',
        // src: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*ELYbTIVCgPoAAAAAAAAAAABkARQnAQ',

        /** 位置 */
        position: ['50%', '50%'],

        /** 图形样式属性 */
        style: {
          width: 50,
          height: 50,
        },

        /** x 方向的偏移量 */
        offsetX: -25,

        /** y 方向的偏移量 */
        offsetY: 40,
      },
    ],
    
  };



  const dataLocales = [
    {
      type: 'Reparación y pavimentación de calles',
      value: 27,
    },
    {
      type: 'Falta de oportunidades laborales',
      value: 25,
    },
    {
      type: 'Presencia policial',
      value: 18,
    },
    {
      type: 'Acceso a la vivienda',
      value: 15,
    },
    {
      type: 'Mejora del transporte público',
      value: 10,
    },
    {
      type: 'Limpieza en el sistema de salud',
      value: 5,
    },
    {
      type: 'Alumbrado público',
      value: 5,
    },
    {
      type: 'Mantenimiento de espacios públicos',
      value: 5,
    },
    {
      type: 'Cortes de luz',
      value: 5,
    },
 

  ];
  const configLocales = {
    appendPadding: 10,
    data:dataLocales,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    innerRadius: 0.64,
    label: {
      type: 'inner',
      offset: '-50%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fill: '#fff',
        fontSize: 14,
        textAlign: 'center',
      },
    },
    statistic: null,
    annotations: [
      {
        // type: 'image',
        // src: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*ELYbTIVCgPoAAAAAAAAAAABkARQnAQ',

        /** 位置 */
        position: ['50%', '50%'],

        /** 图形样式属性 */
        style: {
          width: 50,
          height: 50,
        },

        /** x 方向的偏移量 */
        offsetX: -25,

        /** y 方向的偏移量 */
        offsetY: 40,
      },
    ],
    
  };



  const dataEmociones = [
    {
      type: 'Confianza',
      value: 27,
    },
    {
      type: 'Alegría',
      value: 25,
    },
    {
      type: 'No sabe',
      value: 18,
    },
    {
      type: 'Tristeza',
      value: 15,
    },
    {
      type: 'Rechazo',
      value: 10,
    },
    {
      type: 'Miedo',
      value: 5,
    },
    {
      type: 'Sorpresa',
      value: 10,
    },
    {
      type: 'Anticipación',
      value: 5,
    },
    {
      type: 'Ira',
      value: 5,
    },
  ];
  const configEmociones = {
    appendPadding: 10,
    data:dataEmociones,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    innerRadius: 0.64,
    label: {
      type: 'inner',
      offset: '-50%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fill: '#fff',
        fontSize: 14,
        textAlign: 'center',
      },
    },
    statistic: null,
    annotations: [
      {
        // type: 'image',
        // src: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*ELYbTIVCgPoAAAAAAAAAAABkARQnAQ',

        /** 位置 */
        position: ['50%', '50%'],

        /** 图形样式属性 */
        style: {
          width: 50,
          height: 50,
        },

        /** x 方向的偏移量 */
        offsetX: -25,

        /** y 方向的偏移量 */
        offsetY: 40,
      },
    ],
    
  };
  return (  <div className='contenedor-preocupaciones-grales'>
  <div className='contenedor-subtitulo-grafico-preocupaciones'>
  <div className="subtitulo-preocupaciones">Preocupaciones Generales</div>
  <Pie {...config} />
  </div>

  <div className='contenedor-subtitulo-grafico-preocupaciones'>
  <div className="subtitulo-preocupaciones">Preocupaciones Locales</div>
  <Pie {...configLocales}/>
  </div>

  <div className='contenedor-subtitulo-grafico-preocupaciones'>
  <div className="subtitulo-preocupaciones">Emociones</div>
  <Pie {...configEmociones} />
  </div>
  </div> );
}
