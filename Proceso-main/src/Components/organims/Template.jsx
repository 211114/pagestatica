import React from "react";
// import LinesChart from '../../Graficas/LinesChart'
import LinesChart from "../../Graficas/LinesChart";
import Bars from "../../Graficas/BarsChart";
import Pies from "../../Graficas/PiesChart";
import { Link } from "react-router-dom";
import Navbar from "../Molecules/Navbar";

function Template() {
  return (
    <>
        <Navbar />
      <div className="continer-grafica">
        {/* Aquí incluiré las gráficas (un componente por cada ejemplo). */}
        
        <div>
          <p className="m-2">
            <b>Ejemplo #1: </b>Gráfico de barras 
          </p>
          <div
            className="bg-light mx-auto px-2 border border-2 border-primary"
            style={{ width: "400px", height: "230px" }}
          >
             <Bars />
          </div>
        </div>
        <hr className="mt-3 mb-2" />
        <div>
          <p className="m-2">
            <b>Ejemplo #2: </b>Gráfico circular 
          </p>
          <div
            className="bg-light mx-auto px-2 border border-2 border-primary"
            style={{ width: "400px", height: "225px" }}
          >
           <Pies />
            
          </div>
        </div>
        <hr className="mt-3 mb-2 " />
        <div>
          <p className="m-2">
            <b>Ejemplo #3: </b>Gráfico de líneas básico
          </p>
          <div
            className="bg-light mx-auto border border-2 border-primary"
            style={{ width: "400px", height: "250px" }}
          >
            <div style={{ width: "100%", height: "100%", padding: "10px 0" }}>
                <LinesChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Template;
