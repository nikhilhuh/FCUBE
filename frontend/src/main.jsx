import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from './context/Context.jsx';  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter
        future={{
          v7_startTransition: true,    // Enables the startTransition wrapping behavior
          v7_relativeSplatPath: true,  // Opts into the new route resolution for splats
        }}
      >
       <App />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>,
)
