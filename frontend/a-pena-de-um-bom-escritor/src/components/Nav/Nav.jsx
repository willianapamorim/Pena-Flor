import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Nav.module.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isAtelie = location.pathname === '/atelie';
  const isSabiju = location.pathname === '/sabiju';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={scrolled ? styles.scrolled : undefined}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>🪶</span>
          <div className={styles.logoText}>
            <span className={styles.logoMain}>A Pena de um Bom Escritor</span>
            <span className={styles.logoSub}>Aqui sua história vale ouro</span>
          </div>
        </Link>
        <ul className={styles.links}>
          <li><Link to="/" className={isHome ? styles.active : undefined}>Home</Link></li>
          <li><a href={isAtelie || isSabiju ? '/#escritor' : '#escritor'}>O Escritor</a></li>
          <li><Link to="/atelie" className={isAtelie ? styles.active : undefined}>Ateliê</Link></li>
          <li><Link to="/sabiju" className={isSabiju ? styles.active : undefined}>SABIJU</Link></li>
        </ul>
        <button
          className={`${styles.hamburger}${menuOpen ? ` ${styles.open}` : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`${styles.mobileMenu}${menuOpen ? ` ${styles.open}` : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <a href={isAtelie || isSabiju ? '/#escritor' : '#escritor'} onClick={closeMenu}>O Escritor</a>
        <Link to="/atelie" onClick={closeMenu}>Ateliê</Link>
        <Link to="/sabiju" onClick={closeMenu}>SABIJU</Link>
      </div>
    </>
  );
}
