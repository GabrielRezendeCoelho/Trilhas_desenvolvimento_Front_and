import React from "react";
import { Link } from "react-router-dom";

function Exercicio4Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Bem-vindo ao Hotel Trilha 3</h1>
      <p>Veja os quartos disponíveis abaixo:</p>
      <Link to="/rooms">
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>
          Ver Quartos
        </button>
      </Link>
    </div>
  );
}

export default Exercicio4Home;
