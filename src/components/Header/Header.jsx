import React, { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Обновляем URL без перезагрузки страницы
      window.history.pushState(null, null, `#${id}`);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>⟁</span>
          <span className={styles.logoText}>
            <span className={styles.logoMain}>DREAM</span>
            <span className={styles.logoSub}>SNEAKERS</span>
          </span>
        </Link>
        
        <div className={`${styles.navWrapper} ${menuOpen ? styles.active : ''}`}>
          <nav className={styles.nav}>
            <a 
              href="#products" 
              className={styles.navLink} 
              onClick={(e) => handleScrollTo(e, 'products')}
            >
              Каталог
            </a>
            
            <a 
              href="#about" 
              className={styles.navLink} 
              onClick={(e) => handleScrollTo(e, 'about')}
            >
              О бренде
            </a>
            
            <a 
              href="#reviews" 
              className={styles.navLink} 
              onClick={(e) => handleScrollTo(e, 'reviews')}
            >
              Отзывы
            </a>
            
            <a 
              href="#contact" 
              className={styles.navLink} 
              onClick={(e) => handleScrollTo(e, 'contact')}
            >
              Связаться с нами
            </a>
          </nav>
        </div>
        
        <button 
          className={styles.menuButton} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;