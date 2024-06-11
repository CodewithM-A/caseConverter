import React from 'react'

const Buttons = ({label, handleClick}) => {
  return (
    <div className=''>
       <button onClick={handleClick} className='flex gap-3 bg-gray-700 p-2 rounded-md font-bold font-serif'>{label}</button>
    
    </div>
  )
}

export default Buttons
