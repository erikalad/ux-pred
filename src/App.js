import React, { useState } from "react";
import './App.css';
import Contenedor from './Contenedores/Contenedor'
import { useSelector } from "react-redux";
import { FaFilter } from "react-icons/fa";
import FiltrosAplicados from "./Contenedores/FiltrosAplicados";
import { Drawer, FloatButton, Tooltip } from "antd";


function App() {
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <div className="App">
        <Contenedor/>

        <Tooltip title="Filtros Aplicados">
        <FloatButton
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
          icon={<FaFilter />}
          type="primary"
          style={{
            right: 24,
          }}
          // onClick={showDrawer}
          className="botones-app"
        />
      </Tooltip>


<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Filtros Aplicados</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <FiltrosAplicados />
  </div>
</div>

    </div>
  );
}

export default App;
