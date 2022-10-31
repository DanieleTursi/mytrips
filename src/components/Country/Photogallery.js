import React from 'react';
import './Photogallery.css';
import { useState } from 'react';
import {AiOutlineClose} from 'react-icons/ai';


const Photogallery = ({Slider,City}) => {
   
    const [model,setModel]= useState (false);
    const [tempImage, setTempImage] = useState('');
    const getImg= (image)=>{
     setTempImage(image);
     setModel(true)
    }
    
  return (
    <>
    <div className={ model ? "model open" : "model"}>
        <img src={tempImage} alt="" onClick={()=> setModel(false)}/>
        <AiOutlineClose className='close' onClick={()=> setModel(false)} />
    </div>
    <div className="photosBoxBelgium">
        {Slider.map((item,index)=>{
            return(
                <div key={index} onClick={()=>getImg(item.image)}>
                 <img src={item.image} alt="photo" />
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Photogallery