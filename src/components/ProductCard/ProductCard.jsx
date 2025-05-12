import React from 'react';
import styles from './ProductCard.module.css';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} className={styles.productImage} />
        
        {product.isNew && <span className={styles.newBadge}>Новинка</span>}
        {product.isBestSeller && <span className={styles.bestSellerBadge}>Бестселлер</span>}
      </div>
      
      <div className={styles.productInfo}>
        <div className={styles.brandRating}>
          <span className={styles.brand}>{product.brand}</span>
          <div className={styles.rating}>
            <FaStar className={styles.starIcon} />
            <span>{product.rating}</span>
          </div>
        </div>
        
        <h3 className={styles.productName}>{product.name}</h3>
        
        <div className={styles.colorOptions}>
          {product.colors.map((color, index) => (
            <span 
              key={index} 
              className={styles.colorDot} 
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        
        <div className={styles.priceContainer}>
          {product.oldPrice && (
            <span className={styles.oldPrice}>{product.oldPrice.toLocaleString()} ₽</span>
          )}
          <span className={styles.price}>{product.price.toLocaleString()} ₽</span>
        </div>
        
        <a 
          href="#contact" 
          className={styles.contactButton}
          onClick={scrollToContact}
        >
          Заказать
        </a>
      </div>
    </div>
  );
};

export default ProductCard;