import React from 'react'
import { Collapse } from 'antd';
import Sociodemografico from './Sociodemosgrafico'
import Voto from './Voto'
import Preocupaciones from './Preocupaciones'
import ClimaSocial from './ClimaSocial'

export default function Indicadores() {
  return (
    <div className='contenedor-graficos-indicadores'>
       <Collapse
      size="large"
      className='colapse'
      defaultActiveKey={['1']}
      items={[
        {
          key: '1',
          label: 'CARACTERÍSTICAS SOCIODEMOSGRÁFICAS',
          children: <Sociodemografico/>,
        },
      ]}
    />
     <Collapse
      size="large"
      defaultActiveKey={['1']}
      className='colapse'
      items={[
        {
          key: '1',
          label: 'VOTOS',
          children: <Voto/>,
        },
      ]}
    />
     <Collapse
     defaultActiveKey={['1']}
     className='colapse'
      size="large"
      items={[
        {
          key: '1',
          label: 'PREOCUPACIONES',
          children: <Preocupaciones/>,
        },
      ]}
    />
      <Collapse
     defaultActiveKey={['1']}
     className='colapse'
      size="large"
      items={[
        {
          key: '1',
          label: 'CLIMA SOCIAL',
          children: <ClimaSocial/>,
        },
      ]}
    />

    </div>
  )
}
