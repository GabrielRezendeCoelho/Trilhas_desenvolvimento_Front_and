import React, { useState } from "react";
import "../styles/exercicio_1_contador.css";

interface ContadorProps {
  valorInicial: number;
}

const Exercicio1Contador = ({ valorInicial }: ContadorProps) => {
  const [contador, setContador] = useState(valorInicial);

  return (
    <div className="contador-container">
      <h2>Valor Atual: {contador}</h2>
      <div className="botoes">
        <button onClick={() => setContador(contador - 1)}>-</button>
        <button onClick={() => setContador(contador + 1)}>+</button>
      </div>
    </div>
  );
};

export default Exercicio1Contador;
