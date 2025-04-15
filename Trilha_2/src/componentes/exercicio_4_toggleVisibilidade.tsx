import React, { useState } from "react";
import "../styles/exercicio_4_toggleVisibilidade.css";

interface ToggleVisibilidadeProps {
  texto: string;
}

const Exercicio4ToggleVisibilidade = ({ texto }: ToggleVisibilidadeProps) => {
  const [visivel, setVisivel] = useState(true);

  return (
    <div className="toggle-container">
      <button onClick={() => setVisivel(!visivel)}>
        {visivel ? "Ocultar" : "Mostrar"}
      </button>

      {visivel && <p className="mensagem">{texto}</p>}
    </div>
  );
};

export default Exercicio4ToggleVisibilidade;
