import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Премиум кроссовки для вашего стиля</h1>
        <p className={styles.heroSubtitle}>Discover the latest collection of comfortable and stylish sneakers</p>
        <button className={styles.heroButton}>Купить сейчас</button>
      </div>
    </section>
  );
};

export default Hero;