import { useState } from 'react'
import Cards from './components/Cards'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Cards username="Vinit" btn="click me"/>
      <Cards username='Patel' />
    </>
  )
}

export default App
