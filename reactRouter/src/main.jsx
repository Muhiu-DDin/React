import { createRoot } from 'react-dom/client'
import { ThemeContextProvider } from './context/themeContext.jsx'
import UserContProvider from './context/userContext.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
  <UserContProvider>
    <App />
  </UserContProvider>
  </ThemeContextProvider>
)
