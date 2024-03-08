import React, { useEffect, useRef } from 'react'

function UseRef() {
    const textBox = useRef(null);
    useEffect(()=>{
        textBox.current.focus()
    });
  return (
    <div className='useref-wrapper'>
        <h1>useRef Hook</h1>
        <input 
        ref={textBox}
        placeholder='Focus always will be here'
        type="text" className='useref-textbox' />

    </div>
  )
}

export default UseRef