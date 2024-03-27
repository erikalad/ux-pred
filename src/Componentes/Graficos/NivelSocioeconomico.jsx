/** @format */

import React, { useRef, useEffect } from 'react';
import { Facet } from "@ant-design/plots";
import { DataView } from "@antv/data-set";
export default function NivelSocioeconomico() {
 
  const myRef = useRef();


  const data = [
    {
      name: 14513,
      carat: 1.35,
      cut: "E",
      color: "J",
      clarity: "Femenino",
      depth: 61.4,
      table: 57,
      price: 5862,
      x: 7.1,
      y: 7.13,
      z: 4.37,
    },
    {
      name: 14513,
      carat: 1.35,
      cut: "C-",
      color: "J",
      clarity: "Femenino",
      depth: 61.4,
      table: 57,
      price: 5862,
      x: 7.1,
      y: 7.13,
      z: 4.37,
    },
    {
      name: 14513,
      carat: 1.35,
      cut: "AB",
      color: "J",
      clarity: "Femenino",
      depth: 61.4,
      table: 57,
      price: 5862,
      x: 7.1,
      y: 7.13,
      z: 4.37,
    },
    {
      name: 28685,
      carat: 0.3,
      cut: "C+",
      color: "G",
      clarity: "Femenino",
      depth: 64,
      table: 57,
      price: 678,
      x: 4.23,
      y: 4.27,
      z: 2.72,
    },
    {
      name: 31082,
      carat: 0.33,
      cut: "C",
      color: "H",
      clarity: "Masculino",
      depth: 61.4,
      table: 59,
      price: 752,
      x: 4.42,
      y: 4.44,
      z: 2.72,
    },
    {
      name: 14513,
      carat: 1.35,
      cut: "D",
      color: "J",
      clarity: "Femenino",
      depth: 61.4,
      table: 57,
      price: 5862,
      x: 7.1,
      y: 7.13,
      z: 4.37,
    },
    {
      name: 14513,
      carat: 1.35,
      cut: "D+",
      color: "J",
      clarity: "Femenino",
      depth: 61.4,
      table: 57,
      price: 5862,
      x: 7.1,
      y: 7.13,
      z: 4.37,
    },
    {
      name: 14513,
      carat: 1.35,
      cut: "C",
      color: "J",
      clarity: "Femenino",
      depth: 61.4,
      table: 57,
      price: 5862,
      x: 7.1,
      y: 7.13,
      z: 4.37,
    },
    {
      name: 26429,
      carat: 1.52,
      cut: "E",
      color: "G",
      clarity: "Masculino",
      depth: 62.4,
      table: 55,
      price: 15959,
      x: 7.3,
      y: 7.39,
      z: 4.58,
    },
    {
      name: 14513,
      carat: 1.35,
      cut: "D+",
      color: "J",
      clarity: "Masculino",
      depth: 61.4,
      table: 57,
      price: 5862,
      x: 7.1,
      y: 7.13,
      z: 4.37,
    },
    {
      name: 14513,
      carat: 1.35,
      cut: "D",
      color: "J",
      clarity: "Masculino",
      depth: 61.4,
      table: 57,
      price: 5862,
      x: 7.1,
      y: 7.13,
      z: 4.37,
    },
    {
      name: 14513,
      carat: 1.35,
      cut: "C",
      color: "J",
      clarity: "Masculino",
      depth: 61.4,
      table: 57,
      price: 5862,
      x: 7.1,
      y: 7.13,
      z: 4.37,
    },
    {
      name: 26429,
      carat: 1.52,
      cut: "C+",
      color: "G",
      clarity: "Masculino",
      depth: 62.4,
      table: 55,
      price: 15959,
      x: 7.3,
      y: 7.39,
      z: 4.58,
    },
    {
      name: 26429,
      carat: 1.52,
      cut: "C-",
      color: "G",
      clarity: "Masculino",
      depth: 62.4,
      table: 55,
      price: 15959,
      x: 7.3,
      y: 7.39,
      z: 4.58,
    },

    {
      name: 26429,
      carat: 1.52,
      cut: "AB",
      color: "G",
      clarity: "Masculino",
      depth: 62.4,
      table: 55,
      price: 15959,
      x: 7.3,
      y: 7.39,
      z: 4.58,
    },
  ];

  useEffect(() => {
    if (myRef.current) {
      // Ahora puedes acceder a los métodos y propiedades de tu componente
      // Por ejemplo:
      // myRef.current.clear();
    }
  }, [data]);

  const config = {
    appendPadding: [0, 18, -50, 32],
    data,
    type: "tree",
    fields: ["clarity"],
    meta: {
      cut: {
        sync: false,
        values: ["E", "D", "C", "C+", "D+", "AB", "C-"],
      },
      mean: {
        sync: false,
        tickCount: 5,
        formatter: (v) => `${Math.ceil(v)}`,
      },
    },
    line: {
      style: {
        stroke: "#dedede",
      },
      smooth: true,
    },
    axes: {},
    tooltip: {
      showMarkers: false,
    },
    eachView: (view, facet) => {
  
     
        const { rowIndex } = facet || {};
        const dv = new DataView();
     
        dv.source(facet.data).transform({
          type: "aggregate",
          fields: ["price"],
          operations: ["mean"],
          as: ["mean"],
          groupBy: ["cut"],
        });

       

     
        if (rowIndex === 0) {
          return {
            type: "pie",
            options: {
              data: dv.rows,
              meta: {
                mean: {
                  sync: false,
                },
              },
              angleField: "mean",
              colorField: "cut",
              radius: 1,
              pieStyle: {
                stroke: null,
              },
            },
          };
        }

        return {
          type: "column",
          options: {
            data: dv.rows,
            meta: {
              mean: {
                sync: rowIndex === 0 ? false : true,
              },
            },
            xField: "cut",
            yField: "mean",
            seriesField: "cut",
            columnStyle: {
              fillOpacity: 0.85,
            },
          },
        };
   
    
    },
  };


  return (
    <div>
      <Facet {...config} ref={myRef}/>

    </div>
  );
}
