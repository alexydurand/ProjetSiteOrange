import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/accueil/accueil";
import Equipe from "./pages/equipe/equipe";
import Projets from "./pages/projet/projet";
import FormulaireMission from "./pages/formulaireMission/formulaireMission";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <main
          style = {{
            minHeight: "calc(100vh - 47px)"
          }}
        >
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/projet" element={<Projets />} />
          <Route path="/formulaireMission" element={<FormulaireMission />} />
        </Routes>
        </main>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
