// src/componentes/exercicio_1_BuscarUsuario.tsx
import React, { useState } from "react";
import axios from "axios";
import "../styles/exercicio_1_BuscarUsuario.css";

const Exercicio1BuscarUsuario = () => {
  const [userId, setUserId] = useState("");
  const [usuario, setUsuario] = useState<{
    nome: string;
    email: string;
  } | null>(null);
  const [erro, setErro] = useState("");

  const buscarUsuario = async () => {
    setErro("");
    setUsuario(null);

    if (!userId) {
      setErro("Informe um ID válido.");
      return;
    }

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const { name, email } = response.data;
      setUsuario({ nome: name, email });
    } catch (error) {
      setErro("Usuário não encontrado.");
    }
  };

  return (
    <div className="buscar-container">
      <h2>Buscar Usuário</h2>
      <input
        type="number"
        placeholder="Digite o ID do usuário"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={buscarUsuario}>Buscar</button>

      {usuario && (
        <div className="resultado">
          <p>
            <strong>Nome:</strong> {usuario.nome}
          </p>
          <p>
            <strong>Email:</strong> {usuario.email}
          </p>
        </div>
      )}

      {erro && <p className="erro">{erro}</p>}
    </div>
  );
};

export default Exercicio1BuscarUsuario;
