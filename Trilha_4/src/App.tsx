import React from "react";
import Exercicio1BuscarUsuario from "./componentes/exercicio_1_BuscarUsuario";
import Exercicio2CadastrarUsuario from "./componentes/exercicio_2_CadastrarUsuario";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1 className="titulo-principal">Trilha 4 - Consumo de API</h1>
      <div className="exercicios-container">
        <div className="exercicio-card">
          <Exercicio1BuscarUsuario />
        </div>
        <div className="exercicio-card">
          <Exercicio2CadastrarUsuario />
        </div>
      </div>
    </div>
  );
}

export default App;
