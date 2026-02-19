import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { LoaderProvider } from './context/LoaderContext'
import { ComponyDetailProvider } from './context/componyContext.tsx'
import App from './App.tsx'
import './styles/globals.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ComponyDetailProvider>
          <LoaderProvider>
            <App />
          </LoaderProvider>
        </ComponyDetailProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
