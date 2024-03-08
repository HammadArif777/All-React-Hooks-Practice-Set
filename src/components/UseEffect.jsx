import { useEffect, useState } from "react"
function UseEffect() {
const [state, setState] = useState('Intial')
    useEffect(() => {
        console.log('Rendered');
    },[state]);
    useEffect(()=>{console.log('Second One');},[])
  return (
    <div>
        <h1>useEffect Hook</h1>
        <div className='useeffect-wrapper'>
        <input
        onChange={(event)=> setState(event.target.value)} 
        className='useeffect-textbox'
        type="text" />
        <label>{state}</label>
        </div>
        
    </div>
  )
}

export default UseEffect