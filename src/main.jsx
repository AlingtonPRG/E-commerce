import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import ClothContextProvider from './Context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ClothContextProvider>
      <App />
      </ClothContextProvider>
    </Router>
  </React.StrictMode>,
)
