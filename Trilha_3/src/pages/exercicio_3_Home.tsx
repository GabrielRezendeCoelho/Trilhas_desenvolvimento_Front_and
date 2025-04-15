import { useNavigate } from "react-router-dom";

function Exercicio3Home() {
  const navigate = useNavigate();

  const irParaSobre = () => {
    navigate("/about");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Exercício 3: Redirecionamento com useNavigate</h1>
      <button onClick={irParaSobre}>Ir para Sobre</button>
    </div>
  );
}

export default Exercicio3Home;
