import React from 'react'
import Header from './componentes/header/Header'
import ReactDOM from 'react-dom/client'
import Footer from './componentes/footer/Footer'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Footer />
  </React.StrictMode>
)
