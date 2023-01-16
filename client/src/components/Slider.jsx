import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import next from '../assets/next.png'
import back from '../assets/back.png'
import one from '../assets/thumbnails/thumbnail1.png'
import two from '../assets/thumbnails/thumbnail2.png'
import three from '../assets/thumbnails/thumbnail3.png'
import four from '../assets/thumbnails/thumbnail4.png'
import five from  '../assets/thumbnails/thumbnail5.png'
import six from '../assets/thumbnails/thumbnail6.png'
import seven from '../assets/thumbnails/thumbnail7.png'
import eight from '../assets/thumbnails/thumbnail8.png'
import ten from '../assets/thumbnails/thumbnail10.png'
import eleven from '../assets/thumbnails/thumbnail11.png'
import twelve from '../assets/thumbnails/thumbnail12.png'
import thirteen from '../assets/thumbnails/thumbnail13.png'
import fourteen from '../assets/thumbnails/thumbnail14.png'
import fifteen from '../assets/thumbnails/thumbnail15.png'
import sixteen from '../assets/thumbnails/thumbnail16.png'
import seventeen from '../assets/thumbnails/thumbnail17.png'
import eighteen from '../assets/thumbnails/thumbnail18.png'
import nineteen from '../assets/thumbnails/thumbnail19.png'
import twenty from '../assets/thumbnails/thumbnail20.png'

const indicators = (index) => (<div className="indicator">{index + 1}</div>);

const Slider = () => {

  return (
    <div className="slider">
<Zoom indicators={index => <div className="indicator">{index + 1}</div>} scale={1.4}
nextArrow={
  <button>
    <img className='nav_butt' src={next}/>
  </button>}
prevArrow={
  <button>
    <img className='nav_butt'src={back}/>
  </button>}>
        <div className="each-slide-effect">
          <img src={one}/>
        </div>
        <div className="each-slide-effect">
          <img src={two}/>
        </div>
        <div className="each-slide-effect">
          <img src={three}/>
        </div>
        <div className="each-slide-effect">
          <img src={four}/>
        </div>
        <div className="each-slide-effect">
          <img src={five}/>
        </div>
        <div className="each-slide-effect">
          <img src={six}/>
        </div>
        <div className="each-slide-effect">
          <img src={seven}/>
        </div>
        <div className="each-slide-effect">
          <img src={eight}/>
        </div>
        <div className="each-slide-effect">
          <img src={ten}/>
        </div>
        <div className="each-slide-effect">
          <img src={eleven}/>
        </div>
        <div className="each-slide-effect">
          <img src={twelve}/>
        </div>
        <div className="each-slide-effect">
          <img src={thirteen}/>
        </div>
        <div className="each-slide-effect">
          <img src={fourteen}/>
        </div>
        <div className="each-slide-effect">
          <img src={fifteen}/>
        </div>
        <div className="each-slide-effect">
          <img src={sixteen}/>
        </div>
        <div className="each-slide-effect">
          <img src={seventeen}/>
        </div>
        <div className="each-slide-effect">
          <img src={eighteen}/>
        </div>
        <div className="each-slide-effect">
          <img src={nineteen}/>
        </div>
        <div className="each-slide-effect">
          <img src={twenty}/>
        </div>
    </Zoom>
    </div>
  );
};

export default Slider;