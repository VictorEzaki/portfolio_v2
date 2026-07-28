import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout.jsx";
import Sobre from "../pages/Sobre/Sobre.jsx";
import Tecnologias from "../pages/Tecnologias/Tecnologias.jsx";
import Projetos from "../pages/Projetos/Projetos.jsx";
import ProjetoDetalhe from "../pages/ProjetoDetalhe/ProjetoDetalhe.jsx";
import Contato from "../pages/Contato/Contato.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Sobre />} />
        <Route path="tech" element={<Tecnologias />} />
        <Route path="projetos" element={<Projetos />} />
        <Route path="projetos/:id" element={<ProjetoDetalhe />} />
        <Route path="contato" element={<Contato />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
