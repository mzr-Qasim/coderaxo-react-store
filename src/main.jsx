import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/bootstrap/js/bootstrap.bundle.min.js";
import './index.css'


import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
