import { Link } from "react-router-dom";

function Exercicio1Home() {
  return (
    <div>
      <h2>Exercício 1 - Página Inicial</h2>
      <Link to="/ex1/about">Ir para Sobre</Link> |{" "}
      <Link to="/ex1/contact">Ir para Contato</Link>
    </div>
  );
}

export default Exercicio1Home;
