import { createRoot } from 'react-dom/client'
import {CartContextProvider} from './context/cartContext.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <CartContextProvider>
    <App />
  </CartContextProvider>
)
