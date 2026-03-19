import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from './pages/accueil/accueil'
import Equipe from './pages/equipe/equipe'
import Projets from './pages/projet/projet'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/projets" element={<Projets />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App