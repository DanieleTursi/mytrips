import React from 'react'
import { AustriaSlider } from './Slider';
import './Country.css'
import { useState } from 'react';
import austria1 from './photos/austria1.jpg';
import austria2 from './photos/austria2.jpg';
import austria3 from './photos/austria3.jpg';
import austria4 from './photos/austria4.jpg';
import austria5 from './photos/austria5.jpg';
import austria6 from './photos/austria6.jpg';
import austria7 from './photos/austria7.jpg';
import austria8 from './photos/austria8.jpg';
import austria9 from './photos/austria9.jpg';
import austria10 from './photos/austria10.jpg';

const Belgium = () => {
    const data= [
        {  id:1, imgSrc: austria1 },
        {  id:2, imgSrc: austria2 } ,
        {  id:3, imgSrc: austria3 } ,
        {  id:4, imgSrc: austria4 } ,
        {  id:5, imgSrc: austria5 } ,
        {  id:6, imgSrc: austria6 } ,
        {  id:7, imgSrc: austria7 } ,
        {  id:8, imgSrc: austria8 } ,
        {  id:9, imgSrc: austria9 } ,
        {  id:10, imgSrc: austria10 }]
    const [model,setModel]= useState (false);
    const [tempImage, setTempImage] = useState('');
    const getImg= (imgSrc)=>{
     console.warn(imgSrc);
    }
    
  return (
    <>
    <div className={model ? "model open" : "model"}>
        <img src={tempImage} alt="" />
    </div>
    <div className="photosBoxBelgium">
        {data.map((item,index)=>{
            return(
                <div key={index} onClick={()=>getImg(data.imgSrc)}>
                 <img src={item.imgSrc} alt="photo" />
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Belgium