import React from 'react';
import Slideshow from './Slideshow';
import image1 from '../../assests/kanpur.jpg'
import image2 from '../../assests/indiaDigital.jpg'
import image3 from '../../assests/Digital-India.jpg'
import image4 from '../../assests/digital-india-2.jpg'
import image5 from '../../assests/download.jpg'
import './Slideshow.css'
const slides = [
  {
    imageUrl: image1,
    caption: 'Slide 1',
  },
  {
    imageUrl: image2,
    caption: 'Slide 2',
  },{
    imageUrl: image3,
    caption: 'Slide 3',
  },
  {
    imageUrl: image4,
    caption: 'Slide 4',
  },{
    imageUrl: image5,
    caption: 'Slide 5',
  },
  // Add more slides as needed
];
const SlideshowImage = () => {
  return (
    <div className="lideshowImage">
      <Slideshow slides={slides} />
    </div>
  );
};

export default SlideshowImage;
