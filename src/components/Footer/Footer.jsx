import React from 'react';
import styles from './Footer.module.css';
import { FaInstagram, FaTelegram, FaVk } from 'react-icons/fa';

const Footer = () => {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      window.history.pushState(null, null, `#${id}`);
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@dreamsneakers.ru';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+74951234567';
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <div className={styles.footerLogo}>
            <span className={styles.logoIcon}>⟁</span>
            <span className={styles.logoText}>
              <span className={styles.logoMain}>DREAM</span>
              <span className={styles.logoSub}>SNEAKERS</span>
            </span>
          </div>
          <p className={styles.footerAbout}>
            Кроссовки для каждого шага. Найди идеальную пару для спорта, стиля и комфорта
          </p>
          <div className={styles.socialLinks}>
            <a href="https://instagram.com/dreamsneakers" className={styles.socialLink} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://t.me/dreamsneakers" className={styles.socialLink} aria-label="Telegram" target="_blank" rel="noopener noreferrer">
              <FaTelegram />
            </a>
            <a href="https://vk.com/dreamsneakers" className={styles.socialLink} aria-label="VK" target="_blank" rel="noopener noreferrer">
              <FaVk />
            </a>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Навигация</h3>
          <ul className={styles.footerLinks}>
            <li>
              <a href="#products" onClick={(e) => handleScrollTo(e, 'products')}>
                Каталог
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleScrollTo(e, 'about')}>
                О бренде
              </a>
            </li>
            <li>
              <a href="#reviews" onClick={(e) => handleScrollTo(e, 'reviews')}>
                Отзывы
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')}>
                Контакты
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
  <h3 className={styles.footerTitle}>Контакты</h3>
  <div className={styles.contactInfo}>
    <p>Email: info@dreamsneakers.ru</p>
    <p>Телефон: +7 (911) 805-74-18</p>
  </div>
  <button 
    className={styles.contactButton}
    onClick={(e) => handleScrollTo(e, 'contact')}
  >
    Написать нам
  </button>
</div>

      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Dream Sneakers. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;