/** @format */

import React from "react";
import './index.css'

export default function Nav() {
  return (
    <div className="navbar-app">
      <nav class="navbar ">
        <div class="container-fluid nav-propio">
          <a class="navbar-brand" href="#">
            <img
              src="https://qsocialnow.com/static/Imagenes/Logo.png"
              alt="Logo"
              width="200"
              height="65"
              class="d-inline-block align-text-top"
            />
          </a>
          <div style={{ color: "grey" }}>
            <strong>BIG DATA PREDICTIVA / ELECCIONES</strong>{" "}
          </div>
        </div>
      </nav>
    </div>
  );
}
