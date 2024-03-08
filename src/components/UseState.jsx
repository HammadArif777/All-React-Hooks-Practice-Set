import React, { useState } from 'react'

function UseState() {
    const [count,setCount] = useState(0)
  return <>
  <div className=''>
    <h1>useState Hook</h1>
    <button 
    className='counter-button'
    onClick={() => setCount(prev => prev + 1)}>
        {count}</button>

  </div>
  </>
}

export default UseState