import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import App from './App.jsx'
import PrivacyPolicy from './PrivacyPolicy.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <HashRouter>
     <Routes>
     <Route path="/" element={<App />} />
     <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      </HashRouter>
  </React.StrictMode>,
)
