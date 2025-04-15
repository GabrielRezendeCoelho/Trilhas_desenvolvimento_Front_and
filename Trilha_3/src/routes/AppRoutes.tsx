import { Routes, Route } from "react-router-dom";
import Exercicio4Home from "../pages/exercicio_4_Home";
import Exercicio4Rooms from "../pages/exercicio_4_Rooms";
import Exercicio4RoomDetails from "../pages/exercicio_4_RoomDetails";
import Exercicio4BookingSuccess from "../pages/exercicio_4_BookingSuccess";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Exercicio4Home />} />
      <Route path="/rooms" element={<Exercicio4Rooms />} />
      <Route path="/room/:id" element={<Exercicio4RoomDetails />} />
      <Route path="/success" element={<Exercicio4BookingSuccess />} />
    </Routes>
  );
}

export default AppRoutes;
