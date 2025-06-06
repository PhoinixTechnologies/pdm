import { useEffect, useState } from "react";
import './slideshow.scss';

import slide1 from '../../assets/images/frame1.png';
import slide2 from '../../assets/images/frame2.png';
import slide3 from '../../assets/images/frame3.png';
import slide4 from '../../assets/images/frame4.png';


 // images declaration
  const images = [
    slide1,
    slide2,
    slide3,
    slide4
  ]
  // function for the slideshow
  function Slideshow() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 3000);

      return () => clearInterval(timer);
    }, []);

    return (
      <div className="slideshow">
        <img src={images[index]} alt={'Slide ${index}'} className="slide" />
      </div>
    );
  }
  export default Slideshow;