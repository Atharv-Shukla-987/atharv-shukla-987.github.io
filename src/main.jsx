import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter} from 'react-router-dom'
import StairAni from './components/common/StairAni.jsx'
import Navbar from './components/Navigation/Navbar.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
  <StairAni/>
  <App />
    </BrowserRouter>
  </StrictMode>
)
