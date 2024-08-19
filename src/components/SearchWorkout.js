import React from 'react'
import{ useState , useEffect } from 'react'
import {fetchData , exerciseOption} from '../utils/fetchData'
import HorizontalScroll from './HorizontalScroll'
const SearchWorkout = (setExercises , bodyPart ,setBodyPart) => {
  const [search , setSearch ] = useState('')
  const [bodyParts , setBodyParts ] = useState([]);
  useEffect(() => {
      const fetchExercisesData  = async() =>{
      const bodyPartsData =await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOption);
      setBodyParts(['all',...bodyPartsData]);
    }
    fetchExercisesData();
  }, [])

  const handleSearch = async () => {
  if(search) {
    const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOption);
    console.log(exercisesData)
    const searchedExercises = exercisesData.filter(
    (exercise) => exercise.name.toLowerCase().includes(search)||
      exercise.target.toLowerCase().includes(search)||
      exercise.equipment.toLowerCase().includes(search)||
      exercise.bodyPart.toLowerCase().includes(search)
   );
   setSearch('');
   setExercises(searchedExercises);
  }
}
  return (

    <div className='w-full h-full '>
        <h2 className='text-black font-Ambolition text-center text-4xl p-5 m-5'>Dive into your favorite workouts</h2>
        <div className='flex justify-center' > 
          <input className='w-52 h-9 px-2 border-2 border-black rounded-md' type="text" name="Searchbar" id="Searchbar" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())}  placeholder='Search'/>
          <button onClick={handleSearch} className='border-2 border-black bg-black text-white mx-1 px-4 rounded-md hover:text-black hover:bg-white hover:duration-300'>Search</button>
        </div>
        <div className=' w-full p-20px'>
          <HorizontalScroll fetch={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/> 
        </div>
      
    </div>
   

  )
}



export default SearchWorkout