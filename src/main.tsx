import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './styles/global'
import { AccessProvider } from './contexts/AccessContext'
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AccessProvider>
        <GlobalStyle/>
        <App />
        <ToastContainer
          autoClose={1700}
        />
      </AccessProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
