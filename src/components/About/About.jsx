import React from 'react';
import styles from './About.module.css';
import { FiArrowRight } from 'react-icons/fi';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <h2 className={styles.sectionTitle}>DREAMSNEAKERS — ЭТО НЕ ПРОСТО МАГАЗИН</h2>
          
          <div className={styles.aboutColumns}>
            <div className={styles.aboutColumn}>
              <div className={styles.aboutNumber}>01</div>
              <h3 className={styles.aboutSubtitle}>Культура</h3>
              <p className={styles.aboutText}>
                Мы создаем сообщество, где кроссовки — это образ жизни. Наши ивенты и коллаборации объединяют истинных ценителей уличной моды.
              </p>
            </div>
            
            <div className={styles.aboutColumn}>
              <div className={styles.aboutNumber}>02</div>
              <h3 className={styles.aboutSubtitle}>Экспертиза</h3>
              <p className={styles.aboutText}>
                Каждая пара проходит проверку нашими экспертами. Мы знаем все о технологиях брендов и особенностях каждой модели.
              </p>
            </div>
            
            <div className={styles.aboutColumn}>
              <div className={styles.aboutNumber}>03</div>
              <h3 className={styles.aboutSubtitle}>Доступность</h3>
              <p className={styles.aboutText}>
                Специальные условия для постоянных клиентов, лист ожидания на редкие модели и честные цены без накруток.
              </p>
            </div>
          </div>
          
          <button className={styles.aboutButton}>
            Узнать нашу историю <FiArrowRight />
          </button>
        </div>
        
        <div className={styles.aboutImage}>
          <div className={styles.imageOverlay}></div>
        </div>
      </div>
    </section>
  );
};

export default About;