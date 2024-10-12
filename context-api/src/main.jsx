import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GloabalState from './context/index.jsx'

createRoot(document.getElementById('root')).render(
  <GloabalState>
    <App />
  </GloabalState>,
)
