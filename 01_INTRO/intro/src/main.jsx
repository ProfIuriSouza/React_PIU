import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HelloWorld from "./HelloWorld.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <HelloWorld />
  </StrictMode>
)
