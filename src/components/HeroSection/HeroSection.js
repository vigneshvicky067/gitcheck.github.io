import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/images/heroWorking.json'
import logo from'../../assets/images/logo.png';
export default function HeroSection() {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
      };
  return (
    <div className="bg-indigo-200 w-full h-screen">
        <div className='columns-3'>
            <h1>Hero</h1>
        </div>
        <div className='columns-3'>
        <Lottie options={defaultOptions}
                  height={400}
                  width={400}/> 
        </div>
       
    </div>
  )
}
