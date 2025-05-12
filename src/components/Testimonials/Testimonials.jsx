import React from 'react';
import styles from './Testimonials.module.css';
import { FiStar } from 'react-icons/fi';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Иван Петров',
      role: 'Коллекционер',
      text: 'Нашел редкие Nike Dunk, которые искал два года. Проверили подлинность перед отправкой — это круто! Буду заказывать ещё.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 2,
      name: 'Анна Смирнова',
      role: 'Streetwear-блогер',
      text: 'Каждая пара — как произведение искусства! Это не просто покупка, а настоящий опыт для ценителя стиля.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 3,
      name: 'Максим Волков',
      role: 'Баскетболист',
      text: 'Игровые кроссовки соответствуют описанию на 100%. Теперь только здесь покупаю обувь для игры и повседневной носки.',
      rating: 4,
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
    }
  ];

  return (
    <section className={styles.testimonials} id="reviews">
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.titleLine}>Реальные отзывы</span>
          <span className={styles.titleLine}>наших клиентов</span>
        </h2>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={styles.card}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.rating}>
                {[...Array(5)].map((_, i) => (
                  <FiStar 
                    key={i} 
                    className={`${styles.star} ${i < testimonial.rating ? styles.filled : ''}`} 
                  />
                ))}
              </div>
              <p className={styles.text}>"{testimonial.text}"</p>
              <div className={styles.author}>
                <div className={styles.avatarWrapper}>
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className={styles.avatar} 
                  />
                  <div className={styles.avatarBorder}></div>
                </div>
                <div className={styles.authorInfo}>
                  <p className={styles.name}>{testimonial.name}</p>
                  <p className={styles.role}>{testimonial.role}</p>
                </div>
              </div>
              <div className={styles.cardAccent}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;