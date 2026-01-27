/**
 * App.tsx - Router Principal
 * Maneja las rutas de la aplicación
 */

import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Funnel1 from './pages/Funnel1';

function App() {
  return (
    <Routes>
      {/* Página principal - Landing Page moderna */}
      <Route path="/" element={<LandingPage />} />
      
      {/* Funnel - Página adicional */}
      <Route path="/funnel1" element={<Funnel1 />} />
    </Routes>
  );
}

export default App;
