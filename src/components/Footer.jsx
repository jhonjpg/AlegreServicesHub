import React from 'react'

const Footer = () => {
  return (


    <footer className="d-flex justify-content-center flex-column align-items-center text-center w-100  text-lg-start  text-muted">
        
      <div className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      
        <div className="me-5   fs-2 d-none d-lg-block ">
          <span className="text-center ">Contactanos para mas Informacion:</span>
        </div>
    
        <div>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    
      <div className="">
        <div className="containe text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>supermercado alegre
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
           
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Pisos
              </h6>
              <p>
                <a href="#!" className="text-reset">home</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Primero</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Segundo</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Tercero</a>
              </p>
            </div>
           
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                encuentranos
              </h6>
              <p>
                <a href="#!" className="text-reset">Instagram</a>
              </p>
              <p>
                <a href="#!" className="text-reset">localizacion</a>
              </p>
              <p>
                <a href="#!" className="text-reset">facebook</a>
              </p>
              <p>
                <a href="#!" className="text-reset">telefono</a>
              </p>
            </div>
           
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i> Licey Al Medio, calle Duarte, Santiago</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                alegregtv@hotmail.com
              </p>
              <p><i className="fas fa-phone me-3"></i> 809-456-3232</p>
              <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>
          </div>
        </div>
      </div>
    
    
      <div className="text-center p-4">
      © Website developed by P v G - Web Design
      </div>

    </footer>
    
    )
}

export default Footer