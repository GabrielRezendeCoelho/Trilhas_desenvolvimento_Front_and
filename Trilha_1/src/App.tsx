import React from "react";
import "./App.css";
import Exercicio1Button from "./componentes/exercicio_1_button";
import Exercicio2ProfileCard from "./componentes/exercicio_2_profileCard";
import Exercicio3Layout from "./componentes/exercicio_3_card";
import Exercicio4TabelaProdutos from "./componentes/exercicio_4_gallery";
import Exercicio5Navbar from "./componentes/exercicio_5_navbar";
import Exercicio6Formulario from "./componentes/exercicio_6_contactForm";

function App() {
  return (
    <div className="container">
      <h1 className="titulo-central">Trilha 1 - Exercícios</h1>

      <section className="bloco-exercicio">
        <h2 className="titulo-central">Exercício 1: Botão Estilizado</h2>
        <Exercicio1Button />
      </section>

      <section className="bloco-exercicio">
        <h2 className="titulo-central">Exercício 2: Cartão de Perfil</h2>
        <Exercicio2ProfileCard />
      </section>

      <section className="bloco-exercicio">
        <h2 className="titulo-central">Exercício 3: Layout</h2>
        <Exercicio3Layout />
      </section>

      <section className="bloco-exercicio">
        <h2 className="titulo-central">Exercício 4: Tabela de Produtos</h2>
        <Exercicio4TabelaProdutos />
      </section>

      <section className="bloco-exercicio">
        <h2 className="titulo-central">Exercício 5: Navbar</h2>
        <Exercicio5Navbar />
      </section>

      <section className="bloco-exercicio">
        <h2 className="titulo-central">Exercício 6: Formulário</h2>
        <Exercicio6Formulario />
      </section>
    </div>
  );
}

export default App;
