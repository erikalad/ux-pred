/** @format */

import React from "react";
import "./index.css";
import Filtros from "./Filtros";
import Nav from "./Nav";
import Mapas from "./Mapas";
import Indicadores from "./Indicadores";
import { SiGooglemaps } from "react-icons/si";
import { BsGraphUp } from "react-icons/bs";
import { Tabs } from "antd";
import { Breadcrumb } from "antd";

export default function Contenedor() {
  return (
    <div className="contenedor-app">
      <Nav />
      <Breadcrumb
      style={{margin:'1rem'}}
        routes={[
          {
            // path: "/home",
            breadcrumbName: "México",
          },
          {
            // path: "/estado",
            breadcrumbName: "Ciudad de México",
            children: [
              {
                // path: "/ciudadMexico",
                breadcrumbName: "Ciudad de México",
              },
              // {
              //   path: "/user2",
              //   breadcrumbName: "User2",
              // },
            ],
          },
          {
            // path: "/user",
            breadcrumbName: "Iztapalapa",
            children: [
              {
                // path: "/user1",
                breadcrumbName: "Iztapalapa",
              },
              // {
              //   path: "/user2",
              //   breadcrumbName: "User2",
              // },
            ],
          },
        ]}
      />
      <Filtros />

      <Tabs
        className="tabs"
        defaultActiveKey="1"
        items={[
          {
            label: (
              <span className="tabs">
                <SiGooglemaps />
                Mapas
              </span>
            ),
            key: "1",
            children: <Mapas />,
          },
          {
            label: (
              <span className="tabs">
                <BsGraphUp />
                Indicadores
              </span>
            ),
            key: "2",
            children: <Indicadores/>,
          },
        ]}
      />
    </div>
  );
}
