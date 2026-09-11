import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaUser, FaPaperPlane } from 'react-icons/fa';
import LazyParticlesBackground from '../components/LazyParticlesBackground';
import { contactParticlesOptions } from '../config/particles-contact-config';

const ContactPage = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus({ type: 'success', text: t('contactPage.successMessage') });
        form.reset();
      } else {
        setStatus({ type: 'error', text: t('contactPage.errorMessage') });
      }
    } catch (error) {
      setStatus({ type: 'error', text: t('contactPage.errorMessage') });
    } finally {
      setLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: <FaWhatsapp className="w-6 h-6 text-[#25D366]" />,
      title: t('contactPage.phone'),
      value: '+52 56 3305 7702',
      link: 'https://wa.me/525633057702?text=Hola%20Carlos,%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte.',
      color: 'hover:border-[#25D366]/50 hover:shadow-[#25D366]/10'
    },
    {
      icon: <FaEnvelope className="w-6 h-6 text-primary" />,
      title: t('contactPage.email'),
      value: 'carlosmen351@gmail.com',
      link: 'mailto:carlosmen351@gmail.com',
      color: 'hover:border-primary/50 hover:shadow-primary/10'
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6 text-red-500" />,
      title: t('contactPage.location'),
      value: t('contactPage.locationValue'),
      link: null,
      color: 'hover:border-red-500/30'
    }
  ];

  const socialLinks = [
    { icon: <FaGithub className="w-5 h-5" />, url: 'https://github.com/carlosmen351', label: 'GitHub', color: 'hover:text-text hover:bg-slate-800' },
    { icon: <FaLinkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/carlosmen351/', label: 'LinkedIn', color: 'hover:text-white hover:bg-[#0A66C2]' },
    { icon: <FaTwitter className="w-5 h-5" />, url: 'https://twitter.com/', label: 'Twitter/X', color: 'hover:text-white hover:bg-sky-500' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="contacto" className="max-w-6xl mx-auto relative px-4 py-8">
      <LazyParticlesBackground options={contactParticlesOptions} className="z-0 pointer-events-none" />
      
      {/* Header */}
      <motion.div 
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
          {t('contactPage.title')}
        </h1>
        <p className="mt-4 text-lg text-text/70 max-w-2xl mx-auto">
          {t('contactPage.subtitle')}
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid lg:grid-cols-12 gap-12 relative z-10"
      >
        {/* Left Column: Direct Contact Info */}
        <motion.div variants={itemVariants} className="lg:col-span-5 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-text mb-2">{t('contactPage.infoTitle')}</h2>
            <p className="text-sm text-text/60">{t('contactPage.infoSubtitle')}</p>
          </div>

          {/* Cards de contacto */}
          <div className="space-y-4">
            {contactMethods.map((method, idx) => (
              <div key={idx}>
                {method.link ? (
                  <a 
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-slate-900/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/60 shadow-lg ${method.color}`}
                  >
                    <div className="p-3 rounded-lg bg-slate-800/50">
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-text/50 uppercase tracking-wider">{method.title}</h4>
                      <p className="text-sm font-bold text-text mt-1">{method.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className={`flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-slate-900/40 backdrop-blur-md transition-all duration-300 shadow-lg ${method.color}`}>
                    <div className="p-3 rounded-lg bg-slate-800/50">
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-text/50 uppercase tracking-wider">{method.title}</h4>
                      <p className="text-sm font-bold text-text mt-1">{method.value}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="p-6 rounded-xl border border-white/5 bg-slate-900/20 backdrop-blur-sm">
            <h3 className="text-sm font-semibold text-text/70 mb-4">{t('contactPage.socialTitle')}</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full border border-white/10 bg-slate-900/50 text-text/70 transition-all duration-300 hover:scale-115 ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Modern Email Form */}
        <motion.div variants={itemVariants} className="lg:col-span-7">
          <div className="relative p-1 rounded-2xl bg-gradient-to-br from-primary via-accent to-secondary/30">
            <div className="bg-background p-8 rounded-2xl shadow-2xl space-y-6">
              <h3 className="text-xl font-bold text-text">{t('contactPage.formTitle')}</h3>
              
              <form
                onSubmit={handleSubmit}
                action="https://formspree.io/f/xrbydawv"
                method="POST"
                className="space-y-5"
              >
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-text/70 uppercase tracking-wider mb-2">
                    {t('contactPage.nameLabel')}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text/40">
                      <FaUser className="w-4 h-4" />
                    </div>
                    <input 
                      id="name" 
                      type="text" 
                      name="name" 
                      required 
                      placeholder="John Doe"
                      className="block w-full bg-slate-900/20 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-text placeholder-text/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 animate-none"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-text/70 uppercase tracking-wider mb-2">
                    {t('contactPage.emailLabel')}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text/40">
                      <FaEnvelope className="w-4 h-4" />
                    </div>
                    <input 
                      id="email" 
                      type="email" 
                      name="email" 
                      required 
                      placeholder="john@example.com"
                      className="block w-full bg-slate-900/20 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-text placeholder-text/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 animate-none"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-text/70 uppercase tracking-wider mb-2">
                    {t('contactPage.messageLabel')}
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    required 
                    placeholder={t('contactPage.messageLabel') + '...'}
                    className="block w-full bg-slate-900/20 border border-white/10 rounded-lg py-3 px-4 text-text placeholder-text/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full relative flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/95 hover:to-accent/95 text-background font-extrabold py-4 px-6 rounded-lg shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <div className="w-6 h-6 border-2 border-background border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <FaPaperPlane className="w-4 h-4" />
                        <span>{t('contactPage.submitButton')}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Status Banner */}
              {status && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg text-sm text-center font-semibold ${
                    status.type === 'success' 
                      ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400' 
                      : 'bg-red-500/10 border border-red-500/20 text-red-400'
                  }`}
                >
                  {status.text}
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactPage;