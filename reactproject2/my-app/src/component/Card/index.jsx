import React from 'react'

function Card({data}) {
    
  return (
    <div className='slider'>
        <h3>Card</h3>
        <li>name: {data}</li>
    </div>
  )
}
export default Card