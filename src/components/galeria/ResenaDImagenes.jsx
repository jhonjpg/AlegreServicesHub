import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from 'react';


const ResenaDImagenes = () => {



    const immg = [
        
        { 
            
            fotos: [
        'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1200',
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1200",
        'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1200',
        "https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=1200",
        



    ],

          nombres:   ["pedro" , "luisa", "maria", "juana", "tom", "pablo","juan" , "mario ", "taisha", "dario", "tomy", "jaszmin"],



          resenas: ["Excelente servicio al cliente" , "El personal es muy amable y servicial.", "Los productos son de alta calidad.", "El ambiente es acogedor y agradable.", "El precio es razonable en comparación con otros lugares similares.", "La ubicación es conveniente y de fácil acceso.","Siempre hay promociones y descuentos disponibles." , "La comida es deliciosa y fresca.", "Los tiempos de espera son mínimos, incluso en horas pico.", "El lugar está muy bien decorado y diseñado.", "La rapidez y eficiencia del servicio son impresionantes.", "La variedad de opciones en el menú es genial, siempre hay algo nuevo por probar."]
          

        }


    ]

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        //   slidesToSlide: 3 // optional, default to 1.

        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    return (

        <>


            <Carousel
                autoPlay={true}
                infinite={true}
                autoPlaySpeed={3000}
                responsive={responsive}>

                {immg[0].fotos.map((imageUrl, index) => (

                    <article key={index} className="cardt">
                      
                        <div className="temporary_text">
                           
                            <div className="cardno-img">

                                <img src={imageUrl} alt={`ee ${index}`} />
                            </div>

                        </div>




                        <div className="card_content">
                            
                        <span className="card_name">{immg[0].nombres[index]}</span>
                            <p className="card_title">{immg[0].resenas[index]}</p>

                        </div>





                    </article>

                ))}
            </Carousel>

        </>
    )

}

export default ResenaDImagenes