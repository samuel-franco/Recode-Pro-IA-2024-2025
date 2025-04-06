import Home from "./assets/components/Home";
import Menu from "./assets/components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "./assets/components/Sobre";
import Servico from "./assets/components/Servico";
import Contato from "./assets/components/Contato";
import "./assets/components/Menu.css"
 
function App() {
  return (
    <BrowserRouter>
      <Menu />
 
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/servico" element={<Servico/>} />
          <Route path="/contato" element={<Contato/>} />
      </Routes>
     
    </BrowserRouter>
  );
}
export default App