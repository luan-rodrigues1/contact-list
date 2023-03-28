import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './styles/global'
import { AccessProvider } from './contexts/AccessContext'
import { ContactProvider } from './contexts/ContactContext'
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AccessProvider>
        <ContactProvider>
          <GlobalStyle/>
          <App />
          <ToastContainer
            autoClose={2000}
          />
        </ContactProvider>
      </AccessProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
