import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContent}>
        <h2 className={styles.sectionTitle}>О нас</h2>
        <p className={styles.aboutText}>
          Founded in 2023, SneakerShop is dedicated to bringing you the latest and greatest in sneaker fashion.
          We carefully curate our collection to ensure only the highest quality products make it to your feet.
        </p>
        <p className={styles.aboutText}>
          Our mission is to provide sneaker enthusiasts with a seamless shopping experience and access to
          exclusive releases from top brands around the world.
        </p>
      </div>
    </section>
  );
};

export default About;