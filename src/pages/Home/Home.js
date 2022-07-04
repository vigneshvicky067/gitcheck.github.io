import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import Navbar from '../../components/Navbar/Navbar'
import Lottie from 'react-lottie';
import * as animationData from '../../assets/images/heroWorking.json';

export default function Home() {
     const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
      };
  return (
   <div className='relative'>
   <Navbar/>
   <HeroSection/>
 
   <div className="bg-red-600 w-full h-screen">
   <Lottie options={defaultOptions}
                  height={400}
                  width={400}/> 
    <h1>Text</h1>
   </div>
   <div className="bg-green-50 w-full h-screen">
   </div>
   </div>
  )
}
