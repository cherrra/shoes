import React from 'react';
import styles from './Hero.module.css';
import sneakerImage from '../../image/sneakerImage.png';

const Hero = () => {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.textWrapper}>
          <h1 className={styles.heroTitle}>
            <span className={styles.titleLine}>Кроссовки</span>
            <span className={styles.titleLine}>для каждого шага</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Найди идеальную пару для спорта, стиля и комфорта
          </p>
          <div className={styles.buttonWrapper}>
            <button 
              className={styles.primaryButton} 
              onClick={() => handleScrollTo('contact')}
            >
              Подобрать пару
            </button>
            <button 
              className={styles.secondaryButton}
              onClick={() => handleScrollTo('products')}
            >
              Коллекция
            </button>
          </div>
        </div>
        <div className={styles.sneakerVisual}>
          <div className={styles.circle}></div>
          <div 
            className={styles.sneakerImage}
            style={{ backgroundImage: `url(${sneakerImage})` }} 
          ></div>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <span>Листайте вниз</span>
        <div className={styles.arrow}></div>
      </div>
    </section>
  );
};

export default Hero;