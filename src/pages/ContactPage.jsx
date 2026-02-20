import { useState } from "react";
import { useTranslation } from 'react-i18next';
import LazyParticlesBackground from '../components/LazyParticlesBackground'; // Changed import
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
      });

      if (response.ok) {
        setStatus(t('contactPage.successMessage'));
        form.reset();
      } else {
        setStatus(t('contactPage.errorMessage'));
      }
    } catch (error) {
      setStatus(t('contactPage.errorMessage', error));
    }
  }

  return (
    <section id="contacto" className="max-w-2xl mx-auto relative">
      <LazyParticlesBackground options={contactParticlesOptions} className="z-0 pointer-events-none" /> {/* Changed to LazyParticlesBackground, added z-0 and pointer-events-none */}
      <h1 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary relative z-10">{t('contactPage.title')}</h1> {/* Added relative z-10 */}
      <form
        onSubmit={handleSubmit}
        action="https://formspree.io/f/xrbydawv"
        method="POST"
        className="space-y-6 relative z-10" 
      >
        <div className="mb-8 p-8 rounded-lg bg-gradient-to-r from-primary via-secondary to-background animate-gradient-flow" style={{ backgroundSize: '400% 400%' }}> {/* Outer gradient div */}
          <div className="bg-background p-6 rounded-lg shadow-md hover:shadow-primary/30 transition-shadow"> {/* Inner solid background div */}
            <label htmlFor="email" className="block text-sm font-normal text-text/90">{t('contactPage.emailLabel')}</label>
            <input id="email" type="email" name="email" required className="mt-1 block w-full bg-background border-2 border-primary rounded-md py-2 px-3 text-black dark:text-white focus:ring-2 focus:ring-primary focus:border-primary focus:shadow-md" />
          </div>
        </div>
        <div className="mb-8 p-8 rounded-lg bg-gradient-to-r from-primary via-secondary to-background animate-gradient-flow" style={{ backgroundSize: '400% 400%' }}> {/* Outer gradient div */}
          <div className="bg-background p-6 rounded-lg shadow-md hover:shadow-primary/30 transition-shadow"> {/* Inner solid background div */}
            <label htmlFor="message" className="block text-sm font-normal text-text/90">{t('contactPage.messageLabel')}</label>
            <textarea id="message" name="message" rows="4" required className="mt-1 block w-full bg-background border-2 border-primary rounded-md py-2 px-3 text-black dark:text-white focus:ring-2 focus:ring-primary focus:border-primary focus:shadow-md"></textarea>
          </div>
        </div>
        <div>
          <button type="submit" className="w-full bg-primary hover:bg-primary/80 text-background font-bold py-3 px-4 rounded-md transition-colors duration-300">
            {t('contactPage.submitButton')}
          </button>
        </div>
      </form>
      {status && <p className="mt-4 text-center text-primary/70 relative z-10">{status}</p>} {/* Added relative z-10 */}
    </section>
  )
};
export default ContactPage;