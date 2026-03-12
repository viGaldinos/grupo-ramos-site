import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Servicos from './pages/Servicos';
import Treinamentos from './pages/Treinamentos';
import Contato from './pages/Contato';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/servicos' element={<Servicos />} />
          <Route path='/treinamentos' element={<Treinamentos />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
