
import { createRoot } from 'react-dom/client'
import React from 'react'

//import './index.css'
import App from './App.jsx'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  
    <React.StrictMode>
    <BrowserRouter>
    <PrimeReactProvider>
    <App />
    </PrimeReactProvider>
    </BrowserRouter>
    </React.StrictMode>
  
)
