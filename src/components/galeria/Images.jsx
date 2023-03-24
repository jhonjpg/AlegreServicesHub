

import React, { useRef, useState } from 'react'
import ReactImageMagnify from 'react-image-magnify';


const Images = () => {

  const images = [

    "https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3028500/pexels-photo-3028500.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/2449665/pexels-photo-2449665.jpeg?auto=compress&cs=tinysrgb&w=1200"




  ]


  const secondgroupImages = [

    "https://images.pexels.com/photos/3423860/pexels-photo-3423860.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1187299/pexels-photo-1187299.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/8475121/pexels-photo-8475121.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1187299/pexels-photo-1187299.jpeg?auto=compress&cs=tinysrgb&w=1200"


  ]




  const [img, setimg] = useState(images[0])


  const hoverHandle = (image, i) => {

    setimg(image)

    refs.current[i].classList.add('activeImage')

    for (let j = 0; j < images.length; j++) {

      if (i !== j) {


        refs.current[j].classList.remove('activeImage')

      }

    }
  }




  const refs = useRef([])
  refs.current = [];

  const addRefs = (el) => {

    if (el && !refs.current.includes(el)) {

      refs.current.push(el);
    }
  }







  return (

    <>


      <strong className="fs-1 w-100 text-center">AMBIENTE DE NUESTRO MERCADO</strong>

      <div className="grid-gallery">

        {images.map((image, i) => (



          <div
            key={i}
            className={i == 0 ? "grid-gallery__item activeImage" : "grid-gallery__item"}
            onMouseOver={() => hoverHandle(image, i)}
            ref={addRefs}
          >





            <img
              src={image}
              alt=""
              className="w-100 h-100 object-fit-cover"
            />

          </div>





        ))
        }



        <div className="grid-gallery__item" >


            

<ReactImageMagnify {...{ 

smallImage: {

  alt:"wrist",
  isFluidWidth:true,
  src:img,

},

largeImage:{

  src:img,
  width:1200,
  height:1800,

},

enlargedImageContainerDimensions: {
  width: "200px",
  height: 100
}

}}


/>         


        </div>



      

        {secondgroupImages.map((image, i) => (



<div
  key={i}
  className={i == 7 ? "grid-gallery__item activeImage" : "grid-gallery__item"}
  onMouseOver={() => hoverHandle(image, i)}
  ref={addRefs}
>





  <img
    src={image}
    alt=""
    className=""
  />

</div>





))


}


      </div>



    

    </>



  )
}

export default Images