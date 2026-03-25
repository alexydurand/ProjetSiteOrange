import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/accueil";
import Equipe from "./pages/equipe/equipe";
import Projets from "./pages/projet";
import FormulaireMission from "./pages/formulaireMission";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ModificationMission from "./pages/modificationMission";


function App() {
  return (
    <BrowserRouter>
        <Navbar />
        {/* définition de la hauteur du main pour bien intégré le footer */}
        <main
          style = {{
            minHeight: "calc(100vh - 47px)"
          }}
        >
        {/* Définition des routes */}
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/projet" element={<Projets />} />
          <Route path="/formulaireMission" element={<FormulaireMission />} />
          <Route path="/modificationMission/:id" element={<ModificationMission />} />
          
        </Routes>
        </main>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
