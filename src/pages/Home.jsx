import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import About from '../components/About/About';
import Testimonials from '../components/Testimonials/Testimonials';
import Footer from '../components/Footer/Footer';
import ContactForm from '../components/Contacts/ContactForm';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <About />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Home;