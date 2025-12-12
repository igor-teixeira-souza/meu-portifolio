import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import emailjs from '@emailjs/browser'

// Inicialize o EmailJS com sua Public Key
emailjs.init({
  publicKey: 'UdPaaV8tIgTxRC8wX', // ← SUA CHAVE AQUI
  // Opções adicionais (opcional)
  blockHeadless: true,
  blockList: {
    // Bloqueia listas específicas (opcional)
  },
  limitRate: {
    // Limita a taxa de envio (opcional)
    id: 'app',
    throttle: 10000, // 10 segundos
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)