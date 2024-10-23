import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {QueryClient , QueryClientProvider} from "react-query"
import App from './App.jsx'
import './index.css'

const quertClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={quertClient}>
    <StrictMode>
        <App /> 
    </StrictMode>
  </QueryClientProvider>
)
