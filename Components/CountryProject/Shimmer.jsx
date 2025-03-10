import React from 'react'
import '../../CountryStyle.css'

function Shimmer() {
   
  return (
   <div className="CountryListContainer">
    {Array.from({length:10}).map((el , i) => {
        return <div key={i} className=' card shimmer'>sihmer</div>
    })}
   </div>
  )
}

export default Shimmer