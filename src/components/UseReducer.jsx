import React, { useReducer } from 'react'

function UseReducer() {

    const reducer = (state,action) => {
        switch (action.type) {
            case 'increment':
                return {count : state.count + 1, visible : state.visible}
                case 'visibility':
                    return {
                        count : state.count, visible : !state.visible
                    }
            default:
                break;
        }
    }
    const [state,dispatch]= useReducer(reducer,{count:0 , visible:true});
  return (
    <>
    <div className='useeffect-wrapper'>
        {state.visible && <h1>useReducer Hook</h1>}
        <button 
        className='counter-button'
            style={{width : '50%'}}
            onClick={()=>{
            dispatch({type:'increment'})
            dispatch({type:'visibility'})
        }}>UseReducer:{state.count}</button>
    </div>
    </>
    )
}

export default UseReducer