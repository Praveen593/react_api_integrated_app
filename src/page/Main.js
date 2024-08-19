import React from 'react'
import { useState } from 'react'
import Home from '../components/Home'
import SearchWorkout from '../components/SearchWorkout'
import Workout from '../components/Workout'

const Main = () => {
  const [exercises , setExercises] = useState([]);
  const [bodyPart , setBodyPart ] =useState('all')
  return (
    <div>
          <Home/>
          <SearchWorkout setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}  />
          <Workout setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
    </div>
  )
}

export default Main