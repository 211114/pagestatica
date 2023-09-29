import React from "react";
import { useRef } from "react";
import html2canvas from "html2canvas";
import Navbar from "./Navbar";

function RegistroCitas() {
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const addressRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const containerRef = useRef(null);

  const handlePrintPDF = async () => {
    const nameValue = nameRef.current.value;
    const ageValue = ageRef.current.value;
    const addressValue = addressRef.current.value;
    const emailValue = emailRef.current.value;
    const phoneValue = phoneRef.current.value;

    if (containerRef.current) {
      const container = containerRef.current;
      const canvas = await html2canvas(container);

      const imgData = canvas.toDataURL("./img");

      const pdfWindow = window.open("", "_blank");
      pdfWindow.document.open();
      pdfWindow.document.write(`
      <html>
      <head>
        <title>Datos PDF</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
          }
          h1 {
            color: #333;
            text-align: center;
          }
          p {
            color: #666;
          }
          img {
            display: block;
            margin: 0 auto;
            max-width: 100%;
            height: auto;
          }
          div {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          
          }
        </style>
      </head>
      <body>
        <div>
            <h1>Datos del Input:</h1>
            <p>Nombre: ${nameValue}</p>
            <p>Edad: ${ageValue}</p>
            <p>Dirección: ${addressValue}</p>
            <p>Correo: ${emailValue}</p>
            <p>Teléfono: ${phoneValue}</p>
            <img src="${imgData}" alt="Captura de pantalla" />
        </div>
      </body>
    </html>
        `);
      pdfWindow.document.close();
    }
  };
  return (
    <>
        <Navbar/>

      <div className="container-form">
        <label>Nombre:</label>
        <input ref={nameRef} type="text" />

        <label>Edad:</label>
        <input ref={ageRef} type="text" />

        <label>Dirección:</label>
        <input ref={addressRef} type="text" />

        <label>Correo:</label>
        <input ref={emailRef} type="text" />

        <label>Teléfono:</label>
        <input ref={phoneRef} type="text" />

        <div ref={containerRef}>{/* Renderizar los datos a imprimir */}</div>

        <button onClick={handlePrintPDF}>Imprimir como PDF</button>
      </div>
    </>
  );
}

export default RegistroCitas;
