import React from 'react'
import Workout from '../assets/videos/workout.mp4';
const Home = () => {
  return (
    <div className='bg-black flex flex-row relative'>
      <video className='h-[800px] lg:h-[400px] w-screen object-cover opacity-60 shadow-black shadow-2xl' autoPlay muted loop src={Workout}></video>
      <div className='text-white text-center absolute top-80 md:left-20 lg:top-20 lg:left-60 xl:top-20 xl:left-[450px]'>
        <h1 className='text-center font-Ambolition text-5xl md:text-7xl lg:text-7xl xl:text-7xl  xl:mb-3 '>Unleash Your Inner Strength</h1>
        <p className='text-center font-AmbolitionSecond text-2xl m-3 font-thin xl:font-light xl:mt-0  '>Transform your body, mind, and spirit with our tailored workout plans</p>
        <button type='button' className='mt-16 border box-border p-4 rounded-xl hover:bg-white hover:text-black hover:duration-300 '>Start Your Journey Today</button>
        </div>
    </div>
  )
}

export default Home 