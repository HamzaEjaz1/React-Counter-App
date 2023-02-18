import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
  
      <div className="card">
      <h1>Counter App</h1>
      <h3>{count}</h3>
        <button onClick={() => {
          if(count>=0){
            setCount(count+1)
          }
          else
          setCount(0)
        }}>
          Increment
        </button>
        <button onClick={() => {
          if(count>0){
            setCount(count-1)
          }
          else
          setCount(0)
        }}>
       Decrement
        </button>

      </div>
 
    </div>
  )
}

export default App
