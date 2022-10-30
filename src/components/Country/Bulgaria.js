import React from 'react'
import { SofiaSlider,SofiaCity} from './Slider';
import './Country.css'
import Photogallery from './Photogallery'


const Bulgaria = () => {
  return (
   <Photogallery Slider={SofiaSlider} City={SofiaCity}/>
  )
}

export default Bulgaria