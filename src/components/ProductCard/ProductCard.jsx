import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.productBrand}>{product.brand}</p>
        <p className={styles.productPrice}>${product.price}</p>
        <button className={styles.addToCart}>Купить</button>
      </div>
    </div>
  );
};

export default ProductCard;