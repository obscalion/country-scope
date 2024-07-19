import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Jumbotron from './components/jumbotron/Jumbotron'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Jumbotron />
    </div>
  )
}

export default App
