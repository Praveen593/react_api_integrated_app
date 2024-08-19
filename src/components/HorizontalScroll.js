import React from 'react'
import ExercisesCategories from './ExercisesCategories'
const HorizontalScroll = ({fetch}) => {
  return (
    <div className='flex flex-nowrap'>
      {fetch && fetch.map((item) =>  (
        <div className='p-10'
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
        >
        <ExercisesCategories item={item} />
        </div>
      )
      )}
    </div>
  )
}

export default HorizontalScroll