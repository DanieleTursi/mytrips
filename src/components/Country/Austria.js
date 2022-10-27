import React, {useState}from 'react'
import './Country.css'
import { AustriaSlider } from './Slider';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft, BiDownArrowAlt} from 'react-icons/fa'
import {BiChevronsDown} from 'react-icons/bi'

const Austria = ({slides}) => {
  const [current,setCurrent] = useState(0)
  const length = slides.length;

  const selectPhoto= ()=>{
    window.open( '_blank', 'noopener,noreferrer');
  }

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
    <div className='photosBox'>
    {AustriaSlider.map((slide)=>{
        return(
          <div onClick = {() =>selectPhoto('./photos/austria1.jpg')}>
            <img src={slide.image} alt="" />
          </div>
        )
      })}
      </div>
      <p>Scroll down to the slider <BiChevronsDown></BiChevronsDown></p>
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
      <div>
      </div>
    </div>
    </div> 
  )
}

export default Austria