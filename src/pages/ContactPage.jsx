import { useState } from "react";
import { useTranslation } from 'react-i18next';
import ParticlesBackground from '../components/ParticlesBackground';
import { contactParticlesOptions } from '../config/particles-contact-config';

const ContactPage = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': "application/json",
        },
      });

      if (response.ok) {
        setStatus(t('contactPage.successMessage'));
        form.reset();
      } else {
        setStatus(t('contactPage.errorMessage'));
      }
    } catch (error) {
      setStatus(t('contactPage.errorMessage'));
    }
  }

  return (
    <section id="contacto" className="max-w-2xl mx-auto relative">
      <ParticlesBackground options={contactParticlesOptions} />
      <h2 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">{t('contactPage.title')}</h2>
      <form
        onSubmit={handleSubmit}
        action="https://formspree.io/f/xrbydawv"
        method="POST"
        className="space-y-6"
      >
        <div>
          <label htmlFor="email" className="block text-sm font-normal text-text/90">{t('contactPage.emailLabel')}</label>
          <input id="email" type="email" name="email" required className="mt-1 block w-full bg-background border border-primary/30 rounded-md py-2 px-3 text-text focus:ring-primary focus:border-primary" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-normal text-text/90">{t('contactPage.messageLabel')}</label>
          <textarea id="message" name="message" rows="4" required className="mt-1 block w-full bg-background border border-primary/30 rounded-md py-2 px-3 text-text focus:ring-primary focus:border-primary"></textarea>
        </div>
        <div>
          <button type="submit" className="w-full bg-primary hover:bg-primary/80 text-background font-bold py-3 px-4 rounded-md transition-colors duration-300">
            {t('contactPage.submitButton')}
          </button>
        </div>
      </form>
      {status && <p className="mt-4 text-center text-primary/70">{status}</p>}
    </section>
  )
};
export default ContactPage;