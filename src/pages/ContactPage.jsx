import {useState} from "react";

const ContactPage = () => {
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

      if(response.ok) {
        setStatus('¡Gracias por tu mensaje!');
        form.reset();
      } else {
        setStatus('Ocurrió un error al enviar el mensaje');
      }
    } catch (error) {
      setStatus('Ocurrió un error al enviar el mensaje');
    }
  }
  return (
    <section id="contacto" className="max-w-2xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-800">Hablemos</h2>
    <form
      onSubmit={handleSubmit}
      action="https://formspree.io/f/xrbydawv"
      method="POST"
      className="space-y-6"
    >
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-300">Tu Email</label>
        <input id="email" type="email" name="email" required className="mt-1 block w-full bg-slate-800 border border-slate-600 rounded-md py-2 px-3 text-white focus:ring-cyan-500 focus:border-cyan-500" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-300">Mensaje</label>
        <textarea id="message" name="message" rows="4" required className="mt-1 block w-full bg-slate-800 border border-slate-600 rounded-md py-2 px-3 text-white focus:ring-cyan-500 focus:border-cyan-500"></textarea>
      </div>
      <div>
        <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300">
          Enviar Mensaje
        </button>
      </div>
    </form>
    {status && <p className="mt-4 text-center text-slate-400">{status}</p>}
  </section>
  )
};
export default ContactPage;