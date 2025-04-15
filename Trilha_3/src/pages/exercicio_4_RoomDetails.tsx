import { useParams, useNavigate } from "react-router-dom";

function Exercicio4RoomDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const reservar = () => {
    navigate("/success");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Detalhes do Quarto #{id}</h2>
      <p>Descrição: Confortável e bem localizado.</p>
      <button onClick={reservar}>Reservar Agora</button>
    </div>
  );
}

export default Exercicio4RoomDetails;
