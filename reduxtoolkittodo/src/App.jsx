import { useState } from 'react'
import AddTodo from './components/AddTodo'
import './App.css'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Learn about reduxtoolkit</h1>
     <AddTodo />
     <Todos />
     
    </>
  )
}

export default App
