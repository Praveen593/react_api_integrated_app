import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='bg-black p-3 sticky top-0 '>
      <div className='invisible md:invisible lg:visible'>
        <h1 className='visible font-Ambolition  text-center text-4xl text-white pt-2 lg:ml-5 lg:pl-2 lg:text-3xl lg:text-start'><Link to="../components/Home.js">Warm Up</Link></h1>
        <ul className='flex flex-row justify-end -mt-12'>        
          <li className=' text-white p-2 m-2 font-Poppins text-xl'><Link to="/">Home</Link></li>
          <li className=' text-white p-2 m-2 font-Poppins text-xl'><Link  to="../components/Workout.js">Workouts</Link></li>
          <li className=' text-white p-2 m-2 font-Poppins text-xl'><Link  to="../components/Contact.js">Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}
 
export default Navbar