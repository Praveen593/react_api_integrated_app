import React from 'react'
import Categories from "../components/Categories"
const HorizontalScroll = ({fetch ,bodyPart ,setBodyPart}) => {
  return (
    <div>
    
      {fetch && fetch.map((item) =>  (
        <div className=''
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
        >
          <Categories fetch={fetch} bodyPart={bodyPart} setBodyPart={setBodyPart}  />
        </div>
      )
      )}
      </div>
  )
}

export default HorizontalScroll