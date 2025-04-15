// App.tsx
import { Routes, Route, Link } from "react-router-dom";
import Exercicio1Home from "./pages/exercicio_1_Home";
import Exercicio1About from "./pages/exercicio_1_Sobre";
import Exercicio1Contact from "./pages/exercicio_1_Contato";

import Exercicio2Animal from "./pages/exercicio_2_Animal";
import Exercicio3Home from "./pages/exercicio_3_Home";
import Exercicio4Home from "./pages/exercicio_4_Home";
import Exercicio4Rooms from "./pages/exercicio_4_Rooms";
import Exercicio4RoomDetails from "./pages/exercicio_4_RoomDetails";
import Exercicio4BookingSuccess from "./pages/exercicio_4_BookingSuccess";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Trilha 3 - Exercícios</h1>
      <nav style={{ marginBottom: "30px" }}>
        <Link to="/ex1" style={{ marginRight: "15px" }}>
          Ex 1 - Navegação
        </Link>
        <Link to="/ex2/leao" style={{ marginRight: "15px" }}>
          Ex 2 - Animal
        </Link>
        <Link to="/ex3" style={{ marginRight: "15px" }}>
          Ex 3 - Redirecionamento
        </Link>
        <Link to="/ex4" style={{ marginRight: "15px" }}>
          Ex 4 - Reservas
        </Link>
      </nav>

      <Routes>
        {/* Exercício 1 */}
        <Route path="/ex1" element={<Exercicio1Home />} />
        <Route path="/ex1/about" element={<Exercicio1About />} />
        <Route path="/ex1/contact" element={<Exercicio1Contact />} />

        {/* Exercício 2 */}
        <Route path="/ex2/:name" element={<Exercicio2Animal />} />

        {/* Exercício 3 */}
        <Route path="/ex3" element={<Exercicio3Home />} />

        {/* Exercício 4 */}
        <Route path="/ex4" element={<Exercicio4Home />} />
        <Route path="/rooms" element={<Exercicio4Rooms />} />
        <Route path="/room/:id" element={<Exercicio4RoomDetails />} />
        <Route path="/success" element={<Exercicio4BookingSuccess />} />
      </Routes>
    </div>
  );
}

export default App;
