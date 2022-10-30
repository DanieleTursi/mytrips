import React from 'react'
import { WienCity, WienSlider } from './Slider';
import './Country.css'
import Photogallery from './Photogallery'


const Austria = () => {
  return (
   <Photogallery Slider={WienSlider} City={WienCity} />
  )
}

export default Austria