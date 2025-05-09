import React from 'react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Alex Johnson',
      text: 'The best sneaker shop I\'ve ever used. Fast delivery and authentic products!',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Miller',
      text: 'Great selection and excellent customer service. Will definitely buy again.',
      rating: 4
    },
    {
      id: 3,
      name: 'Michael Chen',
      text: 'Found some rare limited editions here that I couldn\'t find anywhere else.',
      rating: 5
    }
  ];

  return (
    <section className={styles.testimonials}>
      <h2 className={styles.sectionTitle}>Что о нас говорят</h2>
      <div className={styles.testimonialGrid}>
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className={styles.testimonialCard}>
            <p className={styles.testimonialText}>"{testimonial.text}"</p>
            <div className={styles.testimonialRating}>
              {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
            </div>
            <p className={styles.testimonialAuthor}>- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;