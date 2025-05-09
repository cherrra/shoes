import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Shoes</h3>
          <p>Your destination</p>
        </div>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Ссылки</h3>
          <ul className={styles.footerLinks}>
            <li><a href="/products">Каталог</a></li>
            <li><a href="/about">О нас</a></li>
            <li><a href="/contact">Отзывы</a></li>
             <li><a href="/contact">Связаться с нами</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Контакты</h3>
          <p>Email: info@sneakershop.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Shoes.</p>
      </div>
    </footer>
  );
};

export default Footer;