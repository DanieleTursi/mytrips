import React, {useState}from 'react'
import './Country.css'
import { AustriaSlider } from './AustriaSlider';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const Austria = ({slides}) => {
  const [current,setCurrent] = useState(0)
  const length = slides.length;

  const nextSlide= ()=>{
    setCurrent(current === length -1 ? 0 : current +1)
  }

  const prevSlide= ()=>{
    setCurrent(current === 0 ? length-1 : current -1)
  }

  if(!Array.isArray(slides)|| slides.length<=0){
    return null
  }

  return (
    <div className='sliderCointainer'>
    <h1 className='cityName'>WIEN</h1>
    <div className='slider'> 
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
      {AustriaSlider.map((slide,index)=>{
        return(
          <div className={index=== current ?'slide active' : 'slide'} key={index}>
            {index === current  && (<img src={slide.image} alt="wienphoto" className='image'></img>)}
          
          </div>
        )
      })}
    </div>
    </div>
    // <div>
    // <h1 className='cityName'>WIEN</h1>
    // <div className='photosBox'>
    //   <img src={require('./photos/austria1.jpg')} alt="photowien"></img>
    //   <img src={require('./photos/austria2.jpg')}></img>
    //   <img src={require('./photos/austria3.jpg')}></img>
    //   <img src={require('./photos/austria4.jpg')}></img>
    //   <img src={require('./photos/austria5.jpg')}></img>
    //   <img src={require('./photos/austria6.jpg')}></img>
    //   <img src={require('./photos/austria7.jpg')}></img>
    //   <img src={require('./photos/austria8.jpg')}></img>
    //   <img src={require('./photos/austria9.jpg')}></img>
    //   <img src={require('./photos/austria10.jpg')}></img>
    //   <img src={require('./photos/austria11.jpg')}></img>
    //   <img src={require('./photos/austria12.jpg')}></img>
    //   <img src={require('./photos/austria13.jpg')}></img>
    //   <img src={require('./photos/austria14.jpg')}></img>
    //   <img src={require('./photos/austria15.jpg')}></img>
    //   <img src={require('./photos/austria16.jpg')}></img>
    //   <img src={require('./photos/austria17.jpg')}></img>
    //   <img src={require('./photos/austria18.jpg')}></img>
    //   <img src={require('./photos/austria19.jpg')}></img>
    //   <img src={require('./photos/austria20.jpg')}></img>
    //   <img src={require('./photos/austria21.jpg')}></img>
    //   </div>
    //   </div>
  )
}

export default Austria