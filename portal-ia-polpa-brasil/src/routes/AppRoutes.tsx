import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Documents from "../pages/Documentos/Documents";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/documents" element={<Documents />} />
    </Routes>
  );
}

export default AppRoutes;