import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import './i18n.js';
import './App.css';
import { ParticlesProvider } from './context/ParticlesProvider.jsx';
import { HelmetProvider } from 'react-helmet-async'; // Importar HelmetProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider> {/* Envolver la aplicación con HelmetProvider */}
      <ParticlesProvider>
        <BrowserRouter>        
            <App />
        </BrowserRouter>
      </ParticlesProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
