import React from 'react'
import Cuerpo from './componentes/main/cuerpo'
import Header from './componentes/header/Header'
import ReactDOM from 'react-dom/client'
import Footer from './componentes/footer/Footer'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Cuerpo />
    <Footer />
  </React.StrictMode>
)
