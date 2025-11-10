import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);
  // 🔹 Estado para guardar el resultado convertido
  const [resultado, setResultado] = useState(0);
  const [valor, setValor] = useState('');

  // 🔹 Función pura que hace la conversión
  function cantDeCentimetros(valor) {
    return valor / 100;
  }

  // 🔹 Manejador del cambio en el input
  function manejarCambio(e) {
    setValor(e.target.value); // actualiza el valor ingresado
  }

  // 🔹 Manejador del clic del botón
  function convertir() {
    const valorConvertido = cantDeCentimetros(valor);
    setResultado(valorConvertido); // guarda el resultado final
  }

  return (
    <>
      <div className="row">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Aca va a aparecer un numero grande</h1>
      <div className="conter-numero">{count}</div>
      <div className="row">
        <button
          className="offset-md-4 col-md-4"
          onClick={() => setCount((count) => count + 1)}
        >
          Sumo
        </button>

        <button
          className="offset-md-4 col-md-4 mt-4"
          onClick={() => setCount((count) => count - 1)}
        >
          Resto
        </button>
        <p className="mt-5">parece medio una pabada no?</p>
        <p className="read-the-docs">obvio bobiiiii</p>
      </div>





<div className="container text-center mt-5">
      <h1>Conversor de centímetros a metros</h1>

      {/* INPUT */}
      <div className="row mt-4">
        <div className="col-md-6 offset-md-3">
          <input
            type="number"
            className="form-control text-center"
            placeholder="Ingresa centímetros"
            value={valor}
            onChange={manejarCambio}
          />
        </div>
      </div>

      {/* BOTÓN */}
      <div className="row mt-3">
        <div className="col-md-6 offset-md-3">
          <button className="btn btn-primary w-100" onClick={convertir}>
            Convertir
          </button>
        </div>
      </div>

      {/* RESULTADO */}
      <div className="row mt-4">
        <div className="col-md-6 offset-md-3">
          <h2>{resultado} metros</h2>
        </div>
      </div>
    </div>



    </>
  );
}


export default App;
