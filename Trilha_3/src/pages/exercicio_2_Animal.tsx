import { useParams } from "react-router-dom";

const Exercicio2Animal = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Exercício 2: Parâmetro via URL</h2>
      <p>O nome do animal recebido foi:</p>
      <h1 style={{ color: "blue" }}>{name}</h1>
    </div>
  );
};

export default Exercicio2Animal;
