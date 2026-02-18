import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './context/ThemeContext'
import { LoaderProvider } from './context/LoaderContext'
import { ComponyDetailProvider } from './context/componyContext.tsx'
import App from './App.tsx'
import './styles/globals.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ComponyDetailProvider>
        <LoaderProvider>
          <App />
        </LoaderProvider>
      </ComponyDetailProvider>
    </ThemeProvider>
  </StrictMode>,
)
