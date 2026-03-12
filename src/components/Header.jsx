import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContainer}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          <div className={styles.logoIcon}>R</div>
          Ramos <span>Treinamentos</span>
        </Link>

        <button
          className={`${styles.menuToggle} ${isOpen ? styles.open : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ''}`
            }
            onClick={closeMenu}
          >
            Início
          </NavLink>
          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ''}`
            }
            onClick={closeMenu}
          >
            Sobre
          </NavLink>
          <NavLink
            to="/servicos"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ''}`
            }
            onClick={closeMenu}
          >
            Serviços
          </NavLink>
          <NavLink
            to="/treinamentos"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ''}`
            }
            onClick={closeMenu}
          >
            Treinamentos
          </NavLink>
          <NavLink
            to="/contato"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ''}`
            }
            onClick={closeMenu}
          >
            Contato
          </NavLink>
        </nav>

        {isOpen && <div className={styles.overlay} onClick={closeMenu} />}
      </div>
    </header>
  );
}
