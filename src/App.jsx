import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Jumbotron from './components/jumbotron/Jumbotron'
import Countries from './components/countries/Countries'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Countries />
    </div>
  )
}

export default App
