// src/componentes/exercicio_2_CadastrarUsuario.tsx
import React, { useState } from "react";
import axios from "axios";
import "../styles/exercicio_2_CadastrarUsuario.css";

const Exercicio2CadastrarUsuario = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name: nome,
          email: email,
        }
      );

      if (response.status === 201) {
        setMensagem("Usuário cadastrado com sucesso!");
        setNome("");
        setEmail("");
      }
    } catch (error) {
      setMensagem("Erro ao cadastrar usuário.");
    }
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
      {mensagem && <p className="mensagem">{mensagem}</p>}
    </div>
  );
};

export default Exercicio2CadastrarUsuario;
