import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
 QueryClientProvider , QueryClient
} from 'react-query'
import App from './App.jsx'
import './index.css'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
          <App />
    </StrictMode>
  </QueryClientProvider>
)
