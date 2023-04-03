import Footer from '../components/Footer'
import Images from '../components/galeria/Images'
import Navbar from '../components/Navbar'
import Scrollspy from '../components/Scrollspy'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const FirtsFloor = () => {


  const firstFloorImages = [
    'https://images.pexels.com/photos/701970/pexels-photo-701970.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/8805471/pexels-photo-8805471.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/9705830/pexels-photo-9705830.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ];



  const imagesBlucle = [
    'https://images.pexels.com/photos/4113663/pexels-photo-4113663.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/4443492/pexels-photo-4443492.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/122803/pexels-photo-122803.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ];



  const imagesBlucleDos = [
    'https://images.pexels.com/photos/618775/pexels-photo-618775.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/12884549/pexels-photo-12884549.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/8251004/pexels-photo-8251004.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ];


  
  const imagesBlucletres = [
    'https://images.pexels.com/photos/209339/pexels-photo-209339.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/693794/pexels-photo-693794.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ];



 
  return (

    <>

<main className="d-flex flex-column w-100">

<Navbar/>

<section className="desketopSesion ">


<h1 className="z-50"> <span> alegre</span><i className="bi bi-cart4"></i></h1>


 <div className="vegetable-width">

 <Carousel
      showArrows={true}
      showThumbs={true}
      showStatus={false}
      infiniteLoop
      autoPlay
      interval={5000}
      transitionTime={1000}
      transitionEffect="fade"
      className="carouselfirstFloor-img"
    >
      {firstFloorImages.map((imagen, index) => (
        <div key={index} className="">
          <img src={imagen} alt={`CarouselFirstFloor ${index}`} className="w-100 h-100 object-fit-contain"/>
        </div>
      ))}
    </Carousel>

    </div>


<article id="slider-container" className="w-100 d-flex flex-column justify-content-center gap-3  ">

    <h4><span className="text-success">A</span>limentate <span className="text-danger">S</span>aludable</h4>

    <div className="vegetable-width-pic">


<h3>Alimentate con nustras <span className="text-success"> Verduras</span>  y Frutas  con Frecura y Calidad</h3> 

</div>



<div className="slider-fruits-vegetable">


<div className="staticSlide">

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


   
    
</div>

<div className="staticSlide">
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


<div className="staticSlide">




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

</article>

<div className="enjoy-withUs">



<h4>DISFRUTA DE NUESTRA VARIEDADES</h4>

</div>


<hr className="w-75 p-2 rounded-pill bg-secondary mt-3" />


<div className="scrollWords">


<Scrollspy/>


</div>

<hr className="w-75 p-2 rounded-pill bg-secondary mb-3" />


<div className="w-100 d-flex flex-column gap-1 justify-content-center ">


<Images/>

</div>

<a id="up" className="d-flex p-4 justify-content-center align-items-center mb-2" href="#">
<i className="bi bi-arrow-up-circle fs-2 "></i>
</a>
</section>



{/* 
Phone */}
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



<Footer/>

</main>


    </>



    )
}

export default FirtsFloor







