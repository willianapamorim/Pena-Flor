import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import CustomCursor from './components/CustomCursor/CustomCursor';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Atelie from './pages/Atelie';
import Sabiju from './pages/Sabiju';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  useScrollReveal();

  return (
    <>
      <ScrollToTop />
      <CustomCursor />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atelie" element={<Atelie />} />
        <Route path="/sabiju" element={<Sabiju />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
