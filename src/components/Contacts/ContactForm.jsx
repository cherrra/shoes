import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import { FiSend, FiPhone, FiMail, FiClock, FiX } from 'react-icons/fi';

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
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [hasReadPrivacyPolicy, setHasReadPrivacyPolicy] = useState(false);

  const scriptURL = 'https://script.google.com/macros/s/AKfycbz6GWZuzsCUeOOfy60F_evoz_pWOStCju7kGI_dR9Nr-os1BalXS7gU51EFspC5wrh9UA/exec';

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handlePhoneClick = () => {
    const phoneNumber = '+71234567890'.replace(/\D/g, '');
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@sneakershop.com';
  };

  const togglePrivacyPolicy = () => {
    setShowPrivacyPolicy(!showPrivacyPolicy);
  };

  const handleAcceptPolicy = () => {
    setHasReadPrivacyPolicy(true);
    setFormData(prev => ({ ...prev, agreement: true }));
    setShowPrivacyPolicy(false);
  };

  const validateForm = () => {
    if (!formData.name || !formData.phone || !formData.email) {
      setFormMessage({
        text: 'Пожалуйста, заполните все обязательные поля',
        type: 'error'
      });
      return false;
    }
    
    if (!formData.agreement || !hasReadPrivacyPolicy) {
      setFormMessage({
        text: 'Необходимо прочитать и принять политику конфиденциальности',
        type: 'error'
      });
      setShowPrivacyPolicy(true);
      return false;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setFormMessage({
        text: 'Пожалуйста, введите корректный email',
        type: 'error'
      });
      return false;
    }
    
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
      
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        agreement: false
      });
      setHasReadPrivacyPolicy(false);
      
    } catch (error) {
      console.error('Error:', error);
      setFormMessage({
        text: 'Ошибка при отправке. Пожалуйста, попробуйте еще раз.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
      
      if (formMessage.type === 'success') {
        setTimeout(() => {
          setFormMessage({ text: '', type: '' });
        }, 5000);
      }
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <h2 className={styles.contactTitle}>
            <span className={styles.titleLine}>Свяжитесь с нами</span>
            <span className={styles.titleLine}>любым удобным способом</span>
          </h2>
          
          <div className={styles.contactDetails}>
            <div 
              className={styles.contactItem} 
              onClick={handlePhoneClick}
            >
              <div className={styles.contactIcon}>
                <FiPhone />
              </div>
              <div className={styles.contactText}>
                <h3>Телефон</h3>
                <p>+7 (911) 805-74-18</p>
              </div>
            </div>
            
            <div 
              className={styles.contactItem} 
              onClick={handleEmailClick}
            >
              <div className={styles.contactIcon}>
                <FiMail />
              </div>
              <div className={styles.contactText}>
                <h3>Email</h3>
                <p>info@dreamsneakers.ru</p>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <FiClock />
              </div>
              <div className={styles.contactText}>
                <h3>Часы работы</h3>
                <p>Пн-Пт: 9:00 - 20:00</p>
              </div>
            </div>
          </div>
        </div>
        
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h3 className={styles.formTitle}>Оставьте заявку</h3>
          <p className={styles.formSubtitle}>Мы свяжемся с вами в течение 15 минут</p>
          
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <input 
                type="text" 
                name="name"
                className={styles.formInput} 
                placeholder="Ваше имя *" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className={styles.formGroup}>
              <input 
                type="tel" 
                name="phone"
                className={styles.formInput} 
                placeholder="Телефон *" 
                value={formData.phone}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className={styles.formGroup}>
              <input 
                type="email" 
                name="email"
                className={styles.formInput} 
                placeholder="Email *" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className={styles.formGroup}>
              <textarea 
                name="message"
                className={styles.formTextarea} 
                placeholder="Ваше сообщение..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          
          <div className={styles.formFooter}>
            <label className={styles.checkboxLabel}>
              <input 
                type="checkbox" 
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
                required
                disabled={!hasReadPrivacyPolicy}
              />
              <span className={styles.checkboxCustom}></span>
              <span>
                Согласен с{' '}
                <button 
                  type="button" 
                  className={styles.agreementLink}
                  onClick={togglePrivacyPolicy}
                >
                  политикой конфиденциальности
                </button>
              </span>
            </label>
            
            {formMessage.text && (
              <div className={`${styles.formMessage} ${styles[formMessage.type]}`}>
                {formMessage.text}
              </div>
            )}
            
            <button 
              type="submit" 
              className={styles.submitBtn}
              disabled={isSubmitting || !hasReadPrivacyPolicy}
            >
              <FiSend className={styles.submitIcon} />
              {isSubmitting ? 'Отправляем...' : 'Отправить заявку'}
            </button>
          </div>
        </form>
      </div>

      {/* Модальное окно политики конфиденциальности */}
      {showPrivacyPolicy && (
        <div className={styles.privacyModal}>
          <div className={styles.modalContent}>
            <button 
              className={styles.closeButton}
              onClick={togglePrivacyPolicy}
            >
              <FiX />
            </button>
            
            <h3 className={styles.modalTitle}>Политика конфиденциальности</h3>
            
            <div className={styles.modalText}>
              <p>1. Общие положения</p>
              <p>1.1. Настоящая Политика конфиденциальности регулирует порядок обработки и защиты персональных данных пользователей сайта SneakerShop.</p>
              
              <p>2. Состав персональных данных</p>
              <p>2.1. Мы собираем только необходимые данные: имя, контактный телефон, email и текст сообщения.</p>
              
              <p>3. Цели обработки данных</p>
              <p>3.1. Данные используются исключительно для обработки вашего запроса и обратной связи.</p>
              
              <p>4. Защита персональных данных</p>
              <p>4.1. Мы гарантируем конфиденциальность полученных данных и не передаем их третьим лицам.</p>
              
              <p>5. Срок хранения данных</p>
              <p>5.1. Ваши данные хранятся ровно столько, сколько необходимо для обработки запроса.</p>
            </div>
            
            <button 
              className={styles.acceptButton}
              onClick={handleAcceptPolicy}
            >
              Я прочитал и принимаю условия
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactForm;