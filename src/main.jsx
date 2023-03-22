import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

  //  desktop
import "../public/css/home.css";
import "../public/css/beauty.css";
import "../public/css/navbarAndFooter.css";
import "../public/css/carousel.css";
import "../public/css/supermercado.css";
  //  phone
  import "../public/css/cssphone/homePhone.css";
  import "../public/css/cssphone/navbarAndFooterPhone.css";
  import "../public/css/cssphone/carouselPhone.css";
  import "../public/css/cssphone/supermercadoPhone.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
