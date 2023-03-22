import React, { useState, useEffect, useRef } from "react";



const palabras = ["Variedad de productos, Compra más, paga menos",  "Ahorra  dinero Grandes ahorros Precios bajos Ofertas exclusivas"];

const Scrollspy = () => {

    const divP = useRef(null)
    const palabra = useRef(null)





  const [ultimaPosicion, setUltimaPosicion] = useState(1500);


  const [removerClase, setRemoverClase] = useState(false);



  const [mostrarPalabras, setMostrarPalabras] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      const posicionUsuario = window.scrollY;


      if (posicionUsuario > ultimaPosicion) {

       
            setMostrarPalabras(true);





      } 
        

        

      

      setUltimaPosicion(posicionUsuario);
    };

    // const handleScrollInverse = () => {
    //     const posicionUsuarioInv = window.scrollY;
  
    //     if (posicionUsuario > ultimaPosicion) {
    //       setMostrarPalabras(!mostrarPalabras);
    //     } else {
    //       setMostrarPalabras(false);
    //     }
  
    //     setUltimaPosicion(posicionUsuario);
    //   };
    

    window.addEventListener("scroll", handleScroll);

    // return () => {
    //     window.addEventListener("scroll", handleScroll);
    // };
  }, [mostrarPalabras]);



  return (
    <div  className="w-100 d-flex flex-column h-100">
    {mostrarPalabras &&
      palabras.map((palabra, index) => (
        <div key={index} className="activado">
          <p>{palabra}</p>
        </div>
      ))}
  </div>
        

// {errors.Err[0] ?
//     <span className=" text-red-500 w-full text-center">{errors.Err[0].msg} </span>
// :

// <span className=" hidden	"></span>


// }
  );
};

export default Scrollspy;
