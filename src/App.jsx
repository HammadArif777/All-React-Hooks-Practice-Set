
import UseEffect from './components/UseEffect'
import UseReducer from './components/UseReducer'
import UseRef from './components/UseRef'
import UseState from './components/UseState'

function App() {

  
  return (
      <div className='universal-wrapper'>
        <h1 style={{color : 'dodgerblue', textAlign : 'center'}}>
          React All Hooks
        </h1>
        <UseState/>
        <UseRef/>
    <UseEffect/>
    <UseReducer/>
      </div>
  )
}

export default App