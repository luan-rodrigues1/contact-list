import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './styles/global'
import { AccessProvider } from './contexts/AccessContext'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AccessProvider>
        <GlobalStyle/>
        <App />
      </AccessProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
