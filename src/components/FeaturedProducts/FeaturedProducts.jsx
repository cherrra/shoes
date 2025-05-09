import React from 'react';
import styles from './FeaturedProducts.module.css';
import ProductCard from '../ProductCard/ProductCard';

const FeaturedProducts = () => {
  
  const products = [
    {
      id: 1,
      name: 'Air Max 270',
      price: 150,
      image: 'https://i.pinimg.com/736x/a2/0a/9d/a20a9d7202898eef8b362148e3e5e78d.jpg',
      brand: 'Nike'
    },
    {
      id: 2,
      name: 'Ultraboost 21',
      price: 180,
      image: 'https://i.pinimg.com/736x/70/e2/f4/70e2f4b7307a9306729257e91b1e0336.jpg',
      brand: 'Adidas'
    },
    {
      id: 3,
      name: 'Classic Leather',
      price: 90,
      image: 'https://i.pinimg.com/736x/51/94/99/51949996a7415c002eac40a13b500c95.jpg',
      brand: 'Reebok'
    },
    {
      id: 4,
      name: 'Chuck Taylor',
      price: 65,
      image: 'https://i.pinimg.com/736x/6b/2e/97/6b2e9708d4d5cb9c188d28b97c20df7a.jpg',
      brand: 'Converse'
    }
  ];

  return (
    <section className={styles.featured}>
      <h2 className={styles.sectionTitle}>Популярные позиции</h2>
      <div className={styles.productsGrid}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;