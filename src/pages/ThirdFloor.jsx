import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SlickCarousel from '../components/SlickCarousel'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const ThirdFloor = () => {


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (

    <>

<main id="principal" className="d-flex flex-column w-100 ">

<Navbar/>

<section className=" ">

<div className="journey "> 


<div className="w-100 d-flex flex-column gap-3 justify-content-center align-items-center h-75"> <h3 className="z-3">Empieza tu Entrenamiento <span className="z-3">Hoy</span> </h3> <p className="z-3">es un gym center de licey al medio ve unete a nosotros   y empieza a start mas cerca de tu cuerpo deseado</p>

<button className="z-3"><i className="bi bi-telephone-fill"></i>  LLAMANOS</button>

</div>


<div className="equipment z-3">

<li>gymPro</li>
<li>gymPass</li>

</div>

<div className="opacity"></div>

</div>


<div className="aboutPerformance">

<div className="performance"> <span>MAS DE NOSOTROS</span>
<h4>ALEGREGYM</h4>
<aside className="w-100 d-flex flex-column gap-2">
<p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio, pariatur nobis consectetur quibusdam nulla odit sequi dignissimos est inventore incidunt tempora, suscipit rerum quae exercitationem enim! Nulla, iste quidem?
 </p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio, pariatur nobis consectetur quibusdam nulla odit sequi dignissimos est inventore incidunt tempora, suscipit rerum quae exercitationem enim! Nulla, iste quidem?
</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio, pariatur nobis consectetur quibusdam nulla odit sequi dignissimos est inventore incidunt tempora, suscipit rerum quae exercitationem enim! Nulla, iste quidem?
</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio, pariatur nobis consectetur quibusdam nulla odit sequi dignissimos est inventore incidunt tempora, suscipit rerum quae exercitationem enim! Nulla, iste quidem?
</p>


<button>Leer Mas</button>

</aside>
</div>

<div className="gymPic"></div>

</div>



<div className="whyUs">

<h4>SOMOS BUENOS PARA TODOS</h4>
<h5>POR QUE NOSOTROS?</h5>



<ul className="d-flex justify-content-around gap-4 flex-wrap  w-100 h-100">

  <li>
<h6> <i src  className="bi bi-controller"></i>   verdadera atmosfera de gym</h6>
<p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus perferendis similique itaque, numquam ex, voluptatem consequatur magni voluptate quod modi magnam, minus vero facilis illo praesentium iure eaque! Amet, deserunt!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis sequi odio beatae error molestias similique saepe adipisci, dolores inventore perspiciatis corrupti laboriosam optio omnis aspernatur, nihil sapiente temporibus quasi?</p>


  </li>
  <li><h6><i class="bi bi-capslock"></i>  verdadera atmosfera de gym</h6>
<p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus perferendis similique itaque, numquam ex, voluptatem consequatur magni voluptate quod modi magnam, minus vero facilis illo praesentium iure eaque! Amet, deserunt!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis sequi odio beatae error molestias similique saepe adipisci, dolores inventore perspiciatis corrupti laboriosam optio omnis aspernatur, nihil sapiente temporibus quasi?</p>
</li>
  <li><h6><i className="bi bi-ev-front-fill"></i>  verdadera atmosfera de gym</h6>
<p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus perferendis similique itaque, numquam ex, voluptatem consequatur magni voluptate quod modi magnam, minus vero facilis illo praesentium iure eaque! Amet, deserunt!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis sequi odio beatae error molestias similique saepe adipisci, dolores inventore perspiciatis corrupti laboriosam optio omnis aspernatur, nihil sapiente temporibus quasi?</p>
</li>
  <li><h6> <i class="bi bi-chevron-double-right"></i>  verdadera atmosfera de gym</h6>
<p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus perferendis similique itaque, numquam ex, voluptatem consequatur magni voluptate quod modi magnam, minus vero facilis illo praesentium iure eaque! Amet, deserunt!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis sequi odio beatae error molestias similique saepe adipisci, dolores inventore perspiciatis corrupti laboriosam optio omnis aspernatur, nihil sapiente temporibus quasi?</p>
</li>
</ul>

</div>

<div className="prices">
<h3 className="w-100 text-center fs-4">Primera entrada gratis</h3>
    <h4 className="w-100 text-center fs-1 ">PRECIOS</h4>
    </div>


<div className="entrance">


<div className="basic">

<strong>Basic</strong>

<h4>$39/month</h4>

<ul>

<li><i className="bi bi-check-circle-fill"></i> todo los beneficios</li>
<li><i className="bi bi-check-circle-fill"></i> todo special de entrenador </li>
<li><i className="bi bi-check-circle-fill"></i> Dos entrenadores personales gratis </li>
<li><i className="bi bi-check-circle-fill"></i> acceso al sauna </li>

</ul>

</div>

<div className="plus">


<strong>Plus</strong>

<h4>$59/month</h4>

<ul>

<li><i className="bi bi-check-circle-fill"></i> todo los beneficios</li>
<li><i className="bi bi-check-circle-fill"></i> todo special de entrenador </li>
<li><i className="bi bi-check-circle-fill"></i> Dos entrenadores personales gratis </li>
<li><i className="bi bi-check-circle-fill"></i> acceso al sauna </li>
<li><i className="bi bi-check-circle-fill"></i> todo special de entrenador </li>
<li><i className="bi bi-check-circle-fill"></i> Dos entrenadores personales gratis </li>
<li><i className="bi bi-check-circle-fill"></i> acceso al sauna </li>

</ul>

</div>


<div className="vip">


<strong>VIP</strong>

<h4>$99/month</h4>

<ul>

<li><i className="bi bi-check-circle-fill"></i> todo los beneficios</li>
<li><i className="bi bi-check-circle-fill"></i> todo special de entrenador </li>
<li><i className="bi bi-check-circle-fill"></i> Dos entrenadores personales gratis </li>
<li><i className="bi bi-check-circle-fill"></i> acceso al sauna </li>
<li><i className="bi bi-check-circle-fill"></i> todo special de entrenador </li>
<li><i className="bi bi-check-circle-fill"></i> Dos entrenadores personales gratis </li>
<li><i className="bi bi-check-circle-fill"></i> acceso al sauna </li>
<li><i className="bi bi-check-circle-fill"></i> acceso al sauna </li>


</ul>

</div>


</div>


{/* Phone  */}
<div className="phonePrices">


        <Slider {...settings}>
        <div className="d-flex flex-column justify-content-center align-item-center">

<strong>Basic</strong>

<h4>$39/month</h4>

<ul className="w-100 ">

<li><i className="bi bi-check-circle-fill"></i> todo los beneficios</li>
<li><i className="bi bi-check-circle-fill"></i> todo special de entrenador </li>
<li><i className="bi bi-check-circle-fill"></i> Dos entrenadores personales gratis </li>
<li><i className="bi bi-check-circle-fill"></i> acceso al sauna </li>

</ul>

</div>

<div className="plus">


<strong>Plus</strong>

<h4>$59/month</h4>

<ul>

<li><i className="bi bi-check-circle-fill"></i> todo los beneficios</li>
<li><i className="bi bi-check-circle-fill"></i> todo special de entrenador </li>
<li><i className="bi bi-check-circle-fill"></i> Dos entrenadores personales gratis </li>
<li><i className="bi bi-check-circle-fill"></i> acceso al sauna </li>
<li><i className="bi bi-check-circle-fill"></i> todo special de entrenador </li>
<li><i className="bi bi-check-circle-fill"></i> Dos entrenadores personales gratis </li>
<li><i className="bi bi-check-circle-fill"></i> acceso al sauna </li>

</ul>

</div>

<div className="vip ">


<strong>VIP</strong>

<h4>$99/month</h4>

<ul>

<li><i className="bi bi-check-circle-fill"></i> todo los beneficios</li>
<li><i className="bi bi-check-circle-fill"></i> todo special de entrenador </li>
<li><i className="bi bi-check-circle-fill"></i> Dos entrenadores personales gratis </li>
<li><i className="bi bi-check-circle-fill"></i> acceso al sauna </li>
<li><i className="bi bi-check-circle-fill"></i> todo special de entrenador </li>
<li><i className="bi bi-check-circle-fill"></i> Dos entrenadores personales gratis </li>
<li><i className="bi bi-check-circle-fill"></i> acceso al sauna </li>
<li><i className="bi bi-check-circle-fill"></i> acceso al sauna </li>


</ul>

</div>

        
        </Slider>
      </div>



<div className="carouselGalllery">



<h3>COMO SE VE NUESTRO GIMNASIO</h3>
<h4>GALERIA</h4>


<SlickCarousel/>


</div>

</section>



 


<Footer/> 

</main>

    </>
  )
}

export default ThirdFloor