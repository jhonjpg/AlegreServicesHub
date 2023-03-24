import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



const ThirdFloor = () => {
  return (

    <>

<main id="principal" className="d-flex flex-column w-100 ">

<Navbar/>

<section className="desketopSesion h-100 ">
<div className="w-100 h-100 d-flex justify-content-center align-items-center fs-1 ">COMING SOON</div>


</section>



{/* 
Phone 
<section className="phoneSection">



 <h1> <span> alegre</span><i className="bi bi-cart4"></i></h1>

 <div className="vegetable-width-sm">

 <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      autoPlay
      interval={5000}
      transitionTime={1000}
      transitionEffect="fade"
      className="carouselfirstFloor-img-sm"
    >
      {firstFloorImages.map((imageUrl, index) => (
        <div key={index} className="">
          <img src={imageUrl} alt={`CarouselFirstFloor ${index}`} className="carouselfirstFloor-image-sm w-100 h-100 object-fit-contain"/>
        </div>
      ))}
    </Carousel>

    </div>


<article id="slider-container" className="w-100 d-flex flex-column justify-content-center gap-3 mt-2 ">

    <h4><span className="text-success">A</span>limentate <span className="text-danger">S</span>aludable</h4>

    <div className="vegetable-width-pic-sm">


<h3>Alimentate con nustras <span className="text-success"> Verduras</span>  y Frutas  con Frecura y Calidad</h3> 

</div>

<div className="d-flex justify-content-center w-100">   


<div className="slider-fruits-vegetable-sm">


<div className="staticSlide-sm">

<Carousel
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      autoPlay
      interval={5000}
      transitionTime={1000}
      transitionEffect="fade"
      className="w-100 h-100 object-fit-cover"
    >
      {imagesBlucle.map((imageUrl, index) => (
        <div key={index} className="">
          <img src={imageUrl} alt={`CarouselFirstFloor ${index}`} className="carouselfirstFloor-image"/>
        </div>
      ))}
    </Carousel>


    <Carousel
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      autoPlay
      interval={5000}
      transitionTime={1000}
      transitionEffect="fade"
      className="w-100 h-100 object-fit-cover"
    >
      {firstFloorImages.map((imageUrl, index) => (
        <div key={index} className="">
          <img src={imageUrl} alt={`CarouselFirstFloor ${index}`} className="carouselfirstFloor-image"/>
        </div>
      ))}
    </Carousel>


    
</div>

<div className="staticSlide-sm">
<Carousel
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      autoPlay
      interval={5000}
      transitionTime={1000}
      transitionEffect="fade"
      className="w-100 h-100 object-fit-cover"
    >
      {imagesBlucleDos.map((imageUrl, index) => (
        <div key={index} className="">
          <img src={imageUrl} alt={`CarouselFirstFloor ${index}`} className="carouselfirstFloor-image"/>
        </div>
      ))}
    </Carousel>

</div>


<div className="staticSlide-sm">




<Carousel
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      autoPlay
      interval={5000}
      transitionTime={1000}
      transitionEffect="fade"
      className="w-100 h-100 object-fit-cover"
    >
      {imagesBlucletres.map((imageUrl, index) => (
        <div key={index} className="">
          <img src={imageUrl} alt={`CarouselFirstFloor ${index}`} className="carouselfirstFloor-image"/>
        </div>
      ))}
    </Carousel>

</div>

</div>

</div>
</article>

<div className="enjoy-withUs-sm">



<h4>DISFRUTA DE NUESTRA VARIEDADES</h4>

</div>


<hr className="w-75 p-2 rounded-pill bg-secondary" />


<div className="scrollWords-sm">


<Scrollspy/>


</div>

<hr className="w-75 p-2 rounded-pill bg-secondary mb-3" />


<div className="w-100 d-flex flex-column  justify-content-center ">


<Images/>

</div>

<a id="up" className="d-flex p-4 justify-content-center align-items-center mb-2" href="#">
<i className="bi bi-arrow-up-circle fs-2 "></i>
</a>
</section>
*/}


<Footer/>

</main>

    </>
  )
}

export default ThirdFloor