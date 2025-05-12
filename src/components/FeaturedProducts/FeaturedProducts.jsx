import React, { useState } from 'react';
import styles from './FeaturedProducts.module.css';
import ProductCard from '../ProductCard/ProductCard';
import { FiArrowRight, FiChevronUp } from 'react-icons/fi';

const FeaturedProducts = () => {
  const [showAllProducts, setShowAllProducts] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Nike Air Max 270',
      price: 12990,
      oldPrice: 14990,
      image: 'https://i.pinimg.com/736x/a2/0a/9d/a20a9d7202898eef8b362148e3e5e78d.jpg',
      brand: 'Nike',
      colors: ['#000000', '#FF3366', '#FFFFFF'],
      rating: 4.8,
      isNew: true
    },
    {
      id: 2,
      name: 'Adidas Ultraboost 21',
      price: 15990,
      image: 'https://i.pinimg.com/736x/70/e2/f4/70e2f4b7307a9306729257e91b1e0336.jpg',
      brand: 'Adidas',
      colors: ['#000000', '#0C4A8A'],
      rating: 4.9,
      isBestSeller: true
    },
    {
      id: 3,
      name: 'Reebok Classic Leather',
      price: 8990,
      image: 'https://i.pinimg.com/736x/51/94/99/51949996a7415c002eac40a13b500c95.jpg',
      brand: 'Reebok',
      colors: ['#FFFFFF', '#E41E26'],
      rating: 4.5
    },
    {
      id: 4,
      name: 'Converse Chuck Taylor',
      price: 5990,
      oldPrice: 7990,
      image: 'https://i.pinimg.com/736x/6b/2e/97/6b2e9708d4d5cb9c188d28b97c20df7a.jpg',
      brand: 'Converse',
      colors: ['#000000', '#FFFFFF', '#FF0000'],
      rating: 4.7
    },
    {
      id: 5,
      name: 'Puma RS-X3',
      price: 9990,
      image: 'https://i.pinimg.com/736x/0a/2d/ae/0a2dae5a0b23e985c241bbc8ae2d2b82.jpg',
      brand: 'Puma',
      colors: ['#333333', '#FF9900'],
      rating: 4.3
    },
    {
      id: 6,
      name: 'New Balance 997H',
      price: 10990,
      image: 'https://i.pinimg.com/736x/8b/1b/6f/8b1b6fd84a0f3f067689a6333e98ca21.jpg',
      brand: 'New Balance',
      colors: ['#888', '#004080'],
      rating: 4.6,
      isBestSeller: true
    },
    {
      id: 7,
      name: 'Nike Blazer Mid',
      price: 8490,
      oldPrice: 9490,
      image: 'https://i.pinimg.com/736x/72/ad/87/72ad87d04cc61040619b5a8410227422.jpg',
      brand: 'Nike',
      colors: ['#FFFFFF', '#FF5733'],
      rating: 4.4
    },
    {
      id: 8,
      name: 'Adidas Yeezy Boost 350',
      price: 22990,
      image: 'https://i.pinimg.com/736x/0e/3b/4f/0e3b4fdc6ec706d2943928e3dc8481b2.jpg',
      brand: 'Adidas',
      colors: ['#E0E0E0', '#333333'],
      rating: 4.9
    },
    {
      id: 9,
      name: 'Nike Air Force 1',
      price: 9990,
      image: 'https://i.pinimg.com/736x/32/ad/d0/32add06d05698c44a19f416ff3e1f116.jpg',
      brand: 'Nike',
      colors: ['#FFFFFF'],
      rating: 4.7
    },
    {
      id: 10,
      name: 'Vans Old Skool',
      price: 7490,
      image: 'https://i.pinimg.com/736x/8a/69/6d/8a696dac71dedde0a64b2b77938f0723.jpg',
      brand: 'Vans',
      colors: ['#000000', '#FFFFFF'],
      rating: 4.5
    },
    {
      id: 11,
      name: 'Reebok Zig Kinetica',
      price: 11290,
      image: 'https://i.pinimg.com/736x/94/20/c9/9420c987c7ef1e04f619bc45e51a76d0.jpg',
      brand: 'Reebok',
      colors: ['#FF0000', '#000000'],
      rating: 4.6
    },
    {
      id: 12,
      name: 'Puma Cali Sport',
      price: 8690,
      image: 'https://i.pinimg.com/736x/df/55/17/df551753b17180fc508223bdcbaf9f16.jpg',
      brand: 'Puma',
      colors: ['#FFF', '#FFC0CB'],
      rating: 4.2
    },
    {
      id: 13,
      name: 'New Balance 574',
      price: 9790,
      image: 'https://i.pinimg.com/736x/f9/76/2d/f9762dcc6f73d20534f1524d7a7d5d1b.jpg',
      brand: 'New Balance',
      colors: ['#A9A9A9', '#000000'],
      rating: 4.5
    },
    {
      id: 14,
      name: 'Nike ZoomX Invincible',
      price: 13990,
      image: 'https://i.pinimg.com/736x/e3/77/f1/e377f1d56f9466e5243dcfb0834b5e4b.jpg',
      brand: 'Nike',
      colors: ['#00CED1', '#000'],
      rating: 4.8
    },
    {
      id: 15,
      name: 'Adidas NMD R1',
      price: 11990,
      image: 'https://i.pinimg.com/736x/0b/f0/fe/0bf0fe8456d4f7bd20be3c796e62ce96.jpg',
      brand: 'Adidas',
      colors: ['#FFFFFF', '#0000FF'],
      rating: 4.7
    },
    {
      id: 16,
      name: 'Vans SK8-Hi',
      price: 8290,
      image: 'https://i.pinimg.com/736x/77/55/1b/77551bc58e0e4b56698eef8f1119956e.jpg',
      brand: 'Vans',
      colors: ['#000', '#FFFFFF'],
      rating: 4.4
    },
    {
      id: 17,
      name: 'Reebok Nano X1',
      price: 10290,
      image: 'https://i.pinimg.com/736x/7e/ad/27/7ead272c25b9127ff7f3c631ffb5ff09.jpg',
      brand: 'Reebok',
      colors: ['#666666', '#FF0000'],
      rating: 4.6
    },
    {
      id: 18,
      name: 'Nike React Infinity Run',
      price: 12990,
      image: 'https://i.pinimg.com/736x/d7/ee/02/d7ee02f7331bf0b92907229be8e6fa0c.jpg',
      brand: 'Nike',
      colors: ['#000000', '#F5F5F5'],
      rating: 4.9
    },
    {
      id: 19,
      name: 'Adidas Superstar',
      price: 8890,
      image: 'https://i.pinimg.com/736x/e1/17/5c/e1175c8c7389392a501725b0204e49d7.jpg',
      brand: 'Adidas',
      colors: ['#FFF', '#000'],
      rating: 4.6
    },
    {
      id: 20,
      name: 'Puma Future Rider',
      price: 8990,
      image: 'https://i.pinimg.com/736x/e0/90/56/e09056fa953b799c05099b92a6da18d1.jpg',
      brand: 'Puma',
      colors: ['#00FF00', '#000000'],
      rating: 4.3
    }
  ];

  const featuredProducts = products.slice(0, 4);
  const allProducts = products;

  const toggleShowAll = () => {
    setShowAllProducts(!showAllProducts);
  };

  return (
    <section className={styles.featured} id="products">
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Каталог</h2>
        <button onClick={toggleShowAll} className={styles.viewAll}>
          {showAllProducts ? (
            <>
              Свернуть <FiChevronUp />
            </>
          ) : (
            <>
              Смотреть все <FiArrowRight />
            </>
          )}
        </button>
      </div>

      <div className={styles.productsGrid}>
        {(showAllProducts ? allProducts : featuredProducts).map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            animationDelay={index * 0.05}
          />
        ))}
      </div>


      {showAllProducts && (
        <div className={styles.collapseContainer}>
          <button onClick={toggleShowAll} className={styles.collapseButton}>
            <FiChevronUp /> Свернуть каталог
          </button>
        </div>
      )}
    </section>
  );
};

export default FeaturedProducts;