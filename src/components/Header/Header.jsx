import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>Shoes</Link>
        <nav className={styles.nav}>
          <Link to="/products" className={styles.navLink}>Каталог</Link>
          <Link to="/about" className={styles.navLink}>О нас</Link>
          <Link to="/contact" className={styles.navLink}>Отзывы</Link>
          <Link to="/contact" className={styles.navLink}>Связаться с нами</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;