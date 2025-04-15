import { Link } from "react-router-dom";

function Exercicio4Rooms() {
  const rooms = [
    { id: 1, nome: "Quarto Luxo" },
    { id: 2, nome: "Quarto Simples" },
    { id: 3, nome: "Suíte Executiva" },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Quartos Disponíveis</h2>
      <ul style={{ listStyle: "none" }}>
        {rooms.map((room) => (
          <li key={room.id} style={{ marginBottom: "10px" }}>
            <Link to={`/room/${room.id}`}>{room.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Exercicio4Rooms;
