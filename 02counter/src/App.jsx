import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(15)

  const addValue = () =>{
    setCount(count + 1)
  }
  
  const removeValue = () =>{
    setCount(count - 1)
  }

  return (
    <>
      <h1>React-Project</h1>
      <h2>Counter value:{count}</h2>
      <button
      onClick={addValue}
      >Add Value {count}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value {count}</button>
    </>
  )
}

export default App
