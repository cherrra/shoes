import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    agreement: false
  });
  
  const [formMessage, setFormMessage] = useState({
    text: '',
    type: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scriptURL = 'https://script.google.com/macros/s/AKfycbz6GWZuzsCUeOOfy60F_evoz_pWOStCju7kGI_dR9Nr-os1BalXS7gU51EFspC5wrh9UA/exec';

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    // Проверка заполнения обязательных полей
    if (!formData.name || !formData.phone || !formData.email) {
      setFormMessage({
        text: 'Пожалуйста, заполните все обязательные поля',
        type: 'error'
      });
      return false;
    }
    
    // Проверка согласия с условиями
    if (!formData.agreement) {
      setFormMessage({
        text: 'Необходимо согласиться с условиями обработки данных',
        type: 'error'
      });
      return false;
    }
    
    // Валидация email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setFormMessage({
        text: 'Пожалуйста, введите корректный email',
        type: 'error'
      });
      return false;
    }
    
    // Валидация телефона (минимум 10 цифр)
    if (formData.phone.replace(/\D/g, '').length < 10) {
      setFormMessage({
        text: 'Пожалуйста, введите корректный номер телефона',
        type: 'error'
      });
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('phone', formData.phone);
      payload.append('email', formData.email);
      payload.append('message', formData.message);
      payload.append('timestamp', new Date().toLocaleString());
      
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: payload,
        mode: 'no-cors'
      });
      
      setFormMessage({
        text: 'Спасибо! Ваша заявка отправлена.',
        type: 'success'
      });
      
      // Очищаем форму
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        agreement: false
      });
      
    } catch (error) {
      console.error('Error:', error);
      setFormMessage({
        text: 'Ошибка при отправке. Пожалуйста, попробуйте еще раз.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
      
      // Очищаем сообщение об успехе через 5 секунд
      if (formMessage.type === 'success') {
        setTimeout(() => {
          setFormMessage({ text: '', type: '' });
        }, 5000);
      }
    }
  };

  const handlePhoneClick = () => {
    const phoneNumber = '+71234567890'.replace(/\D/g, '');
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@sneakershop.com';
  };

  return (
    <section className={styles.contact}>
      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <h2 className={styles.contactTitle}>Оставьте заявку</h2>
          <p className={styles.contactText}>
            Заполните форму и наш менеджер свяжется с вами для уточнения деталей.
          </p>
          
          <div className={styles.contactDetails}>
            <div 
              className={styles.contactItem} 
              onClick={handlePhoneClick}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.contactIcon}>
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <h3>Телефон</h3>
                <p>+7 (123) 456-78-90</p>
              </div>
            </div>
            
            <div 
              className={styles.contactItem} 
              onClick={handleEmailClick}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.contactIcon}>
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h3>Email</h3>
                <p>info@sneakershop.com</p>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <i className="fas fa-clock"></i>
              </div>
              <div>
                <h3>Часы работы</h3>
                <p>Пн-Пт: 9:00 - 20:00</p>
              </div>
            </div>
          </div>
        </div>
        
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>Ваше имя *</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              className={styles.formInput} 
              placeholder="Иван Иванов" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.formLabel}>Телефон *</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone"
              className={styles.formInput} 
              placeholder="+7 (___) ___-__-__" 
              value={formData.phone}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>Email *</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              className={styles.formInput} 
              placeholder="example@mail.com" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>Ваше сообщение</label>
            <textarea 
              id="message" 
              name="message"
              className={styles.formTextarea} 
              placeholder="Опишите ваш заказ..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.checkboxLabel}>
              <input 
                type="checkbox" 
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
                required
              />
              <span>Я согласен с <a href="#" className={styles.agreementLink}>условиями обработки персональных данных</a></span>
            </label>
          </div>
          
          {formMessage.text && (
            <div className={`${styles.formMessage} ${styles[formMessage.type]}`}>
              {formMessage.text}
            </div>
          )}
          
          <button 
            type="submit" 
            className={styles.submitBtn}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;