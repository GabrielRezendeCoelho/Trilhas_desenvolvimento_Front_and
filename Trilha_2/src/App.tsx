import React from "react";
import Exercicio1Contador from "./componentes/exercicio_1_contador";
import Exercicio2Saudacao from "./componentes/exercicio_2_saudacao";
import Exercicio3ListaTarefas from "./componentes/exercicio_3_listaTarefas";
import Exercicio4ToggleVisibilidade from "./componentes/exercicio_4_toggleVisibilidade";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Trilha 2 - Exercícios</h1>

      <section style={{ marginBottom: "40px" }}>
        <h2>Exercício 1: Contador</h2>
        <Exercicio1Contador valorInicial={0} />
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2>Exercício 2: Saudação</h2>
        <Exercicio2Saudacao nome="Professora Claudia" />
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2>Exercício 3: Lista de Tarefas</h2>
        <Exercicio3ListaTarefas
          tarefasIniciais={["Estudar", "Ler", "Treinar"]}
        />
      </section>

      <section>
        <h2>Exercício 4: Toggle Visibilidade</h2>
        <Exercicio4ToggleVisibilidade texto="Este é um conteúdo secreto!" />
      </section>
    </div>
  );
}

export default App;
