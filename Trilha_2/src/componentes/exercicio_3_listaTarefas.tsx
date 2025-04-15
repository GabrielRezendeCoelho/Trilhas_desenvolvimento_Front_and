import React, { useState } from "react";
import "../styles/exercicio_3_listaTarefas.css";

interface ListaTarefasProps {
  tarefasIniciais: string[];
}

const Exercicio3ListaTarefas = ({ tarefasIniciais }: ListaTarefasProps) => {
  const [tarefas, setTarefas] = useState(tarefasIniciais);
  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;
    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa("");
  };

  return (
    <div className="lista-container">
      <h2>Lista de Tarefas</h2>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Nova tarefa"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
    </div>
  );
};

export default Exercicio3ListaTarefas;
