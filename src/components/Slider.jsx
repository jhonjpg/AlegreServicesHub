import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider = () => {
  const images = [
    'https://images.pexels.com/photos/4971921/pexels-photo-4971921.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/3997385/pexels-photo-3997385.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/13106582/pexels-photo-13106582.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ];


  return (
    <Carousel
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      autoPlay
      interval={5000}
      transitionTime={1000}
      transitionEffect="fade"
    >
      {images.map((imageUrl, index) => (
        <div key={index} className="casi">
          <img src={imageUrl} alt={`CarouselFirstFloor ${index}`} className="carouselfirstFloor-image"/>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;






